from pathlib import Path
import json,re,datetime,html,sys,hashlib,shutil,collections
sys.path.insert(0,str(Path(__file__).parent/'pydeps'))
OUT=Path('work/deliver'); OUT.mkdir(exist_ok=True)
RAW=OUT/'raw';RAW.mkdir(exist_ok=True)
START=datetime.date(2026,11,2)
CFG=json.loads(Path('work/profiles.json').read_text(encoding='utf8'));PROFILES=CFG['profiles'];DISTS=CFG['distances']
ROOTS={p.name:next((p/'src').iterdir()) for p in Path('work/sources').iterdir() if (p/'src').exists()}
SOURCES={n:json.loads((Path('work/sources')/n/'repository.json').read_text()) for n in ROOTS}
CSS=re.search(r'<style>(.*?)</style>',Path('work/template.html').read_text(encoding='utf8'),re.S)[1]
MANIFEST=[];REFUSALS=[]
def dump(p,o):p.write_text(json.dumps(o,ensure_ascii=False,indent=2),encoding='utf8')
def mm(s):s=round(s);return f'{s//60}:{s%60:02}'
def sec(s):a=s.strip().split(':');return int(a[0])*60+int(a[1])
def date(offset):return (START+datetime.timedelta(days=offset)).isoformat()
def step(v,end='distance',pace=None,typ='interval',desc=''):
 s={'t':typ,'end':end,'v':round(v),'tg':{},'d':desc}
 if pace:s['tg']={'pace':[mm(x) for x in pace]}
 return s
def repeat(n,ss):return {'t':'repeat','n':int(n),'steps':ss}
def paces(p):return {'E':[p['t']*1.17,p['t']*1.35],'M':[p['t']*1.06,p['t']*1.10],'T':[p['t'],p['t']],'I':[p['t']*.90,p['t']*.95],'R':[p['t']*.82,p['t']*.87]}
def summary_step(km,desc):return step(km*1000,desc=desc)
def workout(iso,name,ss,desc='',**extra):return {'date':iso,'kind':'run','name':name,'steps':ss,'desc':desc,**extra}
def metrics_steps(ss):
 km=minutes=0;unknown=False
 for s in ss:
  if s['t']=='repeat':a,b,c=metrics_steps(s['steps']);km+=a*s['n'];minutes+=b*s['n'];unknown|=c;continue
  pace=s.get('tg',{}).get('pace');avg=sum(map(sec,pace))/2 if pace else None
  if s['end']=='distance':km+=s['v']/1000;minutes+=(s['v']/1000*avg/60 if avg else 0);unknown|=avg is None
  elif s['end']=='time':minutes+=s['v']/60;km+=(s['v']/avg if avg else 0);unknown|=avg is None
 return km,minutes,unknown
def describe(ss):
 a=[]
 for s in ss:
  if s['t']=='repeat':a.append(f"{s['n']}×({describe(s['steps'])})");continue
  val=(f"{s['v']/1000:g} км" if s['end']=='distance' else f"{s['v']/60:g} мин" if s['end']=='time' else 'по самочувствию')
  target=s.get('tg',{});pace=target.get('pace');hr=target.get('hr');a.append(val+(' @ '+'–'.join(pace)+'/км' if pace else f' · Z{hr}' if hr else '')+(f" ({s['d']})" if s.get('d') else ''))
 return ' + '.join(a)
