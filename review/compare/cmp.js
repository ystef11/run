const c=require('./calc.json'),m=require('./mine.json');
const key=process.argv[2];
const a=c[key],b=m[key];
console.log(key,'| калькулятор: VDOT',a.vd,'прогноз',a.fcTime,'пик',a.peakReal,'км /',a.peakMin,'мин; пробежек',a.recRuns,'| мои: пик',b.peak,'км');
console.log('нед | КАЛЬК: тип            км  мин цель пр длин | МОИ: тип  км  мин пр длин');
const n=Math.max(a.weeks.length,b.weeks.length);
for(let i=0;i<n;i++){const x=a.weeks[i],y=b.weeks[i];
 console.log(String(i+1).padStart(2),'|',x?`${(x.type||'work').padEnd(6)} ${x.ph.padEnd(3)} ${String(x.km).padStart(5)} ${String(x.min).padStart(4)} ${String(x.target).padStart(4)} ${x.runs} ${String(x.longKm).padStart(4)}/${String(x.longMin).padStart(3)}`:' '.repeat(40),'|',y?`${y.type.padEnd(5)} ${String(y.km).padStart(5)} ${String(y.min).padStart(4)} ${y.runs} ${String(y.longKm).padStart(4)}/${String(y.longMin).padStart(3)}`:'');}
