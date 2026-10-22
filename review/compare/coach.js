'use strict';
// Независимая сборка планов по правилам тренера (Дэниелс 2Q, Пфитцингер, Хэнсонс). Код калькулятора не используется.
const vo2At=v=>-4.60+0.182258*v+0.000104*v*v;
const pctAt=t=>0.8+0.1894393*Math.exp(-0.012778*t)+0.2989558*Math.exp(-0.1932605*t);
const vdot=(d,sec)=>{const t=sec/60;return vo2At(d/t)/pctAt(t);};
function speedAtVo2(x){let lo=50,hi=500;for(let i=0;i<80;i++){const m=(lo+hi)/2;vo2At(m)<x?lo=m:hi=m;}return (lo+hi)/2;}
const paceAtPct=(vd,p)=>60000/speedAtVo2(vd*p);
function timeFor(d,vd){let lo=d/8,hi=d/1.4;for(let i=0;i<80;i++){const m=(lo+hi)/2;vdot(d,m)>vd?lo=m:hi=m;}return (lo+hi)/2;}
const paceSet=vd=>({E:paceAtPct(vd,.66),M:timeFor(42195,vd)/42.195,HM:timeFor(21097,vd)/21.097,P10:timeFor(10000,vd)/10,P5:timeFor(5000,vd)/5,
  T:60000/speedAtVo2(vd*pctAt(60)),I:paceAtPct(vd,.975),R:timeFor(1609.34,vd)/1.60934});
const fmtP=s=>{s=Math.round(s);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');};
const fmtT=s=>{s=Math.round(s);const h=Math.floor(s/3600),m=Math.floor(s%3600/60);return h?h+':'+String(m).padStart(2,'0')+':'+String(s%60).padStart(2,'0'):m+':'+String(s%60).padStart(2,'0');};
const r05=x=>Math.round(x*2)/2;

// --- параметры по профилю (мои решения тренера) ---
// пик км: из текущего объёма V0 и дистанции; частота; длинная
function profile(V0,t10,D){
  const vd=vdot(10000,t10*60), P=paceSet(vd);
  const runs=V0>=70?6:V0>=35?5:4;
  const mult={10:{80:1.10,40:1.25,20:1.40},21.1:{80:1.18,40:1.35,20:1.60},42.2:{80:1.32,40:1.55,20:2.0}}[D][V0];
  const peak=Math.round(V0*mult/ (V0>=70?1:1));
  return {vd,P,runs,peak};
}
module.exports={vdot,paceSet,timeFor,fmtP,fmtT,profile,r05};
if(require.main===module){
  for(const [V0,t] of [[80,40],[80,37],[40,57],[20,67]]){
    const vd=vdot(10000,t*60),P=paceSet(vd);
    console.log(V0,t,'VDOT',vd.toFixed(1),'E',fmtP(P.E),'M',fmtP(P.M),'HM',fmtP(P.HM),'T',fmtP(P.T),'I',fmtP(P.I),'R',fmtP(P.R),
     'tM',fmtT(timeFor(42195,vd)),'tHM',fmtT(timeFor(21097,vd)));
  }
}