def save(source,p,d,ws,input,notes,raw,level='structured',sourcefile=None,goal=None):
 if not ws:return
 slug=f"{source}-{d['id']}-{p['id']}"; rawname=slug+'.source.json';dump(RAW/rawname,raw)
 meta_src={'url':SOURCES[source]['html_url'] if source in SOURCES else {'ctyeh':'https://ctyeh.com/running/training-plan?lang=en','rundida':'https://rundida.com/plan/custom/','endorphins':'https://endorphinsrunning.com/training-plan-generator'}[source],'retrieved':'2026-10-29','raw':'raw/'+rawname}
 if source in ROOTS:
  commit=ROOTS[source].name.split('-')[-1];meta_src.update(commit=commit,engine='engines/'+source+'/source.zip')
  if sourcefile:meta_src['file']=sourcefile;meta_src['permalink']=meta_src['url']+'/blob/'+commit+'/'+sourcefile
 ws.sort(key=lambda x:x['date']);goal=goal or max(w['date'] for w in ws)
 meta={'tag':'['+source.upper()+']','schema':1,'name':f"{source} · {d['km']:g} км · {p['km']} км/нед · ПАНО {mm(p['t'])}",'generated':'2026-10-29','marathon':goal,'source':meta_src,'profile':p,'generatorInput':input,'conversion':{'detail':level,'notes':notes,'thresholdAssumption':'ПАНО — темп условной часовой гонки; результат 10 км рассчитан по Daniels–Gilbert и не является наблюдением.','zoneMapping':'Численные HR и LTHR не заданы. Пульсовые зоны не приравниваются к темповым.'},'cfg':{'startISO':min(w['date'] for w in ws),'goalISO':goal,'goalDist':round(d['km']*1000),'planMode':'goal','tag':'['+source.upper()+']'}}
 plan={'meta':meta,'workouts':ws};dump(OUT/(slug+'.json'),plan)
 esc=html.escape;weeks=collections.defaultdict(list)
 for w in ws:
  dt=datetime.date.fromisoformat(w['date']);mon=(dt-datetime.timedelta(days=dt.weekday())).isoformat();weeks[mon].append(w)
 body=''
 for i,(mon,items) in enumerate(weeks.items(),1):
  rows='';k=mins=0;unknown=False
  for w in items:
   a,b,c=metrics_steps(w.get('steps',[]));k+=a;mins+=b;unknown|=c
   original=w.get('desc','');ds=describe(w.get('steps',[]));
   rows+=f'<tr data-date="{w["date"]}"><td class="day">{w["date"]}</td><td class="ses"><b>{esc(w["name"])}</b><div>{esc(ds)}</div>'+(f'<div class="source-text">Источник: {esc(original)}</div>' if original else '')+'</td></tr>'
  body+=f'<div class="week"><div class="whead"><div class="bib mono">{i}</div><div class="wmeta"><div class="dates">Неделя от {mon}</div></div><div class="vol"><div class="num mono">{k:.1f}<small> км'+(' *' if unknown else '')+f'</small></div></div></div><table><tbody>{rows}</tbody></table></div>'
 title=meta['name'];notehtml=''.join('<li>'+esc(n)+'</li>' for n in notes)
 txt=json.dumps(json.dumps(plan,ensure_ascii=False)).replace('<','\\u003c')
 doc=f'''<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{esc(title)}</title><style>{CSS}\n.source-text{{font-size:12px;color:#60656b;margin-top:6px;white-space:pre-wrap}} details pre{{white-space:pre-wrap;word-break:break-word}}td.day{{min-width:105px}}</style></head><body><div class="wrap"><header><div class="eyebrow">Сравнительный образец · источник {esc(source)}</div><h1>{esc(title)}</h1></header><p><a href="{esc(meta_src['url'])}">Источник</a> · <a href="{esc(meta_src.get('permalink',meta_src['url']))}">Версия / файл</a> · <a href="raw/{rawname}">Исходный результат</a></p><p>Расчётный результат 10 км: {mm(p['benchmark']['time'])}; VDOT {p['vdot']:.2f}. ПАНО принят за темп часовой гонки.</p><ul>{notehtml}</ul><p>* Если в шаге нет темпа, километры по времени не оцениваются. Объём источника и фактические шаги сохранены отдельно.</p><details><summary>Вводные и преобразования</summary><pre>{esc(json.dumps(meta,ensure_ascii=False,indent=2))}</pre></details><h2>Недельный план</h2>{body}<footer><button onclick="dlPlanJSON()">Экспорт plan.json</button> <button onclick="window.print()">Сохранить PDF</button></footer></div><script>window.__PLAN__=JSON.parse({txt});function dlPlanJSON(){{let b=new Blob([JSON.stringify(window.__PLAN__,null,2)],{{type:'application/json'}}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='{slug}.json';a.click();URL.revokeObjectURL(a.href)}}</script></body></html>'''
 (OUT/(slug+'.html')).write_text(doc,encoding='utf8')
 MANIFEST.append({'file':slug+'.html','source':source,'distanceKm':d['km'],'profileKm':p['km'],'threshold':mm(p['t']),'workouts':len(ws),'weeks':len(weeks),'detail':level,'notes':notes})

