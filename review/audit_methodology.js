'use strict';
const fs=require('fs'),vm=require('vm'),path=require('path'),crypto=require('crypto');
const html=path.resolve(__dirname,'../run_plan_calculator.html');
const test=fs.readFileSync(path.join(__dirname,'test_plan_invariants.js'),'utf8').replace('process.exit(run());','globalThis.core=C;');
const ctx={require,process,console,__dirname};vm.runInNewContext(test,ctx);const C=ctx.core;
const distances=[5000,10000,21097,42195,60000,80000,100000,120000,160000];
const duration={5000:8,10000:10,21097:12,42195:16,60000:18,80000:20,100000:22,120000:24,160000:24};
const start='2026-10-05',add=n=>C.dISO(C.dAdd(C.dParse(start),n));
const findings=[],summaries=[];const counts={},byDistance={};
function record(code,cfg,w,day,x,details){counts[code]=(counts[code]||0)+1;const key=cfg.goalDist;byDistance[key]??={};byDistance[key][code]=(byDistance[key][code]||0)+1;if(findings.filter(f=>f.code===code).length<12)findings.push({code,cfg:JSON.parse(JSON.stringify(cfg)),week:w.n,weekKm:w.km,weekMin:w.min,date:C.dISO(day.date),name:x.name,label:x.label,steps:x.steps,details});}
for(const dist of distances)for(const volume of [20,40,60,80])for(const form of [3600,3300,3000,2700,2400])for(const strength of [0,1,2,3])for(const mode of [0,1,2]){
 const N=duration[dist];const tuneRaces=mode===0?[]:mode===1?[{iso:add(7*Math.floor(N/2)-1),dist:10000}]:[{iso:add(7*Math.floor(N*.35)-1),dist:5000},{iso:add(7*Math.floor(N*.65)-1),dist:dist>=42195?21097:10000}];
 const cfg={startISO:start,goalISO:add(N*7-1),goalDist:dist,results:[{dist:10000,sec:form}],tgtGoal:null,age:38,weight:70,sex:'m',exp:'inter',peakVol:volume,curVol:volume,volUnit:'km',runs:5,strength,slider:.5,longDow:6,elevGain:0,altitude:0,heat:false,cross:null,tuneRaces,tag:'[AUDIT]'};
 let p;try{const fc=C.buildPlan({...cfg,_forecastOnly:true});cfg.tgtGoal=Math.round(fc.forecast.endGoalDisp);p=C.buildPlan(cfg);}catch(e){findings.push({code:'CRASH',cfg,error:e.message});counts.CRASH=(counts.CRASH||0)+1;continue;}
 if(p.error){findings.push({code:'ERROR',cfg,error:p.error});continue;}
 summaries.push({dist,volume,form,strength,mode,peak:p.analysis.peakReal,raceKm:p.analysis.raceWeekKm,forecast:p.analysis.forecastGoal,fullStrength:p.weeks.flatMap(w=>w.days.flatMap(d=>d.items)).filter(x=>x.kind==='str'&&x.name!=='Кор').length});
 for(const w of p.weeks)for(const day of w.days)for(const x of day.items){
  if(x.kind==='str'&&x.name!=='Кор'&&tuneRaces.some(t=>{const dd=C.dDiff(day.date,C.dParse(t.iso));return dd>0&&dd<=2;}))record('FULL_STRENGTH_WITHIN_2_DAYS_OF_RACE',cfg,w,day,x,{});
  if(x.kind!=='run'||x.z==='race'||!x.steps)continue;
  let iKm=0,rKm=0,maxI=0,maxR=0;const walk=(s,mult=1)=>{if(s.t==='repeat'){s.steps.forEach(z=>walk(z,mult*s.n));return;}if(['warmup','cooldown','recovery'].includes(s.t)||s.d==='Ускорение'||!s.tg||!s.tg.pace)return;
   const pace=s.tg.pace.map(v=>{const z=v.split(':').map(Number);return z[0]*60+z[1];}).reduce((a,b)=>a+b)/2;
   const min=C.stepMin(s,w.R),km=C.stepKm(s,w.R);if(pace<=C.mid(w.R.rep)+4){rKm+=km*mult;maxR=Math.max(maxR,min);}else if(pace<=C.mid(w.R.vo2)+4){iKm+=km*mult;maxI=Math.max(maxI,min);}
  };x.steps.forEach(s=>walk(s));
  if(maxI>5.1)record('I_BOUT_OVER_5_MIN',cfg,w,day,x,{maxI,iKm});
  if(maxR>2.1)record('R_BOUT_OVER_2_MIN',cfg,w,day,x,{maxR,rKm});
  const actualWeekKm=w.days.flatMap(d=>d.items).filter(z=>z.kind==='run').reduce((a,z)=>a+z.km,0);
  if(iKm>Math.min(actualWeekKm*.08,10)+.15)record('I_VOLUME_OVER_8_PERCENT',cfg,w,day,x,{iKm,actualWeekKm,limit:Math.min(actualWeekKm*.08,10)});
  if(rKm>actualWeekKm*.05+.15)record('R_VOLUME_OVER_5_PERCENT',cfg,w,day,x,{rKm,actualWeekKm,limit:actualWeekKm*.05});
  if(/^МПК/.test(x.name)&&rKm>0&&iKm===0)record('VO2_NAME_BUT_R_PACE',cfg,w,day,x,{rKm,repPace:w.R.rep,vo2Pace:w.R.vo2});
 }
}
const result={sha256:crypto.createHash('sha256').update(fs.readFileSync(html)).digest('hex'),date:new Date().toISOString(),scenarios:summaries.length,counts,byDistance,findings,summaries};
fs.writeFileSync(path.join(__dirname,'audit_methodology_results.json'),JSON.stringify(result,null,2));console.log(JSON.stringify({scenarios:result.scenarios,sha256:result.sha256,counts,examples:findings.filter((f,i,a)=>a.findIndex(z=>z.code===f.code)===i)},null,2));
