const {render}=require('./coach3.js');const DN=['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
const [V0,t10,D,N]=process.argv.slice(2).map(Number);const sel=(process.argv[6]||'').split(',').filter(Boolean).map(Number);
const pl=render(V0,t10,D,N);
pl.weeks.forEach(w=>{if(sel.length&&!sel.includes(w.i))return;console.log(`--- Нед ${w.i} ${w.type} цель ${w.km}`);
 w.wp.days.forEach((d,i)=>{if(d)console.log(`  ${DN[i]} ${d.km.toFixed(1)} км ${Math.round(d.min)}′  ${d.name}`);else console.log(`  ${DN[i]} —`);});});