def vtrain(raw):
 p,d,o=raw['profile'],raw['distance'],raw['output'];pc={}
 for k,n in [('E','Easy'),('M','Marathon'),('T','Threshold'),('I','Interval')]:pc[k]=[sec(s.strip()) for s in o['paces'][n].split(' - ')];pc[k]*=2 if len(pc[k])==1 else 1
 pc['R']=[sec(o['paces']['Repetition'])*2.5]*2
 def parse(text):
  ss=[];text=re.sub(r'\([^)]*\)','',text)
  for token in text.split('+'):
   t=token.strip();m=re.fullmatch(r'(\d+)\s+X\s+([\d.]+)\s*([IRUM])\s+C/([\d.]+)\s*(MIN)?\s+(TR|S)',t)
   if m:
    n,dist,z,rest,minutes,_=m.groups();dist=float(dist);dist=dist*1000 if dist<20 else dist;ss.append(repeat(n,[step(dist,pace=pc[{'U':'T'}.get(z,z)]),step(float(rest)*(60 if minutes else 1),end='time' if minutes else 'distance',pace=pc['E'],typ='recovery')]));continue
   m=re.fullmatch(r'(\d+)\s*A/D',t)
   if m:ss.append(repeat(m[1],[step(30,'time',desc='Ускорение; интенсивность не задана'),step(50,'time',pc['E'],'recovery')]));continue
   m=re.fullmatch(r'([\d.]+)([SUM])',t)
   if m:ss.append(step(float(m[1])*1000,pace=pc[{'S':'E','U':'T','M':'M'}[m[2]]],desc=m[2]));continue
   if t:raise ValueError('vtrain token '+t)
  if len(ss)>1:
   if ss[0]['t']!='repeat':ss[0]['t']='warmup'
   if ss[-1]['t']!='repeat':ss[-1]['t']='cooldown'
  return ss
 ws=[]
 for w in o['weeks']:
  for a in w['schedule']:
   if a['type']=='race':ws.append(workout(a['date'],'Старт', [step(d['km']*1000,pace=[sec(o['raceTime'].split(':',1)[1])+int(o['raceTime'].split(':')[0])*3600]*2)] if False else [step(d['km']*1000,pace=[sum(int(v)*m for v,m in zip(o['raceTime'].split(':'),[3600,60,1]))/d['km']]*2)],sourceWeek=w['week']));continue
   if a['value']:ws.append(workout(a['date'],a['type'],parse(a['value']),a['value'],sourceWeek=w['week'],sourceWeeklyKm=float(w['km'].rstrip('k'))))
 notes=['Оригинальный buildPlan запущен без изменения алгоритма. Объём фиксирован шаблоном: заданные км/нед не являются его входом.','План всегда 12 недель. Для 5 км используется ближайший шаблон 10 км.','R в таблице источника указан на 400 м; преобразован в мин/км. A/D: 30 с ускорения / 50 с восстановления; интенсивность ускорения не выдумана.','Суммы шагов могут отличаться от подписей (k): сохранены оба значения.']
 if p['km']==25:notes.append('VDOT источника ограничен снизу 30: темп T получился 6:24 вместо входного ПАНО 6:30.')
 save('vtrain',p,d,ws,raw['input'],notes,raw,sourcefile='vtrain.js',goal=o['raceDate'])

