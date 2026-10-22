'use strict';
const {vdot,paceSet,timeFor,fmtP,fmtT,r05}=require('./coach.js');
const DN=['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
const LADT=[[3,5],[4,5],[1,20],[3,8],[3,10],[2,15],[4,10],[3,15],[5,10],[4,15]];
const LADI=[[4,3],[5,3],[4,4],[6,3],[5,4],[4,5],[6,4],[5,5],[6,5]];
const LADR=[[8,200],[10,200],[6,300],[8,300],[6,400],[8,400],[10,400],[12,400],[16,400],[20,400]];
const LADRP=[[4,1000],[5,1000],[6,1000],[4,1600],[5,1600]]; // темп 10 км
// размер лестницы: наибольшая ступень не больше цели (мин работы), не меньше первой
function pick(lad,minOf,target){let b=0;for(let j=0;j<lad.length;j++)if(minOf(lad[j])<=target+0.01)b=j;return lad[b];}
function mk(profile,D){
  const {P,peak,runs}=profile; return P;
}
function build(V0,t10,D,N){
  const vd=vdot(10000,t10*60),P=paceSet(vd);
  const runs=V0>=70?6:V0>=35?5:4;
  const mult={10:{80:1.10,40:1.25,20:1.40},21.1:{80:1.18,40:1.35,20:1.60},42.2:{80:1.32,40:1.55,20:2.1}}[D][V0];
  const peak=Math.round(V0*mult);
  const LRP={10:{80:{40:20,37:22},40:{57:15},20:{67:9}},21.1:{80:{40:24,37:26},40:{57:18},20:{67:15}},42.2:{80:{40:33,37:35},40:{57:25},20:{67:22}}}[D][V0][t10];
  const lr0=Math.min(LRP,Math.max(7,Math.round(V0*0.3)));
  const tw=D===42.2?2:1, B=N-1-tw;
  const tuneW=D===10?N-3:D===21.1?N-3:N-4;       // контрольный старт: 5 км / 10 км / 10 км (марафон — за 4 нед.)
  const tuneDist=D===10?5:10;
  const sbSet=new Set();for(let i=4;i<=B-1;i+=4)if(Math.abs(i-tuneW)>1)sbSet.add(i);
  const weeks=[];let prevWork=V0,prevLong=lr0,workIdx=0;
  const mWork=(()=>{let m=0;for(let i=1;i<=B;i++)if(!(i===tuneW||sbSet.has(i)))m++;return m;})();const step=Math.min(2,Math.max(0.5,(LRP-lr0)/Math.max(1,mWork-3)));
  for(let i=1;i<=N;i++){
    const w={i,type:'work'};
    if(i===N)w.type='race';
    else if(i>B)w.type='taper';
    else if(i===tuneW)w.type='tune';
    else if(sbSet.has(i))w.type='sb';
    if(w.type==='work'){
      const g=workIdx===0?V0:Math.min(peak,prevWork+Math.max(2,prevWork*0.07),prevWork*1.10);
      w.km=Math.min(peak,Math.round(g));workIdx++;prevWork=w.km;
      w.L=Math.min(LRP,workIdx===1?lr0:r05(prevLong+step));prevLong=w.L;
    }else if(w.type==='sb'){w.km=Math.round(prevWork*0.8);w.L=r05(prevLong*0.75);}
    else if(w.type==='tune'){w.km=Math.round(prevWork*0.8);w.L=0;}
    else if(w.type==='taper'){const k=N-1-i; // k=0 — ближайшая к гонке неделя перед стартовой
      const f=D===42.2?[.80,.60][1-k]:0.75; w.km=Math.round(peak*f);
      w.L=r05(prevLong*(D===42.2?[.75,.55][1-k]:0.7));}
    else {w.km=Math.round(peak*(D===42.2?0.33:0.36));w.L=0;}
    weeks.push(w);
  }
  // качественные по неделям
  const sess=(kind,W,share)=>{ // возвращает {txt,km,min,work}
    const pc=P[kind==='T'?'T':kind==='I'?'I':kind==='R'?'R':'P10'];
    const warm=W<35?10:15,cool=W<35?5:10;
    let txt,workMin,recMin=0;
    if(kind==='T'){const cap=Math.min(0.10*W*pc/60,60);const t=Math.max(15,cap*share);
      const [n,v]=pick(LADT,x=>x[0]*x[1],t);workMin=n*v;recMin=n>1?(n-1)*Math.max(1,Math.round(v/5)):0;txt=n===1?`T ${v}' непрерывно @${fmtP(P.T)}`:`T ${n}×${v}' @${fmtP(P.T)} (р ${Math.max(1,Math.round(v/5))}')`;}
    else if(kind==='I'){const cap=Math.min(0.08*W,10)*pc/60;const t=Math.max(12,cap*share);
      const [n,v]=pick(LADI,x=>x[0]*x[1],t);workMin=n*v;recMin=(n-1)*v;txt=`I ${n}×${v}' @${fmtP(P.I)} (р ${v}' трусцой)`;}
    else if(kind==='R'){const cap=Math.min(0.05*W,8)*pc/60;const t=Math.max(6,cap*share);
      const [n,d]=pick(LADR,x=>x[0]*x[1]/1000*pc/60,t);workMin=n*d/1000*pc/60;recMin=n*d/1000*pc/60*2;txt=`R ${n}×${d} м @${fmtP(P.R)} (р 2×)`;}
    else { // RP — интервалы в темпе 10 км
      const cap=Math.min(0.08*W,10)*P.P10/60;const t=Math.max(10,cap*share);
      const [n,d]=pick(LADRP,x=>x[0]*x[1]/1000*P.P10/60,t);workMin=n*d/1000*P.P10/60;recMin=(n-1)*2;txt=`${n}×${d} м @${fmtP(P.P10)} (темп 10 км, р 2')`;}
    const min=warm+cool+workMin+recMin;
    const km=(warm+cool+recMin)*60/P.E/1000*1000/1000*1+workMin*60/pc; // км: разминка/заминка/отдых в E
    return {txt,min,km:+((warm+cool+recMin)*60/P.E+workMin*60/pc).toFixed(1),workMin};
  };
  const tempoSeg=(kmWork,pcName)=>({km:kmWork,pace:P[pcName]});
  return {vd,P,runs,peak,LRP,weeks,B,N,D,tuneW,tuneDist,sess,V0,t10};
}
module.exports={build};
