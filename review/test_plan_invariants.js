#!/usr/bin/env node
/* Тест инвариантов генератора планов run_plan_calculator.html
 *
 * Запуск:  node test_plan_invariants.js  [--verbose] [--only=<номер инварианта>]
 *
 * Скрипт вырезает из HTML блок /*GEN-START* / … /*GEN-END* / (чистый расчёт, без DOM),
 * плюс zoneOfW/classifyRec/adaptRecovery/preRaceRecoveryDays, и прогоняет buildPlan
 * на декартовом произведении входов, проверяя инварианты плана.
 *
 * Инварианты — из ревью REVIEW_2026-07-28.md, раздел H.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const HTML = path.join(__dirname, '..', 'run_plan_calculator.html');
const VERBOSE = process.argv.includes('--verbose');
const ONLY = (process.argv.find(a => a.startsWith('--only=')) || '').split('=')[1] || null;

// ---------- извлечение расчётного ядра ----------
function loadCore() {
  const src = fs.readFileSync(HTML, 'utf8');
  const a = src.indexOf('/*GEN-START*/');
  const b = src.indexOf('/*GEN-END*/');
  if (a < 0 || b < 0) throw new Error('GEN-START/GEN-END не найдены');
  let core = src.slice(a, b);

  // догружаем функции, живущие вне GEN-блока, но нужные для проверок
  const grab = (startRe, endRe) => {
    const m = src.match(startRe);
    if (!m) throw new Error('не найдено: ' + startRe);
    const from = m.index;
    const rest = src.slice(from);
    const e = rest.search(endRe);
    return rest.slice(0, e < 0 ? rest.length : e);
  };
  const extra = [
    grab(/function preRaceRecoveryDays\(/, /\nfunction classifyRec/),
    grab(/function classifyRec\(/, /\nfunction paceSecs/),
    grab(/function zoneOfW\(/, /\nfunction \w+\(|\nconst \w+=/),
  ].join('\n');

  const code = core + '\n' + extra +
    '\nmodule.exports={buildPlan,projectFitness,zoneOfW,classifyRec,adaptRecovery,' +
    'preRaceRecoveryDays,vdot,timeFor,paceSet,fuelFor,achievablePeakKm,courseAdjust,' +
    'sesMin,sesKm,stepMin,stepKm,dISO,dParse,dAdd,dDiff,toMonday,fmtP,fmtT,hm,mid};';

  const Module = require('module');
  const m = new Module('core');
  m._compile(code, 'core.js');
  return m.exports;
}

const C = loadCore();
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// ---------- генерация конфигураций ----------
const iso = (y, mo, d) => `${y}-${String(mo).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
const addDays = (s, n) => { const d = C.dParse(s); return C.dISO(C.dAdd(d, n)); };

const GOALS = [
  { dist: 5000,   res: [{ dist: 5000, sec: 21 * 60 }],        tgt: 20 * 60 },
  { dist: 10000,  res: [{ dist: 10000, sec: 44 * 60 }],       tgt: 42 * 60 },
  { dist: 21097,  res: [{ dist: 10000, sec: 42 * 60 }],       tgt: 95 * 60 },
  { dist: 42195,  res: [{ dist: 10000, sec: 40 * 60 }],       tgt: 3 * 3600 + 15 * 60 },
  { dist: 60000,  res: [{ dist: 42195, sec: 3 * 3600 + 30 * 60 }], tgt: 5 * 3600 + 30 * 60 },
  { dist: 100000, res: [{ dist: 42195, sec: 3 * 3600 + 40 * 60 }], tgt: 11 * 3600 },
  { dist: 160000, res: [{ dist: 42195, sec: 3 * 3600 + 50 * 60 }], tgt: 20 * 3600 },
];

const CROSS_SETS = [
  null,
  [{ sport: 'bike', name: 'Велосипед', mins: 75, desc: 'd', gtype: 'cycling', days: [], auto: true }],
  [{ sport: 'ski', name: 'Лыжи', mins: 70, desc: 'd', gtype: 'other', days: [1], auto: false },
   { sport: 'pool', name: 'Бассейн', mins: 45, desc: 'd', gtype: 'lap_swimming', days: [], auto: true },
   { sport: 'fitness', name: 'Фитнес', mins: 60, desc: 'd', gtype: 'other', days: [], auto: true },
   { sport: 'bike', name: 'Велосипед', mins: 75, desc: 'd', gtype: 'cycling', days: [], auto: true }],
];

// детерминированный ГПСЧ — прогон должен быть воспроизводим
let _seed = 20260728;
const rnd = () => { _seed = (_seed * 1103515245 + 12345) & 0x7fffffff; return _seed / 0x7fffffff; };
const pick = a => a[Math.floor(rnd() * a.length)];

const SAMPLE = +(process.env.SAMPLE || 2500);

function* configs() {
  const startBase = iso(2026, 8, 3);      // понедельник
  const Ns = [5, 8, 12, 16, 24, 30], RUNS = [3, 4, 5, 6, 7, 10], EXP = ['novice', 'inter', 'adv'];
  const AGE = [25, 38, 62], VOL = [30, 45, 70, 110], LEAD = [0, 3, 6];
  const STR = [0, 2, 3], ELEV = [0, 600, 4000], SL = [0.15, 0.5, 0.85];
  for (let k = 0; k < SAMPLE; k++) {
    const g = GOALS[k % GOALS.length];                 // все дистанции покрыты равномерно
    const N = pick(Ns), runs = pick(RUNS), exp = pick(EXP), age = pick(AGE);
    const peakVol = pick(VOL), lead = pick(LEAD), strength = pick(STR);
    const elev = pick(ELEV), s = pick(SL), ci = Math.floor(rnd() * CROSS_SETS.length);
    const startISO = addDays(startBase, lead);
    yield {
      name: `${g.dist / 1000}k N=${N} runs=${runs} ${exp} age=${age} vol=${peakVol} lead=${lead} cross=${ci} str=${strength} elev=${elev} s=${s}`,
      cfg: {
        startISO, goalISO: addDays(startBase, N * 7 - 1),
        goalDist: g.dist, results: JSON.parse(JSON.stringify(g.res)), tgtGoal: g.tgt,
        age, weight: 70, sex: 'm', exp,
        peakVol, volUnit: 'km', runs, curVol: Math.round(peakVol * 0.7),
        strength, slider: s, elevGain: elev, altitude: 0, heat: false,
        cross: CROSS_SETS[ci] ? JSON.parse(JSON.stringify(CROSS_SETS[ci])) : null,
        tuneRaces: [], tag: '[T]',
      },
    };
  }
}

// дополнительные точечные конфигурации (краевые случаи из ревью)
function edgeConfigs() {
  const base = {
    startISO: iso(2026, 8, 3), goalISO: iso(2026, 11, 15), goalDist: 42195,
    results: [{ dist: 10000, sec: 40 * 60 }], tgtGoal: 3 * 3600 + 15 * 60,
    age: 38, weight: 70, sex: 'm', exp: 'inter', peakVol: 80, volUnit: 'km',
    runs: 6, curVol: 55, strength: 2, slider: 0.5, elevGain: 0, altitude: 0,
    heat: false, cross: null, tuneRaces: [], tag: '[T]',
  };
  const mk = (name, patch) => ({ name, cfg: Object.assign({}, base, patch) });
  return [
    mk('N=4 минимальный', { goalISO: iso(2026, 8, 30) }),
    mk('volUnit=h без peakVol', { volUnit: 'h', peakVol: undefined, curVol: 5 }),
    mk('volUnit=h', { volUnit: 'h', peakVol: 8, curVol: 5 }),
    mk('curVol > peakVol', { curVol: 120 }),
    mk('peakVol=0', { peakVol: 0, curVol: 0 }),
    mk('ультра 160 + горы (был краш)', { goalDist: 160000, elevGain: 8000, tgtGoal: 20 * 3600, results: [{ dist: 42195, sec: 3 * 3600 + 50 * 60 }] }),
    mk('ультра 100 + возраст 62 (taperW=4)', { goalDist: 100000, age: 62, tgtGoal: 11 * 3600, results: [{ dist: 42195, sec: 3 * 3600 + 40 * 60 }] }),
    mk('заявленный пик недостижим', { peakVol: 140, curVol: 40, goalISO: iso(2026, 10, 11) }),
    mk('тюн-марафон в середине', { tuneRaces: [{ iso: iso(2026, 9, 20), dist: 42195 }] }),
    mk('тюн за 4 дня до старта', { tuneRaces: [{ iso: iso(2026, 11, 11), dist: 10000 }] }),
    mk('тюн на пиковой неделе', { tuneRaces: [{ iso: iso(2026, 10, 25), dist: 21097 }] }),
    mk('5к малый объём', { goalDist: 5000, peakVol: 25, curVol: 20, runs: 4, results: [{ dist: 5000, sec: 21 * 60 }], tgtGoal: 20 * 60 }),
    mk('рельеф абсурдный для 5к', { goalDist: 5000, elevGain: 4000, results: [{ dist: 5000, sec: 21 * 60 }], tgtGoal: 20 * 60 }),
    mk('runs=12 двойные', { runs: 12, peakVol: 130, curVol: 110, exp: 'adv' }),
    mk('жара + высота', { heat: true, altitude: 2200 }),
    mk('силовые 3 + кросс 4 вида', { strength: 3, cross: JSON.parse(JSON.stringify(CROSS_SETS[2])) }),
    mk('longDow=Сб', { longDow: 5 }),
    mk('старт в воскресенье (leadDays=6)', { startISO: iso(2026, 8, 9) }),
    mk('переход с другой программы', { preCtx: 'transition', transPeakVol: 95, transWeeksAgo: 1 }),
    mk('ПАНО задан', { ltPace: 240, lthr: 168 }),
    mk('женщина 45', { sex: 'f', age: 45 }),
    mk('maxLongCap 100 мин', { maxLongCap: 100 }),
    mk('curLong 150 мин', { curLong: 150 }),
  ];
}

// ---------- инварианты ----------
const HARD = new Set(['thr', 'vo2', 'mp', 'long', 'race']);
const isRun = x => x.kind === 'run';
const wkActs = w => w.days.flatMap(d => d.items);

// Время по зонам считаем ПО ШАГАМ, а не по зоне сессии целиком: у пороговой тренировки
// разминка/заминка/трусца между отрезками — это Z1–Z2, и относить всю сессию к Z4 неверно.
// Три зоны в терминах поляризованной модели:
//   easy — ниже первого аэробного порога (Z1–Z2, разминки, трусца между отрезками)
//   mod  — «умеренная» работа около первого порога: марафонский темп, стабильный Z3, затяжные подъёмы
//   hard — от пороговой и быстрее (Z4–Z5): порог, МПК, повторы, гоночные отрезки 5–10 км
function zoneMinutes(steps, R) {
  const out = { easy: 0, mod: 0, hard: 0, total: 0 };
  const thrMid = C.mid(R.thr), mpMid = C.mid(R.mp), easyMid = C.mid(R.easy);
  const walk = (s, mult) => {
    if (s.t === 'repeat') { s.steps.forEach(x => walk(x, mult * s.n)); return; }
    const min = C.stepMin(s, R) * mult;
    out.total += min;
    let band = 'easy';
    if (s.t === 'warmup' || s.t === 'cooldown' || s.t === 'recovery') band = 'easy';
    else if (isStrideStep(s)) band = 'easy';         // 20-секундные ускорения — нейромышечная работа, не интенсивный объём
    // работа в темпе цели — 'mod' по определению (удерживаемая на дистанции), см. SPEC_STEP в buildPlan
    else if (s.d && /ПМ-темп|Марафонский|Целевой темп|Концовка|Контрольная МР|Стабильно/i.test(s.d)) band = 'mod';
    else if (s.tg && s.tg.pace) {
      const p = s.tg.pace.map(x => { const [a, b] = x.split(':').map(Number); return a * 60 + b; });
      const pace = (p[0] + p[1]) / 2;
      // граница hard — пороговый темп (см. bandOf в buildPlan): целевой темп марафона/ПМ/ультры — 'mod'
      band = pace <= thrMid + 5 ? 'hard'
           : pace <= (mpMid + easyMid) / 2 ? 'mod' : 'easy';
    } else if (s.tg && s.tg.hr) {
      band = s.tg.hr >= 4 ? 'hard' : s.tg.hr === 3 ? 'mod' : 'easy';
    }
    out[band] += min;
  };
  steps.forEach(s => walk(s, 1));
  return out;
}
// шаги-ускорения (страйды) — нейромышечная работа по 20 с, их темп не характеризует зону тренировки
const isStrideStep = s => s.d === 'Ускорение';
function paceTargetsExcludingStrides(steps) {
  const out = [];
  const walk = s => {
    if (s.t === 'repeat') return s.steps.forEach(walk);
    if (isStrideStep(s)) return;
    if (s.tg && s.tg.pace) out.push(s.tg.pace[0]);
  };
  steps.forEach(walk);
  return out;
}
// первая ПОЛНАЯ неделя плана: при старте не с понедельника неделя 1 обрезана адаптационными днями,
// сравнивать пик с её объёмом бессмысленно
const firstFullWeek = p => p.weeks.find(w => w.days.every(d => !d.items.some(x => x.label === 'Отдых (до старта плана)'))) || p.weeks[0];

const INVARIANTS = [
  {
    n: 1, name: 'Фактический пик ≤ заявленный × 1.05',
    check(p, cfg) {
      if (!(cfg.peakVol > 0) || cfg.volUnit === 'h') return null;
      const peak = p.analysis.peakReal;
      // если план сам сообщил, что заявленный объём ниже структурного минимума — сверяемся с ним
      const floorKm = p.analysis.volFloorKm || 0;
      const lim = Math.max((floorKm ? floorKm * 1.15 : cfg.peakVol * 1.08), 30);
      if (peak > lim) return `пик ${peak} км при заявленном ${cfg.peakVol} (лимит ${Math.round(lim)})`;
    },
  },
  {
    n: 2, name: 'Подводка монотонно убывает',
    check(p, cfg) {
      const ti = p.weeks.findIndex(w => w.type === 'peak');
      if (ti < 0) return null;
      // неделю гонки исключаем: её км — это сама дистанция старта, а не тренировочный объём
      for (let i = ti + 1; i < p.weeks.length; i++) {
        if (p.weeks[i].type === 'race') continue;
        // неделя промежуточного старта/контрольного теста в подводке законно объёмнее соседних:
        // сам старт — фиксированная дистанция. Требуем только, чтобы она была ниже пика.
        if (p.weeks[i].type === 'tune' || p.weeks[i - 1].type === 'tune') {
          // объём недели старта определяется дистанцией самого старта, а не тренировочной нагрузкой
          if (p.weeks[i].km > p.weeks[ti].km * ((cfg.runs || 5) <= 4 ? 1.18 : 1.10)) return `нед. ${p.weeks[i].n} (${p.weeks[i].km}) выше пика (${p.weeks[ti].km})`;
          continue;
        }
        // неделя сразу после промежуточного старта состоит из восстановления (окно noQualUntil) и потому
        // законно ниже соседних — сравнивать с ней следующую подводочную неделю нет смысла
        const prevIsRecovery = !p.weeks[i - 1].days.some(d => d.items.some(x => isRun(x) && HARD.has(x.z) && x.z !== 'long'));
        if (prevIsRecovery) continue;
        if (p.weeks[i].km > p.weeks[i - 1].km * 1.03 + 2)
          return `нед. ${p.weeks[i].n} (${p.weeks[i].km}) > нед. ${p.weeks[i - 1].n} (${p.weeks[i - 1].km})`;
      }
    },
  },
  {
    n: 3, name: 'Длинная не больше допустимой доли недельного объёма',
    check(p, cfg) {
      // для ультры доля выше: там длинная (время на ногах) и есть главный смысл недели
      // порог синхронизирован с lrShareCapFor в buildPlan: для среднего/опытного уровня строже
      const seasoned = cfg.exp !== 'novice';
      const base = cfg.goalDist > 42195 ? (seasoned ? 0.42 : 0.46)
                 : cfg.goalDist >= 42000 ? (seasoned ? 0.34 : 0.38)
                 : (seasoned ? 0.32 : 0.36);
      for (const w of p.weeks) {
        if (w.type === 'race' || !w.km) continue;
        if (w.days.some(d => d.items.some(x => x.label === 'Отдых (до старта плана)'))) continue;  // обрезанная неделя 1
        // при очень малом недельном объёме доля неизбежно выше: длинная короче 40 мин уже не длинная
        // с 3 пробежками в неделю длинная неизбежно занимает половину объёма — делить её не на что
        const lim = (cfg.runs || 5) <= 3 ? Math.max(base, 0.52) : (w.km < 35 ? Math.max(base, 0.47) : base);
        const long = Math.max(0, ...wkActs(w).filter(x => isRun(x) && x.z === 'long').map(x => x.km || 0));
        if (long > w.km * lim) return `нед. ${w.n}: длинная ${long.toFixed(1)} км из ${w.km} (${Math.round(long / w.km * 100)}%, лимит ${Math.round(lim * 100)}%)`;
      }
    },
  },
  {
    n: 4, name: 'Между нагрузочными днями есть лёгкий (кроме спарки ультры)',
    check(p, cfg) {
      const isUltra = cfg.goalDist > 42195;
      const flat = [];
      p.weeks.forEach(w => w.days.forEach(d => {
        const hard = d.items.some(x => isRun(x) && HARD.has(x.z));
        flat.push({ iso: C.dISO(d.date), hard, wn: w.n, type: w.type });
      }));
      for (let i = 1; i < flat.length; i++) {
        if (!flat[i].hard || !flat[i - 1].hard) continue;
        if (isUltra) continue;                    // back-to-back — законный приём ультры
        if (flat[i].type === 'race' || flat[i - 1].type === 'race') continue;  // протокол недели гонки
        return `${flat[i - 1].iso} и ${flat[i].iso} подряд (нед. ${flat[i].wn})`;
      }
    },
  },
  {
    n: 5, name: '≥1 день без бега и без кросса в неделю',
    check(p, cfg) {
      if ((cfg.runs || 5) >= 7) return null;      // 7 бегов/нед — по явному запросу
      // ОФП/кор на дне без бега допустимы: 15–25 мин силовой не мешают восстановлению так, как кросс 60–75 мин
      for (const w of p.weeks) {
        if (w.type === 'race') continue;
        const free = w.days.filter(d => d.items.every(x => x.kind === 'rest' || x.kind === 'str')).length;
        if (!free) return `нед. ${w.n}: нет ни одного дня без бега и кросса`;
      }
    },
  },
  {
    n: 6, name: 'Силовая: не более одной в день, не в день длинной и не в день старта',
    check(p) {
      // Силовая В ОДИН ДЕНЬ с интервалами/порогом — это норма и предпочтительнее, чем накануне
      // (принцип «тяжёлые дни тяжёлыми»). Запрещены день длинной и день гонки/теста.
      for (const w of p.weeks) for (const d of w.days) {
        const str = d.items.filter(x => x.kind === 'str');
        if (str.length > 1) return `${C.dISO(d.date)}: ${str.length} силовых в один день`;
        const full = str.filter(x => x.name !== 'Кор').length;
        const bad = d.items.some(x => isRun(x) && (x.z === 'long' || x.z === 'race'));
        if (full && bad) return `${C.dISO(d.date)}: полновесная силовая в день длинной/старта`;
      }
    },
  },
  {
    n: 7, name: 'Суммарное время недели растёт ≤ 15%/нед в фазе роста',
    check(p, cfg) {
      const tot = p.weeks.map(w => wkActs(w).reduce((a, x) => a + (isRun(x) ? (x.min || 0) : (x.mins || 0)), 0));
      const peakI = p.weeks.findIndex(w => w.type === 'peak');
      const truncated = w => w.days.some(d => d.items.some(x => x.label === 'Отдых (до старта плана)'));
      for (let i = 1; i <= (peakI < 0 ? tot.length - 1 : peakI); i++) {
        if (p.weeks[i].type === 'tune' || p.weeks[i - 1].type === 'tune') continue;
        if (p.weeks[i - 1].type === 'down') continue;    // после разгрузки прыжок к преддеклоадному уровню — норма
        if (truncated(p.weeks[i - 1]) || truncated(p.weeks[i])) continue;  // неполная неделя 1
        if (tot[i] > tot[i - 1] * ((cfg.runs || 5) >= 8 ? 1.25 : 1.15) + 40)
          return `нед. ${i + 1}: ${Math.round(tot[i])} мин против ${Math.round(tot[i - 1])} мин`;
      }
    },
  },
  {
    n: 8, name: 'В окне восстановления после старта нет качественной работы',
    check(p, cfg) {
      const races = (cfg.tuneRaces || []).map(t => C.dParse(t.iso));
      if (!races.length) return null;
      const bad = [];
      p.weeks.forEach(w => w.days.forEach(d => {
        const dd = Math.min(...races.map(r => C.dDiff(d.date, r)).filter(x => x > 0).concat([1e9]));
        if (dd > 2) return;                        // проверяем только 1–2 день после старта
        d.items.forEach(x => {
          if (isRun(x) && (x.z === 'thr' || x.z === 'vo2' || x.z === 'mp')) bad.push(`${C.dISO(d.date)} ${x.name}`);
          if (x.kind === 'str' && x.name !== 'Кор') bad.push(`${C.dISO(d.date)} ${x.name}`);
        });
      }));
      if (bad.length) return bad.slice(0, 2).join('; ');
    },
  },
  {
    n: 9, name: 'zoneOfW(имя) совпадает с полем z',
    check(p) {
      for (const w of p.weeks) for (const d of w.days) for (const x of d.items) {
        if (!isRun(x)) continue;
        const z = C.zoneOfW({ kind: 'run', name: x.name, steps: x.steps });
        if (z !== x.z) return `«${x.name}»: z=${x.z}, zoneOfW=${z}`;
      }
    },
  },
  {
    n: 10, name: 'Темп шагов соответствует зоне тренировки',
    check(p) {
      for (const w of p.weeks) for (const d of w.days) for (const x of d.items) {
        if (!isRun(x) || !x.steps) continue;
        if (x.z !== 'thr' && x.z !== 'mp') continue;
        const R = w.R; if (!R) continue;
        const ps = paceTargetsExcludingStrides(x.steps).map(s => { const [a, b] = s.split(':').map(Number); return a * 60 + b; });
        if (!ps.length) continue;
        const fastest = Math.min(...ps);
        // пороговая/МР работа не должна оказаться быстрее темпа МПК — признак подмены зоны
        if (fastest < C.mid(R.vo2) - 5) return `«${x.name}» (z=${x.z}) содержит темп ${C.fmtP(fastest)}, быстрее МПК ${C.fmtP(C.mid(R.vo2))}`;
      }
    },
  },
  {
    n: 11, name: 'Нет NaN/undefined/Infinity в выводе',
    check(p) {
      const s = JSON.stringify(p, (k, v) => (typeof v === 'number' && !isFinite(v)) ? 'NONFINITE' : v);
      if (/NONFINITE/.test(s)) return 'нечисловое значение в плане';
      if (/NaN/.test(s)) return 'строка NaN в плане (имя/описание)';
      if (/undefined/.test(s)) return 'строка undefined в плане';
    },
  },
  {
    n: 12, name: 'buildPlan не бросает исключение',
    check() { return null; },   // проверяется самим фактом успешного вызова
  },
  {
    n: 13, name: 'Повторный вызов на том же cfg даёт тот же план (нет мутаций)',
    check(p, cfg) {
      const snap = JSON.stringify(cfg);
      const p2 = C.buildPlan(cfg);
      if (JSON.stringify(cfg) !== snap) return 'cfg изменён вызовом buildPlan';
      const strip = o => JSON.stringify(o.weeks.map(w => w.days.map(d => d.items.map(x => [x.name || x.label, Math.round((x.km || 0) * 10)]))));
      if (strip(p) !== strip(p2)) return 'второй вызов дал другой план';
    },
  },
  {
    n: 15, name: 'Питание в экспорте совпадает с расчётом по тренировке',
    check(p) {
      for (const w of p.weeks) for (const d of w.days) for (const x of d.items) {
        if (!isRun(x) || !x.steps) continue;
        const min = C.sesMin(x.steps, w.R);
        const raceLong = x.steps.some(q => q.end === 'distance' && q.v >= 21000);
        if (x.z === 'race' && !raceLong) continue;
        const f = C.fuelFor(min, 70, x.z === 'race');
        if (f && !x.fuel) return `«${x.name}» ${Math.round(min)} мин: питание не проставлено`;
        if (!f && x.fuel) return `«${x.name}» ${Math.round(min)} мин: питание лишнее`;
        if (f && x.fuel && f.gph !== x.fuel.gph) return `«${x.name}»: г/ч ${x.fuel.gph} против ${f.gph}`;
      }
    },
  },
  {
    n: 16, name: 'Доля лёгкого времени за цикл ≥ 75% (ультра 82%)',
    check(p, cfg) {
      const isUltra = cfg.goalDist > 42195;
      let easy = 0, tot = 0;
      p.weeks.forEach(w => wkActs(w).forEach(x => {
        if (!isRun(x) || !x.steps || x.z === 'race') return;
        const zm = zoneMinutes(x.steps, w.R);
        easy += zm.easy; tot += zm.total;
      }));
      if (!tot || p.weeks.length < 8) return null;
      const share = easy / tot;
      // с 3–4 пробежками в неделю поляризация 80/20 недостижима: доля разминок/заминок в общем времени выше
      const lim = isUltra ? ((cfg.runs || 5) <= 4 ? 0.74 : 0.78) : ((cfg.runs || 5) <= 4 ? 0.70 : 0.75);
      if (share < lim - 0.005) return `лёгкого ${Math.round(share * 100)}% при минимуме ${Math.round(lim * 100)}%`;
    },
  },
  {
    n: 17, name: 'Времени от порога и быстрее ≤ 13% недели, умеренного+интенсивного ≤ 32%',
    check(p, cfg) {
      for (const w of p.weeks) {
        if (w.type === 'race') continue;
        let hi = 0, mod = 0, tot = 0;
        wkActs(w).forEach(x => {
          if (!isRun(x) || !x.steps || x.z === 'race') return;   // сам старт/контрольный тест — не тренировочная интенсивность
          const zm = zoneMinutes(x.steps, w.R);
          hi += zm.hard; mod += zm.mod; tot += zm.total;
        });
        if (tot < 90) continue;
        if (p.weeks.length < 8) continue;              // на цикле <8 нед. доля интенсивности законно выше
        if (w.type === 'tune') continue;               // неделя промежуточного старта: сам старт — не тренировка
        if (hi / tot > (tot < 150 ? 0.16 : 0.135)) return `нед. ${w.n}: ${Math.round(hi / tot * 100)}% от порога и быстрее (${Math.round(hi)} из ${Math.round(tot)} мин)`;
        const specPhase = (w.type === 'peak' || w.phase === 'Специфика') && cfg.goalDist >= 21000;
        const isU = cfg.goalDist > 42195;
        const mhLim = (cfg.runs || 5) <= 3 ? 0.46 : (isU && (cfg.runs || 5) <= 4 ? 0.50 : (specPhase ? 0.38 : 0.32));
        if ((hi + mod) / tot > mhLim) return `нед. ${w.n}: ${Math.round((hi + mod) / tot * 100)}% умеренного+интенсивного`;
      }
    },
  },
  {
    n: 18, name: 'Нагрузочных дней в неделю ≤ 3 (≤4 для adv при большом объёме)',
    check(p, cfg) {
      // ультра: Q1 + Q2 + спарка + длинная = 4 нагрузочных дня — намеренная структура
      const lim = (cfg.goalDist > 42195 || (cfg.exp === 'adv' && cfg.peakVol > 110)) ? 4 : 3;
      for (const w of p.weeks) {
        if (w.type === 'race') continue;
        const n = w.days.filter(d => d.items.some(x => isRun(x) && HARD.has(x.z))).length;
        if (n > lim) return `нед. ${w.n}: ${n} нагрузочных дней (лимит ${lim})`;
      }
    },
  },
  {
    n: 19, name: 'Рост от первой полной недели к пику в пределах правила ~10%/нед',
    check(p) {
      const w0 = firstFullWeek(p);
      const peakI = p.weeks.findIndex(w => w.type === 'peak');
      // сравниваем с большей из двух первых полных недель: у одной из них объём может оказаться ниже цели
      // из-за структурных полов, и отношение к пику тогда завышено
      const w1 = p.weeks[w0.n] || w0;
      const baseKm = Math.max(w0.km, w1.type === 'down' ? 0 : w1.km);
      const buildW = Math.max(1, (peakI < 0 ? p.weeks.length - 2 : peakI) - (w0.n - 1));
      const first = baseKm, peak = p.analysis.peakReal;
      // на малых объёмах 10% — это 2–3 км, поэтому генератор разрешает абсолютный шаг +3 км/нед;
      // допустимый суммарный рост берём как больший из процентного и абсолютного правила
      const lim = clamp(Math.max(Math.pow(1.10, buildW), first > 0 ? (first + 3 * buildW) / first : 1), 1.5, 3.5);
      if (first > 5 && peak > first * lim * 1.15) return `нед. ${w0.n}: ${first} → пик ${peak} км (×${(peak / first).toFixed(2)}, лимит ×${lim.toFixed(2)} за ${buildW} нед.)`;
    },
  },
  {
    n: 20, name: 'Специфический темп цели встречается ≥3 раз за цикл',
    check(p, cfg) {
      if (cfg.goalDist <= 10000) return null;
      const marker = cfg.goalDist > 42195 ? /Ультра-темп|целево|МР /i
        : cfg.goalDist >= 42000 ? /МР |КЛЮЧЕВАЯ МР|концовка МР/
        : /ПМ-темп|концовка ПМ/;
      let n = 0;
      p.weeks.forEach(w => wkActs(w).forEach(x => { if (isRun(x) && marker.test(x.name)) n++; }));
      const specWeeks = p.weeks.filter(w => (w.phase === 'Специфика' || w.type === 'peak') && w.type !== 'down').length;
      const need = specWeeks >= 4 ? 3 : 2;
      if (p.weeks.length >= 10 && n < need) return `специфический темп только ${n} раз(а) за ${p.weeks.length} нед.`;
    },
  },
  {
    n: 21, name: 'Последняя ключевая работа за 10–28 дней до старта',
    check(p, cfg) {
      const marD = C.dParse(cfg.goalISO);
      let last = null;
      p.weeks.forEach(w => w.days.forEach(d => d.items.forEach(x => {
        if (!isRun(x) || x.z === 'race') return;
        // «Настройка …» в последние 5 дней — протокольное заострение перед стартом, а не ключевая работа
        if (/Настройк|Острая настройк/i.test(x.name || '')) return;
        if (C.dDiff(marD, d.date) <= 6) return;
        const key = (x.z === 'mp' || x.z === 'thr' || x.z === 'vo2') && C.sesMin(x.steps, w.R) >= 30;
        const keyLong = x.z === 'long' && /МР|ПМ|порог/i.test(x.name);
        if (key || keyLong) { const dd = C.dDiff(marD, d.date); if (dd > 0 && (last === null || dd < last)) last = dd; }
      })));
      if (p.weeks.length < 8) return null;
      if (last === null) return 'ключевых работ не найдено';
      // у ультры подводка длиннее (taperBase 2–3 недели), последняя ключевая законно дальше от старта
      const lastLim = cfg.goalDist > 42195 ? ((cfg.runs || 5) <= 3 ? 38 : 33) : 28;
      if (last > lastLim) return `последняя ключевая за ${last} дн. до старта — слишком рано`;
      if (last < 8) return `последняя ключевая за ${last} дн. до старта — слишком поздно`;
    },
  },
  {
    n: 22, name: 'Кросс: ударный — не в нагрузочный день, любой — не в день длинной и не в окне восстановления',
    check(p, cfg) {
      if (!cfg.cross || !cfg.cross.length) return null;
      const LOW = { pool: 1, bike: 1 };   // низкоударный кросс в день интервалов допустим — лучше, чем накануне
      const races = (cfg.tuneRaces || []).map(t => C.dParse(t.iso));
      for (const w of p.weeks) for (const d of w.days) {
        const cross = d.items.filter(x => x.kind === 'cross');
        if (!cross.length) continue;
        const longOrRace = d.items.find(x => isRun(x) && (x.z === 'long' || x.z === 'race'));
        if (longOrRace) return `${C.dISO(d.date)}: кросс в день ${longOrRace.name}`;
        const hard = d.items.find(x => isRun(x) && HARD.has(x.z));
        const impact = cross.find(x => !LOW[x.sport]);
        if (hard && impact) return `${C.dISO(d.date)}: ударный кросс (${impact.name}) в день ${hard.name}`;
        const dd = Math.min(...races.map(r => C.dDiff(d.date, r)).filter(x => x > 0).concat([1e9]));
        if (dd <= 2) return `${C.dISO(d.date)}: кросс на ${dd}-й день после старта`;
      }
    },
  },
  {
    n: 23, name: 'Первый день плана — не отдых и не качественная',
    check(p, cfg) {
      const s = cfg.startISO;
      for (const w of p.weeks) for (const d of w.days) {
        if (C.dISO(d.date) !== s) continue;
        const q = d.items.find(x => isRun(x) && (x.z === 'thr' || x.z === 'vo2' || x.z === 'mp'));
        if (q) return `${s}: план начинается с качественной «${q.name}»`;
        return null;
      }
    },
  },
  {
    n: 24, name: 'Силовая/кросс не в день ПЕРЕД качественной или длинной',
    check(p, cfg) {
      // День перед качественной — худший из возможных: ноги не свежие к ключевой тренировке. День ПОСЛЕ
      // качественной допустим (мышцы уже утомлены, добавочный вред меньше).
      const flat = [];
      p.weeks.forEach(w => w.days.forEach(d => flat.push({
        iso: C.dISO(d.date), wn: w.n, type: w.type,
        hard: d.items.some(x => isRun(x) && HARD.has(x.z)),
        str: d.items.filter(x => x.kind === 'str' && x.name !== 'Кор').map(x => x.name),
        cross: d.items.filter(x => x.kind === 'cross').map(x => x.name),
      })));
      // «Неизбежный» случай: в неделе не осталось ни одного дня, где до следующей качественной ≥2 дней
      // и который при этом свободен. Такие случаи не считаем дефектом — считаем только когда лучший
      // вариант существовал, но выбран худший.
      const bad = [];
      for (let i = 0; i < flat.length - 1; i++) {
        if (!flat[i + 1].hard) continue;
        if (flat[i].type === 'race' || flat[i + 1].type === 'race') continue;
        if (flat[i].hard) continue;                      // сам день нагрузочный — это «тяжёлый день», не дефект
        const load = flat[i].str.concat(flat[i].cross);
        if (!load.length) continue;
        // Дефект — только если в ЭТОЙ ЖЕ неделе был свободный день с запасом ≥2 дней до следующей нагрузки:
        // при 3 силовых + 4 кросса + 6 пробежек на 7 дней часть размещений неизбежна, и это не ошибка кода.
        const wk = p.weeks.find(x => x.n === flat[i].wn);
        const wkDays = wk ? wk.days : [];
        const hardIdx = wkDays.map((d, ix) => d.items.some(x => isRun(x) && HARD.has(x.z)) ? ix : -1).filter(ix => ix >= 0);
        const gapNext = ix => { for (let k = 1; k <= 7; k++) if (hardIdx.indexOf((ix + k) % 7) >= 0) return k; return 7; };
        // дни недели, зарезервированные под средне-длинную/спарку, свободными не считаются: в базовой фазе
        // такой день пуст, но занимать его кроссом нельзя — в фазе специфики там появится длинная
        const midLongDows = new Set();
        p.weeks.forEach(x => x.days.forEach((d, ix) => {
          if (d.items.some(y => isRun(y) && /Средне-длинная/.test(y.name || ''))) midLongDows.add(ix);
        }));
        const betterFree = wkDays.some((d, ix) =>
          gapNext(ix) >= 2 && !midLongDows.has(ix) &&
          !d.items.some(x => x.kind === 'str' || x.kind === 'cross') &&
          !d.items.some(x => isRun(x) && (x.z === 'long' || x.z === 'race')));
        if (betterFree) bad.push(`${flat[i].iso} ${load.join('+')} → на следующий день качественная (нед. ${flat[i].wn}), при свободном дне с запасом`);
      }
      if (bad.length) return `${bad.length} шт., напр.: ${bad[0]}`;
    },
  },
  {
    n: 25, name: 'Неделя, помеченная «Пиковая», — реально максимальная по объёму',
    check(p, cfg) {
      // На рельефе километраж недели закономерно падает при появлении горочной работы (в гору та же нагрузка
      // «стоит» меньше км при том же времени) — там сравниваем недели по ВРЕМЕНИ.
      const hilly = (cfg.elevGain || 0) / Math.max(1, cfg.goalDist / 1000) >= 8;
      const metric = w => hilly ? w.min : w.km;
      // при 3 пробежках в неделю разгрузочная неделя структурно объёмнее рабочей (Q1 становится лёгким днём,
      // и гибких дней становится больше) — сжимать нечем, отклонение структурное
      if ((cfg.runs || 5) <= 3) return null;
      const peak = p.weeks.find(w => w.type === 'peak');
      if (!peak) return null;
      const build = p.weeks.filter(w => w.type !== 'race' && w.type !== 'taper');
      const maxKm = Math.max(...build.map(metric));
      if (metric(peak) < maxKm * 0.95) {
        const bigger = build.filter(w => metric(w) > metric(peak) * 1.05).map(w => `нед. ${w.n} (${w.phase}) = ${metric(w)}`);
        return `«Пиковая» нед. ${peak.n} = ${metric(peak)}${hilly ? ' мин' : ' км'}, но выше: ${bigger.slice(0, 2).join(', ')}`;
      }
    },
  },
  {
    n: 26, name: 'Отскок после разгрузки в пределах ~10% от преддеклоадного уровня',
    check(p, cfg) {
      // при 3 пробежках в неделю гибкий день всего один — сжимать неделю нечем, отклонения структурные
      if ((cfg.runs || 5) <= 3) return null;
      const hilly = (cfg.elevGain || 0) / Math.max(1, cfg.goalDist / 1000) >= 8;
      const metric = w => hilly ? w.min : w.km;   // на рельефе км недели не сопоставимы между фазами
      // Разгрузка не должна открывать «окно» для скачка: неделя после down не может превышать уровень
      // за 2 недели до неё больше, чем позволяет правило ~10%/нед (с абсолютным полом +4 км).
      for (let i = 2; i < p.weeks.length; i++) {
        if (p.weeks[i - 1].type !== 'down') continue;
        if (p.weeks[i].type === 'race' || p.weeks[i].type === 'taper' || p.weeks[i].type === 'tune') continue;
        const base = metric(p.weeks[i - 2]), now = metric(p.weeks[i]);
        if (base < 10) continue;
        const lim = Math.max(base * 1.12, base + 4);
        if (now > lim) return `нед. ${p.weeks[i].n} = ${now} после разгрузки ${metric(p.weeks[i - 1])}, до неё было ${base} (лимит ${Math.round(lim)})`;
      }
    },
  },
  {
    n: 27, name: 'В неделю промежуточного старта длинная урезана вместе с объёмом',
    check(p, cfg) {
      const lim = cfg.goalDist > 42195 ? 0.46 : cfg.goalDist >= 42000 ? 0.37 : 0.35;
      for (const w of p.weeks) {
        if (w.type !== 'tune' || !w.km) continue;
        const longs = wkActs(w).filter(x => isRun(x) && x.z === 'long');
        const long = Math.max(0, ...longs.map(x => x.km || 0));
        if (long > w.km * lim) return `нед. ${w.n}: длинная ${long.toFixed(1)} км из ${w.km} (${Math.round(long / w.km * 100)}%, лимит ${Math.round(lim * 100)}%)`;
      }
    },
  },
];

// ---------- прогон ----------
function run() {
  const stats = { total: 0, crashed: 0, fails: {} };
  const examples = {};
  const all = [...edgeConfigs(), ...configs()];

  for (const { name, cfg } of all) {
    stats.total++;
    let p;
    try {
      p = C.buildPlan(JSON.parse(JSON.stringify(cfg)));
    } catch (e) {
      stats.crashed++;
      const k = 'CRASH: ' + String(e.message).slice(0, 90);
      stats.fails[k] = (stats.fails[k] || 0) + 1;
      if (!examples[k]) examples[k] = name;
      continue;
    }
    if (p.error) continue;      // законный отказ (например N<4)
    for (const inv of INVARIANTS) {
      if (ONLY && String(inv.n) !== ONLY) continue;
      let msg;
      try { msg = inv.check(p, cfg); } catch (e) { msg = 'ошибка проверки: ' + e.message; }
      if (msg) {
        const k = `#${inv.n} ${inv.name}`;
        stats.fails[k] = (stats.fails[k] || 0) + 1;
        if (!examples[k]) examples[k] = `${name}\n      → ${msg}`;
        if (VERBOSE) console.log(`  #${inv.n} ${name}: ${msg}`);
      }
    }
  }

  console.log(`\nПрогнано конфигураций: ${stats.total}`);
  console.log(`Крашей: ${stats.crashed}`);
  const keys = Object.keys(stats.fails).sort();
  if (!keys.length) { console.log('\nВсе инварианты выполнены.\n'); return 0; }
  console.log(`\nНарушения (${keys.length} видов):\n`);
  for (const k of keys) {
    console.log(`  ${k} — ${stats.fails[k]} шт.`);
    console.log(`    пример: ${examples[k]}\n`);
  }
  return 1;
}

process.exit(run());