def m42(raw):
 p,d,o=raw['profile'],raw['distance'],raw['output'];ws=[]
 for week in o['weeks']:
  pc=week['paces']
  def block(b):
   if 'repeat' in b:return repeat(b['repeat'],[block(s) for s in b['steps']])
   k=b['pace'];pace=pc.get(k,pc['E'] if k in ['jog','walk'] else None);return step(b.get('distance',b.get('seconds',0)), 'distance' if b.get('distance') else 'time',pace,{'recover':'recovery','run':'interval','work':'interval'}.get(b['kind'],b['kind']),k)
  for a in week['workouts']:
   if a['type']=='rest':continue
   ss=[block(b) for b in a['steps']] if a.get('steps') else [step(a['distance'],pace=pc[a['paces'][0]] if a['paces'] else pc['E'])]
   ws.append(workout(a['date'],a['titleText'],ss,a['descriptionText'],sourceDistanceM=a['distance'],sourceWeek=week['index']+1,sourceWeeklyM=week['volume']))
 save('marathon-coach',p,d,ws,raw['input'],['Запущен оригинальный generatePlan. Движок поддерживает только марафон.','Длинная до начала плана условно 24 / 14 / 9 км; стаж experienced / returning / first. Целевое улучшение времени не задано.','Темпы и структура шагов из движка. Для jog использован E; walk также получил E только для оценки, исходная метка сохранена.'],raw,sourcefile='src/lib/plan.ts')

def python_engine(raw):
 p,d,o=raw['profile'],raw['distance'],raw['output'];ws=[]
 if 'code' in o:REFUSALS.append({'source':'running-plan-engine','profile':p['id'],'distance':d['id'],'reason':o});return
 pc={k:[v['range']['min_sec_per_km'],v['range']['max_sec_per_km']] if v.get('range') else [v['pace_sec_per_km']]*2 for k,v in o['pace_zones'].items()}
 for week in o['plan']:
  for a in week['sessions']:
   if a['kind']=='rest':continue
   ss=[]
   for b in a['structure']:
    v=b.get('distance_km');dur=b.get('duration_min');
    if not(v or dur):continue
    ss.append(step(v*1000 if v else dur*60,'distance' if v else 'time',pc.get(b.get('zone')),{'warmup':'warmup','cooldown':'cooldown','recovery':'recovery'}.get(b['block'],'interval'),b['block']))
   if not ss:continue
   ws.append(workout(a['date'],a['title'],ss,a.get('notes_fr',''),sourceKm=a.get('total_km'),sourceMinutes=a['total_minutes_est'],sourceWeek=week['week_index']))
 save('running-plan-engine',p,d,ws,raw['input'],['Оригинальный generate_plan с Pydantic-валидацией. Для advanced и intermediate поддерживаются четыре тренировки; для beginner — три.','Марафон движок пока отклоняет, отказы сохранены отдельно.','Структура блоков и диапазоны темпа перенесены из результата. Если блок содержит и время, и км, сохранена дистанция; оба исходных значения доступны в raw.','Предположения для образца: мужчина, 35 лет; условный стаж 8 / 3 / 1 год; заданный пробег стабилен последние 4 недели.'],raw,sourcefile='src/plan_engine/planner.py')

def mcclowes(raw):
 p,d,o=raw['profile'],raw['distance'],raw['output'];ws=[]
 for a in o['days']:
  if a.get('isRest') or a['totalDistance']<=0:continue
  # This engine reports km for day totals and metres for repetitions.
  desc=a['sessionDescription']+'\n'+a['paces']+'\nRecovery: '+a['recoveries']
  ss=[summary_step(a['totalDistance'], 'Объём дня; структуру и темпы см. в исходном описании')]
  ws.append(workout(a['dateStr'],a['focusArea']+' · '+a['sessionSummary'],ss,desc,sourceDay=a,conversionDetail='volume-summary'))
 save('marathon-training-plan',p,d,ws,raw['input'],['Оригинальный generateTrainingPlan запущен с датой расчёта 2026-10-29, TZ=UTC. Целевой объём: текущий × 1,2; текущий и целевой результат равны.','Сводный шаг сохраняет totalDistance (км). Детали повторов, разминка, заминка, отдых и строки темпа сохранены дословно в sourceDay и описании.','Встречаются некорректные диапазоны вроде 3:31–0:09/км. Они не исправлялись и не превращались в целевые темпы; пульсовые зоны не назначены.','Этот экспорт пригоден для сравнения объёма и структуры дней; не для автоматического анализа минут по зонам.'],raw,'volume-summary',sourcefile='web/lib/engine/planGenerator.ts')

