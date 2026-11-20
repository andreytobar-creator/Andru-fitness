(function(){
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="110" fill="#0B132B"/><text x="256" y="290" font-family="sans-serif" font-weight="900" font-size="140" fill="#10B981" text-anchor="middle">AF</text></svg>`;
const ico='data:image/svg+xml;base64,'+btoa(svg);
document.getElementById('dynamic-icon').href=ico;
document.getElementById('dynamic-apple-icon').href=ico;

const ROUTINE_DATA=[
  {id:'lunes',dayName:'LUNES',title:'EMPUJE (PECHO, HOMBROS Y TRÍCEPS)',exercises:[
    {id:'press-banca',name:'Press banca',sets:3,targetReps:'8-10 reps'},
    {id:'press-inclinado-mancuernas',name:'Press inclinado con mancuernas',sets:3,targetReps:'10-12 reps'},
    {id:'aperturas-maquina',name:'Aperturas en máquina',sets:2,targetReps:'12-15 reps'},
    {id:'press-hombro',name:'Press de hombro',sets:2,targetReps:'10 reps'},
    {id:'elevaciones-laterales-1',name:'Elevaciones laterales',sets:3,targetReps:'12-15 reps'},
    {id:'extension-triceps-polea',name:'Extensión de tríceps en polea',sets:3,targetReps:'10-12 reps'},
    {id:'extension-triceps-cabeza',name:'Extensión de tríceps sobre cabeza',sets:2,targetReps:'12 reps'}
  ]},
  {id:'martes',dayName:'MARTES',title:'TIRÓN (ESPALDA Y BÍCEPS)',exercises:[
    {id:'jalon-pecho',name:'Jalón al pecho',sets:3,targetReps:'10 reps'},
    {id:'remo-sentado-polea',name:'Remo sentado en polea',sets:3,targetReps:'10-12 reps'},
    {id:'remo-mancuerna',name:'Remo con mancuerna',sets:2,targetReps:'10 reps'},
    {id:'pullover-polea',name:'Pullover en polea',sets:2,targetReps:'12 reps'},
    {id:'face-pull',name:'Face pull',sets:3,targetReps:'12-15 reps'},
    {id:'curl-biceps-barra',name:'Curl de bíceps con barra',sets:3,targetReps:'10 reps'},
    {id:'curl-martillo',name:'Curl martillo',sets:2,targetReps:'12 reps'}
  ]},
  {id:'miercoles',dayName:'MIÉRCOLES',title:'PIERNA COMPLETA',exercises:[
    {id:'prensa',name:'Prensa',sets:3,targetReps:'10 reps'},
    {id:'sentadilla-smith',name:'Sentadilla Smith',sets:3,targetReps:'8-10 reps'},
    {id:'curl-femoral-1',name:'Curl femoral',sets:3,targetReps:'10-12 reps'},
    {id:'peso-muerto-rumano',name:'Peso muerto rumano',sets:2,targetReps:'10 reps'},
    {id:'extension-cuadriceps',name:'Extensión de cuádriceps',sets:2,targetReps:'12 reps'},
    {id:'hip-thrust',name:'Hip thrust',sets:3,targetReps:'10-12 reps'},
    {id:'elevacion-gemelos',name:'Elevación de gemelos',sets:3,targetReps:'15 reps'}
  ]},
  {id:'jueves',dayName:'JUEVES',title:'TREN SUPERIOR Y ABDOMEN',exercises:[
    {id:'press-inclinado-maquina',name:'Press inclinado en máquina',sets:3,targetReps:'10 reps'},
    {id:'remo-maquina',name:'Remo en máquina',sets:3,targetReps:'10 reps'},
    {id:'elevaciones-laterales-2',name:'Elevaciones laterales',sets:3,targetReps:'15 reps'},
    {id:'pajaros-mancuernas',name:'Pájaros con mancuernas',sets:2,targetReps:'12 reps'},
    {id:'curl-biceps-scott',name:'Curl de bíceps Scott',sets:2,targetReps:'12 reps'},
    {id:'triceps-polea-cuerda',name:'Tríceps en polea con cuerda',sets:2,targetReps:'12 reps'},
    {id:'crunch-abdominal-polea',name:'Crunch abdominal en polea',sets:3,targetReps:'15 reps'},
    {id:'elevaciones-rodillas',name:'Elevaciones de rodillas',sets:3,targetReps:'12 reps'}
  ]},
  {id:'viernes',dayName:'VIERNES',title:'PIERNA ATLÉTICA Y CORE',exercises:[
    {id:'sentadilla-goblet',name:'Sentadilla goblet',sets:3,targetReps:'12 reps'},
    {id:'prensa-unilateral',name:'Prensa unilateral',sets:2,targetReps:'10 por pierna'},
    {id:'pmr-mancuernas',name:'Peso muerto rumano con mancuernas',sets:2,targetReps:'12 reps'},
    {id:'curl-femoral-2',name:'Curl femoral',sets:2,targetReps:'12 reps'},
    {id:'zancadas-controladas',name:'Zancadas controladas',sets:2,targetReps:'10 por pierna'},
    {id:'gemelos-pie',name:'Gemelos de pie',sets:3,targetReps:'15 reps'},
    {id:'plancha-abdominal',name:'Plancha abdominal',sets:3,targetReps:'30-45 seg'}
  ]}
];

const EXTRA_GYM_CATALOG=[
  {name:'Aductores en máquina (cerrar)',cat:'Pierna'},
  {name:'Abductores en máquina (abrir)',cat:'Pierna / Glúteo'},
  {name:'Sentadilla Hack',cat:'Pierna'},
  {name:'Sentadilla libre con barra',cat:'Pierna'},
  {name:'Sentadilla búlgara',cat:'Pierna'},
  {name:'Curl femoral tumbado',cat:'Pierna'},
  {name:'Patada de glúteo en polea',cat:'Glúteo'},
  {name:'Gemelos sentado',cat:'Pierna'},
  {name:'Press declinado',cat:'Pecho'},
  {name:'Cruce de poleas',cat:'Pecho'},
  {name:'Fondos en paralelas / máquina',cat:'Pecho / Tríceps'},
  {name:'Dominadas',cat:'Espalda'},
  {name:'Jalón agarre estrecho',cat:'Espalda'},
  {name:'Remo con barra T',cat:'Espalda'},
  {name:'Hiperextensiones lumbares',cat:'Espalda'},
  {name:'Press militar con barra',cat:'Hombros'},
  {name:'Elevaciones frontales',cat:'Hombros'},
  {name:'Remo al mentón',cat:'Hombros'},
  {name:'Encogimientos de trapecio',cat:'Hombros'},
  {name:'Curl bíceps inclinado mancuernas',cat:'Bíceps'},
  {name:'Curl predicador en máquina',cat:'Bíceps'},
  {name:'Press francés',cat:'Tríceps'},
  {name:'Fondos entre bancos',cat:'Tríceps'},
  {name:'Crunch en máquina',cat:'Abdomen'},
  {name:'Rueda abdominal',cat:'Abdomen'}
];

const STORAGE_KEY='andru_fitness_db_v1';
let appState={workouts:[],cardio:[],body:[]};
let currentDayId='lunes',calendarCursor=new Date(),timerInterval=null,timerSeconds=90;

function loadDB(){try{const r=localStorage.getItem(STORAGE_KEY);if(r){const p=JSON.parse(r);appState.workouts=p.workouts||[];appState.cardio=p.cardio||[];appState.body=p.body||[];}}catch(e){}}
function saveDB(){localStorage.setItem(STORAGE_KEY,JSON.stringify(appState));}
function getTodayISO(){const n=new Date();return new Date(n.getTime()-n.getTimezoneOffset()*60000).toISOString().split('T')[0];}
function formatDateES(iso){if(!iso)return '';const[y,m,d]=iso.split('-');return `${d}/${m}/${y}`;}
function getStartOfWeek(d){const c=new Date(d);const day=c.getDay();c.setDate(c.getDate()-day+(day===0?-6:1));c.setHours(0,0,0,0);return c;}
function getISOWeekNumber(d){const c=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));const dn=c.getUTCDay()||7;c.setUTCDate(c.getUTCDate()+4-dn);const ys=new Date(Date.UTC(c.getUTCFullYear(),0,1));return Math.ceil((((c-ys)/86400000)+1)/7);}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.remove('hidden');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.add('hidden'),2800);}

function switchView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.target===id));
  document.getElementById('main-scroll').scrollTop=0;
  if(id==='view-inicio')renderHome();
  if(id==='view-progreso')refreshProgressView();
  if(id==='view-cardio')renderCardioHistory();
  if(id==='view-medidas')refreshBodyView();
}

function renderHome(){
  const now=new Date(),h=now.getHours();
  document.getElementById('greeting-text').textContent=h<12?'¡Buenos días, Andru!':h<19?'¡Buenas tardes, Andru!':'¡Buenas noches, Andru!';
  document.getElementById('current-week-label').textContent=`Semana ${getISOWeekNumber(now)} · ${now.getFullYear()}`;
  document.getElementById('current-date-label').textContent=now.toLocaleDateString('es-ES',{weekday:'long',day:'numeric',month:'long'});
  const start=getStartOfWeek(now),end=new Date(start);end.setDate(end.getDate()+6);end.setHours(23,59,59,999);
  const weekW=appState.workouts.filter(w=>{const wd=new Date(w.date+'T12:00:00');return wd>=start&&wd<=end;});
  const doneSet=new Set(weekW.map(w=>w.dayId)),count=Math.min(5,doneSet.size);
  document.getElementById('weekly-count-label').textContent=`${count} / 5 entrenamientos`;
  document.getElementById('weekly-progress-bar').style.width=`${Math.round((count/5)*100)}%`;
  document.getElementById('stat-total-workouts').textContent=appState.workouts.length;
  let vol=0;
  weekW.forEach(w=>w.exercises.forEach(ex=>ex.sets.forEach(s=>{if((s.completed||s.reps>0)&&s.weight>0&&s.reps>0)vol+=s.weight*s.reps;})));
  document.getElementById('stat-weekly-volume').textContent=`${Math.round(vol).toLocaleString('es-ES')} kg`;
  const cMins=appState.cardio.filter(c=>{const cd=new Date(c.date+'T12:00:00');return cd>=start&&cd<=end;}).reduce((a,c)=>a+(Number(c.duration)||0),0);
  document.getElementById('stat-cardio-week').textContent=`${cMins} min`;

  const listEl=document.getElementById('home-days-list');listEl.innerHTML='';
  ROUTINE_DATA.forEach(day=>{
    const isDone=doneSet.has(day.id),btn=document.createElement('button');
    btn.className=`day-card-btn ${isDone?'done-this-week':''}`;
    btn.innerHTML=`<div><span class="day-pill">${day.dayName} ${isDone?'· COMPLETADO':''}</span><span class="day-name">${day.title}</span><span class="day-meta">${day.exercises.length} ejercicios</span></div><div class="day-status-icon">${isDone?'✓':'›'}</div>`;
    btn.addEventListener('click',()=>{currentDayId=day.id;renderRoutineTabs();renderWorkoutForm(day.id);switchView('view-rutina');});
    listEl.appendChild(btn);
  });

  const recentCard=document.getElementById('recent-activity-card');
  const events=[...appState.workouts.map(w=>({date:w.date,title:`${w.dayName} · ${w.dayTitle}`,detail:`${w.exercises.length} ejercicios`})),...appState.cardio.map(c=>({date:c.date,title:`Cardio: ${c.type}`,detail:`${c.duration} min`}))].sort((a,b)=>b.date.localeCompare(a.date));
  recentCard.innerHTML=events.length===0?'<p class="muted-small">Aún no has registrado entrenamientos.</p>':events.slice(0,3).map(ev=>`<div class="hist-ex-line"><div><strong style="color:var(--text-white);font-size:13px">${ev.title}</strong><div style="font-size:11px;color:var(--text-gray)">${ev.detail}</div></div><span style="font-size:11px;color:var(--accent-green);font-weight:700">${formatDateES(ev.date)}</span></div>`).join('');
}

function renderRoutineTabs(){
  const c=document.getElementById('routine-day-tabs');c.innerHTML='';
  ROUTINE_DATA.forEach(d=>{
    const b=document.createElement('button');b.className=`day-tab ${d.id===currentDayId?'active':''}`;b.textContent=d.dayName;
    b.addEventListener('click',()=>{currentDayId=d.id;renderRoutineTabs();renderWorkoutForm(d.id);});
    c.appendChild(b);
  });
}

function getLastExerciseRecord(name){
  const sorted=[...appState.workouts].sort((a,b)=>b.date.localeCompare(a.date));
  for(const w of sorted){
    const found=w.exercises.find(e=>e.name.toLowerCase()===name.toLowerCase()&&e.sets.some(s=>s.completed||s.weight>0||s.reps>0));
    if(found)return{date:w.date,sets:found.sets};
  }
  return null;
}

function buildSetRowHTML(num,prev){
  const wp=prev&&prev.weight?prev.weight:'0',wv=prev&&prev.weight?prev.weight:'',rp=prev&&prev.reps?prev.reps:'10';
  return `<div class="set-row" data-set-num="${num}"><div class="set-num">${num}</div><input type="number" step="0.5" min="0" class="set-input weight-input" placeholder="${wp}" value="${wv}" /><input type="number" step="1" min="0" class="set-input reps-input" placeholder="${rp}" /><button type="button" class="set-check-btn">✓</button></div>`;
}

function bindSetCheckEvent(btn){
  btn.addEventListener('click',()=>{btn.classList.toggle('checked');if(btn.classList.contains('checked'))startRestTimer(90);});
}

function createExerciseCardElement(ex,num,isExtra=false){
  const last=getLastExerciseRecord(ex.name);let prevHTML='';
  if(last){const sum=last.sets.filter(s=>s.weight>0||s.reps>0).map(s=>`S${s.setNum}: ${s.weight}kg×${s.reps}`).join(' | ');if(sum)prevHTML=`<div class="ex-prev-badge">Anterior (${formatDateES(last.date)}): <strong>${sum}</strong></div>`;}
  const card=document.createElement('div');card.className='ex-card';card.dataset.exId=ex.id;card.dataset.exName=ex.name;
  const count=Math.max(ex.sets||3,last?last.sets.length:0);let rows='';
  for(let s=1;s<=count;s++)rows+=buildSetRowHTML(s,last?last.sets.find(ps=>ps.setNum===s):null);
  card.innerHTML=`<div class="ex-header"><div><div class="ex-title">${num}. ${ex.name}</div><span class="ex-target">Objetivo: ${ex.sets} series × ${ex.targetReps}</span></div>${isExtra?'<button type="button" class="ex-remove-btn">✕</button>':''}</div>${prevHTML}<div class="sets-table-head"><span>Serie</span><span>Peso (kg)</span><span>Reps</span><span>Hecho</span></div><div class="sets-list">${rows}</div><div class="set-actions-bar"><button type="button" class="btn-add-set">+ Añadir serie</button><button type="button" class="btn-del-set">- Serie</button></div><input type="text" class="ex-note-input" placeholder="Observaciones..." />`;
  card.querySelectorAll('.set-check-btn').forEach(bindSetCheckEvent);
  const listEl=card.querySelector('.sets-list');
  card.querySelector('.btn-add-set').addEventListener('click',()=>{
    const r=listEl.querySelectorAll('.set-row'),lw=r.length>0?r[r.length-1].querySelector('.weight-input').value:'';
    const d=document.createElement('div');d.innerHTML=buildSetRowHTML(r.length+1,lw?{weight:lw}:null);
    const nr=d.firstElementChild;bindSetCheckEvent(nr.querySelector('.set-check-btn'));listEl.appendChild(nr);
  });
  card.querySelector('.btn-del-set').addEventListener('click',()=>{const r=listEl.querySelectorAll('.set-row');if(r.length>1)r[r.length-1].remove();else showToast('Mínimo 1 serie');});
  if(isExtra)card.querySelector('.ex-remove-btn').addEventListener('click',()=>{card.remove();document.querySelectorAll('#exercises-container .ex-card').forEach((c,i)=>{c.querySelector('.ex-title').textContent=`${i+1}. ${c.dataset.exName}`;});});
  return card;
}

function renderWorkoutForm(dayId){
  const day=ROUTINE_DATA.find(d=>d.id===dayId);if(!day)return;
  document.getElementById('selected-day-badge').textContent=day.dayName;
  document.getElementById('selected-day-title').textContent=day.title;
  document.getElementById('workout-general-notes').value='';
  const c=document.getElementById('exercises-container');c.innerHTML='';
  day.exercises.forEach((ex,i)=>c.appendChild(createExerciseCardElement(ex,i+1,false)));
}

function appendEx(name){
  const c=document.getElementById('exercises-container');
  const card=createExerciseCardElement({id:'c_'+Date.now(),name,sets:3,targetReps:'10-12 reps'},c.querySelectorAll('.ex-card').length+1,true);
  c.appendChild(card);card.scrollIntoView({behavior:'smooth',block:'center'});showToast(`Agregado: ${name}`);
}

function startRestTimer(sec){
  clearInterval(timerInterval);timerSeconds=sec;
  const b=document.getElementById('btn-rest-timer'),d=document.getElementById('timer-display');
  b.classList.add('running');d.textContent=`Descanso: ${timerSeconds}s`;
  timerInterval=setInterval(()=>{timerSeconds--;if(timerSeconds<=0){clearInterval(timerInterval);timerInterval=null;b.classList.remove('running');d.textContent='¡Listo!';if(navigator.vibrate)navigator.vibrate([200,100,200]);}else d.textContent=`Descanso: ${timerSeconds}s`;},1000);
}

function populateProgressExerciseSelect(){
  const s=document.getElementById('progress-exercise-select'),cur=s.value;s.innerHTML='';
  const names=new Set();
  ROUTINE_DATA.forEach(d=>d.exercises.forEach(e=>names.add(e.name)));
  EXTRA_GYM_CATALOG.forEach(e=>names.add(e.name));
  appState.workouts.forEach(w=>w.exercises.forEach(e=>names.add(e.name)));
  names.forEach(n=>{const o=document.createElement('option');o.value=n;o.textContent=n;s.appendChild(o);});
  if(cur&&names.has(cur))s.value=cur;
}

function refreshProgressView(){
  populateProgressExerciseSelect();
  renderExerciseChart(document.getElementById('progress-exercise-select').value);
  renderVolumeChart();renderWorkoutHistoryList();renderCalendar();
}

function renderExerciseChart(name){
  const c=document.getElementById('exercise-chart'),ctx=c.getContext('2d'),hint=document.getElementById('exercise-chart-hint'),mile=document.getElementById('exercise-milestones');
  const pts=[];
  [...appState.workouts].sort((a,b)=>a.date.localeCompare(b.date)).forEach(w=>{
    const ex=w.exercises.find(e=>e.name.toLowerCase()===name.toLowerCase());
    if(ex){const vs=ex.sets.filter(s=>s.weight>0||s.reps>0);if(vs.length>0){const mw=Math.max(...vs.map(s=>s.weight)),bs=vs.reduce((b,cur)=>cur.weight>b.weight?cur:b,vs[0]);pts.push({date:w.date,maxWeight:mw,reps:bs.reps});}}
  });
  if(pts.length>0){
    const pr=pts.reduce((b,cur)=>cur.maxWeight>=b.maxWeight?cur:b,pts[0]);
    document.getElementById('pr-max-weight').textContent=`${pr.maxWeight} kg`;document.getElementById('pr-max-date').textContent=formatDateES(pr.date);
    hint.textContent=`${pts.length} sesión(es) registradas.`;
    const ms=[];let rec=-1;pts.forEach(p=>{if(p.maxWeight>rec){ms.push(p);rec=p.maxWeight;}});
    mile.innerHTML=ms.reverse().map(m=>`<div class="milestone-item"><span><strong>${m.maxWeight} kg</strong> (${m.reps} reps)</span><span>${formatDateES(m.date)}</span></div>`).join('');
  }else{document.getElementById('pr-max-weight').textContent='-- kg';document.getElementById('pr-max-date').textContent='--';hint.textContent='Registra una sesión para ver la gráfica.';mile.innerHTML='';}
  drawLineChart(ctx,c.width,c.height,pts.map(p=>({label:p.date.slice(5),value:p.maxWeight})),'#10B981','kg');
}

function renderVolumeChart(){
  const c=document.getElementById('volume-chart'),ctx=c.getContext('2d'),now=new Date(),weeks=[];
  for(let i=5;i>=0;i--){
    const d=new Date(now);d.setDate(d.getDate()-i*7);
    const s=getStartOfWeek(d),e=new Date(s);e.setDate(e.getDate()+6);e.setHours(23,59,59,999);
    let v=0;appState.workouts.forEach(w=>{const wd=new Date(w.date+'T12:00:00');if(wd>=s&&wd<=e)w.exercises.forEach(ex=>ex.sets.forEach(st=>{if(st.weight>0&&st.reps>0)v+=st.weight*st.reps;}));});
    weeks.push({label:`S${getISOWeekNumber(s)}`,value:Math.round(v)});
  }
  drawBarChart(ctx,c.width,c.height,weeks,'#38BDF8');
}

function renderWorkoutHistoryList(){
  const c=document.getElementById('workout-history-list'),sorted=[...appState.workouts].sort((a,b)=>b.date.localeCompare(a.date));
  if(sorted.length===0){c.innerHTML='<div class="card"><p class="muted-small">Sin historial todavía.</p></div>';return;}
  c.innerHTML=sorted.map(w=>{
    const lines=w.exercises.map(ex=>{const ss=ex.sets.filter(s=>s.weight>0||s.reps>0||s.completed).map(s=>`${s.weight}kg×${s.reps}`).join(', ');return ss?`<div class="hist-ex-line"><span>${ex.name}</span><strong>${ss}</strong></div>`:'';}).join('');
    return `<div class="hist-card"><div class="hist-top"><span class="hist-title">${w.dayName}</span><span class="hist-date">${formatDateES(w.date)}</span></div><div class="hist-body">${lines}</div><button class="btn-delete-sm" data-del-w="${w.id}">Eliminar</button></div>`;
  }).join('');
  c.querySelectorAll('[data-del-w]').forEach(b=>b.addEventListener('click',()=>{if(!confirm('¿Eliminar sesión?'))return;appState.workouts=appState.workouts.filter(w=>w.id!==b.dataset.delW);saveDB();refreshProgressView();renderHome();}));
}

function renderCalendar(){
  const y=calendarCursor.getFullYear(),m=calendarCursor.getMonth(),mNames=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  document.getElementById('cal-month-title').textContent=`${mNames[m]} ${y}`;
  const fd=new Date(y,m,1).getDay(),off=fd===0?6:fd-1,dim=new Date(y,m+1,0).getDate(),today=getTodayISO(),g=document.getElementById('cal-grid');g.innerHTML='';
  for(let i=0;i<off;i++){const e=document.createElement('div');e.className='cal-day empty';g.appendChild(e);}
  for(let d=1;d<=dim;d++){
    const iso=`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const hs=appState.workouts.some(w=>w.date===iso),hc=appState.cardio.some(c=>c.date===iso);
    const cell=document.createElement('div');cell.className=`cal-day ${iso===today?'today':''}`;
    cell.innerHTML=`<span>${d}</span><div class="cal-dots">${hs?'<i class="dot dot-strength"></i>':''}${hc?'<i class="dot dot-cardio"></i>':''}</div>`;
    g.appendChild(cell);
  }
}

