// сравнение базового html и CF-html по 12 планам: суммарный км, недели где различается, Q
const {execFileSync}=require('child_process');
const prof=[[80,40],[80,37],[40,57],[20,67]],dists=[[10000,10],[21097,12],[42195,16]];
const path=process.argv[2];
function run(html,V0,t,gd,N,over){
  const code=`process.env.PLAN_HTML=${JSON.stringify(require('path').resolve(html))};const {calc}=require('./calc_all.js');const {p}=calc(${V0},${t},${gd},${N},${over||'undefined'});
  const isQ=x=>x.kind==='run'&&x.z!=='easy'&&x.z!=='rec'&&x.z!=='long'&&!/^(Средне-)?[Дд]линная \\d:\\d\\d$/.test(x.name);
  console.log(JSON.stringify(p.weeks.map(w=>({n:w.n,km:+w.kmRaw.toFixed(1),min:Math.round(w.minRaw),tg:Math.round(w.targetRaw),q:w.days.flatMap(d=>d.items).filter(isQ).length,type:w.type||''}))));`;
  return JSON.parse(execFileSync('node',['-e',code],{encoding:'utf8'}));
}
let tot={w:0,diff:0,dmin:0,short0:0,short1:0};
for(const [V0,t] of prof)for(const [gd,N] of dists){
  const a=run('../../run_plan_calculator.html',V0,t,gd,N),b=run(path,V0,t,gd,N);
  const d=a.map((x,i)=>({n:x.n,dm:b[i].min-x.min,dq:b[i].q-x.q,sa:x.tg-x.min,sb:b[i].tg-b[i].min})).filter(x=>x.dm||x.dq);
  const k=`${V0}км_${t}мин_${gd===10000?10:gd===21097?21.1:42.2}`;
  console.log(k.padEnd(16),'нед. с изменением:',d.length,d.map(x=>`н${x.n}:${x.dm>=0?'+':''}${x.dm}′${x.dq?` Q${x.dq>0?'+':''}${x.dq}`:''}`).join(' '));
  tot.w+=a.length;tot.diff+=d.length;
}
console.log('всего недель',tot.w,'изменено',tot.diff);
