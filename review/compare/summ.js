const c=require('./calc.json'),m=require('./mine.json');
const isQmine=n=>/^(T |I |R |\d×|ПМ-темп|МР |Активация)|из них|КОНТРОЛЬНЫЙ/.test(n);
const isQcalc=(n,z)=>z!=='easy'&&z!=='rec'&&!/^Средне-длинная \d:\d\d$/.test(n)&&!/^Длинная \d:\d\d$/.test(n)||/из них/.test(n);
const rows=[];
for(const k in c){const a=c[k].weeks,b=m[k].weeks;
 const wk=(arr,f)=>arr.map(f);
 const cs={peakKm:Math.max(...a.filter(w=>w.type!=='race').map(w=>w.km)),peakMin:Math.max(...a.filter(w=>w.type!=='race').map(w=>w.min)),
  tot:a.reduce((s,w)=>s+(w.type==='race'?0:w.km),0),
  gr:Math.max(...a.slice(1).map((w,i)=>a[i].km>0&&w.type===''&&a[i].type===''?w.km/a[i].km:0)),
  runs:[Math.min(...a.slice(0,-1).map(w=>w.runs)),Math.max(...a.slice(0,-1).map(w=>w.runs))],
  longKm:Math.max(...a.map(w=>w.longKm)),longMin:Math.max(...a.map(w=>w.longMin)),
  q:a.slice(0,-1).reduce((s,w)=>s+w.items.flat().filter(x=>isQcalc(x.n,x.z)).length,0),
  qw:a.slice(0,-1).map(w=>w.items.flat().filter(x=>isQcalc(x.n,x.z)).length).join('')};
 const ms={peakKm:Math.max(...b.filter(w=>w.type!=='race').map(w=>w.km)),peakMin:Math.max(...b.filter(w=>w.type!=='race').map(w=>w.min)),
  tot:b.reduce((s,w)=>s+(w.type==='race'?0:w.km),0),
  gr:Math.max(...b.slice(1).map((w,i)=>b[i].km>0&&w.type==='work'&&b[i].type==='work'?w.km/b[i].km:0)),
  runs:[Math.min(...b.slice(0,-1).map(w=>w.runs)),Math.max(...b.slice(0,-1).map(w=>w.runs))],
  longKm:Math.max(...b.map(w=>w.longKm)),longMin:Math.max(...b.map(w=>w.longMin)),
  q:b.slice(0,-1).reduce((s,w)=>s+w.days.filter(d=>d&&isQmine(d.n)).length,0),
  qw:b.slice(0,-1).map(w=>w.days.filter(d=>d&&isQmine(d.n)).length).join('')};
 rows.push([k,cs,ms]);}
console.log('план               | пик км К/М | пик мин К/М | сумма км К/М | макс рост нед К/М | пробежки К/М | длинная км/мин К/М | Q всего К/М');
for(const [k,x,y] of rows)console.log(k.padEnd(16),'|',x.peakKm.toFixed(0),'/',y.peakKm.toFixed(0),'|',x.peakMin,'/',y.peakMin,'|',x.tot.toFixed(0),'/',y.tot.toFixed(0),'|',x.gr.toFixed(2),'/',y.gr.toFixed(2),'|',x.runs.join('–'),'/',y.runs.join('–'),'|',x.longKm,'/',x.longMin,'  ',y.longKm,'/',y.longMin,'|',x.q,'/',y.q);
console.log();for(const [k,x,y] of rows)console.log(k.padEnd(16),'Q/нед К:',x.qw,' М:',y.qw);
