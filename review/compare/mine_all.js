const {render}=require('./coach3.js');const fs=require('fs');
const DN=['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
const prof=[[80,40],[80,37],[40,57],[20,67]], dists=[[10,10],[21.1,12],[42.2,16]];
const out={}, md=[];
for(const [V0,t] of prof)for(const [D,N] of dists){
  const pl=render(V0,t,D,N), key=`${V0}км_${t}мин_${D}`;
  const weeks=pl.weeks.map(w=>{const ds=w.wp.days;
    const km=ds.reduce((s,d)=>s+(d?d.km:0),0), mn=ds.reduce((s,d)=>s+(d?d.min:0),0);
    const runs=ds.filter(Boolean).length;
    const long=ds[6]&&!ds[6].race?ds[6]:null;
    const race=ds.find(d=>d&&d.race);
    const kmNR=km-(race?race.km:0), mnNR=mn-(race?race.min:0);
    return {i:w.i,type:w.type,short:+(w.wp.short||0).toFixed(1),target:w.km,km:+km.toFixed(1),min:Math.round(mn),kmNR:+kmNR.toFixed(1),minNR:Math.round(mnNR),runs,longKm:long?long.km:0,longMin:long?Math.round(long.min):0,days:ds.map(d=>d?{n:d.name,km:+d.km.toFixed(1),min:Math.round(d.min)}:null)};});
  out[key]={vd:pl.vd,peak:pl.peak,runs:pl.runs,weeks};
  md.push(`\n### ${V0} км/нед, 10 км за ${t}:00 → ${D===42.2?'марафон':D===21.1?'полумарафон':'10 км'} (${N} нед., VDOT ${pl.vd.toFixed(1)}, ${pl.runs} пробежек)\n`);
  md.push('| Нед | Тип | Км | Мин | '+DN.join(' | ')+' |','|'+'---|'.repeat(11));
  weeks.forEach(w=>md.push(`| ${w.i} | ${w.type} | ${w.km} | ${w.min} | `+w.days.map(d=>d?`${d.n} (${d.km} км)`:'—').join(' | ')+' |'));
}
fs.writeFileSync('mine.json',JSON.stringify(out));fs.writeFileSync('mine_plans.md',md.join('\n'));
console.log('ok',Object.keys(out).length);
