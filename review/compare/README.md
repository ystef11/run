# compare/ — сравнение планов 2026-10-21
- `node calc_all.js` — 12 планов калькулятора → `calc.json` (HTML: `PLAN_HTML` или `../../run_plan_calculator.html`).
- `node mine_all.js` — мои планы → `mine.json`, `mine_plans.md`.
- `node summ.js` — сводная таблица; `node cmp.js <ключ>` — недели бок о бок; `days.js`, `qlist.js` — дни и Q калькулятора.
- `node cf.js <html> V0 t дист_м N [json-override] [недели]` — один план из заданного HTML.
- `node cfall.js <html>` — сравнение базового и изменённого HTML по 12 планам.
- Контрфактуал CF1 = копия HTML, строка `const capOfK=k=>k==='win'?30:…` → `k==='win'?Emax:…` (стр. 1210).
