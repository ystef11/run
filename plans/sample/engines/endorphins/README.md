# Endorphins: код, вводные и результаты

Проверено 2026-10-29. Сохранены публичные веб-сборки, 92 выделенных фрагмента кода и фактические текст/поля экранов. Серверная часть не открыта и не получена. Фрагменты JS зависят от общей сборки и отдельно не запускаются.

## Порядок экранов

| № | Экран | Код |
|---|---|---|
| 1 | Приветствие | [welcome-1.js](page-components/welcome-1.js), [welcome-2.js](page-components/welcome-2.js), [welcome-3.js](page-components/welcome-3.js) |
| 2 | Пол, дата рождения, единицы | [profile-1.js](page-components/profile-1.js), [profile-2.js](page-components/profile-2.js), [profile-3.js](page-components/profile-3.js), [profile-4.js](page-components/profile-4.js), [profile-5.js](page-components/profile-5.js) |
| 3 | Цель использования: забег / фитнес / возвращение / новичок | [choice-1.js](page-components/choice-1.js) |
| 4 | Как работает план | [mechanism-1.js](page-components/mechanism-1.js), [mechanism-2.js](page-components/mechanism-2.js), [mechanism-3.js](page-components/mechanism-3.js), [mechanism-4.js](page-components/mechanism-4.js), [mechanism-5.js](page-components/mechanism-5.js), [mechanism-6.js](page-components/mechanism-6.js), [mechanism-7.js](page-components/mechanism-7.js), [mechanism-8.js](page-components/mechanism-8.js) |
| 5 | Garmin, Coros, Suunto, Whoop, Oura, Apple Health; можно пропустить | [devices-1.js](page-components/devices-1.js), [devices-2.js](page-components/devices-2.js), [devices-3.js](page-components/devices-3.js) |
| 6 | Забег из списка либо своя дистанция и дата | [race-1.js](page-components/race-1.js) |
| 7 | PR / заданное время / финиш / удовольствие / не определился | [goal-1.js](page-components/goal-1.js), [goal-2.js](page-components/goal-2.js), [goal-3.js](page-components/goal-3.js) |
| 8 | Частота бега | [level-1.js](page-components/level-1.js), [level-2.js](page-components/level-2.js), [level-3.js](page-components/level-3.js), [level-4.js](page-components/level-4.js), [level-5.js](page-components/level-5.js), [level-6.js](page-components/level-6.js), [level-7.js](page-components/level-7.js), [level-8.js](page-components/level-8.js), [level-9.js](page-components/level-9.js) |
| 9 | Доступные дни | [days-1.js](page-components/days-1.js) |
| 10 | День длинной | [long-1.js](page-components/long-1.js), [long-2.js](page-components/long-2.js) |
| 11 | Текущий результат на выбранной дистанции | [recent-1.js](page-components/recent-1.js) |
| 12 | Начало и длительность | [start-1.js](page-components/start-1.js), [start-2.js](page-components/start-2.js) |
| 13 | Пояснение поддержки | [coaching-1.js](page-components/coaching-1.js), [coaching-2.js](page-components/coaching-2.js), [coaching-3.js](page-components/coaching-3.js), [coaching-4.js](page-components/coaching-4.js), [coaching-5.js](page-components/coaching-5.js) |
| 14 | Предпросмотр результата и переходы редактирования | [result-1.js](page-components/result-1.js), [result-2.js](page-components/result-2.js), [result-3.js](page-components/result-3.js), [result-4.js](page-components/result-4.js), [result-5.js](page-components/result-5.js), [result-6.js](page-components/result-6.js), [result-7.js](page-components/result-7.js), [result-8.js](page-components/result-8.js), [result-9.js](page-components/result-9.js), [result-10.js](page-components/result-10.js), [result-11.js](page-components/result-11.js), [result-12.js](page-components/result-12.js), [result-13.js](page-components/result-13.js), [result-14.js](page-components/result-14.js), [result-15.js](page-components/result-15.js), [result-16.js](page-components/result-16.js), [result-17.js](page-components/result-17.js), [result-18.js](page-components/result-18.js), [result-19.js](page-components/result-19.js), [result-20.js](page-components/result-20.js), [result-21.js](page-components/result-21.js), [result-22.js](page-components/result-22.js), [result-23.js](page-components/result-23.js), [result-24.js](page-components/result-24.js), [result-25.js](page-components/result-25.js), [result-26.js](page-components/result-26.js) |
| 15 | Объём, частота, длинная, постепенный старт | [advanced-1.js](page-components/advanced-1.js), [advanced-2.js](page-components/advanced-2.js), [advanced-3.js](page-components/advanced-3.js), [advanced-4.js](page-components/advanced-4.js), [advanced-5.js](page-components/advanced-5.js) |
| 16 | Весь календарь | [active-1.js](page-components/active-1.js), [active-2.js](page-components/active-2.js), [active-3.js](page-components/active-3.js), [active-4.js](page-components/active-4.js), [active-5.js](page-components/active-5.js) |
| 17 | Неделя | [week-1.js](page-components/week-1.js), [week-2.js](page-components/week-2.js) |
| 18 | Подробная тренировка | [workout-1.js](page-components/workout-1.js), [workout-2.js](page-components/workout-2.js), [workout-3.js](page-components/workout-3.js), [workout-4.js](page-components/workout-4.js), [workout-5.js](page-components/workout-5.js), [workout-6.js](page-components/workout-6.js) |
| 19 | Экран ограничений подписки | [limits-1.js](page-components/limits-1.js), [limits-2.js](page-components/limits-2.js), [limits-3.js](page-components/limits-3.js), [limits-4.js](page-components/limits-4.js) |