def zoned(raw):
 p,d,o=raw['profile'],raw['distance'],raw['output'];catalog={x['id']:x for x in raw['workouts']};ws=[]
 for week in o['weeks']:
  for a in week['sessions']:
   template=catalog.get(a['workoutId'],{});desc=a.get('notesEn','')+'\n'+template.get('descriptionEn','')
   for phase in ['warmup','mainSet','cooldown']:
    blocks=template.get(phase+'Structure',template.get(phase+'Template',[]));desc+='\n'+phase+': '+json.dumps(blocks,ensure_ascii=False)
   ss=[step(a['estimatedDurationMin']*60,'time',desc='Общее время дня; полная структура в исходном описании')]
   title=template.get('nameEn',a['workoutId'])
   if a['workoutId']=='__race_day__':
    ss=[step(d['km']*1000,desc='Дистанция старта из вводных; источник не задаёт длительность')];title='Старт '+str(d['km'])+' км'
   ws.append(workout(date((week['weekNumber']-1)*7+a['dayOfWeek']),title,ss,desc,sourceSession=a,sourceTemplateId=a['workoutId'],conversionDetail='duration-summary'))
 save('zoned',p,d,ws,raw['input'],['Запущен оригинальный generatePlan; VMA = скорость ПАНО / 0,88. Это оценка VMA, а не результат теста.','Сводный шаг сохраняет estimatedDurationMin; targetDistanceKm, targetDurationMin и подробный шаблон сохранены в raw и sourceSession. Эти величины у движка иногда расходятся.','Шестизонная модель не приравнивалась к пяти пульсовым зонам. Сводному шагу не назначен темп всей качественной тренировки.','Экспорт для сравнения дней, длительностей и текстов тренировок; детальный пересчёт минут по зонам требует отдельного адаптера.'],raw,'duration-summary',sourcefile='src/lib/planGenerator/index.ts')

for f in Path('work/raw').glob('*.json'):
 raw=json.loads(f.read_text(encoding='utf8'))
 if raw.get('source')=='vtrain':vtrain(raw)
 elif raw.get('source')=='marathon-coach':m42(raw)
 elif raw.get('source')=='marathon-training-plan':mcclowes(raw)
 elif raw.get('source')=='zoned':zoned(raw)
 elif raw.get('source')=='running-plan-engine':python_engine(raw)

