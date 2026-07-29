#!/usr/bin/env node
/* UI-смоук и статические проверки разметки для run_plan_calculator.html
 *
 * Запуск:  node test_ui_smoke.js
 * Требует: npm i jsdom   (для UI-части; статические проверки работают и без него)
 *
 * Проверяет:
 *   1. Синтаксис всего скрипта.
 *   2. Каждый $('id') из JS существует в разметке (ловит класс дефекта «писали в $('marD'), а поля нет»).
 *   3. Каждый onclick/oninput из разметки ссылается на существующую функцию.
 *   4. Полный пользовательский путь в jsdom: заполнение формы → «Построить план» → таблица, блок
 *      достижимости, дни отдыха → экспорт JSON и HTML → правка тренировки через модалку.
 *   5. Отсутствие JS-ошибок и console.error на всём пути.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const HTML_PATH = path.join(__dirname, '..', 'run_plan_calculator.html');
const src = fs.readFileSync(HTML_PATH, 'utf8');
let fails = 0;
const ok = (cond, msg, extra) => { console.log((cond ? '  ok   ' : '  FAIL ') + msg + (cond || !extra ? '' : ' — ' + extra)); if (!cond) fails++; };

// ---------- 1. синтаксис ----------
const si = src.indexOf('<script>'), sj = src.lastIndexOf('</script>');
const js = src.slice(si + 8, sj);
try { new Function(js); ok(true, 'скрипт парсится'); }
catch (e) { ok(false, 'скрипт парсится', e.message); }

// ---------- 2. $('id') существуют ----------
const htmlOnly = src.slice(0, si) + src.slice(sj);
const declared = new Set([...htmlOnly.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
[...js.matchAll(/id="([a-zA-Z0-9_-]+)(?:-\$\{|")/g)].forEach(m => declared.add(m[1]));
[...js.matchAll(/id="([^"$]+)"/g)].forEach(m => declared.add(m[1]));
// комментарии вырезаем: в них встречаются упоминания старых id (например «раньше писали в $('marD')»)
const jsNoComments = js.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
const used = new Set([...jsNoComments.matchAll(/\$\('([^']+)'\)/g)].map(m => m[1]));
const dynamic = /^(ski|pool|bike|fitness)(-\d|-auto)$/;      // чекбоксы кросса генерируются шаблоном
const missingIds = [...used].filter(u => !declared.has(u) && !dynamic.test(u));
ok(!missingIds.length, `все ${used.size} обращений $('id') находят элемент`, missingIds.join(', '));

// ---------- 3. обработчики в разметке определены ----------
const handlers = new Set([...htmlOnly.matchAll(/on\w+="([a-zA-Z_$][\w$]*)\(/g)].map(m => m[1]));
const defined = new Set([...js.matchAll(/function\s+([a-zA-Z_$][\w$]*)\s*\(/g)].map(m => m[1]));
[...js.matchAll(/(?:const|let|var)\s+([a-zA-Z_$][\w$]*)\s*=\s*(?:\([^)]*\)|[a-zA-Z_$][\w$]*)\s*=>/g)].forEach(m => defined.add(m[1]));
const missingFns = [...handlers].filter(h => !defined.has(h));
ok(!missingFns.length, `все ${handlers.size} обработчиков в разметке определены`, missingFns.join(', '));

// ---------- 4-5. UI-путь ----------
let JSDOM;
try { JSDOM = require('jsdom').JSDOM; } catch (e) {
  console.log('  skip  UI-смоук: не установлен jsdom (npm i jsdom)');
  process.exit(fails ? 1 : 0);
}
const errs = [];
const dom = new JSDOM(src, { runScripts: 'dangerously', pretendToBeVisual: true, url: 'http://localhost/' });
const w = dom.window, d = w.document;
w.addEventListener('error', e => errs.push('window.error: ' + e.message));
w.console.error = (...a) => errs.push('console.error: ' + a.join(' '));
w.Element.prototype.scrollIntoView = function () {};      // нет в jsdom
w.URL.createObjectURL = () => 'blob:test'; w.URL.revokeObjectURL = () => {};

setTimeout(() => {
  const set = (id, v) => { const el = d.getElementById(id); if (!el) { errs.push('нет поля ' + id); return; }
    el.value = v; el.dispatchEvent(new w.Event('input', { bubbles: true })); el.dispatchEvent(new w.Event('change', { bubbles: true })); };
  try {
    set('startD', '2026-08-03'); set('goalD', '2026-11-15'); set('goalDist', '42195');
    const row = d.querySelector('#resList .resrow');
    if (row) { row.querySelector('.r-dist').value = '10000';
      const t = row.querySelector('.r-time'); t.value = '40:00'; t.dispatchEvent(new w.Event('input', { bubbles: true })); }
    set('tgtGoal', '3:15:00'); set('age', '38'); set('weight', '70');
    set('peakVol', '80'); set('curVol', '55'); set('runs', '6'); set('strength', '2');

    d.getElementById('goBtn').click();
    const err = d.getElementById('errBox');
    ok(!(err && err.style.display !== 'none' && err.textContent.trim()), 'план построен без ошибки',
       err ? err.textContent.trim().slice(0, 160) : '');
    const txt = d.body.textContent || '';
    ok(/Неделя от/.test(txt), 'таблица недель отрисована');
    ok(/реалистично|амбициозно|нереалистично|поддержание/.test(txt), 'блок достижимости отрисован');
    ok(/Отдых/.test(txt), 'дни отдыха попадают в таблицу');
    ok(/Питание/.test(txt) || /г\/ч/.test(txt), 'питание отображается');

    const before = errs.length;
    d.getElementById('jsonBtn').click();
    d.getElementById('htmlBtn').click();
    ok(errs.length === before, 'экспорт JSON и HTML без ошибок', errs.slice(before).join('; '));

    const edbtn = d.querySelector('#out .rowact .edbtn');
    if (edbtn) {
      edbtn.click();
      d.getElementById('m_name').value = 'Правка-тест';
      const save = [...d.querySelectorAll('.mbtns .btn')].find(b => /Сохранить/.test(b.textContent));
      if (save) save.click();
      ok(/Правка-тест/.test(d.getElementById('out').textContent), 'правка тренировки через модалку применяется');
    } else ok(false, 'в таблице есть кнопка правки');
  } catch (e) { errs.push('THROW: ' + e.message + '\n' + (e.stack || '').split('\n').slice(0, 4).join('\n')); }

  ok(!errs.length, 'JS-ошибок и console.error нет', errs.slice(0, 6).join('\n'));
  console.log(fails ? `\nПровалено проверок: ${fails}` : '\nВсе проверки пройдены.');
  process.exit(fails ? 1 : 0);
}, 700);
