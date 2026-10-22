'use strict';
const {build}=require('./coach2.js');
const {fmtP,fmtT,timeFor}=require('./coach.js');
const DN=['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
const rnd=x=>Math.round(x*2)/2;
function qPlan(pl,w){ // что ставим в неделю: {q1,q2,ml,mpKm,test}
  const {D,V0,B,tuneW,runs}=pl, i=w.i, T=w.type;
  const hi=V0>=40; // можно ли I (при 20 км/нед объём I 8% недели — меньше минимальной работы)
  const share=Math.min(1,Math.max(.65,.65+.35*(i-1)/Math.max(1,B-3)));
  const two=runs>=5;
  const o={q1:null,q2:null,ml:false,mp:0,share};
  if(T==='race'){o.act=true;return o;}
  if(D===10){
    if(T==='sb'){o.q1=['T',.7];}
    else if(T==='tune'){o.q1=['I',.6];if(!hi)o.q1=['T',.6];}
    else if(T==='taper'){o.q1=['RP',.7];if(two)o.q2=['T',.6];}
    else if(i<=3){o.q1=[i%2?'R':'T',share];if(two)o.q2=[i%2?'T':'R',share];}
    else if(i<=6){o.q1=[hi?'I':'T',share];if(two)o.q2=['T',share];}
    else {o.q1=['RP',share];if(two)o.q2=['T',share];}
  } else if(D===21.1){
    o.ml=runs>=5&&i>=2&&T!=='taper';
    if(T==='sb'){o.q1=['T',.7];}
    else if(T==='tune'){o.q1=['T',.7];}
    else if(T==='taper'){o.q1=['HMP',.7];if(two)o.q2=['T',.6];o.ml=false;o.mp=0;}
    else if(i<=3){o.q1=['T',share];if(two)o.q2=['R',share];}
    else if(i<=7){o.q1=[hi?'I':'T',share];if(two)o.q2=['T',share];}
    else {o.q1=['T',share];if(two&&hi)o.q2=['RP',share];o.mp=i===8?.22:.32;}
  } else {
    o.ml=runs>=5&&i>=2&&T!=='taper';
    if(T==='sb'||T==='tune'){o.q1=['T',.7];}
    else if(T==='taper'){const k=pl.N-1-i;o.q1=k===1?['MPseg',.7]:['MPseg',.5];o.ml=false;if(k===1)o.ml=runs>=5;}
    else if(i<=3){o.q1=['T',share];}
    else if(i<=7){o.q1=['T',share];if(two&&hi)o.q2=['I',share];}
    else {o.q1=['T',share];o.mp=i===9?.25:i===10?.4:i===11?.5:.55;}
  }
  return o;
}
function weekPlan(pl,w){
  const {P,runs,D}=pl, q=qPlan(pl,w), W=w.km;
  const days=new Array(7).fill(null);
  const kmOf=d=>d?d.km:0;
  const mkE=(name,km,pace=P.E)=>({name,km:+km.toFixed(1),min:km*pace/60});
  const baseDays={6:[1,2,3,4,5,6],5:[1,2,3,5,6],4:[1,3,5,6]}[runs];
  const rk={42.2:42.195,21.1:21.097,10:10}[D], rname={42.2:'марафон',21.1:'полумарафон',10:'10 км'}[D];
  const wcMin=W<35?15:25, wcTxt=W<35?' + 10′ разм. + 5′ замин.':' + 15′ разм. + 10′ замин.';
  // --- неделя гонки
  if(q.act){
    const ak=Math.max(5,Math.min(9,W*0.3));
    const txt=D===42.2?'Активация: 3×1,6 км @ темп марафона (р 2′)':D===21.1?'Активация: 3×1 км @ темп ПМ':'Активация: 4×400 м @ темп 5 км (р 90″)';
    days[1]={name:txt,km:+ak.toFixed(1),min:ak*P.E/60};
    const rest=Math.max(0,W-ak);
    if(runs>=5){days[2]=mkE('Лёгкий',rest*0.36);days[3]=mkE('Лёгкий + 4 ускорения',rest*0.3);days[5]=mkE('Выбег 20′ + 3 ускорения',Math.max(3.5,rest*0.34));}
    else {days[3]=mkE('Лёгкий + 4 ускорения',rest*0.55);days[5]=mkE('Выбег 20′ + 3 ускорения',Math.max(3.5,rest*0.45));}
    days[6]={name:'ГОНКА '+rname,km:rk,min:rk*({42.2:P.M,21.1:P.HM,10:P.P10}[D])/60,race:1};
    return {days,q};
  }
  const prevTune=w.i>1&&pl.weeks[w.i-2].type==='tune';
  const win=prevTune?(pl.tuneDist===10?4:2):0;      // окно восстановления после контрольного старта (Дэниелс: 1 день на 3 км): Пн…
  let runDays=baseDays.slice(), q1Day=1, q2Day=3, mlDay=2;
  if(w.type==='tune'){runDays=[1,2,3,5,6]; if(runs===4)runDays=[1,3,5,6];}
  if(prevTune){
    if(win===4){ if(runs===4){q.q1=null;q.q2=null;} else {q1Day=4;q.q2=null; if(runs===5)runDays=[1,2,4,5,6];} }
    else {q1Day=3;q.q2=null;}
  }
  // --- фиксированные
  let fixed=0, L=w.L;
  if(w.type==='tune'){const dist=pl.tuneDist,rp=dist===5?P.P5:P.P10;days[6]={name:`КОНТРОЛЬНЫЙ СТАРТ ${dist} км (+ разминка/заминка 5 км)`,km:dist+5,min:dist*rp/60+5*P.E/60,race:1};fixed+=dist+5;L=0;
    days[5]=mkE('Выбег 20′ + 3 ускорения',3.5);fixed+=3.5;}
  else if(L>0){
    let name=`Длинная ${L} км @${fmtP(P.E)}`,min=L*P.E/60;
    if(q.mp>0){const cap=Math.min(.2*W,110*60/P.M);
      const mpKm=Math.max(0,Math.min(Math.floor(L*q.mp*(D===42.2?1:.8)),Math.floor(cap),L-8));
      if(mpKm>=3){const pM=D===42.2?P.M:P.HM,lbl=D===42.2?'МР':'ПМ-темп';name=`Длинная ${L} км, из них ${mpKm} км @${lbl} ${fmtP(pM)}`;min=(L-mpKm)*P.E/60+mpKm*pM/60;}}
    days[6]={name,km:L,min};fixed+=L;
  }
  const mkQ=(spec)=>{const [k,sh]=spec;
    if(k==='HMP'){const km=Math.min(Math.round(.2*W/2),6),n=km>=4?2:1;const x=Math.max(2,Math.round(km/n));return {name:`ПМ-темп ${n}×${x} км @${fmtP(P.HM)} (р 2′)${wcTxt}`,km:+(wcMin*60/P.E+n*x+(n-1)*0.4).toFixed(1),min:wcMin+n*x*P.HM/60+(n-1)*2};}
    if(k==='MPseg'){const km=Math.min(Math.round(.2*W*sh*1.2),12);return {name:`МР ${km} км непрерывно @${fmtP(P.M)} (${wcTxt.trim().slice(2)})`,km:+(wcMin*60/P.E+km).toFixed(1),min:wcMin+km*P.M/60};}
    const s=pl.sess(k,W,sh);return {name:s.txt+wcTxt,km:s.km,min:s.min};};
  if(q.q1&&runDays.includes(q1Day)){days[q1Day]=mkQ(q.q1);fixed+=days[q1Day].km;}
  if(q.q2&&runDays.includes(q2Day)&&!days[q2Day]){days[q2Day]=mkQ(q.q2);fixed+=days[q2Day].km;}
  if(q.ml&&runDays.includes(mlDay)&&!days[mlDay]&&!(prevTune&&win===4&&false)){
    const ref=L>0?L:(pl.weeks[w.i-2]&&pl.weeks[w.i-2].L)||20;
    const m=Math.max(10,Math.min(w.type==='tune'?14:D===42.2?18:14,Math.round(ref*.6)));
    days[mlDay]={name:`Средне-длинная ${m} км @${fmtP(P.E)}`,km:m,min:m*P.E/60};fixed+=m;}
  // --- лёгкие
  const eslots=[];
  runDays.forEach(d=>{if(!days[d])eslots.push([d,(d===5?0.75:d===4?0.7:1.0)]);});
  if(runs===4)eslots.forEach(e=>e[1]=1.0);
  const Lref=Math.max(L,w.L||0,pl.weeks[Math.max(0,w.i-2)].L||0,10);
  const capE=Math.min(18,Math.max(8,Lref*0.5,W/runs*1.25));
  let remain=Math.max(0,W-fixed);
  const alloc=eslots.map(([d,wt])=>({d,wt,km:0,cap:capE}));
  if(w.type==='tune'){remain=Math.min(remain,eslots.length*capE*0.7);}
  for(let it=0;it<20&&remain>0.05;it++){const act=alloc.filter(a=>a.km<a.cap-0.01);if(!act.length)break;const sw=act.reduce((s,a)=>s+a.wt,0);let used=0;
    act.forEach(a=>{const add=Math.min(remain*a.wt/sw,a.cap-a.km);a.km+=add;used+=add;});remain-=used;}
  alloc.forEach(a=>{a.km=rnd(a.km);days[a.d]=a.km>0?mkE(prevTune&&a.d<win?'Восстановительный':'Лёгкий',a.km):null;});
  let ns=0;for(const d of [2,3,5,4]){if(days[d]&&days[d].name==='Лёгкий'&&days[d].km>=6&&ns<2&&!(d<win)){days[d].name='Лёгкий + 4 ускорения';ns++;}}
  const total=days.reduce((s,d)=>s+kmOf(d),0);
  return {days,q,short:Math.max(0,W-total)};
}
function render(V0,t10,D,N){
  const pl=build(V0,t10,D,N);
  const rows=[];
  pl.weeks.forEach(w=>{const wp=weekPlan(pl,w);w.wp=wp;});
  return pl;
}
module.exports={render,weekPlan};
if(require.main===module){
  const [V0,t10,D,N]=process.argv.slice(2).map(Number);
  const pl=render(V0,t10,D,N);
  console.log(`VDOT ${pl.vd.toFixed(1)} peak ${pl.peak} L ${pl.LRP}`);
  pl.weeks.forEach(w=>{const ds=w.wp.days.map((d,i)=>d?`${DN[i]}:${d.km.toFixed(0)}`:`${DN[i]}:-`).join(' ');
    const km=w.wp.days.reduce((s,d)=>s+(d?d.km:0),0),mn=w.wp.days.reduce((s,d)=>s+(d?d.min:0),0);
    console.log(String(w.i).padStart(2),w.type.padEnd(5),'target',String(w.km).padStart(3),'sum',km.toFixed(0).padStart(3),'min',Math.round(mn),ds,'| short',(w.wp.short||0).toFixed(0));});
}