def ken():
 import yaml
 root=ROOTS['run_plan_generator']
 for p in PROFILES:
  for d in DISTS:
   if d['id']=='marathon':name='marathon_55mi_18wk' if p['km']==80 else 'novice_2_marathon' if p['km']==40 else 'novice_1_marathon'
   else:name={'5k':'bc_5k_','10k':'bc_10k_','half':'bc_half_marathon_'}[d['id']]+('level2' if d['id']=='5k' and p['km']>=40 else 'level3' if p['km']==80 else 'level2' if p['km']==40 else 'level1')
   file=root/'seeds'/(name+'.yaml');o=yaml.safe_load(file.read_text(encoding='utf8'));ws=[];factor=1609.344 if o['distance_unit']=='miles' else 1000
   for a in o['runs']:
    if a['run_type'] in ['rest','cross_training']:continue
    ss=[];groups={};segs=sorted(a.get('segments',[]),key=lambda s:s['order_index'])
    for b in segs:
     if b['effort_type']=='time':s=step(b.get('duration',0),'time',desc=b['description'])
     elif b['effort_type']=='distance':s=step(b.get('distance',0)*factor,desc=b['description'])
     else:continue
     if not s['v']:continue
     if b.get('hr_zone_min')==b.get('hr_zone_max') and b.get('hr_zone_min'):s['tg']={'hr':b['hr_zone_min']}
     s['sourceZoneRange']=[b.get('hr_zone_min'),b.get('hr_zone_max')]
     if b.get('set_index'):
      idx=b['set_index']
      if idx not in groups:groups[idx]=repeat(b['set_repetitions'],[]);ss.append(groups[idx])
      groups[idx]['steps'].append(s)
     else:ss.append(s)
    if not ss and a.get('distance'):ss=[summary_step(a['distance']*factor/1000,a['notes'])]
    if not ss:continue
    ws.append(workout(date(a['day_offset']),a['run_type'],ss,a.get('notes',''),sourceRun=a))
   save('run_plan_generator',p,d,ws,{'template':name,'startDate':str(START),'thresholdUsed':False,'weeklyVolumeUsed':False},['Преобразован оригинальный YAML-шаблон: приложение только переносит его на календарь, индивидуального масштабирования по пробегу или ПАНО нет.','Выбран ближайший уровень; объём шаблона сохранён даже при расхождении с профилем. Это сравнительный образец, не персональная рекомендация.','Мили × 1609,344 → метры; секунды и группы повторений сохранены. Диапазоны HR сохранены в sourceZoneRange; tg.hr задан только для одной явно указанной зоны.'],o,sourcefile='seeds/'+file.name)
ken()

def ctyeh():
 for o in json.loads(Path('work/ctyeh-browser.json').read_text(encoding='utf8')):
  p=next(p for p in PROFILES if p['id']==o['profile']['id']);d=next(d for d in DISTS if d['id']==o['distance']['id']);ws=[]
  for i,table in enumerate(o['tables']):
   for j,row in enumerate(table[1:]):
    text=row[1];km=float(re.search(r'[\d.]+',row[2])[0]) if re.search(r'[\d.]+',row[2]) else 0
    if not km:continue
    # Preserve site's mileage as a neutral summary; never assign all intervals to one pace.
    ws.append(workout(date(i*7+j),text.split('\n')[0], [summary_step(km,'Колонка Distance сайта')],text,sourceRow=row,conversionDetail='volume-summary'))
  save('ctyeh',p,d,ws,{'race':o['distance'],'level':o['profile']['level'],'startKm':p['km'],'peakKm':round(p['km']*1.2),'recentRace10k':o['profile']['time'],'actualWeeks':o['actualWeeks']},['План получен в интерфейсе сайта без регистрации. Все дни и строки тренировок сохранены.','Сводный шаг равен колонке Distance; текст темпов, повторов и отдыха сохранён в описании и raw. В источнике встречаются расхождения текста и колонки Distance.','42 км на race day сохранены как выдал сайт, без замены на 42,195. Условные даты: старт 2026-11-02.','Для анализа зон этот сводный экспорт не подходит: нет искусственного назначения всей тренировки одной зоне.'],o,'volume-summary')
ctyeh()