function renderCardioHistory(){
  const l=document.getElementById('cardio-history-list'),s=[...appState.cardio].sort((a,b)=>b.date.localeCompare(a.date));
  l.innerHTML=s.length===0?'<div class="card"><p class="muted-small">Sin registros de cardio.</p></div>':s.map(c=>`<div class="hist-card"><div class="hist-top"><span class="hist-title">${c.type}</span><span class="hist-date">${formatDateES(c.date)}</span></div><div class="hist-body"><strong>${c.duration} min</strong>${c.distance?` · ${c.distance} km`:''}</div><button class="btn-delete-sm" data-del-c="${c.id}">Eliminar</button></div>`).join('');
  l.querySelectorAll('[data-del-c]').forEach(b=>b.addEventListener('click',()=>{appState.cardio=appState.cardio.filter(c=>c.id!==b.dataset.delC);saveDB();renderCardioHistory();renderHome();}));
}

function refreshBodyView(){
  const asc=[...appState.body].sort((a,b)=>a.date.localeCompare(b.date)),desc=[...asc].reverse();
  if(desc.length>0){
    document.getElementById('kpi-latest-weight').textContent=`${desc[0].weight} kg`;document.getElementById('kpi-latest-waist').textContent=`${desc[0].waist} cm`;
    if(desc.length>1){const dw=(desc[0].weight-desc[1].weight).toFixed(1),da=(desc[0].waist-desc[1].waist).toFixed(1);document.getElementById('kpi-diff-weight').textContent=`${dw>0?'+':''}${dw} kg`;document.getElementById('kpi-diff-waist').textContent=`${da>0?'+':''}${da} cm`;}
  }
  const c=document.getElementById('body-chart');drawDualLineChart(c.getContext('2d'),c.width,c.height,asc.map(b=>b.date.slice(5)),asc.map(b=>b.weight),asc.map(b=>b.waist));
  const bl=document.getElementById('body-history-list');
  bl.innerHTML=desc.map(b=>`<div class="hist-card"><div class="hist-top"><span class="hist-title">${b.weight} kg · ${b.waist} cm</span><span class="hist-date">${formatDateES(b.date)}</span></div><button class="btn-delete-sm" data-del-b="${b.id}">Eliminar</button></div>`).join('');
  bl.querySelectorAll('[data-del-b]').forEach(b=>b.addEventListener('click',()=>{appState.body=appState.body.filter(x=>x.id!==b.dataset.delB);saveDB();refreshBodyView();}));
}