## Наблюдавшиеся диапазоны

| Вводная | Что показал интерфейс |
|---|---|
| Дистанция | Mile, 5K, 10K, 10 Miles, Half Marathon, Marathon |
| Результат | Часы / минуты / секунды; выбран 10K 39:02 |
| Частота в Advanced edit | 2–7 раз/нед |
| Недельный объём в текущем профиле | 19–126 км/нед; фактически выбран 80–97 |
| Длинная в текущем профиле | границы менялись вместе с объёмом: 10–35, затем 16–42 км; выбрано 24–35 |
| Длительность общего плана | 3–20 недель |
| Публичный предпросмотр | 8–24 недели; при переключении в км 8–129 км/нед |
| Gradual Start | Снижает объём первых четырёх недель; в наблюдавшемся образце выключен |

Границы зависят от уровня и других полей: это наблюдения текущего профиля, а не глобальный контракт сервиса.

## Результаты и ограничения

- Вводился марафон 2027-03-07, старт 2026-11-02, цель 3:00:13, 6 пробежек, длинная в воскресенье, 10 км 39:02. После редактирования предпросмотр сменился с 18-week Marathon на 12-week Personalized Plan. Активный результат — 17 Week Personalized Training Plan, 2026-10-29–2027-02-18. Причина не установлена.
- Видимый календарь: 97 тренировок. Расхождение самого сервиса: шапка 1412,4 км, видимые 97 тренировок — 1377.7 км. Последняя неделя показывает 6 тренировок, но на экране перечислены четыре.
- Первые шесть подробных тренировок открылись. Следующие переходы привели к training-purchase; оплаты и подписки не оформлялись.
- Полный HTML календаря: [19-active-plan.full.html](pages/19-active-plan.full.html). Исходное тело: [19-active-plan.body.html](pages/19-active-plan.body.html).
- [Снимки текста и полей](pages/capture-index.json) и [последовательность фактических переходов](pages/sequence.json).
- Ранние HTML-выгрузки были усечены инструментом; они сохранены в pages/incomplete. Повторные загрузки недель дали промежуточный экран без данных, затем сайт перестал отвечать. Эти файлы также вынесены в incomplete. На их месте HTML-представления сохранённых текста и полей, явно помеченные как восстановленные представления, а не исходный DOM.
- Для ранних экранов welcome/profile исходный DOM не снят: их код имеется в скачанной сборке и выделенных JS-фрагментах.

## Версии

[manifest.json](page-components/manifest.json) содержит исходный bundle, SHA-256, границы фрагмента и способ выделения. Полные сборки — в [chunks](chunks/). Тексты и диапазоны — в JSON рядом с каждым снимком страницы.
