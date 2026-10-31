import pathlib,sys,json,datetime
sys.path.insert(0,'work/pydeps');root=next(pathlib.Path('work/sources/running-plan-engine/src').iterdir());sys.path.insert(0,str(root/'src'))
from plan_engine.models import PlanRequest
from plan_engine.planner import generate_plan
ps=json.loads(pathlib.Path('work/profiles.json').read_text())
for p in ps['profiles']:
 for d in ps['distances']:
  days=['mon','tue','wed','thu','fri','sat','sun'] if p['days']==6 else ['tue','thu','sat','sun'] if p['days']==4 else ['tue','thu','sun']
  if p['days']==6:days.remove('fri')
  goal=(datetime.date(2026,11,2)+datetime.timedelta(days=d['weeks']*7-1)).isoformat()
  inp={'athlete':{'id':p['id'],'age':35,'sex':'male','experience_years':8 if p['km']==80 else 3 if p['km']==40 else 1,'level':p['level'],'recent_weekly_km':[p['km']]*4,'longest_run_km_last_4w':p['long'],'availability':[{'weekday':day,'max_minutes':300 if day=='sun' else 150} for day in days],'constraints':{'injuries':[],'no_track':False,'prefers_time_based':False}},'benchmark':{'distance_km':10,'time_sec':p['benchmark']['time'],'date':'2026-10-25','is_estimate':True},'goal':{'distance_km':d['km'],'race_date':goal,'target_time_sec':None},'options':{'sessions_per_week':3 if p['km']==25 else 4,'include_strength':False,'units':'metric','language':'fr','as_of_date':'2026-10-29'}}
  try:
   o=generate_plan(PlanRequest.model_validate(inp));out=o.model_dump(mode='json');raw={'source':'running-plan-engine','profile':p,'distance':d,'goal':goal,'input':inp,'output':out};pathlib.Path(f"work/raw/running-plan-engine-{d['id']}-{p['id']}.json").write_text(json.dumps(raw,ensure_ascii=False,indent=2),encoding='utf8');print(d['id'],p['id'],out.get('code','OK'))
  except Exception as e:print(d['id'],p['id'],str(e))