function drawLineChart(ctx,w,h,data,color,unit){
  ctx.clearRect(0,0,w,h);const pad={top:28,right:24,bottom:34,left:46},pw=w-pad.left-pad.right,ph=h-pad.top-pad.bottom;
  if(!data||data.length===0){ctx.fillStyle='#64748B';ctx.font='14px sans-serif';ctx.textAlign='center';ctx.fillText('Sin datos',w/2,h/2);return;}
  const vals=data.map(d=>d.value);let min=Math.min(...vals),max=Math.max(...vals);if(min===max){min=Math.max(0,min-5);max+=5;}
  const rng=max-min,coords=data.map((d,i)=>({x:data.length===1?pad.left+pw/2:pad.left+(pw/(data.length-1))*i,y:pad.top+ph-((d.value-min)/rng)*ph,label:d.label,value:d.value}));
  ctx.strokeStyle=color;ctx.lineWidth=3;ctx.beginPath();coords.forEach((c,i)=>i===0?ctx.moveTo(c.x,c.y):ctx.lineTo(c.x,c.y));ctx.stroke();
  coords.forEach(c=>{ctx.fillStyle=color;ctx.beginPath();ctx.arc(c.x,c.y,4,0,Math.PI*2);ctx.fill();ctx.fillStyle='#F8FAFC';ctx.font='bold 12px sans-serif';ctx.textAlign='center';ctx.fillText(`${c.value}${unit}`,c.x,c.y-10);ctx.fillStyle='#94A3B8';ctx.fillText(c.label,c.x,h-10);});
}
function drawBarChart(ctx,w,h,data,color){
  ctx.clearRect(0,0,w,h);const pad={top:24,right:20,bottom:32,left:52},pw=w-pad.left-pad.right,ph=h-pad.top-pad.bottom,max=Math.max(...data.map(d=>d.value),100),bw=(pw/data.length)*0.55;
  data.forEach((d,i)=>{const x=pad.left+(pw/data.length)*i+((pw/data.length)-bw)/2,bh=(d.value/max)*ph,y=pad.top+ph-bh;ctx.fillStyle=color;ctx.fillRect(x,y,bw,bh);ctx.fillStyle='#F8FAFC';ctx.font='bold 11px sans-serif';ctx.textAlign='center';if(d.value>0)ctx.fillText(d.value,x+bw/2,y-6);ctx.fillStyle='#94A3B8';ctx.fillText(d.label,x+bw/2,h-10);});
}
function drawDualLineChart(ctx,w,h,labels,s1,s2){
  ctx.clearRect(0,0,w,h);if(labels.length===0)return;
  const pad={top:24,right:24,bottom:32,left:42},pw=w-pad.left-pad.right,ph=h-pad.top-pad.bottom,all=[...s1,...s2],min=Math.min(...all)-2,max=Math.max(...all)+2,rng=Math.max(1,max-min);
  const draw=(arr,col)=>{ctx.strokeStyle=col;ctx.lineWidth=3;ctx.beginPath();arr.forEach((v,i)=>{const x=arr.length===1?pad.left+pw/2:pad.left+(pw/(arr.length-1))*i,y=pad.top+ph-((v-min)/rng)*ph;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});ctx.stroke();};
  draw(s1,'#10B981');draw(s2,'#38BDF8');
}

