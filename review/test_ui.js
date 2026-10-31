#!/usr/bin/env node
/* UI-тесты в headless Chromium (playwright): загрузка без ошибок консоли, построение для всех дистанций, plan.json и HTML плана, импорт, правка
 * тренировки, некорректный ввод (сообщение, не исключение), мобильная ширина без горизонтальной прокрутки, межсезонье, контекст перед планом,
 * промежуточный старт, кросс и силовые, адаптация плана, детерминизм.
 * Запуск: NODE_PATH=$(npm root -g) node test_ui.js   (PLAN_HTML — путь к HTML) */
'use strict';
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const URL='file://'+(process.env.PLAN_HTML||path.join(__dirname,'..','run_plan_calculator.html'));
const OUT=require('os').tmpdir()+'/plan_ui_test';fs.mkdirSync(OUT,{recursive:true});
let fails=0,checks=0;const ok=(c,m)=>{checks++;if(!c){fails++;console.log('FAIL',m);}};
(async()=>{const b=await chromium.launch();
async function page(vp){const ctx=await b.newContext({viewport:vp||{width:1280,height:900},acceptDownloads:true});const p=await ctx.newPage();p.errs=[];p.on('pageerror',e=>p.errs.push('PAGEERR '+e.message));p.on('console',m=>{if(m.type()==='error')p.errs.push('CONSOLE '+m.text());});p.on('dialog',d=>{p.errs.push('DIALOG '+d.message());d.dismiss();});await p.goto(URL);await p.waitForTimeout(500);return p;}
const setv=async(p,id,v)=>{await p.evaluate(([id,v])=>{const e=document.getElementById(id);if(e.type==='checkbox')e.checked=!!v;else e.value=v;e.dispatchEvent(new Event('input',{bubbles:true}));e.dispatchEvent(new Event('change',{bubbles:true}));},[id,v]);};
const setRes=async(p,dist,time)=>{await p.evaluate(([d,t])=>{const r=document.querySelector('.resrow');r.querySelector('.r-dist').value=String(d);r.querySelector('.r-time').value=t;r.querySelector('.r-time').dispatchEvent(new Event('input',{bubbles:true}));},[dist,time]);};
const state=async p=>p.evaluate(()=>({err:(()=>{const e=document.getElementById('errBox');return e&&getComputedStyle(e).display!=='none'?e.innerText:''})(),rows:document.querySelectorAll('#out table tr').length}));
const build=async p=>{await p.click('#goBtn');await p.waitForTimeout(700);};
const build2=async p=>{await p.click('#goBtn');await p.waitForTimeout(800);return state(p);};
// 1. загрузка и построение по умолчанию
let p=await page();ok(p.errs.length===0,'загрузка: '+p.errs.join('|'));
await build(p);
let n=await p.evaluate(()=>document.querySelectorAll('#out table tr').length);ok(n>20,'таблица плана строится, строк '+n);
ok(await p.evaluate(()=>!document.getElementById('jsonBtn').disabled),'jsonBtn активна');
ok(p.errs.length===0,'построение по умолчанию: '+p.errs.join('|'));
// 2. скачать JSON, проверить структуру
const [dl]=await Promise.all([p.waitForEvent('download'),p.click('#jsonBtn')]);const jf=path.join(OUT,'plan.json');await dl.saveAs(jf);
const J=JSON.parse(fs.readFileSync(jf,'utf8'));ok(Array.isArray(J.workouts)&&J.workouts.length>50,'plan.json: тренировок '+(J.workouts||[]).length);
const kinds={};J.workouts.forEach(w=>kinds[w.kind]=(kinds[w.kind]||0)+1);
const badSteps=[];const chk=(st,w)=>st.forEach(s=>{if(s.t==='repeat'){if(!(s.n>0)||!Array.isArray(s.steps))badSteps.push(w.name+' repeat');else chk(s.steps,w);}else{if(!['warmup','interval','recovery','cooldown','rest','other'].includes(s.t))badSteps.push(w.name+' t='+s.t);if(!['time','distance','open','lap'].includes(s.end))badSteps.push(w.name+' end='+s.end);if(s.end!=='open'&&!(s.v>0))badSteps.push(w.name+' v='+s.v);}});
J.workouts.filter(w=>w.kind==='run').forEach(w=>{if(!/^\d{4}-\d\d-\d\d$/.test(w.date))badSteps.push(w.name+' date '+w.date);chk(w.steps||[],w);});
ok(badSteps.length===0,'структура шагов: '+badSteps.slice(0,5).join(' ; '));
const dates=J.workouts.map(w=>w.date);ok(dates.every(d=>d>='2026-11-02'),'даты не раньше старта');
// 3. HTML плана
const [dh]=await Promise.all([p.waitForEvent('download'),p.click('#htmlBtn')]);const hf=path.join(OUT,'plan.html');await dh.saveAs(hf);
const p2=await page();p2.errs=[];await p2.goto('file://'+hf);await p2.waitForTimeout(600);
ok(p2.errs.length===0,'HTML плана без ошибок: '+p2.errs.join('|'));
ok(await p2.evaluate(()=>document.body.innerText.length>2000),'HTML плана содержит текст');
// 4. импорт plan.json обратно
const p3=await page();await p3.setInputFiles('#importInput',jf);await p3.waitForTimeout(800);
ok(p3.errs.length===0,'импорт plan.json: '+p3.errs.join('|'));
ok(await p3.evaluate(()=>document.querySelectorAll('#out table tr').length>20),'после импорта таблица есть');
// 5. редактирование тренировки
const edit=await p3.$('.edbtn[onclick*="openEditModal"]');if(edit){await p3.evaluate(()=>{const b=document.querySelector('.edbtn[onclick*="openEditModal"]');b.click();});await p3.waitForTimeout(300);
 ok(await p3.evaluate(()=>getComputedStyle(document.getElementById('modalOverlay')).display!=='none'),'модальное окно открылось');
 await p3.evaluate(()=>saveModal());await p3.waitForTimeout(300);ok(p3.errs.length===0,'правка тренировки: '+p3.errs.join('|'));}else ok(false,'нет кнопки правки');
// 6. дистанции и профили
const cases=[[5000,'20:30',8,'novice',3,'20:00'],[10000,'41:30',12,'inter',5,'40:30'],[21097,'1:35:00',14,'inter',4,'1:32:00'],[42195,'3:20:00',18,'adv',6,'3:15:00'],[42195,'4:30:00',16,'novice',4,'3:30:00'],[100000,'4:30:00',24,'adv',6,'12:00:00']];
for(const [dist,t,wks,exp,runs,tg] of cases){const q=await page();
 if(dist>42195){await setv(q,'goalDist',String(dist));await setRes(q,42195,'3:30:00');}else{await setv(q,'goalDist',String(dist));await setRes(q,dist===42195?10000:dist,dist===42195?'45:00':t);}
 await setv(q,'planWeeks',String(wks));await setv(q,'exp',exp);await setv(q,'runs',String(runs));await setv(q,'curVol','40');await setv(q,'tgtGoal',tg);
 await build(q);const err=await q.evaluate(()=>{const e=document.getElementById('errBox');return e&&getComputedStyle(e).display!=='none'?e.innerText:''});
 const rows=await q.evaluate(()=>document.querySelectorAll('#out table tr').length);
 ok(!err&&rows>10&&q.errs.length===0,`дистанция ${dist}, ${wks} нед, ${exp}, ${runs} пробежек: err="${err}" rows=${rows} errs=${q.errs.join('|')}`);}
// 7. некорректный ввод
for(const [label,fn] of [['старт в прошлом',async q=>{await setv(q,'startD','2020-01-01');await setv(q,'goalD','2020-04-01');}],['цель раньше старта',async q=>{await setv(q,'goalD','2026-11-01');}],['пустой результат',async q=>{await setRes(q,10000,'');}],['мусор в результате',async q=>{await setRes(q,10000,'abc');}],['нулевой объём',async q=>{await setv(q,'curVol','0');}],['огромный объём',async q=>{await setv(q,'curVol','9999');}],['отрицательный набор',async q=>{await setv(q,'elevGain','-500');}],['набор 5000 м на 5 км',async q=>{await setv(q,'goalDist','5000');await setv(q,'elevGain','5000');}]]){
 const q=await page();await fn(q);await q.click('#goBtn');await q.waitForTimeout(700);
 const st=await q.evaluate(()=>({err:(()=>{const e=document.getElementById('errBox');return e&&getComputedStyle(e).display!=='none'?e.innerText:''})(),rows:document.querySelectorAll('#out table tr').length}));
 ok(!q.errs.some(e=>/PAGEERR|TypeError|ReferenceError/.test(e)),`некорректный ввод «${label}»: исключение ${q.errs.join('|')}`);
 console.log('  ввод «'+label+'»:',st.err?('сообщение: '+st.err.slice(0,90)):('план построен, строк '+st.rows));}
// 8. локальные горки и набор
{const q=await page();await setv(q,'localHills',true);await setv(q,'elevGain','800');await build(q);ok(q.errs.length===0,'горки: '+q.errs.join('|'));
 ok(await q.evaluate(()=>/Горки/.test(document.getElementById('out').innerText)),'в плане с набором есть «Горки»');}
// 9. мобильная ширина
{const q=await page({width:390,height:800});await build(q);
 const ov=await q.evaluate(()=>({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth}));console.log('  ширина 390: scrollWidth',ov.sw,'clientWidth',ov.cw);
 ok(ov.sw<=ov.cw+2,'мобильная ширина: горизонтальная прокрутка страницы ('+ov.sw+' > '+ov.cw+')');ok(q.errs.length===0,'мобильная: '+q.errs.join('|'));}
// 10. детерминизм: два построения подряд дают одинаковый результат
{const q=await page();await build(q);const a=await q.evaluate(()=>document.getElementById('out').innerText);await build(q);const c=await q.evaluate(()=>document.getElementById('out').innerText);
 const strip=s=>s.replace(/Сгенерировано[^\n]*/g,'');ok(strip(a)===strip(c),'детерминизм построения');}
// --- часть 2 ---
// межсезонье
{const p=await page();await setv(p,'planMode','offseason');await setv(p,'owWeeks','8');const s=await build2(p);ok(!s.err&&s.rows>10&&!p.errs.length,'межсезонье: '+JSON.stringify(s)+p.errs.join('|'));}
// контекст перед планом
for(const ctx of ['race','transition']){const p=await page();await setv(p,'preCtx',ctx);if(ctx==='race'){await setv(p,'preRaceDate','2026-10-28');}else{await setv(p,'transPeakVol','90');await setv(p,'transWeeksAgo','1');}
 const s=await build2(p);ok(!s.err&&s.rows>10&&!p.errs.length,'preCtx '+ctx+': '+JSON.stringify(s)+p.errs.join('|'));}
// промежуточный старт
{const p=await page();await p.click('#addTuneBtn');await p.waitForTimeout(200);
 await p.evaluate(()=>{const r=document.querySelector('.tunerow');const d=r.querySelector('input[type=date]');if(d){d.value='2026-12-20';d.dispatchEvent(new Event('input',{bubbles:true}));}});
 const s=await build2(p);ok(!s.err&&s.rows>10&&!p.errs.length,'промежуточный старт: '+JSON.stringify(s)+p.errs.join('|'));
 ok(await p.evaluate(()=>/20 дек|2026-12-20|Промежуточн|настройк/i.test(document.getElementById('out').innerText)),'промежуточный старт виден в плане');}
// кросс и силовые
{const p=await page();await setv(p,'bike-auto',true);await setv(p,'ski-1',true);await setv(p,'strength','3');const s=await build2(p);ok(!s.err&&s.rows>10&&!p.errs.length,'кросс+силовые: '+JSON.stringify(s)+p.errs.join('|'));
 ok(await p.evaluate(()=>/Велосипед/.test(document.getElementById('out').innerText)),'кросс-тренировка в плане');}
// ограничения: максимум длинной, максимум объёма, потолок
{const p=await page();await setv(p,'maxLongCap','2:00');await setv(p,'maxVolEver','60');await setv(p,'curLong','1:30');const s=await build2(p);ok(!s.err&&s.rows>10&&!p.errs.length,'ограничения: '+JSON.stringify(s)+p.errs.join('|'));}
// ПАНО/LTHR вручную, жара/высота
{const p=await page();await setv(p,'ltpace','4:30');await setv(p,'lthr','170');await setv(p,'heat',true);await setv(p,'altitude','1500');const s=await build2(p);ok(!s.err&&s.rows>10&&!p.errs.length,'ПАНО+жара+высота: '+JSON.stringify(s)+p.errs.join('|'));
 await setv(p,'ltpace','4-30');await p.click('#goBtn');await p.waitForTimeout(500);const s2=await state(p);ok(/ПАНО/.test(s2.err)&&!p.errs.some(e=>/PAGEERR/.test(e)),'неверный формат ПАНО даёт сообщение: '+s2.err);}
// адаптация плана
{const p=await page();await build2(p);const has=await p.evaluate(()=>!!document.getElementById('recBtn'));ok(has,'есть кнопка адаптации');
 await p.evaluate(()=>{document.getElementById('recoveryDetails').open=true;});await setv(p,'recFrom','2026-11-16');await setv(p,'recWeeks','2');await setv(p,'recReason','injury');await p.click('#recBtn');await p.waitForTimeout(800);
 ok(!p.errs.length,'адаптация плана: '+p.errs.join('|'));const s=await state(p);ok(s.rows>20,'после адаптации таблица на месте '+s.rows);}
// 7 пробежек и 9 вручную
for(const r of [3,7,9]){const p=await page();await setv(p,'runs',String(r));const s=await build2(p);ok(!s.err&&s.rows>10&&!p.errs.length,'runs='+r+': '+JSON.stringify(s)+p.errs.join('|'));}
// тёмная тема / печать
{const p=await page();await build2(p);await p.emulateMedia({colorScheme:'dark'});await p.waitForTimeout(200);ok(!p.errs.length,'тёмная схема');await p.emulateMedia({media:'print'});ok(!p.errs.length,'печать');}
console.log(`проверок ${checks}, провалов ${fails}`);await b.close();process.exit(fails?1:0);})();
