#!/usr/bin/env node
/* Инварианты генератора run_plan_calculator.html против методичек.
 * Запуск: node test_plan_invariants.js [--verbose]   (PLAN_HTML — путь к HTML, SAMPLE — число случайных конфигураций)
 *  1  план строится без ошибок
 *  2  ACWR недель роста ≤ 1,3 (Gabbett 2016), кроме недель промежуточного старта
 *  3  беговые км недели ≤ 1,3 × км недели i−2 (Nielsen 2014)
 *  4  длинная ≤ 150 мин (кроме ультра) и ≤ 30/25% недели по км (Дэниелс)
 *  5  за тренировку: T ≤10%, I ≤8% и ≤10 км, R ≤5% и ≤8 км, M ≤20% и ≤110 мин недели (Дэниелс)
 *  6  лёгкая ≥ 30 мин (кроме выезда перед стартом)
 *  7  пробежек в неделю ≤ заданной частоты
 *  8  подводка: объём недели ≤ доли пика (Пфитцингер / Bosquet)
 *  9  нет качественных в окне восстановления после старта (1 день на 3 км, Дэниелс) и за 2 дня до старта
 * 10  качественные не в соседние дни
 * 11  прогноз: реалистично +1 VDOT за 6 недель, амбициозно — за 4; у марафона и ультра не выше этого (ограничение объёмом по Тэнде)
 * 12  у каждой беговой тренировки положительная длительность, зона в названии совпадает с полем z
 * 13  сумма недели = минуты кривой (кроме недобора, о котором есть примечание, и недель стартов)
 * 14  бюджет качественных (Дэниелс 2Q): не больше 2, при 3 пробежках — 1; старт, длинная со вставками, К2 без пары и средне-длинная с T — тоже
 * 15  у марафона и ультра прогноз в форме (план без цели) равен прогнозу плана под цель
* 17  качественные не подряд и через границу недель (вс → пн)
 * 18  дней бега в неделе ≤ предела уровня 80/20 (0 — 5, 1–2 — 6, 3 — 7), кроме недели главного старта
 * 16  у марафона и ультра план под цель = прогноз формы совпадает с планом формы (тот же пик); темп ультра медленнее марафонского по Тэнде
 */
'use strict';
const fs = require('fs'), path = require('path');
const HTML = process.env.PLAN_HTML || path.join(__dirname, '..', 'run_plan_calculator.html');
const VERBOSE = process.argv.includes('--verbose');

