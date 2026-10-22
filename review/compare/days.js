const c=require('./calc.json');const DN=['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
const key=process.argv[2],sel=(process.argv[3]||'').split(',').filter(Boolean).map(Number);
const o=c[key];
console.log(key,'цель',o.tgt,'VDOT',o.vd,'|',o.notes.slice(0,12).map(s=>s.slice(0,230)).join('\n  - '));
o.weeks.forEach(w=>{if(sel.length&&!sel.includes(w.n))return;
 console.log(`--- Нед ${w.n} ${w.phase} · ${w.km} км ${w.min} мин, пробежек ${w.runs}, цель ${w.target}, ACWR ${w.acwr}`);
 w.items.forEach((it,i)=>{if(!it.length)console.log(`  ${DN[i]} —`);else console.log(`  ${DN[i]} `+it.map(x=>`${x.km} км/${x.min}′ ${x.n.replace(/^\[T\] W\d+D\d /,'')}`).join(' | '));});});
