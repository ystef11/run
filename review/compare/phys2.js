const c=require('./calc.json');
const isHard=x=>x.z!=='easy'&&x.z!=='rec'&&x.z!=='long'&&!/^Средне-длинная \d:\d\d$/.test(x.n)||/из них/.test(x.n);
const isLong=x=>x.z==='long'||/^Длинная/.test(x.n);
const rows=[];
for(const k in c){const o=c[k];const ws=o.weeks;const dist=+k.split('_')[2];
 let peakLongMin=0,peakLongShare=0,hardAdj=0,qAfterLong=0,qBeforeLong=0,shortRuns=0,allRuns=0,maxJump=0,jumpAt='',medAfterQ=0;
 const hist=[];let race=0;
 ws.forEach((w,wi)=>{ if(w.type==='race'){return;}
  let longMin=0;const day=w.items.map(it=>({hard:it.some(isHard),long:it.some(isLong),min:it.reduce((s,x)=>s+x.min,0),runs:it}));
  day.forEach((d,i)=>{ if(d.long)longMin=Math.max(longMin,d.runs.filter(isLong)[0].min);
    if(d.hard&&day[i+1]&&(day[i+1].hard))hardAdj++;
    if(d.hard&&day[i+1]&&day[i+1].long)qBeforeLong++;
    if(d.long&&day[i+1]&&day[i+1].hard)qAfterLong++;
    d.runs.forEach(x=>{allRuns++;if(x.min<35)shortRuns++;});
  });
  // Frandsen: longest single session vs longest in prior 30 days (4 weeks)
  const sess=Math.max(...w.items.flat().map(x=>x.min),0);
  const prior=Math.max(0,...hist.slice(-4));
  if(prior>0&&w.type!=='tune'&&sess/prior>maxJump){maxJump=sess/prior;jumpAt=`н${w.n}:${prior}→${sess}`;}
  hist.push(sess);
  if(longMin>peakLongMin){peakLongMin=longMin;}
  const sh=longMin/w.min; if(sh>peakLongShare)peakLongShare=sh;
 });
 rows.push({k,peakLongMin,peakLongShare:(peakLongShare*100).toFixed(0),hardAdj,qAfterLong,qBeforeLong,shortPct:(100*shortRuns/allRuns).toFixed(0),jump:maxJump.toFixed(2)+' '+jumpAt,tgt:o.fcTime});
}
rows.forEach(r=>console.log(r.k.padEnd(16),'цель',r.tgt.padEnd(8),'дл.макс',r.peakLongMin,'мин, доля',r.peakLongShare+'%','| Q-Q подряд',r.hardAdj,'| Q→дл вплотную',r.qBeforeLong,'| дл→Q на след.день',r.qAfterLong,'| пробежек<35′',r.shortPct+'%','| макс скачок сессии',r.jump));