def patrick():
 root=ROOTS['proper-distance-running-training-guidance']
 for p in PROFILES:
  for d in DISTS:
   prefix={'5k':'12-week-5k','10k':'12-week-10k','half':'16-week-half-marathon','marathon':'20-week-marathon' if p['km']==25 else '18-week-marathon'}[d['id']]
   suffix='-advanced' if p['km']==80 else '-beginner' if p['km']==25 else ''
   file=root/'templates'/(prefix+'-training-plan'+suffix+'.md');text=file.read_text(encoding='utf8');ws=[];unresolved=[]
   # Weekly headings are the boundary, so prose examples outside the plan are not imported.
   parts=re.split(r'(?m)^#{3,5}\s+Week\s+(\d+)\s*:',text)
   for i in range(1,len(parts),2):
    week=int(parts[i]);body=parts[i+1]
    if week>20:continue
    used_days=set()
    for day,desc in re.findall(r'(?m)^-\s+\*\*(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday):\*\*\s*(.+)$',body):
     if day in used_days:continue
     used_days.add(day)
     desc=desc.strip();clean=desc.replace('**','');dayno=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].index(day)
     if re.match(r'(?i)rest\b',clean):continue
     km=None
     # An explicit total takes precedence over all repeated distances in the description.
     m=re.search(r'=\s*([\d.]+)\s*(miles?|mi)?\b',clean,re.I)
     if m:km=float(m[1])*1.609344
     if km is None:
      m=re.search(r'(?i)(?:easy|recovery|long run|medium.long)\s+([\d.]+)\b',clean)
      if m:km=float(m[1])*1.609344
     if km is None:
      m=re.search(r'(?i)(?:race|goal|tune.up|parkrun).*?\b(5K|10K|half marathon|marathon)\b',clean)
      if m:km={'5k':5,'10k':10,'half marathon':21.0975,'marathon':42.195}[m[1].lower()]
     if km is None:
      unresolved.append({'week':week,'day':day,'text':clean});ss=[{'t':'interval','end':'open','v':0,'tg':{},'d':'Объём не разобран автоматически: см. исходное описание'}]
     else:ss=[summary_step(km,'Суммарная дистанция дня; подробности в описании')]
     ws.append(workout(date((week-1)*7+dayno),day+' · '+clean.split(' - ')[0],ss,clean,sourceWeek=week,conversionDetail='volume-summary'))
   raw={'template':str(file.relative_to(root)).replace('\\','/'),'text':text,'unresolved':unresolved}
   save('proper-distance-running-training-guidance',p,d,ws,{'template':file.name,'level':p['level'],'weeklyVolumeScaling':False,'thresholdScaling':False},['Статический Markdown-план, а не персональный генератор. Выбраны версии Advanced / Intermediate / Beginner; исходный объём не масштабировался.','Автор PatrickWiloak; лицензия CC BY 4.0. Адаптация: календарные даты и перевод явных суммарных миль в метры; тексты дней сохранены.','Сводные шаги передают только объём. Двойные пробежки, интервалы и альтернативы сохранены в тексте; зоны и темпы автоматически не назначались.','В вариантах Rest or ... выбран отдых. Неразобранные объёмы оставлены открытыми шагами, без выдуманной дистанции. Количество таких дней: '+str(len(unresolved))+'.','У продвинутых шаблонов пик может значительно превышать 80 км/нед; вводной профиль здесь служит для выбора уровня, а не обещает совпадение объёма.'],raw,'volume-summary',sourcefile=str(file.relative_to(root)).replace('\\','/'))
patrick()

def rundida():
 o=json.loads(Path('work/rundida-live.json').read_text(encoding='utf8'));p=PROFILES[0];d=DISTS[0];ws=[]
 for w in o['plan']['plan']['weeks']:
  for a in w['days']:
   if a['type']=='rest':continue
   text=a['workout'];ss=[]
   if text.startswith('Warm-up'):
    for num in re.findall(r'([\d.]+)\s*km',text):ss.append(summary_step(float(num),'Фрагмент исходной тренировки'))
   else:
    m=re.search(r'([\d.]+)\s*km',text)
    if m:ss=[summary_step(float(m[1]),'Дистанция из текста сайта')]
   if not ss:ss=[{'t':'interval','end':'open','v':0,'tg':{},'d':'См. исходное описание'}]
   ws.append(workout(a['date'],a['workout'],ss,a['purpose'],sourceDay=a,sourceWeeklyKm=w['km']))
 save('rundida',p,d,ws,o['plan']['params'],['Фактический результат веб-сервиса по запросу профиля 80 км/нед, ПАНО 4:00; неделя начинается 2026-11-02.','Сервис отбросил помеченный как оценочный результат 10 км: recent_race=null, VDOT не калиброван. Поэтому численные тренировочные темпы не добавлялись. Этот файл показывает результат распознавания запроса, а не корректно персонализированный по ПАНО план.','Строки дней, дистанции и недельные итоги сохранены без исправления. Серверная генерация закрыта; скачан только публичный код интерфейса и калькулятора темпов.'],o,'volume-summary')
