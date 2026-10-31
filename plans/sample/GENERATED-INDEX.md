# Образцы генераторов · 2026-10-29

86 HTML-планов со встроенным window.__PLAN__ и соседними JSON; отдельно 12 макропланов Endorphins.

Профили: **80 км/нед · ПАНО 4:00; 40 · 5:45; 25 · 6:30**. Дистанции: 5 км, 10 км, 21,0975 км, 42,195 км. ПАНО принят за темп часовой гонки; расчётные результаты не являются наблюдаемыми результатами бегуна. Вводные, исходные ответы, ссылки и преобразования записаны в каждом плане.

**36 структурированных экспортов; 50 сводных экспортов объёма/длительности с полным исходным текстом. Сводные файлы не использовать для анализа распределения минут по зонам.**

Существующие INDEX.md, COMPARISON.md и старые планы не изменялись.

## Источники и ограничения

| Источник | Файлов | Способ / ограничение |
|---|---:|---|
| [marathon-coach](engines/marathon-coach/) | 3 | Оригинальный TS; только марафон. |
| [marathon-training-plan](engines/marathon-training-plan/) | 12 | Оригинальный TS; сводные дистанции, исходные строки темпа иногда некорректны. |
| [running-plan-engine](engines/running-plan-engine/) | 9 | Оригинальный Python; 3/4 тренировки по возможностям; марафоны отклонены. |
| [vtrain](engines/vtrain/) | 12 | Оригинальный JS; 12 недель; фиксированный объём, 5 км использует шаблон 10 км. |
| [zoned](engines/zoned/) | 12 | Оригинальный TS; VMA оценён из ПАНО / 0,88; сводный экспорт длительностей. |
| [run_plan_generator](engines/run_plan_generator/) | 12 | Оригинальные YAML-шаблоны; перенос на календарь без персонального масштабирования. |
| [ctyeh](engines/ctyeh/) | 12 | 12 результатов из интерфейса; сводный километраж и дословный текст. |
| [proper-distance-running-training-guidance](engines/proper-distance-running-training-guidance/) | 12 | Статические шаблоны трёх уровней, CC BY 4.0; объём сохранён, часть неоднозначных шагов открыта. |
| [rundida](engines/rundida/) | 1 | Один реальный результат; ИИ отбросил оценочный результат, поэтому темпы не калиброваны. |
| [endorphins](engines/endorphins/) | 1 | Один фактический календарь аккаунта, потерявший привязку к марафону; детали ограничены подпиской. |

Garmin Coach: новые планы не получены — нужен отдельный Garmin Connect с устройством/историей. Уже имеющиеся Garmin-примеры сохранены. Intervals.icu: авторизация и beta-функция не подключались; дневных тренировок этот источник не обещает. Калькуляторы только темпов не подменены выдуманными недельными планами.

Исходники GitHub — engines/<проект>/source.zip с исходной лицензией внутри; SHA-256 — ENGINE-FILES.json. Публичный код CT Yeh, Rundida и Endorphins сохранён в соответствующих папках, это не открытая серверная часть.

[Endorphins: порядок экранов, код, диапазоны и результаты](engines/endorphins/README.md). [Отказы движка](GENERATOR-REFUSALS.json). [Машинный реестр](GENERATED-MANIFEST.json).

## Планы

