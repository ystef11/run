const {calc}=require('./calc_all.js');
const prof=[[80,40],[80,37],[40,57],[20,67]],d=[[10000,10],[21097,12],[42195,16]];
const out={};
for(const [V0,t] of prof)for(const [gd,N] of d){const {p}=calc(V0,t,gd,N);const W=p.weeks;
 const reg=W.filter(w=>!['race','taper','tune','down'].includes(w.type));
 const pk=Math.max(...W.filter(w=>w.type!=='race').map(w=>w.min));
 const ti=W.findIndex(w=>w.type==='tune');
 const Lk=W.map(w=>{const l=w.days.flatMap(x=>x.items).filter(x=>x.kind==='run'&&x.z==='long'&&/^Длинная/.test(x.name)&&!x.light);return l.length?Math.max(...l.map(x=>x.min)):0});
 let jump=0,prev=0;W.forEach((w,i)=>{if(!Lk[i]||['down','tune','taper'].includes(w.type))return;if(prev)jump=Math.max(jump,Lk[i]/prev-1);prev=Lk[i];});
 const tw=W.filter(w=>w.type==='taper');
 const hasQ=w=>w.days.flatMap(x=>x.items).some(x=>x.kind==='run'&&(['thr','vo2','mp'].includes(x.z)||/^Средне-длинная.*из них/.test(x.name)));
 const rh=W.reduce((s,w)=>s+w.days.flatMap(x=>x.items).filter(x=>/Повтор|Горк/.test(x.name)).length,0);
 out[`${V0}/${t} ${gd===10000?10:gd===21097?21.1:42.2}`]={runs:[Math.min(...W.slice(0,-1).map(w=>w.runs)),Math.max(...W.map(w=>w.runs))],runsSeq:W.map(w=>w.runs).join(''),peak:Math.round(Math.max(...W.filter(w=>w.type!=='race').map(w=>w.kmRaw))),
  after:ti>=0&&W[ti+1]?Math.round(W[ti+1].min/pk*100):null,jump:Math.round(jump*100),tq:tw.map(w=>hasQ(w)?'Q':'-').join(''),z5:+(p.analysis.zoneShares[4]*100).toFixed(1),rh};}
console.log(JSON.stringify(out));