loadDB();
document.querySelectorAll('.nav-item').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.target)));
const todayISO=getTodayISO();
document.getElementById('workout-date-input').value=todayISO;
document.getElementById('cardio-date').value=todayISO;
document.getElementById('body-date').value=todayISO;
const mapDay={1:'lunes',2:'martes',3:'miercoles',4:'jueves',5:'viernes'};
if(mapDay[new Date().getDay()])currentDayId=mapDay[new Date().getDay()];

renderHome();renderRoutineTabs();renderWorkoutForm(currentDayId);populateProgressExerciseSelect();renderCardioHistory();refreshBodyView();

document.getElementById('btn-rest-timer').addEventListener('click',()=>{if(timerInterval){clearInterval(timerInterval);timerInterval=null;document.getElementById('btn-rest-timer').classList.remove('running');document.getElementById('timer-display').textContent='Descanso 90s';}else startRestTimer(90);});

const exModal=document.getElementById('add-exercise-modal'),exSearch=document.getElementById('catalog-search-input'),exList=document.getElementById('catalog-list'),exCustom=document.getElementById('custom-ex-name');
const catalog=[...EXTRA_GYM_CATALOG,...ROUTINE_DATA.flatMap(d=>d.exercises.map(e=>({name:e.name,cat:d.dayName})))].filter((v,i,a)=>a.findIndex(t=>t.name.toLowerCase()===v.name.toLowerCase())===i);
function renderCat(q=''){
  const f=catalog.filter(it=>it.name.toLowerCase().includes(q.toLowerCase())||it.cat.toLowerCase().includes(q.toLowerCase()));
  exList.innerHTML=f.map(it=>`<button type="button" class="catalog-item-btn" data-name="${it.name}"><span>${it.name}</span><span class="cat-tag">${it.cat}</span></button>`).join('');
  exList.querySelectorAll('.catalog-item-btn').forEach(b=>b.addEventListener('click',()=>{appendEx(b.dataset.name);exModal.classList.add('hidden');}));
}
document.getElementById('btn-open-add-exercise').addEventListener('click',()=>{exSearch.value='';exCustom.value='';renderCat('');exModal.classList.remove('hidden');});
document.getElementById('btn-close-add-ex').addEventListener('click',()=>exModal.classList.add('hidden'));
exSearch.addEventListener('input',()=>renderCat(exSearch.value));
document.getElementById('btn-add-custom-ex').addEventListener('click',()=>{if(!exCustom.value.trim()){showToast('Escribe el nombre');return;}appendEx(exCustom.value.trim());exModal.classList.add('hidden');});

