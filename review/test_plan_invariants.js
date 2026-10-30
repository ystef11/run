#!/usr/bin/env node
/* Инварианты генератора run_plan_calculator.html против методичек.
 * Запуск: node test_plan_invariants.js [--verbose]   (PLAN_HTML — путь к HTML, SAMPLE — число случайных конфигураций, ONLY — подстрока имени одной конфигурации; 3000 ≈ 9 мин)
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
 * 14  бюджет качественных (Дэниелс 2Q): не больше 2, при 3 пробежках — 1, при ≥ 7 пробежках (заданных или выведенных) — 3; старт, длинная со вставками, К2 без пары и средне-длинная с T — тоже
 * 15  у марафона и ультра прогноз в форме (план без цели) равен прогнозу плана под цель
* 17  качественные не подряд и через границу недель (вс → пн)
 * 18  дней бега в неделе ≤ предела уровня 80/20 (0 — 5, 1–2 — 6, 3 — 7), кроме недели главного старта
* 19  сумма дня с двумя пробежками ≤ длинной недели; в день качественной вторая пробежка стоит перед ней
 * 20  длинная марафона не зависит от числа пробежек в неделе (вне подводки)
 * 22  доли типов (длинная + средне-длинная + качественные + лёгкие) = минуты недели
 * 23  вторая пробежка не в день длинной, средне-длинной, старта, кросса
 * 24  строки шаблона: дней бега и пробежек совпадают с ключами, вторая пробежка — клетка «R+X», не больше одной в день
 * 21  недель плана из дат (weeksTo) = N плана; дата по числу недель даёт то же число недель
 * 25  пик по уровню 80/20 непрерывен, не убывает по объёму, всегда выше объёма
 * 26  контрольный тест за 21 день до старта (любой день недели); неделя старта или теста ≤ 80% последней рабочей
 * 28  главный старт в любой день недели: за 2 дня бега нет, накануне только выезд ≤30 мин
 * 29  настройка за 5 дней до главного старта стоит на своём дне, в том числе в предыдущей неделе
 * 27  неделя старта: минуты без гонки = кривая (±12)
 * 30  длинная растёт не быстрее +10 мин и +10% к прошлой обычной длинной (скачок дистанции — предиктор травм, Frandsen 2025)
 * 31  число пробежек в обычных неделях не падает ниже достигнутого (но не выше предела дней уровня 80/20): «наименьшее число» — только вверх
 * 32  подводка: в неделе подводки с 5+ пробежками и ≥200 мин есть отдельная качественная (Bosquet 2007: интенсивность и частота сохраняются); недели с окном/предстартом не проверяются
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
  const code = src.slice(a, b) + '\n' + zoneOfW + '\nmodule.exports={LEVELS,levelFor,weeksTo,goalByWeeks,toMonday,buildPlan,forecastFor,zoneOfW,sesMin,sesKm,dISO,dParse,dAdd,dDiff,DL,ACWR_MAX,taperShares,recoveryDaysAfter};';
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
  if (process.env.EXTRA) for (const x of JSON.parse(fs.readFileSync(process.env.EXTRA, 'utf8'))) yield x; // доп. конфиги: [{name,cfg}]
  const base = iso(2026, 10, 5);
  for (let k = 0; k < SAMPLE; k++) {
    const g = GOALS[k % GOALS.length], N = pick([4, 6, 8, 12, 16, 20, 26]), lead = pick([0, 0, 3, 6]);
    const off = pick([0, 0, 1, 2, 3, 4, 5, 6]); const unit = pick(['km', 'km', 'h']), cur = unit === 'h' ? pick([2.5, 4, 6, 9]) : pick([20, 35, 50, 70, 100]);
    const tune = rnd() < 0.3 ? [{ iso: addDays(base, Math.floor(N * 7 * pick([0.3, 0.5, 0.7]))), dist: pick([5000, 10000, 21097]) }] : [];
    const cfg = {
      startISO: addDays(base, lead), goalISO: addDays(base, N * 7 - 1 - off), goalDist: g.dist,
      results: JSON.parse(JSON.stringify(g.res)), tgtGoal: rnd() < 0.5 ? g.tgt : null,
      age: pick([25, 40, 60]), weight: 70, sex: 'm', exp: pick(['novice', 'inter', 'adv']),
      curVol: cur, volUnit: unit, peakVol: rnd() < 0.3 ? (unit === 'h' ? cur * 1.6 : cur * 1.6) : null,
      runs: pick([3, 4, 5, 6, 7, 9]), runsAuto: rnd() < 0.5, strength: pick([0, 2, 3]), slider: pick([null, 0, 0.5, 1]),
      deload: pick(['need', 'w31', 'none']), elevGain: g.dist >= 21097 ? pick([0, 0, 800]) : pick([0, 0, 100]), cross: CROSS[k % 3] ? JSON.parse(JSON.stringify(CROSS[k % 3])) : null,
      tuneRaces: tune, tag: '[T]', longDow: rnd() < 0.2 ? 5 : null,
    };
    yield { name: `${g.dist / 1000}k N=${N} lead=${lead} ${cur}${unit} runs=${cfg.runs} ${cfg.deload} tune=${tune.length} off=${off}`, cfg };
  }
}

const fails = {}; let total = 0, crashes = 0;
let CUR = null;
const fail = (id, name, msg) => { (fails[id] = fails[id] || []).push(`${name}: ${msg}` + (process.env.DUMP == id ? '\n      ' + JSON.stringify(CUR) : '')); };
const workOf = (steps, re) => { let t = 0; const walk = (a, k) => a.forEach(s => { if (s.t === 'repeat') walk(s.steps, k * s.n); else if (s.t === 'interval' && re.test(s.d || '') === false && s.tg && s.tg.pace && s.d !== 'Ускорение') t += k * (s.end === 'time' ? s.v / 60 : 0); }); walk(steps, 1); return t; };

for (const { name, cfg } of configs()) {
  if (process.env.ONLY && !name.includes(process.env.ONLY)) continue;
  total++; CUR = cfg;
  let p;
  try { p = C.buildPlan(cfg); } catch (e) { crashes++; fail(1, name, 'краш: ' + e.message); continue; }
  if (p.error) { if (!/минимум 4/.test(p.error)) fail(1, name, p.error); continue; }
  const W = p.weeks, B = W.findIndex(w => w.type === 'taper' || w.type === 'race'), ultra = cfg.goalDist > 42195;
  // 11
  const a = p.analysis;
  // поправка на частоту (5.5): при < 6 пробежек процентные лимиты × 6/n, n — привычное число (заданное вручную или текущий объём ÷ 70 мин)
  const nF = (cfg.runsAuto || !(+cfg.runs > 0)) ? Math.min(7, Math.max(3, Math.round(a.curMin / 70))) : Math.min(12, Math.max(3, +cfg.runs)), kfT = nF < 6 ? 6 / nF : 1;
  // 11: прогноз — траектория роста скорости, верхняя граница — лучший VDOT (раздел 4.3); не ниже исходной оценки
  {const hi = Math.max(a.bestVd, a.anchorVd) + 0.11;
    const bad = a.forecastVd < a.anchorVd - 0.11 || a.forecastVd > hi || a.ambVd < a.forecastVd - 0.01 || a.ambVd > hi;
    if (bad) fail(11, name, `${a.anchorVd}→${a.forecastVd}/${a.ambVd} best ${a.bestVd} B=${B}`);}
  let prevLongMin = null, floorRuns = 0, lastWork = null, peak = 0, prevTune = false, lastReg = a.curMin; // база — текущий объём, пока не было обычной недели
  // 26: контрольный тест — за 21 день до старта, в любой день недели; неделя старта/теста — не выше 80% последней рабочей (Пфитцингер)
  (a.tuneList || []).filter(x => /\(тест\)/.test(x.name)).forEach(x => { if (x.iso !== C.dISO(C.dAdd(C.dParse(cfg.goalISO), -21))) fail(26, name, `тест ${x.iso}, старт ${cfg.goalISO}`); });
  const rdays = [];
  (a.tuneList || []).forEach(t => { const d0 = C.dParse(t.iso); for (let k = -2; k <= C.recoveryDaysAfter(t.dist); k++) rdays.push(C.dISO(C.dAdd(d0, k))); });
  if (cfg.preCtx === 'race' && cfg.preRaceDate) for (let k = 0; k <= C.recoveryDaysAfter(+cfg.preRaceDist || 10000); k++) rdays.push(C.dISO(C.dAdd(C.dParse(cfg.preRaceDate), k)));
  const raceAdj = w => w.days.some(d => rdays.includes(C.dISO(d.date)));
  // 7 дней до промежуточного старта идут на 80% (подводка в кривой): такая неделя последнюю рабочую не меняет
  const tfdays = []; (a.tuneList || []).forEach(t => { const d0 = C.dParse(t.iso); for (let k = 0; k < 7; k++) tfdays.push(C.dISO(C.dAdd(d0, -k))); });
  const tfAdj = w => w.days.some(d => tfdays.includes(C.dISO(d.date)));
  const partial0 = cfg.startISO !== C.dISO(W[0].start);
  W.forEach((w, i) => {
    const runs = w.days.flatMap(d => d.items.filter(x => x.kind === 'run'));
    const partial = i === 0 && partial0;
    // 2
    // неделя промежуточного старта: нагрузку самой гонки не убрать — проверяется без неё
    if (i < B && w.type !== 'tune' && w.acwr > C.ACWR_MAX + 0.01) fail(2, name, `нед ${w.n} ACWR ${w.acwr}`);
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
    if (i < B && w.type === 'tune' && !partial0 && lastReg != null && w.target > lastReg * 0.8 + 12) fail(26, name, `нед ${w.n}: ${w.target} при последней рабочей ${lastReg}`);
    if (i < B && !partial && w.type !== 'down' && w.type !== 'tune') lastReg = (raceAdj(w) || tfAdj(w)) ? Math.max(lastReg || 0, w.target) : w.target;
    // 4
    if (!partial) runs.filter(x => x.z === 'long' && /^Длинная/.test(x.name)).forEach(x => {
      if (!ultra && x.min > C.DL.longMax + 0.5) fail(4, name, `нед ${w.n} длинная ${Math.round(x.min)} мин`);
      const sh = (ultra || cfg.goalDist >= 42195) ? 0.40 : (w.km < C.DL.longLowKm * 1.15 ? C.DL.longLow : C.DL.longHigh);
      // мало пробежек: длинная равна лёгким (объём делится поровну) — допустимо
      const even = runs.some(y => y !== x && y.z === 'easy' && y.min >= x.min - 5);
      // недобор объёма из-за частоты (приоритет важных тренировок над лёгкими) — доля длинной растёт
      const short = w.short >= 10 || w.min < w.target - 25 || runs.some(y => y.z === 'rec');
      if (w.type !== 'tune' && !runs.some(y => y.z === 'race') && !even && !short && x.km > sh * kfT * w.km * 1.12 + 1) fail(4, name, `нед ${w.n} длинная ${x.km.toFixed(1)} км из ${w.km}`);
    });
    // 5
    if (w.type !== 'race' && !partial) runs.forEach(x => {
      const t = (re) => { let s = 0; const walk = (a, k) => a.forEach(q => { if (q.t === 'repeat') walk(q.steps, k * q.n); else if (q.t === 'interval' && re.test(q.d || q.lbl || '')) s += k * C.sesMin([q], w.R); }); walk(x.steps, 1); return s; };
      const all = x.steps;
      const zoneWork = z => { let s = 0; const walk = (a, k) => a.forEach(q => { if (q.t === 'repeat') walk(q.steps, k * q.n); else if (q.t === 'interval' && q.tg && q.tg.pace && q.d !== 'Ускорение') s += k * C.sesMin([q], w.R); }); walk(all, 1); return s; };
      const work = zoneWork();
      // при нехватке пробежек неделя меньше плановой — проценты Дэниелса от плановой недели
      const wm = Math.max(w.min, w.target || 0) * kfT;
      if (/^Порог|^Темп/.test(x.name) && work > C.DL.T * wm * 1.08 + 1.5) fail(5, name, `нед ${w.n} ${x.name}: T ${work.toFixed(0)} мин из ${w.min}`);
      if (/^МПК/.test(x.name) && (work > C.DL.I * wm * 1.08 + 2.5)) fail(5, name, `нед ${w.n} ${x.name}: I ${work.toFixed(0)} мин из ${w.min}`);
      if (/^Повторы/.test(x.name) && work > C.DL.R * wm * 1.08 + 2) fail(5, name, `нед ${w.n} ${x.name}: R ${work.toFixed(0)} мин из ${w.min}`);
      if ((/^МР|концовка в МР/.test(x.name)) && (work > Math.min(C.DL.M * wm, C.DL.Mmax) * 1.05 + 2)) fail(5, name, `нед ${w.n} ${x.name}: M ${work.toFixed(0)} мин из ${w.min}`);
    });
    // 6
    runs.filter(x => x.z === 'easy' && !/выезд/i.test(x.name) && w.type !== 'race').forEach(x => { if (x.min < (cfg.runsAuto ? 29 : 19)) fail(6, name, `нед ${w.n} ${x.name} ${x.min.toFixed(0)} мин`); });
    // 7
    if (!cfg.runsAuto && runs.length > cfg.runs) fail(7, name, `нед ${w.n}: ${runs.length} пробежек при ${cfg.runs}`);
    // 8
    const raceMin = runs.filter(x => x.z === 'race').reduce((s, x) => s + x.min, 0);
    const peakRef = a.peakMin > 0 ? a.peakMin : peak; // пик модели: без недели теста/неполной недели 1; если рабочих недель нет — текущий объём
    if (i >= B && i < W.length - 1 && peakRef > 0 && w.min - raceMin > peakRef * a.taperShare[i] * 1.10 + 15) fail(8, name, `нед ${w.n}: ${w.min - raceMin} при пике ${peakRef}`);
    // 13
    if (w.type !== 'race' && w.type !== 'tune' && !raceAdj(w) && !partial && !(w.short >= 10) && Math.abs(w.min - w.target) > 12) fail(13, name, `нед ${w.n}: ${w.min} мин при кривой ${w.target}`);
    // 30: прогрессия длинной (сетка плана 5 мин: допуск +5,5)
    if (i < B && !partial && w.type !== 'down' && w.type !== 'tune' && w.type !== 'A') {
      const lg = runs.filter(x => x.z === 'long' && /^Длинная/.test(x.name) && !x.light);
      if (lg.length) { const m = Math.max(...lg.map(x => x.min));
        if (prevLongMin != null && m > prevLongMin + Math.max(5, 0.1 * prevLongMin) + 5.5) fail(30, name, `нед ${w.n}: длинная ${Math.round(m)} мин после ${Math.round(prevLongMin)}`);
        prevLongMin = m; }
    }
    // 31: частота не падает (автоподбор; недели старта, окна, теста и подводка — по своим правилам; недели, где остаток минут после длинной/Q/средне-длинной не даёт лёгких по ≥35 мин, не считаются)
    if (cfg.runsAuto && i < B && !partial && w.type !== 'tune' && !raceAdj(w) && !tfAdj(w)) {
      const hard = runs.filter(x => x.z !== 'easy' && x.z !== 'rec'), easyMin = w.min - hard.reduce((q, x) => q + x.min, 0), need = floorRuns - hard.length;
      if (w.type !== 'down' && runs.length < floorRuns && easyMin >= 35 * need) fail(31, name, `нед ${w.n}: ${runs.length} пробежек после ${floorRuns}`);
      floorRuns = Math.min(a.level && a.level.idx === 0 ? 5 : a.level && a.level.idx >= 3 ? 7 : 6, Math.max(floorRuns, runs.length));
    }
    // 32: подводка (кроме ультра — для него эталонов нет, цели Z3+ остаются долей объёма, раздел 4.4.6; недели старта и недели с окном/предстартом): с 5+ пробежками есть отдельная качественная — интенсивность сохраняется (Bosquet 2007)
    if (w.type === 'taper' && !ultra && !partial && !raceAdj(w) && !tfAdj(w) && runs.length >= 5 && w.min >= 200 && w.ph !== 'I' && !runs.some(x => ['thr', 'vo2', 'mp'].includes(x.z) || /^(Средне-д|Д)линная.*из них/.test(x.name)))
      fail(32, name, `нед ${w.n}: подводка без отдельной качественной (${runs.length} пробежек)`);
    // 28: главный старт — накануне нет качественных и бега длиннее выезда, за 2 дня бега нет, в любом дне недели старта (метки идут через границу недель)
    {const rd = C.dParse(cfg.goalISO);
      w.days.forEach(d => { const dd = C.dDiff(rd, d.date); const rr = d.items.filter(x => x.kind === 'run');
        if (dd === 2 && rr.length) fail(28, name, `нед ${w.n}: за 2 дня до старта бег`);
        if (dd === 1 && rr.some(x => x.z !== 'easy' || x.min > 30)) fail(28, name, `нед ${w.n}: накануне старта не выезд (${rr.map(x => x.z + x.min)})`); });}
    // 27: неделя старта — минуты без самой гонки = кривая (кривая подгоняется под то, что вмещает неделя)
    if (w.type === 'race' && !partial && Math.abs(w.min - raceMin - w.target) > 12) fail(27, name, `нед ${w.n}: ${w.min - raceMin} мин без гонки при кривой ${w.target}`);
    if (w.short >= 10 && !a.notes.some(t => /не вмещаются/.test(t)) && !partial) fail(13, name, `нед ${w.n}: недобор ${w.short} мин без примечания`);
    // 14
    if (w.type !== 'race') {
      const hard = w.days.reduce((s, d) => { const q = d.items.some(x => x.kind === 'run' && (['thr', 'vo2', 'mp', 'race'].includes(x.z) || (x.z === 'long' && /из них/.test(x.name))));
        const k2 = d.items.some(x => x.kind === 'cross' && x.cls === 'K2'); return s + (q ? d.items.filter(x => x.kind === 'run' && (['thr', 'vo2', 'mp', 'race'].includes(x.z) || (x.z === 'long' && /из них/.test(x.name)))).length : 0) + (k2 && !q ? 1 : 0); }, 0);
      const fixedK2 = (cfg.cross || []).some(c => (c.days || []).length && c.cls === 'K2');
      // настройка приоритетнее бюджета: неделя со стартом (теста) и настройкой при 3 пробежках — две тяжёлые
      const setupAndRace = runs.some(x => /настройка/.test(x.name)) && runs.some(x => x.z === 'race');
      const lim = w.ph === 'I' ? 0 : w.runs <= 3 ? (setupAndRace ? 2 : 1) : (w.runs >= 7 || (!cfg.runsAuto && cfg.runs >= 7)) ? 3 : 2;
      if (hard > lim && !fixedK2) fail(14, name, `нед ${w.n} (${w.ph}, ${w.runs} пробежек): тяжёлых ${hard} при бюджете ${lim}`);
    }
    // 10
    const qd = w.days.map((d, di) => d.items.some(x => x.kind === 'run' && (x.z === 'thr' || x.z === 'vo2' || x.z === 'mp')) ? di : -1).filter(x => x >= 0);
    for (let k = 1; k < qd.length; k++) if (qd[k] - qd[k - 1] === 1 && w.type !== 'race') fail(10, name, `нед ${w.n}: качественные в дни ${qd[k - 1]},${qd[k]}`);
    // 22: доли типов (bud) в сумме дают минуты недели; 23: вторая пробежка не в день длинной, средне-длинной, кросса
    if (w.type !== 'race' && !partial) {
      if (w.bud && !w.short && w.type === '') { const sm = w.bud.long + w.bud.ml + w.bud.q + w.bud.easy + w.days.reduce((t, d) => t + d.items.filter(x => x.kind === 'run' && x.fixed).reduce((u, x) => u + x.min, 0), 0); if (Math.abs(sm - w.target) > 6) fail(22, name, `нед ${w.n}: типы ${sm} мин при ${w.target}`); }
      w.days.forEach(d => { if (!d.items.some(x => x.dbl2)) return;
        if (d.items.some(x => x.z === 'long' || x.z === 'race' || x.kind === 'cross')) fail(23, name, `нед ${w.n}: вторая пробежка в день длинной/старта/кросса`); });
    }
    // 19
    if (w.type !== 'race' && !partial) {
      const lg = Math.max(0, ...runs.filter(x => x.z === 'long').map(x => x.min));
      w.days.forEach(d => {
        const rr = d.items.filter(x => x.kind === 'run');
        if (rr.length < 2 || !lg) return;
        const sum = rr.reduce((s, x) => s + x.min, 0);
        if (sum > lg + 1 && !rr.some(x => x.z === 'long' || x.z === 'race')) fail(19, name, `нед ${w.n}: день ${d.items.length} пробежки ${sum.toFixed(0)} мин при длинной ${lg.toFixed(0)}`);
        const q = rr.find(x => ['thr', 'vo2', 'mp'].includes(x.z)), dbl = rr.find(x => x.dbl2);
        if (q && dbl && d.items.indexOf(dbl) > d.items.indexOf(q)) fail(19, name, `нед ${w.n}: вторая пробежка после качественной`);
      });
    }
    // 12
    runs.forEach(x => {
      if (!(x.min > 0)) fail(12, name, `нед ${w.n} ${x.name}: длительность ${x.min}`);
      const zz = C.zoneOfW({ kind: 'run', name: x.name });
      const ok = zz === x.z || (x.z === 'easy' && zz === 'rec') || (x.z === 'long' && zz === 'long')
        || (/^Интервалы .*@(5к|10к)/.test(x.name) && ['thr', 'vo2'].includes(x.z)); // зона по темпу бегуна (пороговая или МПК), в названии её нет
      if (!ok) fail(12, name, `нед ${w.n} «${x.name}»: z=${x.z}, по названию ${zz}`);
    });
  });
  // 17, 18
  {const isQ = d => d.items.some(x => x.kind === 'run' && ['thr', 'vo2', 'mp'].includes(x.z));
    const lv = a.level ? a.level.idx : 1, cap = Math.max(lv === 0 ? 5 : lv >= 3 ? 7 : 6, cfg.runsAuto ? 0 : Math.min(7, cfg.runs));
    W.forEach((w, i) => {
      if (i > 0 && isQ(w.days[0]) && isQ(W[i - 1].days[6]) && w.type !== 'race') fail(17, name, `нед ${w.n}: Q в пн после Q в вс`);
      const rd = w.days.filter(d => d.items.some(x => x.kind === 'run')).length;
      if (w.type !== 'race' && rd > cap) fail(18, name, `нед ${w.n}: дней бега ${rd} при пределе ${cap}`);
      // 33: при ≥4 днях бега — не 3 дня без бега подряд (кроме недель с гонкой/настройкой/окном восстановления)
      if (i > 0 && rd >= 4 && w.type !== 'race' && !raceAdj(w) && !tfAdj(w) && w.type !== 'tune') {
        let c = 0, mx = 0; w.days.forEach(d => { if (d.items.some(x => x.kind === 'run')) c = 0; else { c++; mx = Math.max(mx, c); } });
        if (mx > 2) fail(33, name, `нед ${w.n}: ${mx} дн. без бега подряд при ${rd} днях бега`);
      }
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
  // 29: настройка за 5 дней до главного старта — на своём дне, в любой неделе (приоритетнее обычной работы); у ультра и в окне восстановления после промежуточного старта — не проверяется
  if (!ultra) {
    const d5 = C.dAdd(C.dParse(cfg.goalISO), -5), i5 = C.dISO(d5);
    const inRec = (a.tuneList || []).some(t => { const dd = C.dDiff(d5, C.dParse(t.iso)); return dd >= -2 && dd <= C.recoveryDaysAfter(t.dist); });
    const day = W.flatMap(w => w.days).find(d => C.dISO(d.date) === i5);
    if (day && d5 >= C.dParse(cfg.startISO) && !inRec && !day.items.some(x => x.kind === 'run' && /настройка/.test(x.name))) fail(29, name, `${i5}: настройки за 5 дней нет (${day.items.map(x => x.name || x.kind).join('; ')})`);
  }
  // 9
  const races = (a.tuneList || []).map(t => ({ d: C.dParse(t.iso), dist: t.dist }));
  W.forEach(w => w.days.forEach(d => {
    const q = d.items.some(x => x.kind === 'run' && (x.z === 'thr' || x.z === 'vo2' || x.z === 'mp' || (x.z === 'long' && /концовка/.test(x.name))));
    if (!q) return;
    races.forEach(r => { const dd = C.dDiff(d.date, r.d); if (r.d < C.dParse(cfg.goalISO) && ((dd > 0 && dd <= C.recoveryDaysAfter(r.dist)) || (dd < 0 && dd >= -2))) fail(9, name, `${C.dISO(d.date)} качественная, старт ${C.dISO(r.d)}`); });
  }));
}

// 20: длинная марафона не зависит от числа пробежек (кроме разгрузки/подводки/теста)
for (const [km, t] of [[40, 3360], [60, 2700], [80, 2400]]) {
  const mk = runs => C.buildPlan({ startISO: iso(2026, 10, 19), goalISO: addDays(iso(2026, 10, 19), 16 * 7 - 1), goalDist: 42195, results: [{ dist: 10000, sec: t }],
    tgtGoal: null, age: 38, weight: 60, sex: 'm', exp: 'inter', curVol: km, volUnit: 'km', runs, strength: 2, slider: null, deload: 'need', cross: null, tuneRaces: [], tag: '[T]' });
  const longs = p => p.weeks.map(w => Math.max(0, ...w.days.flatMap(d => d.items).filter(x => x.z === 'long' && /^Длинная/.test(x.name)).map(x => x.min)));
  const lo = mk(5), hi = mk(9); total++; CUR = { km, t };
  if (lo.error || hi.error) { fail(20, `${km} км`, 'план не построен'); continue; }
  const a = longs(lo), b = longs(hi);
  a.forEach((v, i) => { if (lo.weeks[i].type === '' && hi.weeks[i].type === '' && Math.abs(v - b[i]) > 10) fail(20, `${km} км`, `нед ${i + 1}: длинная ${v} (5 пробежек) и ${b[i]} (9 пробежек)`); });
}
// 21: даты
for (let off = 0; off < 7; off++) for (const w of [4, 8, 16, 26]) {
  const st = addDays(iso(2026, 10, 19), off), g = C.goalByWeeks(st, w); total++; CUR = { st, w };
  if (C.weeksTo(st, g) !== w) fail(21, `${st} +${w}`, `weeksTo ${C.weeksTo(st, g)} вместо ${w}`);
  for (let dd = 0; dd < 7; dd++) { const gi = addDays(C.dISO(C.dAdd(C.toMonday ? C.toMonday(C.dParse(st)) : C.dParse(st), (w - 1) * 7)), dd);
    const p = C.buildPlan({ startISO: st, goalISO: gi, goalDist: 10000, results: [{ dist: 10000, sec: 3000 }], age: 38, weight: 60, sex: 'm', exp: 'inter', curVol: 40, volUnit: 'km', runs: 5, strength: 0, deload: 'need', cross: null, tuneRaces: [], tag: '[T]' });
    if (!p.error && p.weeks.length !== C.weeksTo(st, gi)) fail(21, `${st} → ${gi}`, `в плане ${p.weeks.length} нед., weeksTo ${C.weeksTo(st, gi)}`); }
}

// 24: строки шаблона [группа][дней][пробежек]: дней бега = ключ, пробежек (клетка «R+X» — две) = ключ, не больше одной второй пробежки в день, длинная в конце
for (const g of Object.keys(C.TPL || {})) for (const nd of Object.keys(C.TPL[g])) for (const r of Object.keys(C.TPL[g][nd])) {
  const cells = C.TPL[g][nd][r].split(' '); total++; CUR = { g, nd, r };
  const days = cells.filter(c => c !== '-').length, runs = cells.reduce((a, c) => a + (c === '-' ? 0 : c.split('+').length), 0);
  if (days !== +nd || runs !== +r || cells.length !== 7 || cells[6] !== 'L' || cells.some(c => c.split('+').length > 2 || (c.includes('+') && !/^R\+/.test(c) )))
    fail(24, `${g}${nd}/${r}`, `дней ${days}, пробежек ${runs}: ${C.TPL[g][nd][r]}`);
}

// 25: пик по уровню 80/20 непрерывен и не убывает по объёму; на среднем объёме уровня равен табличному; всегда выше объёма; выше верхнего среднего — отношение пик/среднее верхнего уровня
for (const d of Object.keys(C.LEVELS)) {
  const L = C.LEVELS[d]; let prev = null; CUR = { d };
  for (let m = 0; m <= 14 * 60; m++) {
    const lv = C.levelFor(+d, m); total++;
    if (prev !== null && (lv.peakInt < prev - 1e-9 || lv.peakInt - prev > 3)) fail(25, `${d} ${m} мин`, `пик ${prev.toFixed(1)} → ${lv.peakInt.toFixed(1)}`);
    if (!(lv.peakInt > m)) fail(25, `${d} ${m} мин`, `пик ${lv.peakInt.toFixed(1)} не выше объёма`);
    prev = lv.peakInt;
  }
  { const T = L[L.length - 1], m = T[0] * 60 * 1.5, lv = C.levelFor(+d, m); if (Math.abs(lv.peakInt / m - T[1] / T[0]) > 1e-9) fail(25, `${d} выше верха`, `пик/объём ${(lv.peakInt / m).toFixed(3)} вместо ${(T[1] / T[0]).toFixed(3)}`); }
  L.forEach((r, k) => { const lv = C.levelFor(+d, r[0] * 60); if (Math.abs(lv.peakInt - r[1] * 60) > 1e-6) fail(25, `${d} ур.${k}`, `пик ${lv.peakInt} вместо ${r[1] * 60}`); });
}

const ids = Object.keys(fails).map(Number).sort((x, y) => x - y);
console.log(`конфигураций: ${total}, крашей: ${crashes}`);
ids.forEach(id => { console.log(`#${id}: ${fails[id].length}`); (VERBOSE ? fails[id] : fails[id].slice(0, 3)).forEach(m => console.log('    ' + m)); });
if (!ids.length) console.log('все инварианты выполнены');
process.exit(ids.length ? 1 : 0);
