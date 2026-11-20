<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
  <meta name="theme-color" content="#0B132B" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="ANDRU FITNESS" />
  <title>ANDRU FITNESS</title>
  <link id="dynamic-manifest" rel="manifest" />
  <link id="dynamic-icon" rel="icon" type="image/svg+xml" />
  <link id="dynamic-apple-icon" rel="apple-touch-icon" />
  <style>
:root{--bg-primary:#0B132B;--bg-secondary:#131E3A;--bg-card:#1C2541;--bg-input:#0F172A;--text-white:#F8FAFC;--text-gray:#94A3B8;--text-muted:#64748B;--accent-green:#10B981;--accent-green-dark:#059669;--accent-green-glow:rgba(16,185,129,0.16);--accent-blue:#38BDF8;--danger:#EF4444;--border-color:rgba(148,163,184,0.15);--radius-lg:18px;--radius-md:12px;--radius-sm:8px;--safe-top:env(safe-area-inset-top,0px);--safe-bottom:env(safe-area-inset-bottom,0px)}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background-color:#060B19;color:var(--text-white);line-height:1.45;overflow-x:hidden}
.app-shell{max-width:520px;margin:0 auto;min-height:100dvh;background-color:var(--bg-primary);display:flex;flex-direction:column;position:relative;box-shadow:0 0 40px rgba(0,0,0,0.6)}
.top-bar{position:sticky;top:0;z-index:30;background:rgba(11,19,43,0.92);backdrop-filter:blur(12px);padding:calc(12px + var(--safe-top)) 16px 12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border-color)}
.brand{display:flex;align-items:center;gap:10px}
.brand-badge{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,var(--accent-green),var(--accent-green-dark));color:#062016;font-weight:900;font-size:14px;display:flex;align-items:center;justify-content:center}
.brand-title{display:block;font-weight:800;font-size:15px;letter-spacing:0.8px}
.brand-sub{display:block;font-size:11px;color:var(--accent-green)}
.top-actions{display:flex;gap:8px}
.btn-icon{width:38px;height:38px;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-card);color:var(--text-white);display:flex;align-items:center;justify-content:center;cursor:pointer}
.main-content{flex:1;padding:16px 16px calc(92px + var(--safe-bottom))}
.view{display:none;animation:fadeIn 0.2s ease}.view.active{display:block}
@keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.hero-card{background:linear-gradient(145deg,var(--bg-card) 0%,#111B36 100%);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:18px;margin-bottom:20px}
.hero-top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}
.greeting{color:var(--accent-green);font-weight:600;font-size:13px}
.hero-title{font-size:22px;font-weight:900;letter-spacing:0.5px;margin-top:2px}
.week-pill{background:var(--accent-green-glow);color:var(--accent-green);border:1px solid rgba(16,185,129,0.35);font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;white-space:nowrap}
.hero-date{color:var(--text-gray);font-size:12px;margin-top:4px;text-transform:capitalize}
.progress-box{margin-top:16px;background:rgba(11,19,43,0.65);padding:12px;border-radius:var(--radius-md)}
.progress-header{display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px;color:var(--text-gray)}
.progress-header strong{color:var(--text-white)}
.progress-track{height:8px;background:var(--bg-input);border-radius:99px;overflow:hidden}
.progress-fill{height:100%;background:linear-gradient(90deg,var(--accent-green-dark),var(--accent-green));border-radius:99px;transition:width 0.4s ease}
.quick-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px}
.q-stat{background:rgba(11,19,43,0.5);border-radius:var(--radius-sm);padding:10px 8px;text-align:center}
.q-val{display:block;font-size:15px;font-weight:800;color:var(--text-white)}
.q-lbl{display:block;font-size:10px;color:var(--text-gray);margin-top:2px}
.section-header{display:flex;justify-content:space-between;align-items:center;margin:18px 0 10px}
.section-header h2{font-size:16px;font-weight:700}
.badge-green{font-size:11px;color:var(--accent-green);font-weight:600}
.card{background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:16px;margin-bottom:14px}
.card h2,.card h3{font-size:16px;margin-bottom:10px}
.days-grid{display:flex;flex-direction:column;gap:10px}
.day-card-btn{width:100%;text-align:left;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:14px 16px;color:var(--text-white);display:flex;align-items:center;justify-content:space-between;cursor:pointer}
.day-card-btn.done-this-week{border-left:4px solid var(--accent-green)}
.day-pill{font-size:11px;font-weight:800;color:var(--accent-green);letter-spacing:0.6px}
.day-name{display:block;font-size:14px;font-weight:700;margin-top:2px}
.day-meta{display:block;font-size:11px;color:var(--text-gray);margin-top:2px}
.day-status-icon{width:30px;height:30px;border-radius:50%;background:var(--bg-input);display:flex;align-items:center;justify-content:center;color:var(--text-gray);flex-shrink:0}
.day-card-btn.done-this-week .day-status-icon{background:var(--accent-green-glow);color:var(--accent-green)}
.day-selector-scroll{display:flex;gap:8px;overflow-x:auto;padding-bottom:10px;margin-bottom:10px;scrollbar-width:none}
.day-selector-scroll::-webkit-scrollbar{display:none}
.day-tab{padding:8px 14px;border-radius:99px;border:1px solid var(--border-color);background:var(--bg-card);color:var(--text-gray);font-weight:700;font-size:12px;white-space:nowrap;cursor:pointer}
.day-tab.active{background:var(--accent-green);color:#052016;border-color:var(--accent-green)}
.workout-header-card{background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:14px;margin-bottom:14px}
.wh-tag{font-size:11px;font-weight:800;color:var(--accent-green)}
.workout-header-card h2{font-size:15px;margin-top:2px}
.wh-controls{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:12px;padding-top:10px;border-top:1px solid var(--border-color)}
.date-input-group{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-gray)}
.date-input-group input{background:var(--bg-input);border:1px solid var(--border-color);color:var(--text-white);padding:6px 8px;border-radius:var(--radius-sm);font-size:12px}
.btn-timer{background:var(--bg-card);border:1px solid rgba(16,185,129,0.4);color:var(--accent-green);padding:6px 10px;border-radius:var(--radius-sm);font-size:12px;font-weight:700;display:flex;align-items:center;gap:5px;cursor:pointer}
.btn-timer.running{background:var(--accent-green);color:#052016}
.exercises-list{display:flex;flex-direction:column;gap:12px}
.ex-card{background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:14px}
.ex-header{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px}
.ex-title{font-size:15px;font-weight:700}
.ex-target{display:inline-block;font-size:11px;color:var(--accent-green);background:var(--accent-green-glow);padding:2px 8px;border-radius:6px;font-weight:600;margin-top:3px}
.ex-remove-btn{background:transparent;border:none;color:var(--text-muted);font-size:16px;padding:2px 6px;cursor:pointer}
.ex-prev-badge{font-size:11px;color:var(--text-gray);background:var(--bg-input);padding:5px 8px;border-radius:6px;margin-bottom:10px;border-left:2px solid var(--accent-blue)}
.sets-table-head{display:grid;grid-template-columns:44px 1fr 1fr 44px;gap:8px;font-size:11px;color:var(--text-gray);text-align:center;margin-bottom:6px;font-weight:600}
.set-row{display:grid;grid-template-columns:44px 1fr 1fr 44px;gap:8px;align-items:center;margin-bottom:7px}
.set-num{text-align:center;font-weight:700;font-size:13px;color:var(--text-gray);background:var(--bg-input);height:38px;line-height:38px;border-radius:var(--radius-sm)}
.set-input{width:100%;height:38px;background:var(--bg-input);border:1px solid var(--border-color);border-radius:var(--radius-sm);color:var(--text-white);text-align:center;font-size:14px;font-weight:700}
.set-check-btn{width:38px;height:38px;border-radius:var(--radius-sm);border:1px solid var(--border-color);background:var(--bg-input);color:var(--text-muted);display:flex;align-items:center;justify-content:center;cursor:pointer;margin:0 auto}
.set-check-btn.checked{background:var(--accent-green);border-color:var(--accent-green);color:#052016}
.set-actions-bar{display:flex;gap:8px;margin:6px 0 8px}
.btn-add-set{flex:1;background:rgba(16,185,129,0.1);border:1px dashed rgba(16,185,129,0.45);color:var(--accent-green);border-radius:var(--radius-sm);padding:7px 10px;font-size:12px;font-weight:700;cursor:pointer}
.btn-del-set{background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);color:var(--danger);border-radius:var(--radius-sm);padding:7px 10px;font-size:12px;font-weight:700;cursor:pointer}
.btn-add-exercise-main{width:100%;margin-top:14px;background:var(--bg-secondary);border:1.5px dashed var(--accent-blue);color:var(--accent-blue);border-radius:var(--radius-md);padding:12px;font-size:13px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px}
.ex-note-input{width:100%;margin-top:4px;background:var(--bg-input);border:1px solid var(--border-color);border-radius:var(--radius-sm);padding:7px 10px;color:var(--text-white);font-size:12px}
.workout-footer-actions{margin-top:14px;background:var(--bg-card);padding:14px;border-radius:var(--radius-md);border:1px solid var(--border-color)}
.field-label{display:block;font-size:12px;color:var(--text-gray);margin-bottom:6px}
textarea,.select-input,.form-group input,.text-input{width:100%;background:var(--bg-input);border:1px solid var(--border-color);border-radius:var(--radius-sm);padding:10px 12px;color:var(--text-white);font-size:14px;font-family:inherit}
.btn-primary{width:100%;background:linear-gradient(135deg,var(--accent-green),var(--accent-green-dark));color:#041F15;border:none;border-radius:var(--radius-md);padding:13px 16px;font-size:15px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;margin-top:12px}
.btn-secondary{width:100%;background:var(--bg-input);color:var(--text-white);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:12px 16px;font-size:14px;font-weight:700;text-align:center;cursor:pointer;display:block}
.sub-tabs{display:grid;grid-template-columns:repeat(3,1fr);background:var(--bg-secondary);padding:4px;border-radius:var(--radius-md);margin-bottom:14px}
.sub-tab{background:transparent;border:none;color:var(--text-gray);padding:8px 4px;font-size:12px;font-weight:700;border-radius:var(--radius-sm);cursor:pointer}
.sub-tab.active{background:var(--bg-card);color:var(--accent-green)}
.subtab-panel{display:none}.subtab-panel.active{display:block}
.pr-banner{display:flex;justify-content:space-between;align-items:center;background:var(--bg-input);border:1px solid rgba(16,185,129,0.3);border-radius:var(--radius-md);padding:12px 14px;margin:12px 0}
.pr-label{display:block;font-size:11px;color:var(--text-gray)}.pr-value{font-size:20px;color:var(--accent-green);font-weight:900}.pr-right{text-align:right}.pr-date{font-size:13px;color:var(--text-white)}
.chart-wrapper{width:100%;margin-top:10px;background:var(--bg-input);border-radius:var(--radius-md);padding:8px}
canvas{width:100%;height:auto;display:block}
.chart-hint,.muted-small{font-size:12px;color:var(--text-gray);margin-top:8px}
.milestones-list{margin-top:12px;display:flex;flex-direction:column;gap:6px}
.milestone-item{display:flex;justify-content:space-between;align-items:center;background:rgba(15,23,42,0.7);padding:8px 12px;border-radius:var(--radius-sm);font-size:12px}
.milestone-item strong{color:var(--accent-green)}
.history-list{display:flex;flex-direction:column;gap:10px}
.hist-card{background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:14px}
.hist-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
.hist-title{font-weight:700;font-size:14px;color:var(--accent-green)}.hist-date{font-size:12px;color:var(--text-gray)}.hist-body{font-size:12px;color:var(--text-gray)}
.hist-ex-line{padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;justify-content:space-between;gap:8px}
.btn-delete-sm{background:transparent;border:none;color:var(--danger);font-size:11px;cursor:pointer;margin-top:8px;padding:4px 0}
.cal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
.btn-icon-sm{width:30px;height:30px;border-radius:8px;background:var(--bg-input);border:1px solid var(--border-color);color:var(--text-white);cursor:pointer}
.cal-weekdays,.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;text-align:center}
.cal-weekdays span{font-size:11px;color:var(--text-gray);font-weight:700}
.cal-day{aspect-ratio:1;background:var(--bg-input);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:12px;cursor:pointer}
.cal-day.empty{background:transparent;cursor:default}.cal-day.today{border:1px solid var(--accent-green)}
.cal-dots{display:flex;gap:3px;margin-top:3px}.dot{width:6px;height:6px;border-radius:50%;display:inline-block}
.dot-strength{background:var(--accent-green)}.dot-cardio{background:#F59E0B}.dot-blue{background:var(--accent-blue)}
.cal-legend{display:flex;gap:16px;justify-content:center;margin-top:12px;font-size:11px;color:var(--text-gray)}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.form-group.full,.btn-primary.full{grid-column:1 / -1}
.form-group label{display:block;font-size:12px;color:var(--text-gray);margin-bottom:4px}
.body-kpis{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
.kpi-box{background:var(--bg-input);padding:12px;border-radius:var(--radius-md)}.kpi-box span{display:block;font-size:11px;color:var(--text-gray)}.kpi-box strong{display:block;font-size:18px;color:var(--text-white);margin:2px 0}.kpi-box small{font-size:11px;color:var(--accent-green)}
.bottom-nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:520px;background:rgba(11,19,43,0.96);backdrop-filter:blur(14px);border-top:1px solid var(--border-color);display:grid;grid-template-columns:repeat(5,1fr);padding:8px 4px calc(8px + var(--safe-bottom));z-index:40}
.nav-item{background:transparent;border:none;color:var(--text-gray);display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10px;font-weight:600;cursor:pointer}
.nav-item.active{color:var(--accent-green)}
.modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,0.78);display:flex;align-items:center;justify-content:center;padding:16px;z-index:100}
.modal-card{background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:20px;width:100%;max-width:420px;max-height:85dvh;overflow-y:auto}
.modal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
.backup-actions{display:flex;flex-direction:column;gap:10px;margin-top:16px}
.catalog-list{max-height:240px;overflow-y:auto;display:flex;flex-direction:column;gap:6px;margin-top:10px}
.catalog-item-btn{width:100%;text-align:left;background:var(--bg-input);border:1px solid var(--border-color);color:var(--text-white);padding:10px 12px;border-radius:var(--radius-sm);font-size:13px;display:flex;justify-content:space-between;align-items:center;cursor:pointer}
.catalog-item-btn span.cat-tag{font-size:10px;color:var(--accent-green);background:var(--accent-green-glow);padding:2px 6px;border-radius:4px}
.toast{position:fixed;bottom:84px;left:50%;transform:translateX(-50%);background:var(--accent-green);color:#041F15;font-weight:800;font-size:13px;padding:10px 18px;border-radius:99px;box-shadow:0 8px 24px rgba(0,0,0,0.4);z-index:200;white-space:nowrap}
.hidden{display:none !important}
  </style>
</head>
<body>
  <div class="app-shell">
    <header class="top-bar">
      <div class="brand">
        <div class="brand-badge">AF</div>
        <div><span class="brand-title">ANDRU FITNESS</span><span class="brand-sub">Modo Local · Datos Seguros</span></div>
      </div>
      <div class="top-actions">
        <button id="btn-install-pwa" class="btn-icon hidden" title="Instalar App"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></button>
        <button id="btn-open-backup" class="btn-icon" title="Copia de Seguridad"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></button>
      </div>
    </header>
    <main class="main-content" id="main-scroll">
      <section id="view-inicio" class="view active">
        <div class="hero-card">
          <div class="hero-top"><div><p class="greeting" id="greeting-text">¡Hola, Andru!</p><h1 class="hero-title">ANDRU FITNESS</h1></div><span class="week-pill" id="current-week-label">Semana Actual</span></div>
          <p class="hero-date" id="current-date-label"></p>
          <div class="progress-box"><div class="progress-header"><span>Progreso semanal</span><strong id="weekly-count-label">0 / 5 entrenamientos</strong></div><div class="progress-track"><div class="progress-fill" id="weekly-progress-bar" style="width:0%"></div></div></div>
          <div class="quick-stats">
            <div class="q-stat"><span class="q-val" id="stat-total-workouts">0</span><span class="q-lbl">Sesiones totales</span></div>
            <div class="q-stat"><span class="q-val" id="stat-weekly-volume">0 kg</span><span class="q-lbl">Volumen semana</span></div>
            <div class="q-stat"><span class="q-val" id="stat-cardio-week">0 min</span><span class="q-lbl">Cardio semana</span></div>
          </div>
        </div>
        <div class="section-header"><h2>Tu Rutina de 5 Días</h2><span class="badge-green">Toca para entrenar</span></div>
        <div id="home-days-list" class="days-grid"></div>
        <div class="section-header"><h2>Resumen de Actividad Reciente</h2></div>
        <div id="recent-activity-card" class="card"><p class="muted-small">Aún no has registrado entrenamientos. Selecciona un día arriba para empezar.</p></div>
      </section>
      <section id="view-rutina" class="view">
        <div class="day-selector-scroll" id="routine-day-tabs"></div>
        <div class="workout-header-card">
          <div><span class="wh-tag" id="selected-day-badge">LUNES</span><h2 id="selected-day-title">EMPUJE</h2></div>
          <div class="wh-controls">
            <div class="date-input-group"><label for="workout-date-input">Fecha sesión:</label><input type="date" id="workout-date-input" /></div>
            <button type="button" class="btn-timer" id="btn-rest-timer"><span id="timer-display">Descanso 90s</span></button>
          </div>
        </div>
        <div id="exercises-container" class="exercises-list"></div>
        <button type="button" id="btn-open-add-exercise" class="btn-add-exercise-main">+ Agregar otro ejercicio a esta sesión</button>
        <div class="workout-footer-actions">
          <label class="field-label" for="workout-general-notes">Notas generales de la sesión (opcional)</label>
          <textarea id="workout-general-notes" rows="2" placeholder="Ej. Buenas sensaciones, subí peso..."></textarea>
          <button type="button" id="btn-save-workout" class="btn-primary">Guardar Entrenamiento Completo</button>
        </div>
      </section>
      <section id="view-progreso" class="view">
        <div class="sub-tabs"><button class="sub-tab active" data-subtab="evolucion">Evolución</button><button class="sub-tab" data-subtab="historial">Historial</button><button class="sub-tab" data-subtab="calendario">Calendario</button></div>
        <div id="subtab-evolucion" class="subtab-panel active">
          <div class="card">
            <label class="field-label" for="progress-exercise-select">Ejercicio:</label>
            <select id="progress-exercise-select" class="select-input"></select>
            <div class="pr-banner"><div><span class="pr-label">Récord Personal</span><strong class="pr-value" id="pr-max-weight">-- kg</strong></div><div class="pr-right"><span class="pr-label">Conseguido el</span><strong class="pr-date" id="pr-max-date">--</strong></div></div>
            <div class="chart-wrapper"><canvas id="exercise-chart" width="600" height="280"></canvas></div>
            <p class="chart-hint" id="exercise-chart-hint"></p>
            <div id="exercise-milestones" class="milestones-list"></div>
          </div>
          <div class="card"><h3>Volumen Semanal (kg)</h3><div class="chart-wrapper"><canvas id="volume-chart" width="600" height="250"></canvas></div></div>
        </div>
        <div id="subtab-historial" class="subtab-panel"><div id="workout-history-list" class="history-list"></div></div>
        <div id="subtab-calendario" class="subtab-panel">
          <div class="card">
            <div class="cal-header"><button id="cal-prev" class="btn-icon-sm">&lt;</button><h3 id="cal-month-title">Mes</h3><button id="cal-next" class="btn-icon-sm">&gt;</button></div>
            <div class="cal-weekdays"><span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span></div>
            <div id="cal-grid" class="cal-grid"></div>
            <div class="cal-legend"><span><i class="dot dot-strength"></i> Fuerza</span><span><i class="dot dot-cardio"></i> Cardio</span></div>
          </div>
          <div id="cal-selected-details" class="card hidden"></div>
        </div>
      </section>
      <section id="view-cardio" class="view">
        <div class="card">
          <h2>Registrar Cardio</h2>
          <form id="cardio-form" class="form-grid">
            <div class="form-group full"><label>Modalidad</label><select id="cardio-type" class="select-input" required><option value="Running">Running</option><option value="Bicicleta">Bicicleta</option><option value="Bicicleta estática">Bicicleta estática</option><option value="Elíptica">Elíptica</option><option value="Caminadora inclinada">Caminadora inclinada</option><option value="Escaladora">Escaladora</option></select></div>
            <div class="form-group"><label>Fecha</label><input type="date" id="cardio-date" required /></div>
            <div class="form-group"><label>Duración (min)</label><input type="number" id="cardio-duration" min="1" required /></div>
            <div class="form-group"><label>Distancia (km)</label><input type="number" id="cardio-distance" step="0.01" /></div>
            <div class="form-group"><label>Velocidad (km/h)</label><input type="number" id="cardio-speed" step="0.1" /></div>
            <div class="form-group full"><label>FC media (ppm)</label><input type="number" id="cardio-hr" /></div>
            <div class="form-group full"><label>Observaciones</label><input type="text" id="cardio-notes" /></div>
            <button type="submit" class="btn-primary full">Guardar Cardio</button>
          </form>
        </div>
        <div class="section-header"><h2>Historial de Cardio</h2></div>
        <div id="cardio-history-list" class="history-list"></div>
      </section>
      <section id="view-medidas" class="view">
        <div class="card">
          <h2>Medidas Corporales</h2>
          <form id="body-form" class="form-grid">
            <div class="form-group full"><label>Fecha</label><input type="date" id="body-date" required /></div>
            <div class="form-group"><label>Peso (kg)</label><input type="number" id="body-weight" step="0.1" required /></div>
            <div class="form-group"><label>Abdomen (cm)</label><input type="number" id="body-waist" step="0.1" required /></div>
            <button type="submit" class="btn-primary full">Guardar Medición</button>
          </form>
        </div>
        <div class="card">
          <h3>Evolución Física</h3>
          <div class="body-kpis">
            <div class="kpi-box"><span>Último Peso</span><strong id="kpi-latest-weight">-- kg</strong><small id="kpi-diff-weight">--</small></div>
            <div class="kpi-box"><span>Abdomen</span><strong id="kpi-latest-waist">-- cm</strong><small id="kpi-diff-waist">--</small></div>
          </div>
          <div class="chart-wrapper"><canvas id="body-chart" width="600" height="260"></canvas></div>
        </div>
        <div id="body-history-list" class="history-list"></div>
      </section>
    </main>
    <nav class="bottom-nav">
      <button class="nav-item active" data-target="view-inicio"><span>Inicio</span></button>
      <button class="nav-item" data-target="view-rutina"><span>Rutina</span></button>
      <button class="nav-item" data-target="view-progreso"><span>Progreso</span></button>
      <button class="nav-item" data-target="view-cardio"><span>Cardio</span></button>
      <button class="nav-item" data-target="view-medidas"><span>Medidas</span></button>
    </nav>
  </div>
  <div id="add-exercise-modal" class="modal-backdrop hidden">
    <div class="modal-card">
      <div class="modal-header"><h3>Agregar Ejercicio</h3><button id="btn-close-add-ex" class="btn-icon-sm">✕</button></div>
      <label class="field-label">Buscar en el catálogo del gimnasio:</label>
      <input type="text" id="catalog-search-input" class="text-input" placeholder="Ej. Aductores, Abductores, Hack, Fondos..." />
      <div id="catalog-list" class="catalog-list"></div>
      <div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--border-color)">
        <label class="field-label">¿No está en la lista? Escribe el nombre personalizado:</label>
        <div style="display:flex;gap:8px"><input type="text" id="custom-ex-name" class="text-input" placeholder="Nombre de la máquina..." /><button type="button" id="btn-add-custom-ex" class="btn-primary" style="margin-top:0;width:auto;padding:0 16px">Agregar</button></div>
      </div>
    </div>
  </div>
  <div id="backup-modal" class="modal-backdrop hidden">
    <div class="modal-card">
      <div class="modal-header"><h3>Tus Datos y Seguridad</h3><button id="btn-close-backup" class="btn-icon-sm">✕</button></div>
      <p class="muted-small">Todos tus entrenamientos se guardan localmente en tu Motorola Edge 50 Pro.</p>
      <div class="backup-actions">
        <button id="btn-export-data" class="btn-primary">Descargar Copia (.JSON)</button>
        <label class="btn-secondary">Restaurar Copia (.JSON)<input type="file" id="input-import-data" accept=".json" hidden /></label>
      </div>
    </div>
  </div>
  <div id="toast" class="toast hidden"></div>
  <script src="./app.js"></script>
</body>
</html>