document.getElementById('btn-save-workout').addEventListener('click',()=>{
  const day=ROUTINE_DATA.find(d=>d.id===currentDayId),dateVal=document.getElementById('workout-date-input').value||getTodayISO(),notes=document.getElementById('workout-general-notes').value.trim();
  const exData=[];let hasData=false;
  document.querySelectorAll('#exercises-container .ex-card').forEach(card=>{
    const sets=[];card.querySelectorAll('.set-row').forEach(r=>{
      const w=parseFloat(r.querySelector('.weight-input').value)||0,reps=parseInt(r.querySelector('.reps-input').value,10)||0,comp=r.querySelector('.set-check-btn').classList.contains('checked');
      if(comp||w>0||reps>0)hasData=true;sets.push({setNum:Number(r.dataset.setNum),weight:w,reps,completed:comp});
    });
    exData.push({id:card.dataset.exId,name:card.dataset.exName,note:card.querySelector('.ex-note-input').value.trim(),sets});
  });
  if(!hasData){showToast('Introduce al menos una serie o peso');return;}
  appState.workouts.push({id:'w_'+Date.now(),date:dateVal,dayId:day.id,dayName:day.dayName,dayTitle:day.title,notes,exercises:exData});
  saveDB();showToast('¡Entrenamiento guardado!');renderWorkoutForm(currentDayId);populateProgressExerciseSelect();renderHome();
});