function loadCore() {
  const src = fs.readFileSync(HTML, 'utf8');
  const a = src.indexOf('/*GEN-START*/'), b = src.indexOf('/*GEN-END*/');
  if (a < 0 || b < 0) throw new Error('GEN-START/GEN-END не найдены');
  const m0 = src.match(/function zoneOfW\(/); const rest = src.slice(m0.index);
  const zoneOfW = rest.slice(0, rest.search(/\nfunction \w+\(|\nconst \w+=/));
  const code = src.slice(a, b) + '\n' + zoneOfW + '\nmodule.exports={buildPlan,forecastFor,zoneOfW,sesMin,sesKm,dISO,dParse,dAdd,dDiff,DL,ACWR_MAX,taperShares,recoveryDaysAfter};';
  const Module = require('module'); const m = new Module('core'); m._compile(code, 'core.js'); return m.exports;
}
const C = loadCore();
const iso = (y, mo, d) => `${y}-${String(mo).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
const addDays = (s, n) => C.dISO(C.dAdd(C.dParse(s), n));

const GOALS = [
  { dist: 5000, res: [{ dist: 5000, sec: 21 * 60 }], tgt: 20 * 60 },
  { dist: 10000, res: [{ dist: 10000, sec: 44 * 60 }], tgt: 42 * 60 },
  { dist: 21097, res: [{ dist: 10000, sec: 42 * 60 }], tgt: 95 * 60 },
  { dist: 42195, res: [{ dist: 10000, sec: 40 * 60 }], tgt: 3 * 3600 + 15 * 60 },
  { dist: 60000, res: [{ dist: 42195, sec: 3 * 3600 + 30 * 60 }], tgt: 5 * 3600 + 30 * 60 },
  { dist: 100000, res: [{ dist: 42195, sec: 3 * 3600 + 40 * 60 }], tgt: 11 * 3600 },
];
const CROSS = [null,
  [{ sport: 'bike', name: 'Велосипед', mins: 75, desc: 'd', gtype: 'cycling', days: [], auto: true }],
  [{ sport: 'ski', name: 'Лыжи', mins: 70, desc: 'd', gtype: 'other', days: [1], auto: false },
   { sport: 'pool', name: 'Бассейн', mins: 45, desc: 'd', gtype: 'lap_swimming', days: [], auto: true }]];
let seed = 20261001;
const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
const pick = a => a[Math.floor(rnd() * a.length)];
const SAMPLE = +(process.env.SAMPLE || 1500);

function* configs() {
  const base = iso(2026, 10, 5);
  for (let k = 0; k < SAMPLE; k++) {
    const g = GOALS[k % GOALS.length], N = pick([4, 6, 8, 12, 16, 20, 26]), lead = pick([0, 0, 3, 6]);
    const unit = pick(['km', 'km', 'h']), cur = unit === 'h' ? pick([2.5, 4, 6, 9]) : pick([20, 35, 50, 70, 100]);
    const tune = rnd() < 0.3 ? [{ iso: addDays(base, Math.floor(N * 7 * pick([0.3, 0.5, 0.7]))), dist: pick([5000, 10000, 21097]) }] : [];
    const cfg = {
      startISO: addDays(base, lead), goalISO: addDays(base, N * 7 - 1), goalDist: g.dist,
      results: JSON.parse(JSON.stringify(g.res)), tgtGoal: rnd() < 0.5 ? g.tgt : null,
      age: pick([25, 40, 60]), weight: 70, sex: 'm', exp: pick(['novice', 'inter', 'adv']),
      curVol: cur, volUnit: unit, peakVol: rnd() < 0.3 ? (unit === 'h' ? cur * 1.6 : cur * 1.6) : null,
      runs: pick([3, 4, 5, 6, 7, 9]), strength: pick([0, 2, 3]), slider: pick([null, 0, 0.5, 1]),
      deload: pick(['need', 'w31', 'none']), elevGain: g.dist >= 21097 ? pick([0, 0, 800]) : pick([0, 0, 100]), cross: CROSS[k % 3] ? JSON.parse(JSON.stringify(CROSS[k % 3])) : null,
      tuneRaces: tune, tag: '[T]', longDow: rnd() < 0.2 ? 5 : null,
    };
    yield { name: `${g.dist / 1000}k N=${N} lead=${lead} ${cur}${unit} runs=${cfg.runs} ${cfg.deload} tune=${tune.length}`, cfg };
  }
}

const fails = {}; let total = 0, crashes = 0;
let CUR = null;
const fail = (id, name, msg) => { (fails[id] = fails[id] || []).push(`${name}: ${msg}` + (process.env.DUMP == id ? '\n      ' + JSON.stringify(CUR) : '')); };
const workOf = (steps, re) => { let t = 0; const walk = (a, k) => a.forEach(s => { if (s.t === 'repeat') walk(s.steps, k * s.n); else if (s.t === 'interval' && re.test(s.d || '') === false && s.tg && s.tg.pace && s.d !== 'Ускорение') t += k * (s.end === 'time' ? s.v / 60 : 0); }); walk(steps, 1); return t; };

for (const { name, cfg } of configs()) {
  total++; CUR = cfg;
  let p;
  try { p = C.buildPlan(cfg); } catch (e) { crashes++; fail(1, name, 'краш: ' + e.message); continue; }
  if (p.error) { if (!/минимум 4/.test(p.error)) fail(1, name, p.error); continue; }
  const W = p.weeks, B = W.length - C.taperShares(cfg.goalDist).length, ultra = cfg.goalDist > 42195;
  // 11
  const a = p.analysis;
  {const r = a.anchorVd + Math.floor(B / 6), am = a.anchorVd + Math.floor(B / 4);
    const bad = cfg.goalDist >= 42195 ? (a.forecastVd > r + 0.11 || a.ambVd > am + 0.11 || a.ambVd < a.forecastVd - 0.01)
      : (Math.abs(a.forecastVd - r) > 0.11 || Math.abs(a.ambVd - am) > 0.11);
    if (bad) fail(11, name, `${a.anchorVd}→${a.forecastVd}/${a.ambVd} B=${B}`);}
  let lastWork = null, peak = 0, prevTune = false;
  const rdays = [];
  (a.tuneList || []).forEach(t => { const d0 = C.dParse(t.iso); for (let k = -2; k <= C.recoveryDaysAfter(t.dist); k++) rdays.push(C.dISO(C.dAdd(d0, k))); });
  if (cfg.preCtx === 'race' && cfg.preRaceDate) for (let k = 0; k <= C.recoveryDaysAfter(+cfg.preRaceDist || 10000); k++) rdays.push(C.dISO(C.dAdd(C.dParse(cfg.preRaceDate), k)));
  const raceAdj = w => w.days.some(d => rdays.includes(C.dISO(d.date)));
  const partial0 = cfg.startISO !== C.dISO(W[0].start);
  W.forEach((w, i) => {
    const runs = w.days.flatMap(d => d.items.filter(x => x.kind === 'run'));
    const partial = i === 0 && partial0;
    // 2
    // неделя промежуточного старта: нагрузку самой гонки не убрать — проверяется без неё
    if (i < B && w.type !== 'tune' && Math.min(...W.slice(Math.max(0, i - 3), i).map(x => x.min)) >= 90 && w.acwr > C.ACWR_MAX + 0.01) fail(2, name, `нед ${w.n} ACWR ${w.acwr}`);
    // 3 (беговые км недели ≤ 1,3 × км недели i−2, Nielsen 2014)
    // при неделе < 150 мин пробежки по 30 мин не дают плавного роста (квантование) — не проверяется
    // опорная неделя — i−2, а если в ней старт, предстартовые дни или окно восстановления — ближайшая более ранняя без них
    if (i < B && i >= 2 && w.type !== 'tune') {
      let j = i - 2; while (j >= 0 && raceAdj(W[j])) j--;
      if (j >= 0 && !(j === 0 && partial0) && W[j].min >= 150 && w.km > W[j].km * 1.3 + 2) fail(3, name, `нед ${w.n}: ${w.km} км после ${W[j].km} км (нед ${j + 1})`);
    }
    prevTune = w.type === 'tune';
    if (i < B && w.type !== 'down' && !partial) lastWork = w.type === 'tune' ? Math.max(lastWork || 0, w.target) : w.target;
    if (i < B && !partial) peak = Math.max(peak, w.target);
    // 4
    if (!partial) runs.filter(x => x.z === 'long' && /^Длинная/.test(x.name)).forEach(x => {
      if (!ultra && x.min > C.DL.longMax + 0.5) fail(4, name, `нед ${w.n} длинная ${Math.round(x.min)} мин`);
      const sh = (ultra || (cfg.goalDist >= 42195 && w.runs <= 5)) ? 0.40 : (w.km < C.DL.longLowKm * 1.15 ? C.DL.longLow : C.DL.longHigh);
      // мало пробежек: длинная равна лёгким (объём делится поровну) — допустимо
      const even = runs.some(y => y !== x && y.z === 'easy' && y.min >= x.min - 5);
      // недобор объёма из-за частоты (приоритет важных тренировок над лёгкими) — доля длинной растёт
      const short = w.short >= 10 || w.min < w.target - 25 || runs.some(y => y.z === 'rec');
      if (w.type !== 'tune' && !runs.some(y => y.z === 'race') && !even && !short && x.km > sh * w.km * 1.12 + 1) fail(4, name, `нед ${w.n} длинная ${x.km.toFixed(1)} км из ${w.km}`);
    });
    // 5
    if (w.type !== 'race' && !partial) runs.forEach(x => {
      const t = (re) => { let s = 0; const walk = (a, k) => a.forEach(q => { if (q.t === 'repeat') walk(q.steps, k * q.n); else if (q.t === 'interval' && re.test(q.d || q.lbl || '')) s += k * C.sesMin([q], w.R); }); walk(x.steps, 1); return s; };
      const all = x.steps;
      const zoneWork = z => { let s = 0; const walk = (a, k) => a.forEach(q => { if (q.t === 'repeat') walk(q.steps, k * q.n); else if (q.t === 'interval' && q.tg && q.tg.pace && q.d !== 'Ускорение') s += k * C.sesMin([q], w.R); }); walk(all, 1); return s; };
      const work = zoneWork();
      // при нехватке пробежек неделя меньше плановой — проценты Дэниелса от плановой недели
      const wm = Math.max(w.min, w.target || 0);
      if (/^Порог|^Темп/.test(x.name) && work > C.DL.T * wm * 1.08 + 1.5) fail(5, name, `нед ${w.n} ${x.name}: T ${work.toFixed(0)} мин из ${w.min}`);
      if (/^МПК/.test(x.name) && (work > C.DL.I * wm * 1.08 + 2.5)) fail(5, name, `нед ${w.n} ${x.name}: I ${work.toFixed(0)} мин из ${w.min}`);
      if (/^Повторы/.test(x.name) && work > C.DL.R * wm * 1.08 + 2) fail(5, name, `нед ${w.n} ${x.name}: R ${work.toFixed(0)} мин из ${w.min}`);
      if ((/^МР|концовка в МР/.test(x.name)) && (work > Math.min(C.DL.M * wm, C.DL.Mmax) * 1.05 + 2)) fail(5, name, `нед ${w.n} ${x.name}: M ${work.toFixed(0)} мин из ${w.min}`);
    });
    // 6
    runs.filter(x => x.z === 'easy' && !/выезд/i.test(x.name) && w.type !== 'race').forEach(x => { if (x.min < 29) fail(6, name, `нед ${w.n} ${x.name} ${x.min.toFixed(0)} мин`); });
    // 7
    if (runs.length > cfg.runs) fail(7, name, `нед ${w.n}: ${runs.length} пробежек при ${cfg.runs}`);
    // 8
    const raceMin = runs.filter(x => x.z === 'race').reduce((s, x) => s + x.min, 0);
    if (i >= B && i < W.length - 1 && peak > 0 && w.min - raceMin > peak * C.taperShares(cfg.goalDist)[i - B] * 1.10 + 15) fail(8, name, `нед ${w.n}: ${w.min - raceMin} при пике ${peak}`);
    // 13
    if (w.type !== 'race' && w.type !== 'tune' && !raceAdj(w) && !partial && !(w.short >= 10) && Math.abs(w.min - w.target) > 12) fail(13, name, `нед ${w.n}: ${w.min} мин при кривой ${w.target}`);
    if (w.short >= 10 && !a.notes.some(t => /не вмещаются/.test(t)) && !raceAdj(w) && w.type !== 'tune') fail(13, name, `нед ${w.n}: недобор ${w.short} мин без примечания`);
    // 14
    if (w.type !== 'race') {
      const hard = w.days.reduce((s, d) => { const q = d.items.some(x => x.kind === 'run' && (['thr', 'vo2', 'mp', 'race'].includes(x.z) || (x.z === 'long' && /из них/.test(x.name))));
        const k2 = d.items.some(x => x.kind === 'cross' && x.cls === 'K2'); return s + (q ? d.items.filter(x => x.kind === 'run' && (['thr', 'vo2', 'mp', 'race'].includes(x.z) || (x.z === 'long' && /из них/.test(x.name)))).length : 0) + (k2 && !q ? 1 : 0); }, 0);
      const fixedK2 = (cfg.cross || []).some(c => (c.days || []).length && c.cls === 'K2');
      const lim = w.ph === 'I' ? 0 : w.runs <= 3 ? 1 : 2;
      if (hard > lim && !fixedK2) fail(14, name, `нед ${w.n} (${w.ph}, ${w.runs} пробежек): тяжёлых ${hard} при бюджете ${lim}`);
    }
    // 10
    const qd = w.days.map((d, di) => d.items.some(x => x.kind === 'run' && (x.z === 'thr' || x.z === 'vo2' || x.z === 'mp')) ? di : -1).filter(x => x >= 0);
    for (let k = 1; k < qd.length; k++) if (qd[k] - qd[k - 1] === 1 && w.type !== 'race') fail(10, name, `нед ${w.n}: качественные в дни ${qd[k - 1]},${qd[k]}`);
    // 12
    runs.forEach(x => {
      if (!(x.min > 0)) fail(12, name, `нед ${w.n} ${x.name}: длительность ${x.min}`);
      const zz = C.zoneOfW({ kind: 'run', name: x.name });
      const ok = zz === x.z || (x.z === 'easy' && zz === 'rec') || (x.z === 'long' && zz === 'long');
      if (!ok) fail(12, name, `нед ${w.n} «${x.name}»: z=${x.z}, по названию ${zz}`);
    });
  });
  // 17, 18
  {const isQ = d => d.items.some(x => x.kind === 'run' && ['thr', 'vo2', 'mp'].includes(x.z));
    const lv = a.level ? a.level.idx : 1, cap = lv === 0 ? 5 : lv >= 3 ? 7 : 6;
    W.forEach((w, i) => {
      if (i > 0 && isQ(w.days[0]) && isQ(W[i - 1].days[6]) && w.type !== 'race') fail(17, name, `нед ${w.n}: Q в пн после Q в вс`);
      const rd = w.days.filter(d => d.items.some(x => x.kind === 'run')).length;
      if (w.type !== 'race' && rd > cap) fail(18, name, `нед ${w.n}: дней бега ${rd} при пределе ${cap}`);
    });}
  // 15
  if (cfg.goalDist >= 42195 && cfg.tgtGoal > 0) {
    const f = C.forecastFor(Object.assign({}, cfg, { tgtGoal: null, peakVol: cfg.peakVol }));
    if (f && !f.error && Math.abs(f.fc.real - a.forecastVd) > 0.06) fail(15, name, `форма ${f.fc.real.toFixed(2)} ≠ план ${a.forecastVd}`);
  }
  // 16
  if (cfg.goalDist >= 42195 && !(cfg.tgtGoal > 0)) {
    const p2 = C.buildPlan(Object.assign({}, cfg, { tgtGoal: Math.round(a.endGoal) }));
    if (p2 && !p2.error && Math.abs(p2.analysis.peakMin - a.peakMin) > 5) fail(16, name, `пик формы ${a.peakMin} ≠ пик плана под её прогноз ${p2.analysis.peakMin}`);
    if (ultra && a.tanda && a.endGoal / cfg.goalDist <= a.tanda.sec / 42195) fail(16, name, `темп ультра ${(a.endGoal / cfg.goalDist * 1000).toFixed(0)} с/км не медленнее марафона ${(a.tanda.sec / 42.195).toFixed(0)}`);
  }
  // 9
  const races = (a.tuneList || []).map(t => ({ d: C.dParse(t.iso), dist: t.dist }));
  W.forEach(w => w.days.forEach(d => {
    const q = d.items.some(x => x.kind === 'run' && (x.z === 'thr' || x.z === 'vo2' || x.z === 'mp' || (x.z === 'long' && /концовка/.test(x.name))));
    if (!q) return;
    races.forEach(r => { const dd = C.dDiff(d.date, r.d); if (r.d < C.dParse(cfg.goalISO) && ((dd > 0 && dd <= C.recoveryDaysAfter(r.dist)) || (dd < 0 && dd >= -2))) fail(9, name, `${C.dISO(d.date)} качественная, старт ${C.dISO(r.d)}`); });
  }));
}

const ids = Object.keys(fails).map(Number).sort((x, y) => x - y);
console.log(`конфигураций: ${total}, крашей: ${crashes}`);
ids.forEach(id => { console.log(`#${id}: ${fails[id].length}`); (VERBOSE ? fails[id] : fails[id].slice(0, 3)).forEach(m => console.log('    ' + m)); });
if (!ids.length) console.log('все инварианты выполнены');
process.exit(ids.length ? 1 : 0);
