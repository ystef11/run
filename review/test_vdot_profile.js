'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),Module=require('node:module');
const html=fs.readFileSync(process.env.PLAN_HTML||path.join(__dirname,'..','run_plan_calculator.html'),'utf8');
const rest=html.slice(html.indexOf('function zoneOfW('));
const zone=rest.slice(0,rest.search(/\nfunction \w+\(|\nconst \w+=/));
const mod=new Module('vdot-core');
mod._compile(html.slice(html.indexOf('/*GEN-START*/'),html.indexOf('/*GEN-END*/'))+'\n'+zone+'\nmodule.exports={profileOf,trajectoryOf,paceAt,vdot,vOfT,timeAtV,planBasics,buildPlan,forecastFor,paceAtDuration,paceAtPct,mid};','vdot-core.js');
const C=mod.exports;
const near=(a,b,eps=1e-7)=>assert.ok(Math.abs(a-b)<=eps,`${a} != ${b}`);
const results=[{dist:10000,sec:2490},{dist:42195,sec:12360}];
const pf=C.profileOf(results,null);
near(pf.V0(10000),49.756073061334526);
near(pf.V0(42195),45.592684374702905);
near(pf.V0(21097),47.742070524264214);
near(pf.V0(5000),pf.Vbest);
near(pf.T0(5000),C.timeAtV(5000,pf.Vbest));
near(pf.V0(1609.34),pf.Vbest);
// Потолок текущей формы действует в обе стороны и при любом количестве результатов.
for(const input of [results,[{dist:10000,sec:3000},{dist:42195,sec:12360}],
  [...results,{dist:21097,sec:5700}]]){
  const profile=C.profileOf(input,null);
  for(const d of [1500,1609.34,3000,5000,10000,15000,21097,30000,42195,80000,160000]){
    assert.ok(profile.V0(d)<=profile.Vbest,`initial VDOT cap at ${d}`);
    near(C.vOfT(d,profile.T0(d)),profile.V0(d));
  }
  for(const point of profile.pts)near(profile.T0(point.D),point.T);
}
// Ограничение исходного профиля не отменяет дальнейший рост и ручную цель.
assert.ok(C.trajectoryOf(pf,12,42195,null).V(5000,12)>pf.Vbest);
assert.ok(pf.V0(80000)<pf.V0(42195));
for(const minutes of [11,30,60])near(pf.T0(pf['D'+minutes]),minutes*60);
// Все измеренные точки сохраняются, включая среднюю, отклоняющуюся от общей регрессии.
const three=[...results,{dist:21097,sec:5700}];
const p3=C.profileOf(three,null);
for(const r of three){near(p3.T0(r.dist),r.sec);near(p3.V0(r.dist),C.vdot(r.dist,r.sec));}
const dup=C.profileOf([...three,{dist:10000,sec:2600}],null);
near(dup.T0(10000),2490);
assert.equal(dup.pts.length,3);
// Единственный результат вычисляется из ввода, не из константы.
for(const sec of [2100,2490,3000]){
  const p=C.profileOf([{dist:10000,sec}],null);
  near(p.Vbest,C.vdot(10000,sec));
  for(const d of [5000,10000,21097,42195])near(p.V0(d),p.Vbest);
  assert.ok(C.trajectoryOf(p,12,42195,null).V(42195,12)>p.Vbest);
}
const B=12,Ds=[1609.34,pf.D11,pf.D30,pf.D60,5000,10000,21097,42195,80000];
const auto=C.trajectoryOf(pf,B,42195,null);
for(const d of Ds){
  near(auto.V(d,0),pf.V0(d));
  near(C.timeAtV(d,auto.V(d,B)),pf.T0(d)/Math.pow(1.004,B),1e-5);
  near(auto.V(d,B+4),auto.V(d,B));
}
const r0=C.paceAt(pf,auto.V,0,42195,null),re=C.paceAt(pf,auto.V,B,42195,null);
near(r0._vds.thr,pf.V0(pf.D60));near(r0._vds.vo2,pf.V0(pf.D11));
near(r0._vds.easy,pf.V0(42195));near(r0._vds.rep,pf.V0(1609.34));near(r0._vds.cv,pf.V0(pf.D30));
near(C.mid(r0.thr),C.paceAtDuration(pf.V0(pf.D60),60));
near(r0.vo2[0],C.paceAtPct(pf.V0(pf.D11),1));
for(const type of ['thr','vo2','easy','rec','longp','rep','mp','hm','race5','race10'])assert.ok(C.mid(re[type])<C.mid(r0[type]),type);
for(const type of ['lt','cv','vo2'])assert.ok(re.mcm[type]<r0.mcm[type],type);
for(const type of ['steady','bak','tempo','tint','cruise'])assert.ok(C.mid(re.mcm[type])<C.mid(r0.mcm[type]),type);
for(const type of ['speedEnd','speedSpd','sprintEnd','sprintSpd'])for(const d of Object.keys(r0.mcm[type]))assert.ok(C.mid(re.mcm[type][d])<C.mid(r0.mcm[type][d]),type);
// Быстрая ручная цель меняет все VDOT одной поправкой, плавно от нуля.
const fast=C.trajectoryOf(pf,B,42195,C.timeAtV(42195,auto.V(42195,B)+2));
for(const d of Ds)for(const w of [0,3,6,12])near(fast.V(d,w)-auto.V(d,w),2*w/B);
const rf=C.paceAt(pf,fast.V,B,42195,null);
for(const type of ['thr','vo2','easy','rec','longp','rep','mp','hm','race5','race10'])assert.ok(C.mid(rf[type])<C.mid(re[type]),type+' fast target');
// Более медленная цель уменьшает общий уклон; исходные значения остаются прежними.
const target=(pf.V0(42195)+auto.V(42195,B))/2;
const slow=C.trajectoryOf(pf,B,42195,C.timeAtV(42195,target));
near(slow.V(42195,B),target);
for(const d of Ds){near(slow.V(d,0),pf.V0(d));assert.ok(slow.V(d,B)>pf.V0(d));assert.ok(slow.V(d,B)<auto.V(d,B));}
const rs=C.paceAt(pf,slow.V,B,42195,null);
for(const type of ['thr','vo2','easy','rec','longp','rep','mp','hm','race5','race10'])assert.ok(C.mid(rs[type])>C.mid(re[type])&&C.mid(rs[type])<C.mid(r0[type]),type+' slow target');
const maintain=C.trajectoryOf(pf,B,42195,pf.T0(42195)*1.05);
for(const d of Ds)near(maintain.V(d,B),pf.V0(d));
near(C.mid(C.paceAt(pf,auto.V,0,42195,270).thr),270);
const cfg={startISO:'2026-11-09',goalISO:'2027-02-28',goalDist:42195,results,curVol:70,volUnit:'km',runs:6,exp:'inter',age:38,sex:'m',strength:0,ltPace:200,ltPaceManual:false};
const base=C.planBasics(cfg);
near(C.mid(base.paceAt(0).thr),C.paceAtDuration(pf.V0(pf.D60),60));
// Полная сборка, прогноз формы и данные экспорта используют один профиль и одну траекторию.
for(const goalDist of [5000,21097,42195,80000]){
  const input={...cfg,goalDist};
  const f=C.forecastFor(input);assert.ok(!f.error,f.error);
  const t=Math.round(C.timeAtV(goalDist,f.fc.real+1));
  const p=C.buildPlan({...input,tgtGoal:t});assert.ok(!p.error,p.error);
  near(p.analysis.forecastVd,Math.round(f.fc.real*10)/10);
  for(const e of p.analysis.equiv){near(e.curVd,p.basics.pf.V0(e.dist));near(e.tgtVd,p.basics.tr.V(e.dist,p.basics.B));}
  assert.ok(!/NaN|Infinity/.test(JSON.stringify(p.workouts)));
  assert.ok(p.workouts.length>0);
}
// Ускорение темпов не должно давать бюджет трёх Q при шести доступных днях.
const regression=C.buildPlan({startISO:'2026-10-08',goalISO:'2027-02-16',goalDist:42195,results:[{dist:10000,sec:2400}],age:40,sex:'m',exp:'novice',curVol:9,volUnit:'h',peakVol:14.4,runs:7,runsAuto:true,strength:3,slider:1,deload:'need',elevGain:800,cross:null,tuneRaces:[]});
const w=regression.weeks[18];
const hard=w.days.flatMap(d=>d.items).filter(x=>x.kind==='run'&&(['thr','vo2','mp','race'].includes(x.z)||(x.z==='long'&&/из них/.test(x.name)))).length;
assert.ok(hard<=2);
console.log('VDOT: профиль, экстраполяция, все группы темпов, ручные цели и 4 полных плана — OK');