rundida()

def endorphins():
 pages=Path('work/endorphins-pages');file=pages/'19-active-plan.json'
 if not file.exists():return
 from html.parser import HTMLParser
 class TextParser(HTMLParser):
  def __init__(self):super().__init__();self.chunks=[];self.inmain=False;self.depth=0
  def handle_starttag(self,tag,attrs):
   if tag=='main':self.inmain=True
  def handle_endtag(self,tag):
   if tag=='main':self.inmain=False
  def handle_data(self,data):
   if self.inmain and data.strip():self.chunks.append(data.strip())
 text=json.loads(file.read_text(encoding='utf8'))['text']
 # Calendar rows contain explicit weekdays, types and kilometre totals.
 lines=text.splitlines();ws=[];week=0;monthdate=datetime.date(2026,10,29);current=None
 days={'Mon':0,'Tue':1,'Wed':2,'Thu':3,'Fri':4,'Sat':5,'Sun':6}
 for i,line in enumerate(lines):
  if line=='Week' and i+1<len(lines) and lines[i+1].isdigit():week=int(lines[i+1]);continue
  m=re.fullmatch(r'Week\s+(\d+)',line)
  if m:week=int(m[1]);continue
  if line not in days or not week:continue
  tail=lines[i+1:i+6];mtype=tail[0] if tail else '';dist=None
  for val in tail[1:3]:
   m=re.fullmatch(r'([\d.]+)\s*km',val)
   if m:dist=float(m[1]);break
  if mtype=='Rest' or dist is None:continue
  monday=datetime.date(2026,10,26)+datetime.timedelta(weeks=week-1);iso=(monday+datetime.timedelta(days=days[line])).isoformat()
  ws.append(workout(iso,mtype,[summary_step(dist,'Колонка календаря Endorphins')],mtype+' '+str(dist)+' km',sourceWeek=week))
 # Fallback exact visible text layout is kept in raw even if a future layout changes the parser.
 if not ws:return
 p=PROFILES[0];d={'id':'personalized','km':0,'weeks':17};o=json.loads(file.read_text(encoding='utf8'))
 raw={'calendar':o,'observedHtml':'engines/endorphins/pages/19-active-plan.html','workoutDetails':json.loads((pages/'workout-results.json').read_text(encoding='utf8'))}
 save('endorphins',p,d,ws,{'requestedRace':'Marathon','requestedRaceDate':'2027-03-07','recent10k':'39:02','weeklyKmRangeDisplayed':[80,97],'daysPerWeek':6,'longRunRangeKm':[24,35],'actualResult':'17 Week Personalized Training Plan','actualDates':['2026-10-29','2027-02-18']},['Фактический календарь авторизованного аккаунта. После редактирования объёма сайт потерял привязку к марафону и выдал Personalized Training Plan; файл не назван марафонским.','В интерфейсе 80–97 км/нед вместо запрошенного пика 96: сайт округляет внутренние мили. Сводные шаги равны видимым дистанциям календаря; тренировочные зоны не выдуманы.','Детальная структура доступна для первых шести тренировок; дальнейшие переходы ведут к подписке. Все 17 видимых недель и экран ограничения сохранены в engines/endorphins/pages.','Данные профиля для расчёта в сервисе отличались от условных 35 лет других движков; возраст и параметры account setup не нормализовывались. Сравнивать как наблюдаемый вывод сервиса, а не одинаковый физиологический эксперимент.'],raw,'volume-summary')
endorphins()

dump(OUT/'GENERATOR-REFUSALS.json',REFUSALS)
dump(OUT/'GENERATED-MANIFEST.json',MANIFEST)
print('Plans:',len(MANIFEST),'refusals:',len(REFUSALS))