| Файл | Км/нед | ПАНО | Недель | Тренировок | Детальность |
|---|---:|---|---:|---:|---|
| [marathon-coach-marathon-25-t630.html](marathon-coach-marathon-25-t630.html) | 25 | 6:30 | 18 | 55 | structured |
| [marathon-coach-marathon-40-t545.html](marathon-coach-marathon-40-t545.html) | 40 | 5:45 | 18 | 72 | structured |
| [marathon-coach-marathon-80-t400.html](marathon-coach-marathon-80-t400.html) | 80 | 4:00 | 18 | 108 | structured |
| [marathon-training-plan-10k-25-t630.html](marathon-training-plan-10k-25-t630.html) | 25 | 6:30 | 12 | 39 | volume-summary |
| [marathon-training-plan-10k-40-t545.html](marathon-training-plan-10k-40-t545.html) | 40 | 5:45 | 12 | 48 | volume-summary |
| [marathon-training-plan-10k-80-t400.html](marathon-training-plan-10k-80-t400.html) | 80 | 4:00 | 12 | 58 | volume-summary |
| [marathon-training-plan-5k-25-t630.html](marathon-training-plan-5k-25-t630.html) | 25 | 6:30 | 12 | 39 | volume-summary |
| [marathon-training-plan-5k-40-t545.html](marathon-training-plan-5k-40-t545.html) | 40 | 5:45 | 12 | 48 | volume-summary |
| [marathon-training-plan-5k-80-t400.html](marathon-training-plan-5k-80-t400.html) | 80 | 4:00 | 12 | 58 | volume-summary |
| [marathon-training-plan-half-25-t630.html](marathon-training-plan-half-25-t630.html) | 25 | 6:30 | 16 | 51 | volume-summary |
| [marathon-training-plan-half-40-t545.html](marathon-training-plan-half-40-t545.html) | 40 | 5:45 | 16 | 64 | volume-summary |
| [marathon-training-plan-half-80-t400.html](marathon-training-plan-half-80-t400.html) | 80 | 4:00 | 16 | 78 | volume-summary |
| [marathon-training-plan-marathon-25-t630.html](marathon-training-plan-marathon-25-t630.html) | 25 | 6:30 | 18 | 57 | volume-summary |
| [marathon-training-plan-marathon-40-t545.html](marathon-training-plan-marathon-40-t545.html) | 40 | 5:45 | 18 | 72 | volume-summary |
| [marathon-training-plan-marathon-80-t400.html](marathon-training-plan-marathon-80-t400.html) | 80 | 4:00 | 18 | 88 | volume-summary |
| [running-plan-engine-10k-25-t630.html](running-plan-engine-10k-25-t630.html) | 25 | 6:30 | 11 | 31 | structured |
| [running-plan-engine-10k-40-t545.html](running-plan-engine-10k-40-t545.html) | 40 | 5:45 | 11 | 41 | structured |
| [running-plan-engine-10k-80-t400.html](running-plan-engine-10k-80-t400.html) | 80 | 4:00 | 11 | 39 | structured |
| [running-plan-engine-5k-25-t630.html](running-plan-engine-5k-25-t630.html) | 25 | 6:30 | 10 | 28 | structured |
| [running-plan-engine-5k-40-t545.html](running-plan-engine-5k-40-t545.html) | 40 | 5:45 | 10 | 37 | structured |
| [running-plan-engine-5k-80-t400.html](running-plan-engine-5k-80-t400.html) | 80 | 4:00 | 10 | 35 | structured |
| [running-plan-engine-half-25-t630.html](running-plan-engine-half-25-t630.html) | 25 | 6:30 | 12 | 35 | structured |
| [running-plan-engine-half-40-t545.html](running-plan-engine-half-40-t545.html) | 40 | 5:45 | 12 | 46 | structured |
| [running-plan-engine-half-80-t400.html](running-plan-engine-half-80-t400.html) | 80 | 4:00 | 12 | 46 | structured |
| [vtrain-10k-25-t630.html](vtrain-10k-25-t630.html) | 25 | 6:30 | 12 | 71 | structured |
| [vtrain-10k-40-t545.html](vtrain-10k-40-t545.html) | 40 | 5:45 | 12 | 71 | structured |
| [vtrain-10k-80-t400.html](vtrain-10k-80-t400.html) | 80 | 4:00 | 12 | 71 | structured |
| [vtrain-5k-25-t630.html](vtrain-5k-25-t630.html) | 25 | 6:30 | 12 | 71 | structured |
| [vtrain-5k-40-t545.html](vtrain-5k-40-t545.html) | 40 | 5:45 | 12 | 71 | structured |
| [vtrain-5k-80-t400.html](vtrain-5k-80-t400.html) | 80 | 4:00 | 12 | 71 | structured |
| [vtrain-half-25-t630.html](vtrain-half-25-t630.html) | 25 | 6:30 | 12 | 71 | structured |
| [vtrain-half-40-t545.html](vtrain-half-40-t545.html) | 40 | 5:45 | 12 | 71 | structured |
| [vtrain-half-80-t400.html](vtrain-half-80-t400.html) | 80 | 4:00 | 12 | 71 | structured |
| [vtrain-marathon-25-t630.html](vtrain-marathon-25-t630.html) | 25 | 6:30 | 12 | 83 | structured |
| [vtrain-marathon-40-t545.html](vtrain-marathon-40-t545.html) | 40 | 5:45 | 12 | 83 | structured |
| [vtrain-marathon-80-t400.html](vtrain-marathon-80-t400.html) | 80 | 4:00 | 12 | 83 | structured |
| [zoned-10k-25-t630.html](zoned-10k-25-t630.html) | 25 | 6:30 | 12 | 36 | duration-summary |
| [zoned-10k-40-t545.html](zoned-10k-40-t545.html) | 40 | 5:45 | 12 | 48 | duration-summary |
| [zoned-10k-80-t400.html](zoned-10k-80-t400.html) | 80 | 4:00 | 12 | 71 | duration-summary |
| [zoned-5k-25-t630.html](zoned-5k-25-t630.html) | 25 | 6:30 | 12 | 36 | duration-summary |
| [zoned-5k-40-t545.html](zoned-5k-40-t545.html) | 40 | 5:45 | 12 | 48 | duration-summary |
| [zoned-5k-80-t400.html](zoned-5k-80-t400.html) | 80 | 4:00 | 12 | 71 | duration-summary |
| [zoned-half-25-t630.html](zoned-half-25-t630.html) | 25 | 6:30 | 16 | 48 | duration-summary |
| [zoned-half-40-t545.html](zoned-half-40-t545.html) | 40 | 5:45 | 16 | 64 | duration-summary |
| [zoned-half-80-t400.html](zoned-half-80-t400.html) | 80 | 4:00 | 16 | 95 | duration-summary |
| [zoned-marathon-25-t630.html](zoned-marathon-25-t630.html) | 25 | 6:30 | 18 | 54 | duration-summary |
| [zoned-marathon-40-t545.html](zoned-marathon-40-t545.html) | 40 | 5:45 | 18 | 72 | duration-summary |
| [zoned-marathon-80-t400.html](zoned-marathon-80-t400.html) | 80 | 4:00 | 18 | 107 | duration-summary |
| [run_plan_generator-5k-80-t400.html](run_plan_generator-5k-80-t400.html) | 80 | 4:00 | 9 | 54 | structured |
| [run_plan_generator-10k-80-t400.html](run_plan_generator-10k-80-t400.html) | 80 | 4:00 | 12 | 91 | structured |
| [run_plan_generator-half-80-t400.html](run_plan_generator-half-80-t400.html) | 80 | 4:00 | 15 | 116 | structured |
| [run_plan_generator-marathon-80-t400.html](run_plan_generator-marathon-80-t400.html) | 80 | 4:00 | 18 | 84 | structured |
| [run_plan_generator-5k-40-t545.html](run_plan_generator-5k-40-t545.html) | 40 | 5:45 | 9 | 54 | structured |
| [run_plan_generator-10k-40-t545.html](run_plan_generator-10k-40-t545.html) | 40 | 5:45 | 12 | 74 | structured |
| [run_plan_generator-half-40-t545.html](run_plan_generator-half-40-t545.html) | 40 | 5:45 | 15 | 100 | structured |
| [run_plan_generator-marathon-40-t545.html](run_plan_generator-marathon-40-t545.html) | 40 | 5:45 | 18 | 72 | structured |
| [run_plan_generator-5k-25-t630.html](run_plan_generator-5k-25-t630.html) | 25 | 6:30 | 9 | 54 | structured |
| [run_plan_generator-10k-25-t630.html](run_plan_generator-10k-25-t630.html) | 25 | 6:30 | 12 | 74 | structured |
| [run_plan_generator-half-25-t630.html](run_plan_generator-half-25-t630.html) | 25 | 6:30 | 12 | 72 | structured |
| [run_plan_generator-marathon-25-t630.html](run_plan_generator-marathon-25-t630.html) | 25 | 6:30 | 18 | 72 | structured |
| [ctyeh-5k-80-t400.html](ctyeh-5k-80-t400.html) | 80 | 4:00 | 12 | 72 | volume-summary |
| [ctyeh-10k-80-t400.html](ctyeh-10k-80-t400.html) | 80 | 4:00 | 12 | 72 | volume-summary |
| [ctyeh-half-80-t400.html](ctyeh-half-80-t400.html) | 80 | 4:00 | 16 | 96 | volume-summary |
| [ctyeh-marathon-80-t400.html](ctyeh-marathon-80-t400.html) | 80 | 4:00 | 18 | 108 | volume-summary |
| [ctyeh-5k-40-t545.html](ctyeh-5k-40-t545.html) | 40 | 5:45 | 12 | 61 | volume-summary |
| [ctyeh-10k-40-t545.html](ctyeh-10k-40-t545.html) | 40 | 5:45 | 12 | 61 | volume-summary |
| [ctyeh-half-40-t545.html](ctyeh-half-40-t545.html) | 40 | 5:45 | 16 | 81 | volume-summary |
| [ctyeh-marathon-40-t545.html](ctyeh-marathon-40-t545.html) | 40 | 5:45 | 18 | 91 | volume-summary |
| [ctyeh-5k-25-t630.html](ctyeh-5k-25-t630.html) | 25 | 6:30 | 12 | 50 | volume-summary |
| [ctyeh-10k-25-t630.html](ctyeh-10k-25-t630.html) | 25 | 6:30 | 12 | 50 | volume-summary |
| [ctyeh-half-25-t630.html](ctyeh-half-25-t630.html) | 25 | 6:30 | 16 | 66 | volume-summary |
| [ctyeh-marathon-25-t630.html](ctyeh-marathon-25-t630.html) | 25 | 6:30 | 18 | 74 | volume-summary |
| [proper-distance-running-training-guidance-5k-80-t400.html](proper-distance-running-training-guidance-5k-80-t400.html) | 80 | 4:00 | 12 | 83 | volume-summary |
| [proper-distance-running-training-guidance-10k-80-t400.html](proper-distance-running-training-guidance-10k-80-t400.html) | 80 | 4:00 | 12 | 83 | volume-summary |
| [proper-distance-running-training-guidance-half-80-t400.html](proper-distance-running-training-guidance-half-80-t400.html) | 80 | 4:00 | 16 | 109 | volume-summary |
| [proper-distance-running-training-guidance-marathon-80-t400.html](proper-distance-running-training-guidance-marathon-80-t400.html) | 80 | 4:00 | 18 | 126 | volume-summary |
| [proper-distance-running-training-guidance-5k-40-t545.html](proper-distance-running-training-guidance-5k-40-t545.html) | 40 | 5:45 | 12 | 68 | volume-summary |
| [proper-distance-running-training-guidance-10k-40-t545.html](proper-distance-running-training-guidance-10k-40-t545.html) | 40 | 5:45 | 12 | 74 | volume-summary |
| [proper-distance-running-training-guidance-half-40-t545.html](proper-distance-running-training-guidance-half-40-t545.html) | 40 | 5:45 | 16 | 102 | volume-summary |
| [proper-distance-running-training-guidance-marathon-40-t545.html](proper-distance-running-training-guidance-marathon-40-t545.html) | 40 | 5:45 | 18 | 115 | volume-summary |
| [proper-distance-running-training-guidance-5k-25-t630.html](proper-distance-running-training-guidance-5k-25-t630.html) | 25 | 6:30 | 12 | 48 | volume-summary |
| [proper-distance-running-training-guidance-10k-25-t630.html](proper-distance-running-training-guidance-10k-25-t630.html) | 25 | 6:30 | 12 | 58 | volume-summary |
| [proper-distance-running-training-guidance-half-25-t630.html](proper-distance-running-training-guidance-half-25-t630.html) | 25 | 6:30 | 16 | 79 | volume-summary |
| [proper-distance-running-training-guidance-marathon-25-t630.html](proper-distance-running-training-guidance-marathon-25-t630.html) | 25 | 6:30 | 20 | 100 | volume-summary |
| [rundida-5k-80-t400.html](rundida-5k-80-t400.html) | 80 | 4:00 | 12 | 67 | volume-summary |
| [endorphins-personalized-80-t400.html](endorphins-personalized-80-t400.html) | 80 | 4:00 | 17 | 97 | volume-summary |

## Только макропланы

- [5k · 80 км/нед](macro/endorphins-macro-5k-80.html)
- [10k · 80 км/нед](macro/endorphins-macro-10k-80.html)
- [half · 80 км/нед](macro/endorphins-macro-half-80.html)
- [marathon · 80 км/нед](macro/endorphins-macro-marathon-80.html)
- [5k · 40 км/нед](macro/endorphins-macro-5k-40.html)
- [10k · 40 км/нед](macro/endorphins-macro-10k-40.html)
- [half · 40 км/нед](macro/endorphins-macro-half-40.html)
- [marathon · 40 км/нед](macro/endorphins-macro-marathon-40.html)
- [5k · 25 км/нед](macro/endorphins-macro-5k-25.html)
- [10k · 25 км/нед](macro/endorphins-macro-10k-25.html)
- [half · 25 км/нед](macro/endorphins-macro-half-25.html)
- [marathon · 25 км/нед](macro/endorphins-macro-marathon-25.html)