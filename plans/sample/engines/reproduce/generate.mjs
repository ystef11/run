import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {pathToFileURL} from 'node:url';
import {build} from './runtime/node_modules/esbuild/lib/main.js';
const roots=Object.fromEntries(fs.readdirSync('work/sources').filter(n=>fs.existsSync(`work/sources/${n}/src`)).map(n=>[n,path.resolve('work/sources',n,'src',fs.readdirSync(`work/sources/${n}/src`)[0])]));
fs.mkdirSync('work/raw',{recursive:true});
process.env.TZ='UTC'; const NativeDate=Date; globalThis.Date=class extends NativeDate {constructor(...a){super(...(a.length?a:['2026-10-29T12:00:00+05:00']))} static now(){return new NativeDate('2026-10-29T12:00:00+05:00').getTime()}};
export const profiles=[{id:'80-t400',km:80,t:240,level:'advanced',days:6,long:24},{id:'40-t545',km:40,t:345,level:'intermediate',days:4,long:14},{id:'25-t630',km:25,t:390,level:'beginner',days:3,long:9}];
export const distances=[{id:'5k',km:5,weeks:12,z:'5K',mc:'5km'},{id:'10k',km:10,weeks:12,z:'10K',mc:'10km'},{id:'half',km:21.0975,weeks:16,z:'semi',mc:'1/2 Marathon'},{id:'marathon',km:42.195,weeks:18,z:'marathon',mc:'Marathon'}];
function vdot(km,s){let t=s/60,v=km*1000/t;return(-4.6+.182258*v+.000104*v*v)/(.8+.1894393*Math.exp(-.012778*t)+.2989558*Math.exp(-.1932605*t))}
function raceTime(v,km){let lo=120,hi=40000;for(let i=0;i<80;i++){let m=(lo+hi)/2;if(vdot(km,m)>v)lo=m;else hi=m}return Math.round((lo+hi)/2)}
const hms=s=>`${Math.floor(s/3600)}:${String(Math.floor(s/60)%60).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
function dateAt(days){return new NativeDate(new NativeDate('2026-11-02T12:00:00Z').getTime()+days*864e5).toISOString().slice(0,10)}
for(let p of profiles){p.vdot=vdot(3600/p.t,3600);p.benchmark={distance:10000,time:raceTime(p.vdot,10)}}
fs.writeFileSync('work/profiles.json',JSON.stringify({profiles,distances},null,2));
const ctx=vm.createContext({document:{documentElement:{lang:'en'},getElementById:()=>({}),querySelector:()=>null},localStorage:{getItem:()=>null},Date,console});
let src=fs.readFileSync(roots.vtrain+'/vtrain.js','utf8').replace(/document\.addEventListener[\s\S]*$/,'');vm.runInContext(src,ctx);
async function bundle(name,entry,code){let out=path.resolve(`work/${name}.cjs`);await build({stdin:{contents:code,resolveDir:roots[name]},bundle:true,platform:'node',format:'cjs',outfile:out,alias:{'@':roots[name]+(name==='marathon-training-plan'?'/web':'/src')},logLevel:'silent'});return (await import(pathToFileURL(out).href)).default}
const m42=await bundle('marathon-coach','',`export {generatePlan} from './src/lib/plan'; export {paceFor,easyRange} from './src/lib/vdot'; export {translate} from './src/i18n/translate';`);
const mc=await bundle('marathon-training-plan','',`export {generateTrainingPlan} from './web/lib/engine/planGenerator'; export {dataStore} from './web/lib/data';`);
const zoned=await bundle('zoned','',`export {generatePlan} from './src/lib/planGenerator'; export {loadAllWorkouts} from './src/data/workouts'; export {calculateTrainingPaces} from './src/lib/planGenerator/paceEngine';`);
for(let p of profiles)for(let d of distances){
 let goal=dateAt(d.weeks*7-1), base={profile:p,distance:d,goal};
 for(let source of ['vtrain','marathon-coach','marathon-training-plan','zoned']){
  if(source==='marathon-coach'&&d.id!=='marathon')continue;
  let input,output,extras={};
  try{
   if(source==='vtrain'){input={distance:d.km,raceDate:dateAt(12*7-1),raceTime:hms(raceTime(p.vdot,d.km))};output=ctx.buildPlan(input.distance,input.raceDate,input.raceTime)}
   if(source==='marathon-coach'){input={name:p.id,raceName:'Sample',raceDate:goal,planStart:'2026-11-02',goalTime:null,recentRace:p.benchmark,weeklyVolume:p.km*1000,longestRun:p.long*1000,daysPerWeek:p.days,longRunDay:6,experience:p.km===80?'experienced':p.km===40?'returning':'first',units:'km'};output=m42.generatePlan(input);for(let w of output.weeks){w.paces=Object.fromEntries(['E','M','T','I','R'].map(k=>[k,k==='E'?m42.easyRange(w.vdot):[m42.paceFor(w.vdot,k),m42.paceFor(w.vdot,k)]]));for(let a of w.workouts){a.titleText=m42.translate('en',a.title.key,a.title.params,{vdot:w.vdot,units:'km'});a.descriptionText=a.description?m42.translate('en',a.description.key,a.description.params,{vdot:w.vdot,units:'km'}):''}}}
   if(source==='marathon-training-plan'){let sec=raceTime(p.vdot,d.km); input={raceDate:goal,sessionsPerWeek:p.days,currentMileage:p.km,targetMileage:Math.round(p.km*1.2),raceDistance:d.mc,currentPace:hms(sec),targetPace:hms(sec),style:'Endurance'};output=mc.generateTrainingPlan(input,mc.dataStore)}
   if(source==='zoned'){input={id:`sample-${p.id}-${d.id}`,createdAt:'2026-10-29T07:00:00Z',startDate:'2026-11-02',raceDate:goal,raceDistance:d.z,runnerLevel:p.level,daysPerWeek:p.days,longRunDay:6,trainingGoal:p.km===25?'finish':'time',planPurpose:'race',totalWeeksOverride:d.weeks,currentWeeklyKm:p.km,currentLongRunKm:p.long,vma:60/(p.t/60*.88),includeStrength:false}; output=await zoned.generatePlan(input);extras={paces:zoned.calculateTrainingPaces(input.vma,p.level),workouts:await zoned.loadAllWorkouts()}}
   fs.writeFileSync(`work/raw/${source}-${d.id}-${p.id}.json`,JSON.stringify({...base,source,input,output,...extras},null,2));console.log(source,d.id,p.id,'OK');
  }catch(e){console.log(source,d.id,p.id,'ERROR',e.message);fs.writeFileSync(`work/raw/${source}-${d.id}-${p.id}.error.json`,JSON.stringify({...base,source,input,error:e.message}))}
 }
}


