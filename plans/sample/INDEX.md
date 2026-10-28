# Эталонные планы (plans/sample)

Формат файлов — HTML калькулятора со встроенным `window.__PLAN__` (`meta` + `workouts`); импорт через «Импорт JSON/HTML». Зоны — Z1–Z5 (пульс), без темпов.

## Файлы

| Файл | Источник | Недель | Пробежек/нед (мед.) | Часы/нед старт→пик | Длинная пик, мин | Z12/Z34/Z5, % | Опыт (оценка по плану) |
|---|---|---|---|---|---|---|---|
| garmin-10k-plan4 | Garmin (предоставлен пользователем) | 12 | 4 | 4,1→4,3 | 100 | 80/19/1 | inter |
| garmin-half-plan5 | Garmin | 16 | 5 | 3,3→5,2 | 130 | 83/17/0 | inter |
| garmin-half-plan8 | Garmin | 16 | 8 (двойные) | 7,1→8,7 | 130 | 80/20/0 | adv |
| garmin-marathon-plan5 | Garmin | 16 | 4–5 | 3,9→6,8 | 190 | 78/22/0 | inter |
| garmin-marathon-plan7 | Garmin | 16 | 7–8 | 7,2→9,1 | 160 | 79/21/0 | adv |
| higdon-marathon-nov1 | Hal Higdon, [Novice 1](https://www.halhigdon.com/training-programs/marathon-training/novice-1-marathon/) | 18 | 4 | 2,5→6,8 | 203 | 100/0/0 | novice |
| higdon-marathon-int1 | Higdon, [Intermediate 1](https://www.halhigdon.com/training-programs/marathon-training/intermediate-1-marathon/) | 18 | 5 | 3,9→7,5 | 203 | 91/9/0 | inter |
| higdon-marathon-int2 | Higdon, [Intermediate 2](https://www.halhigdon.com/training-programs/marathon-training/intermediate-2-marathon/) | 18 | 5 | 4,3→8,5 | 203 | 90/10/0 | inter |
| higdon-marathon-adv1 | Higdon, [Advanced 1](https://www.halhigdon.com/training-programs/marathon-training/advanced-1-marathon/) | 18 | 6 | 4,7→9,3 | 203 | 87/11/2 | adv |
| higdon-half-int1 | Higdon, [Intermediate 1](https://www.halhigdon.com/training-programs/half-marathon-training/intermediate-1-half-marathon/) | 12 | 5 | 2,9→5,3 | 122 | 83/17/0 | inter |
| higdon-half-adv | Higdon, [Advanced](https://www.halhigdon.com/training-programs/half-marathon-training/advanced-half-marathon/) | 12 | 6 | 4,4→5,5 | 120 | 72/26/2 | adv |
| higdon-10k-int | Higdon, [Intermediate](https://www.halhigdon.com/training-programs/10k-training/intermediate-10k/) | 8 | 5 | 2,8→4,4 | 81 | 90/7/2 | inter |
| higdon-10k-adv | Higdon, [Advanced](https://www.halhigdon.com/training-programs/10k-training/advanced-10k/) | 8 | 6 | 4,0→6,2 | 96 | 76/19/5 | adv |

Метрики — по неделям без стартов (зоны, пик), длинная — максимум по плану. Таблица относится к первым 13 планам; метрики всех 26 планов в единой модели минут — в `COMPARISON.md`.

## Надёжность источников (проверка 28 октября 2026)

Класс определяет, для чего план можно использовать в сверке с md: 1 — доли зон, лимиты, объём, структура; 2 — то же с оговорками; 3 — только структура (объём, частота, подводка), без зон и лимитов.

| Источник (файлов) | Автор / издатель | Что проверено | Ограничения | Класс |
|---|---|---|---|---|
| Hansons (4: ПМ и M, Beginner и Advanced) | Hansons Coaching Services; метод изложен в книге Luke Humphrey «Hansons Marathon Method» (2012, при участии братьев Хэнсон), команда Hansons-Brooks Distance Project | Авторство — по [записи Humphrey 2012](https://lukehumphreyrunning.com/hansons-marathon-method/). Недельные мили Beginner сверены с независимыми копиями Brooks: [13.1 Beginner](https://www.brooksrunning.com/on/demandware.static/-/Library-Sites-BrooksRunningShared/default/dw79e073ec/pdf/Training-Plan_13.1-Beginner.pdf) — 18 недель, расхождение ≤ 2 мили; [42.2 Beginner](https://www.brooksrunning.com/on/demandware.static/-/Library-Sites-BrooksRunningShared/default/dw9cb9ab89/pdf/Training-Plan_42.2-Beginner_NL.pdf) — 17 из 18 недель в пределах 3%, неделя 2: −9% | Первоисточник (PDF на хранилище Hansons) из рабочей среды недоступен. Advanced независимой копией не проверен. Темпы (strength, speed) в планах заданы калькулятором Hansons, которого в файлах нет; зоны выведены из темпа гонки и подписи «5–10 км» | 1 |
| Higdon (8) | Hal Higdon, официальный сайт | Novice 1 (марафон) сверен с таблицей страницы: 18 из 18 недель, все пробежки и длинные совпали. Остальные семь переведены из пересказа страницы (WebFetch), отдельно не сверялись | Интенсивность в источнике нечисловая («comfortable pace»); зоны задаёт конвертер | 1 |
| Garmin (5) | Garmin Coach: [три коуча](https://www.garmin.com/en-MY/blog/running/which-adaptive-training-plan-is-right-for-you/) (Greg McMillan, Amy Parkerson-Mitchell, Jeff Galloway); план адаптивный (недельный пробег, темп, цель) | Файлы — экспорт из приложения пользователя: минуты и цели точные | Какой коуч и какой план, в файлах не записано; каждый файл — один экземпляр под профиль пользователя, не фиксированный план | 1 |
| Great Run 10 км Improver (1) | Great Run (организатор забегов); копия 2022 на сайте больницы Manchester University NHS | Недели 1 и 6 файла совпали с текстом PDF (в пересказе); недели 11–12 расходятся в одной сессии (см. ограничения) | В PDF [нет автора, даты и версии](https://mft.nhs.uk/app/uploads/2022/03/TrainingPlan_10K_Improver-12wk.pdf); тот же шаблон встречается на сайтах других организаций. Сессия «3×6 мин в темпе ПМ» в пересказе стоит в неделе 12, в файле — в неделе 11: не разрешено (PDF недоступен); на выводы не влияет | 2 |
| BHF (8: 5 км, 10 км, ПМ, M × Beginner/Intermediate) | British Heart Foundation, благотворительный фонд; на [странице планов](https://www.bhf.org.uk/how-you-can-help/events/running-training-schedules) автор и дата не указаны, упомянуто партнёрство с Full Potential («команда тренеров») без привязки к планам | Страница подтверждает набор планов и уровни: Beginner — новички или новые на дистанции; Intermediate — есть опыт | Нет числовой интенсивности. Создатель файлов задокументировал дефекты PDF: 3 расхождения «заголовок и этапы» и 1 восстановленное значение (W10D5 в M Int). Зоны — выбор конвертера. Цель плана — финиш: 2–5 пробежек, бег/ходьба, длинная 38–63% недели | 3 |

### Как использовать

- **Доли зон и лимиты за тренировку:** классы 1–2. BHF — нет: 15–44% «средней» корзины отражают метки «steady/threshold», а не измеренную интенсивность.
- **Объём, частота, длинная, подводка:** все классы; BHF выделять отдельно (другая цель).
- **Оценка вводных:** старт плана не равен привычному объёму аудитории. Для разгонных планов (Hansons Beginner, Higdon Int2/Adv1) рядом дана оценка по пику плана.
- Ни у одного плана нет данных о результатах бегунов: надёжность — это качество источника и перевода, не доказательство эффективности.

## Garmin

Файлы пользователя, не изменялись. Вводные в `meta.cfg` — ориентировочные, не оптимальные; оптимальные вводные оценены по самим планам (см. таблицу), калькулятором не подбирались.

## Higdon: как переведено

- Источник: официальные таблицы halhigdon.com, получены 2026-10-28 через WebFetch (инструмент пересказывает страницу, не копирует дословно — при сомнении сверять с сайтом). Даты условные: старт 2026-11-02, дни Пн–Вс как в таблице.
- Мили → км (×1,609344). Длина в милях → время по номинальным темпам: Z1 6:58, Z2 6:20, Z3 5:11, Z4 4:52, Z5 4:30 мин/км.
- «Бег на темпе гонки»: марафон — Z3; полумарафон, 10 км — Z4. Разминка 10 мин Z2, заминка 5 мин Z2. Длинная — Z2; «3/1» — 3 части Z2 + 1 часть Z3.
- Повторы 400/800/1600 м: 5 км — Z5; 10 км, полумарафон — Z4/Z5 по метке в таблице; «mile» (10K Adv) — Z5. Горки — Z5, паузы — Z1.
- Кросс-тренинг — 30–60 мин (вид спорта не задан). Старты внутри плана (5, 10, 15 км, полумарафон) — как гонки; в 10K Adv пятница (3 мили) необязательная — не учтена.
- Внимание: Higdon Intermediate 1 (марафон) и Novice 1 — без скоростной работы; Z3 только в «беге на темпе гонки».

## Частичные источники (только сводные данные, полного плана нет)

| Источник | Что взято | Ссылка |
|---|---|---|
| Pfitzinger/Douglas, Advanced Marathoning (18/55 и др.) | недельные пробеги, структура недели | ctyeh.com/articles/2754 |
| Daniels, Daniels' Running Formula | 4 фазы, 2Q, лимиты T/I/R/M | us.humankinetics.com/blogs/excerpt/sample-running-program-from-daniels-running-formula; ctyeh.com/articles/2756 |
| Hansons Marathon Method (старые сводные заметки; полные официальные планы добавлены ниже) | структура недели («something of substance»), примеры недель | lukehumphreyrunning.com; ctyeh.com/articles/2755; Brooks PDF (Beginner 42,2) |
| Pfitzinger, Faster Road Racing | диапазоны объёма для 5–10 км | us.humankinetics.com/blogs/excerpt/training-for-an-8k-or-10k-race |
| Tanda 2011 | Pm = 17,1 + 140·exp(−0,0053·K) + 0,55·P | redalyc.org/pdf/3010/301023457005.pdf |

## Проверенные дополнения — 28 октября 2026

Новые планы сверены с полными PDF, а не с пересказом страницы. Это дополнительные эталоны под разные задачи; доказательств универсального преимущества над Garmin/Higdon нет. Существующие HTML не менялись.

| Файл | Источник | Недель | Пробежек/нед, медиана | Объём старт → пик, км | Длинная, км | Сильная сторона | Ограничение |
|---|---|---:|---:|---:|---:|---|---|
| [greatrun-10k-improver](greatrun-10k-improver.html) | [Great Run; архив NHS](https://mft.nhs.uk/app/uploads/2022/03/TrainingPlan_10K_Improver-12wk.pdf) | 12 | 4 | 16.4 → 29.4 | 10.9 | Умеренный объём; одна специальная сессия в неделю | В части таблицы не указаны разминка/заминка — дополнительные минуты не приписаны. |
| [hansons-half-beginner](hansons-half-beginner.html) | [Hansons Coaching Services](https://s3.us-central-1.wasabisys.com/hansons/Beginner_Half_Marathon_-_3.15.pdf) | 18 | 6 | 16.1 → 76.4 | 19.3 | Регулярная практика целевого темпа ПМ; отдельная скоростная работа | 6 дней бега с недели 6; Beginner не означает подготовку с нуля. |
| [hansons-marathon-beginner](hansons-marathon-beginner.html) | [Hansons Coaching Services](https://s3.us-central-1.wasabisys.com/hansons/Beginner_Marathon_-_new.pdf) | 18 | 6 | 19.3 → 91.7 | 25.8 | Длинная до 16 миль на фоне распределённого недельного объёма; конкретные интервалы | Пик около 92 км/нед; резкий переход к 6 дням. Не замена первому марафону на 4 днях. |

### Как выбирать

- На 10 км при ограниченном времени: Great Run Improver — удобнее как умеренный эталон, чем плотные Garmin/Higdon Advanced. Это структурная оценка, не обещание лучшего результата.
- Для полумарафона при устойчивом объёме и готовности бегать 6 дней: Hansons. При меньшем объёме существующие Higdon/Garmin на 4–5 дней уместнее.
- Для марафона при накопленном объёме: Hansons показывает альтернативу «всё держится на одной очень длинной». Для первого марафона с небольшим объёмом Novice 1 остаётся более подходящим стартовым эталоном.

### Источники и конвертация

- Официальная подборка Hansons: https://hansons-running.com/content/training-plans. В HTML и `meta.source.url` — прямые ссылки на официальные PDF; отдельно сохранены хеши исходников в HTML.
- Great Run: https://www.greatrun.org/train-and-prepare/training-plans/10k/. Полная таблица проверена по архиву Great Run на сайте Manchester University NHS: https://mft.nhs.uk/app/uploads/2022/03/TrainingPlan_10K_Improver-12wk.pdf. Новая версия на странице Great Run проверена как описание того же формата; за полный источник принят доступный архив 2022, а не недоступный для скачивания PDF 2027.
- Файлы содержат встроенный JSON `meta` + `workouts`, `schema: 1`; `meta.source` повторяет формат существующих Higdon. Источники и допущения также видны в HTML.
- Мили переведены в метры ×1609,344, с округлением до метра; минуты оставлены минутами. Паузы — только между повторами. Табличные округлённые суммы Mileage не подменяют расчёт из этапов.
- Темпы стартов и смещения (МР/ПМ −10 с/миля) сохранены текстом. Цели HR — приближённая классификация для эталона; она не передаёт точное смещение темпа.
- В Hansons авторский tempo — темп целевого старта: марафон Z3, полумарафон Z4. 5–10 км классифицированы Z5; цель ПМ/МР −10 с/миля остаётся в своей базовой зоне, с сохранением смещения в описании.
- Где исходник предлагает отдых или кросс без времени, выбран отдых. Дополнительные ОФП не придуманы.
- Новые временные оценки используют текущие номиналы калькулятора без результата бегуна: Z1 6:20, Z2 5:30, Z3 4:40, Z4 4:15, Z5 3:55/км. Это модель пересчёта единиц, не тренировочные темпы и не личный прогноз. Старые оценки в таблице выше рассчитаны по другой модели и напрямую несопоставимы.
- ACWR — существующий алгоритм калькулятора, старт 0,80 без реальной истории. У Hansons максимум модели доходит примерно до 1,65/1,82: это причина не трактовать авторитет источника как гарантию безопасной прогрессии.
- Проверены JSON/HTML, единицы и HR-цели в неизменённом экспортере, импорт и обратный экспорт калькулятора, загрузчик приложения на JVM-стенде, отображение на широком/узком экране. Реальная загрузка тренировок в Garmin не выполнялась; известное ограничение экспортера с завершением RepeatGroup остаётся.

### Почему не добавлены другие кандидаты

- B.A.A. содержит подробные планы, но на странице отдельно ограничено переиспользование материалов без письменного разрешения; в подборку не перенесены: https://www.baa.org/races/boston-marathon/info-for-athletes/boston-marathon-training/.
- Полные платные таблицы Daniels/Pfitzinger не восстанавливались из пересказов и сторонних сканов. Их краткие методические ссылки выше не выдаются за полный план.

## Расширение: ещё 10 планов — 28 октября 2026

Добавлены полные официальные таблицы BHF (8 вариантов) и Hansons Advanced (2 варианта). Beginner/Intermediate/Advanced — названия авторов, а не гарантия пригодности для конкретного бегуна. Общий шаблон, JSON и зоны сохранены.

| Файл | Дистанция | Уровень автора | Недель | Беговых/пешеходных занятий в неделю, медиана | Пик бегового объёма без старта, км | Источник |
|---|---|---|---:|---:|---:|---|
| [bhf-10k-beginner](bhf-10k-beginner.html) | 10 км | Beginner | 8 | 3 | 35.4 | [British Heart Foundation](https://www.bhf.org.uk/-/media/files/how-you-can-help/events/events-rebranded-training-plans/10k-run-beginners.pdf) |
| [bhf-10k-intermediate](bhf-10k-intermediate.html) | 10 км | Intermediate | 8 | 4 | 44.7 | [British Heart Foundation](https://www.bhf.org.uk/-/media/files/how-you-can-help/events/events-rebranded-training-plans/10k-run-intermediate.pdf) |
| [bhf-5k-beginner](bhf-5k-beginner.html) | 5 км | Beginner | 8 | 3 | 20.9 | [British Heart Foundation](https://www.bhf.org.uk/-/media/files/how-you-can-help/events/events-rebranded-training-plans/5k-run-beginners.pdf) |
| [bhf-5k-intermediate](bhf-5k-intermediate.html) | 5 км | Intermediate | 8 | 3 | 28.6 | [British Heart Foundation](https://www.bhf.org.uk/-/media/files/how-you-can-help/events/events-rebranded-training-plans/5k-run-intermediate.pdf) |
| [bhf-half-beginner](bhf-half-beginner.html) | 21.097 км | Beginner | 12 | 3 | 50.6 | [British Heart Foundation](https://www.bhf.org.uk/-/media/files/how-you-can-help/events/events-rebranded-training-plans/half-marathon-beginners.pdf) |
| [bhf-half-intermediate](bhf-half-intermediate.html) | 21.097 км | Intermediate | 12 | 5 | 60.0 | [British Heart Foundation](https://www.bhf.org.uk/-/media/files/how-you-can-help/events/events-rebranded-training-plans/half-marathon-intermediate.pdf) |
| [bhf-marathon-beginner](bhf-marathon-beginner.html) | 42.195 км | Beginner | 14 | 3 | 55.3 | [British Heart Foundation](https://www.bhf.org.uk/-/media/files/how-you-can-help/events/events-rebranded-training-plans/marathon-beginners.pdf) |
| [bhf-marathon-intermediate](bhf-marathon-intermediate.html) | 42.195 км | Intermediate | 14 | 4.5 | 69.4 | [British Heart Foundation](https://www.bhf.org.uk/-/media/files/how-you-can-help/events/events-rebranded-training-plans/marathon-intermediate.pdf) |
| [hansons-half-advanced](hansons-half-advanced.html) | 21.097 км | Advanced | 18 | 6 | 81.3 | [Hansons Coaching Services](https://s3.us-central-1.wasabisys.com/hansons/Advanced_Half_Marathon_-_3.15.pdf) |
| [hansons-marathon-advanced](hansons-marathon-advanced.html) | 42.195 км | Advanced | 18 | 6 | 98.2 | [Hansons Coaching Services](https://s3.us-central-1.wasabisys.com/hansons/Advanced_Marathon_-_new.pdf) |

### Что изменилось по сравнению с прежней подборкой

- Появились планы на 5 км, включая бег/ходьбу; прежде в каталоге этой дистанции не было.
- BHF добавляет 8-недельные 5/10 км, 12-недельные полумарафоны и 14-недельные марафоны с кросс-тренингом. Hansons Advanced — варианты для устойчивого высокого объёма и 6 дней бега.
- Каждый файл содержит прямую ссылку на PDF, дату проверки, хеш исходника и допущения. Точных дублей по последовательности дней, этапам, зонам и дозировке с существующими планами не найдено.

### Уточнения первоисточников

- В BHF Marathon Intermediate W10D5 пропущено число 5-минутных усилий. По просьбе пользователя оно восстановлено по доле работы: значок 40 мин минус 15+15 мин разминки/заминки оставляет около 10 мин. Приняты 2×5 мин, 90 с только между ними; фактическое занятие 41:30, рабочие отрезки 10 мин (24%). Это наиболее близкая к значку реконструкция, не подтверждённое число из PDF.
- В BHF 5K Intermediate (W06D4, W07D2) заголовок 45 мин расходится с этапами 10+15+10=35 мин. В BHF Half Intermediate W12D2 заголовок 40 мин расходится с 15+10+10=35 мин. В JSON сохранены явные этапы и добавлены заметки; недостающие минуты не придуманы.
- Авторское «последние N минут» включено в общее время длительной. Эти минуты не прибавлялись сверху.
- Ходьба — отдельные timed-этапы без целевого темпа/пульса. Её время сохранено, километраж не выдуман: график километров отражает беговую часть. Занятия бег/ходьба учтены как одна активность.
- Паузы только между повторами. На свободных горках BHF конкретизированы 4×(1 мин сильнее / 2 мин легко) внутри общего времени; это явная адаптация.
- Если источник предлагает отдых или кросс, выбран отдых. Обязательные пилатес/йога заменены карточкой кора; body/core exercises — силовой A с минутами источника. Занятия без заданной длительности отмечены в HTML и не экспортируются.
- В Hansons Advanced Half недели 11–17 по таблице идут в темпе 10 км; они не заменены на ПМ−10 с/миля из Beginner. В Advanced Marathon сохранено МР−10 с/миля.
- Все 10 файлов прошли сравнение HTML/JSON, проверку единиц и целей неизменённым экспортером, импорт/обратный экспорт калькулятора, проверку ссылок ОФП и отображения на двух ширинах. Загрузчик приложения дополнительно проверен на представителях с ходьбой, ОФП, кроссом и продвинутыми интервалами. Реальная синхронизация с Garmin не выполнялась; ограничение RepeatGroup остаётся.