document.querySelectorAll('.sub-tab').forEach(t=>t.addEventListener('click',()=>{document.querySelectorAll('.sub-tab').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.subtab-panel').forEach(p=>p.classList.remove('active'));t.classList.add('active');document.getElementById(`subtab-${t.dataset.subtab}`).classList.add('active');refreshProgressView();}));
document.getElementById('progress-exercise-select').addEventListener('change',e=>renderExerciseChart(e.target.value));
document.getElementById('cal-prev').addEventListener('click',()=>{calendarCursor.setMonth(calendarCursor.getMonth()-1);renderCalendar();});
document.getElementById('cal-next').addEventListener('click',()=>{calendarCursor.setMonth(calendarCursor.getMonth()+1);renderCalendar();});

document.getElementById('cardio-form').addEventListener('submit',e=>{e.preventDefault();appState.cardio.push({id:'c_'+Date.now(),type:document.getElementById('cardio-type').value,date:document.getElementById('cardio-date').value||getTodayISO(),duration:parseFloat(document.getElementById('cardio-duration').value)||0,distance:parseFloat(document.getElementById('cardio-distance').value)||null,speed:parseFloat(document.getElementById('cardio-speed').value)||null,hr:parseInt(document.getElementById('cardio-hr').value,10)||null,notes:document.getElementById('cardio-notes').value.trim()});saveDB();e.target.reset();document.getElementById('cardio-date').value=getTodayISO();renderCardioHistory();renderHome();showToast('Cardio guardado');});
document.getElementById('body-form').addEventListener('submit',e=>{e.preventDefault();appState.body.push({id:'b_'+Date.now(),date:document.getElementById('body-date').value||getTodayISO(),weight:parseFloat(document.getElementById('body-weight').value),waist:parseFloat(document.getElementById('body-waist').value)});saveDB();e.target.reset();document.getElementById('body-date').value=getTodayISO();refreshBodyView();showToast('Medidas guardadas');});

const bkModal=document.getElementById('backup-modal');
document.getElementById('btn-open-backup').addEventListener('click',()=>bkModal.classList.remove('hidden'));
document.getElementById('btn-close-backup').addEventListener('click',()=>bkModal.classList.add('hidden'));
document.getElementById('btn-export-data').addEventListener('click',()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(appState,null,2)],{type:'application/json'}));a.download=`ANDRU_FITNESS_${getTodayISO()}.json`;a.click();});
document.getElementById('input-import-data').addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>{try{const imp=JSON.parse(ev.target.result);if(imp.workouts&&imp.cardio&&imp.body){appState=imp;saveDB();renderHome();renderWorkoutForm(currentDayId);bkModal.classList.add('hidden');showToast('Datos restaurados');}}catch{}};r.readAsText(f);});
})();
