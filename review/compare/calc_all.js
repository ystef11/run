'use strict';
const fs=require('fs'),path=require('path');
const HTML=process.env.PLAN_HTML||'../../run_plan_calculator.html';
const src=fs.readFileSync(HTML,'utf8');const a=src.indexOf('/*GEN-START*/'),b=src.indexOf('/*GEN-END*/');
const code=src.slice(a,b)+'\nmodule.exports={buildPlan,forecastFor,goalByWeeks,vdot,paceAtDuration,fmtP,fmtT,dISO,dAdd,dParse,sesMin,sesKm};';
const Module=require('module');const m=new Module('core');m._compile(code,'core.js');const C=m.exports;
const prof=[[80,40],[80,37],[40,57],[20,67]], dists=[[10000,10],[21097,12],[42195,16]];
const start='2026-11-02';
function cfgFor(V0,t,gd,N,over){
  const res=[{dist:10000,sec:t*60}];
  const vd=C.vdot(10000,t*60);
  const lt=Math.round(C.paceAtDuration(vd,60));
  const c=Object.assign({startISO:start,goalISO:C.goalByWeeks(start,N),goalDist:gd,tuneRaces:[],results:res,
    runsAuto:true,age:38,weight:60,lthr:178,ltPace:lt,peakVol:null,volUnit:'km',runs:6,curVol:V0,curLong:null,sex:'m',exp:'inter',
    maxVolEver:null,maxLongCap:null,elevGain:0,localHills:false,altitude:0,heat:false,longDow:null,cross:[],strength:2,
    slider:gd<=10000?0:1,preCtx:'none',deload:'need',lpm:null,histLoads:null,tag:'[T]',planMode:'goal'},over||{});
  return c;
}
function calc(V0,t,gd,N,over){
  let c=cfgFor(V0,t,gd,N,over);
  const f=C.forecastFor(Object.assign({},c,{peakVol:null,tgtGoal:null}));
  c.tgtGoal=f.realClean;
  const p=C.buildPlan(c);
  return {p,f,c};
}
module.exports={calc,C,prof,dists,cfgFor};
if(require.main===module){
  const out={};
  for(const [V0,t] of prof)for(const [gd,N] of dists){
    const {p,f,c}=calc(V0,t,gd,N);
    const D=gd===10000?10:gd===21097?21.1:42.2, key=`${V0}км_${t}мин_${D}`;
    if(p.error){console.log(key,'ERR',p.error);continue;}
    const weeks=p.weeks.map(w=>{
      const items=w.days.map(d=>d.items.filter(x=>x.kind==='run').map(x=>({n:x.name,km:+x.km.toFixed(1),min:Math.round(x.min),z:x.z})));
      const lg=w.days.flatMap(d=>d.items).filter(x=>x.kind==='run'&&x.z==='long');
      return {n:w.n,type:w.type,ph:w.ph,phase:w.phase,km:+w.kmRaw.toFixed(1),min:Math.round(w.minRaw),target:Math.round(w.targetRaw),runs:w.runs,acwr:w.acwr,short:w.short,
        longKm:lg.length?+Math.max(...lg.map(x=>x.km)).toFixed(1):0,longMin:lg.length?Math.round(Math.max(...lg.map(x=>x.min))):0,bud:w.bud,items,dayRole:w.days.map(d=>d.role)};});
    out[key]={vd:+p.analysis.anchorVd,fcVd:p.analysis.forecastVd,fcTime:C.fmtT(p.analysis.forecastGoal),peakMin:p.analysis.peakMin,peakReal:p.analysis.peakReal,
      recRuns:p.analysis.recRuns,notes:p.analysis.notes,weeks,zoneShares:p.analysis.zoneShares,tgt:C.fmtT(c.tgtGoal||f.realClean),unrel:p.analysis.forecastUnreliable,tune:p.analysis.tuneList};
  }
  fs.writeFileSync('calc.json',JSON.stringify(out));
  for(const k in out){const o=out[k];console.log(`${k.padEnd(16)} VDOT ${o.vd} fc ${o.fcTime} peak ${o.peakReal}km/${o.peakMin}мин runs ${o.recRuns} unrel=${o.unrel}`);}
}
