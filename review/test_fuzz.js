#!/usr/bin/env node
/* Фаззинг buildPlan: произвольные и некорректные вводные (в т.ч. недоступные из формы). Проверяет: нет исключений (строки-ошибки ввода допустимы),
 * нет NaN/Infinity в тренировках и неделях, время построения. Запуск: node test_fuzz.js [seed] [число конфигураций]   (PLAN_HTML — путь к HTML) */
'use strict';
const fs=require('fs'),path=require('path');
const HTML=process.env.PLAN_HTML||path.join(__dirname,'..','run_plan_calculator.html');
const C=(()=>{const src=fs.readFileSync(HTML,'utf8');const a=src.indexOf('/*GEN-START*/'),b=src.indexOf('/*GEN-END*/');
 const m0=src.match(/function zoneOfW\(/);const rest=src.slice(m0.index);const zoneOfW=rest.slice(0,rest.search(/\nfunction \w+\(|\nconst \w+=/));
 const code=src.slice(a,b)+'\n'+zoneOfW+'\nmodule.exports={buildPlan};';const Module=require('module');const m=new Module('core');m._compile(code,'core.js');return m.exports;})();
let seed=+process.argv[2]||7;const rnd=()=>{seed=(seed*1103515245+12345)&0x7fffffff;return seed/0x7fffffff;};const pick=a=>a[Math.floor(rnd()*a.length)];
const addDays=(iso,n)=>{const d=new Date(iso+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10);};
const N=+process.argv[3]||600;let thrown={},nan=0,errs={},ok=0,t0=Date.now();
for(let k=0;k<N;k++){
 const start=addDays('2026-11-02',pick([0,1,2,3,4,5,6,10]));const weeks=pick([1,3,4,5,6,9,13,20,30,52,70]);
 const dist=pick([800,1500,3000,5000,10000,15000,21097,30000,42195,50000,80000,100000,160000,200000]);
 const cfg={startISO:start,goalISO:addDays(start,weeks*7-pick([0,1,3,6])),goalDist:dist,
  results:pick([[{dist:10000,sec:pick([1200,1800,2400,3000,3600,4800,7200])}],[{dist:5000,sec:pick([600,900,1500,2400])},{dist:42195,sec:pick([9000,12000,16000,22000])}],[],[{dist:10000,sec:0}],[{dist:0,sec:100}],[{dist:21097,sec:pick([3600,5400,9000])}]]),
  tgtGoal:pick([null,null,0,-5,dist*0.2,dist*0.35,dist*0.6,dist*1.5]),age:pick([14,25,40,60,90,undefined]),weight:pick([40,70,150,undefined]),sex:pick(['m','f',undefined]),exp:pick(['novice','inter','adv','bogus',undefined]),
  curVol:pick([0,1,5,20,50,100,300,undefined,null,-4]),volUnit:pick(['km','h']),peakVol:pick([null,null,10,60,200,1000]),runs:pick([0,1,2,3,4,5,6,7,9,12,20,undefined]),runsAuto:rnd()<0.4,strength:pick([0,1,2,3,7]),slider:pick([null,0,0.3,1,5,-1]),deload:pick(['need','w31','none','bogus']),
  elevGain:pick([0,0,100,800,5000,-10,undefined]),localHills:rnd()<0.2,altitude:pick([0,0,1500,5000]),heat:rnd()<0.2,curLong:pick([null,null,0,20,60,120,400,undefined]),maxLongCap:pick([null,null,60,120,10]),maxVolEver:pick([null,null,30,200]),
  tuneRaces:rnd()<0.3?[{iso:addDays(start,pick([-5,0,7,14,weeks*7-3,weeks*7+9,400])),dist:pick([0,5000,10000,21097,50000,undefined])}]:[],
  longDow:pick([null,0,3,5,6,9,-1,'x']),preCtx:pick(['none','none','race','transition','bogus']),preRaceDate:addDays(start,-pick([0,2,10,40])),preRaceDist:pick([5000,10000,21097,42195]),transPeakVol:pick([0,80,500]),transWeeksAgo:pick([0,1,3,9]),
  cross:pick([null,[{sport:'bike',name:'Вело',mins:pick([0,30,75,400]),desc:'d',gtype:'cycling',days:pick([[],[0],[1,2,3,4,5,6,7,8]]),auto:rnd()<0.5,cls:pick(['K1','K2','K3','K4','Kx'])}]]),
  tag:pick(['[T]','','x'.repeat(200)]),lthr:pick([null,150,300,40]),ltPace:pick([null,200,400,1000,10])};
 const tt=Date.now();let p;try{p=C.buildPlan(cfg);}catch(e){const m=typeof e==='string'?'STR '+e.slice(0,60):'EXC '+(e&&e.message||e).toString().slice(0,100);thrown[m]=(thrown[m]||0)+1;if(typeof e!=='string'&&!thrown['_ex'])thrown['_ex']=JSON.stringify(cfg);continue;}
 const dt=Date.now()-tt;if(dt>4000&&process.env.DUMPSLOW)require('fs').appendFileSync(process.env.DUMPSLOW,JSON.stringify(cfg)+'\n');if(dt>4000)console.log('МЕДЛЕННО',dt,'мс',JSON.stringify({w:weeks,dist,runs:cfg.runs,cv:cfg.curVol,cross:!!cfg.cross,tune:cfg.tuneRaces.length}));
 if(p.error){errs[p.error.slice(0,60)]=(errs[p.error.slice(0,60)]||0)+1;continue;}
 ok++;const js=JSON.stringify(p.workouts);if(/NaN|Infinity|null,"v"|"v":null|undefined/.test(js)||/NaN|Infinity/.test(JSON.stringify(p.weeks.map(w=>[w.min,w.km,w.target,w.load,w.acwr])))){nan++;if(nan<3)console.log('NaN cfg',JSON.stringify(cfg).slice(0,600));}
}
console.log('seed',process.argv[2]||7,'ok',ok,'ошибки плана',JSON.stringify(errs),'исключения',JSON.stringify(thrown).slice(0,1200),'NaN',nan,'сек',Math.round((Date.now()-t0)/1000));

process.exit(Object.keys(thrown).length||nan?1:0);
