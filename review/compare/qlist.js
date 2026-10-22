const c=require('./calc.json');
const key=process.argv[2];const o=c[key];
o.weeks.forEach(w=>{const names=[];w.items.forEach((it,i)=>it.forEach(x=>{const n=x.n.replace(/^\[T\] W\d+D\d /,'');
  if(x.z!=='easy'&&x.z!=='rec'&&!/^Длинная \d:\d\d$/.test(n)&&!/^Средне-длинная \d:\d\d$/.test(n))names.push(`${['Пн','Вт','Ср','Чт','Пт','Сб','Вс'][i]} ${n}`);
  else if(/^Средне-длинная/.test(n))names.push(`${['Пн','Вт','Ср','Чт','Пт','Сб','Вс'][i]} ${n}`);}));
 console.log(String(w.n).padStart(2),(w.type||'work').padEnd(6),w.ph.padEnd(3),'пр',w.runs,'|',names.join(' ; '));});
