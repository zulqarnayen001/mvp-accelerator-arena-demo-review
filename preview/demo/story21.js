/* Nov 21, 2026 (Melissa's direction of Nov 20, 1:48 pm): one connected story in about 30 minutes. Loaded after
   jordan.js. The same 1280 x 720 frame, the same motion classes (rise, tile, tin, grow, data-split) and glass panels.
   - What's in the Way: the four organizational barriers, then (Next) the leadership behavior under each one
   - The North Star: the Leadership Conditioning Index, with Frequency, Speed and Consistency (no numbers on screen)
   - Jordan: the Athleader we follow; three perspectives, with a label on each screen saying whose view it is
   - His 90-Day Way: his conditioning priority, a personal commitment and a professional one, tied to the squad's goal
   - The Game Plan: five cards (the room's challenge, Jordan's example, what we measure, the business value)
   - The closing message on the next-step screen */
(() => {
  'use strict';
  const C = window.DEMO_CARDS, S = () => window.DEMO_SAMPLE, SC = () => window.DEMO_SCN();
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const d = t => `style="--d:${(+t).toFixed(2)}s"`;
  const photo = (n, pos, z) => `<div class="plx" style="--z:${z == null ? 14 : z}"><div class="ph kb" style="background-image:url(assets/ph/ai_${n}.jpg);background-position:${pos || '50% 50%'}"></div></div>`;
  const grain = '<div class="grain" aria-hidden="true"></div>';
  const H = (tag, txt, d0, cls) => `<${tag} class="${cls || ''}" data-split style="--d0:${d0}s">${txt}</${tag}>`;
  const C4 = { Agility: 'ag', Resilience: 're', Alignment: 'al', Wellbeing: 'we' };
  const chip = p => `<span class="c4 ${C4[p] || ''}">${esc(p)}</span>`;
  const CO = () => (window.DEMO_PROSPECT && window.DEMO_PROSPECT.company) || '';
  const squadGoal = () => `grow ${SC().focus} revenue in the top 20 accounts this quarter`;

  // ---------------------------------------------------------------- What's in the Way: barriers, then behaviors
  const BAR = [
    ['Pressure and capacity constraints', 'Reacting instead of responding'],
    ['Old mindsets, new demands', 'Defaulting to familiar approaches'],
    ['Siloed priorities', 'Protecting functional goals over shared outcomes'],
    ['Delayed execution', 'Delaying tough decisions']];
  // The four obstacles stay on the stream. Each one's label sits in a column under its rock; on the second step the
  // leadership behavior appears under the barrier, in gold, so each barrier and its behavior read as a pair.
  C.inway = x => {
    const c = SC(), X = window.__V8X, two = (x.build || 1) >= 2, cont = !!x._cont && two;
    // four columns, 280 px wide from x = 96; each rock sits over the middle of its column and its lead line points down
    X.ROCKS.forEach((r, i) => { r[0] = 96 + 140 + i * 288; r[2] = 1; });
    const cols = '<div class="icg8">' + BAR.map((b, i) => {
      const beh = two ? `<em class="bh8 rise${cont ? ' nx8' : ''}" ${d(cont ? .15 + i * .14 : 1.9 + i * .14)}>${esc(b[1])}</em>` : '';
      return `<div class="icol8 tile rise${two && i === 3 ? ' key' : ''}" style="--d:${(1.2 + i * .14).toFixed(2)}s"><b>${esc(b[0])}</b>${beh}</div>`;
    }).join('') + '</div>';
    const legend = `<div class="ilg8"><span class="rise" ${d(1.0)}><i class="o"></i>Organizational barrier</span>${two ? `<span class="rise${cont ? ' nx8' : ''}" ${d(cont ? .1 : 1.8)}><i class="g"></i>Leadership behavior under pressure</span>` : ''}</div>`;
    const line = two ? `<p class="ift8 rise${cont ? ' nx8' : ''}" ${d(cont ? .8 : 2.5)}>Each barrier has a leadership habit that keeps it in place.</p>` : '';
    return `<div class="card v8 s-inway in8${two ? ' two' : ''}${cont ? ' cont' : ''}"><div class="aura"></div>${X.stream()}${grain}
      <span class="send st rise" ${d(.5)}>The plan</span><span class="send amb8 rise" ${d(.9)}>The ${esc(c.ambitionTxt)} goal</span>${cols}
      <div class="in">
        <p class="eyebrow rise" ${d(.1)}>Sound familiar?</p>
        ${H('h2', 'What’s in the way', .2)}
        ${legend}${line}
      </div></div>`;
  };

  // ---------------------------------------------------------------- the room's question (Melissa's wording)
  C.prompt = () => `<div class="card v8 s-prompt"><div class="pframe wipe" ${d(0)}>${photo('woman_lookup_planning_wall', '50% 28%', 8)}<div class="shade sh-pf"></div></div>${grain}
    <div class="in">
      <p class="eyebrow rise" ${d(.3)}>Your turn</p>
      <p class="question rise" ${d(.4)}>What’s getting in the way of your organization’s most important <em>transformation?</em></p>
      <label class="ans glass rise" ${d(.8)}><span>Your answer</span><textarea id="ansBox" rows="2" maxlength="160" placeholder="For example: decisions are too slow">${esc(window.DEMO_ANSWER || '')}</textarea></label>
      <p class="ahint rise" ${d(1)}>We’ll come back to this at the end.</p>
    </div></div>`;

  // ---------------------------------------------------------------- the North Star
  const star = `<svg class="ns-star" viewBox="-60 -60 120 120" aria-hidden="true"><defs>
      <radialGradient id="nsg" cx="0" cy="0" r="60" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#F1E2BC" stop-opacity=".55"/><stop offset=".45" stop-color="#C9A45C" stop-opacity=".16"/><stop offset="1" stop-color="#C9A45C" stop-opacity="0"/></radialGradient>
      <linearGradient id="nsf" x1="0" y1="-46" x2="0" y2="46" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#F1E2BC"/><stop offset="1" stop-color="#C9A45C"/></linearGradient></defs>
      <circle class="ns-glow" r="58" fill="url(#nsg)"/>
      <path class="ns-ray" d="M0 -52 L0 -30 M0 30 L0 52 M-52 0 L-30 0 M30 0 L52 0" pathLength="1"/>
      <path class="ns-pt" fill="url(#nsf)" d="M0 -44 C3 -12 12 -3 44 0 C12 3 3 12 0 44 C-3 12 -12 3 -44 0 C-12 -3 -3 -12 0 -44Z"/></svg>`;
  C.northstar = () => {
    const dims = [['Frequency', 'How often leaders reach their best response'],
      ['Speed', 'How quickly they recover, adapt and respond'],
      ['Consistency', 'How reliably they reach it as conditions change']]
      .map((t, i) => `<div class="nsd tile rise" ${d(1.0 + i * .14)}><b>${esc(t[0])}</b><span>${esc(t[1])}</span></div>`).join('');
    const outs = S().impact.outcomes.map(o => `<span>${esc(o[0])}</span>`).join('');
    const flow = `<div class="nsf8">
        <div class="nf rise" ${d(1.5)}><span class="nfk">How we condition</span><b>Athleadership Conditioning</b><small>Agility, Resilience, Alignment and Wellbeing, through M.V.P., practice and real work</small></div>
        <i class="nfa grow" ${d(1.7)} aria-hidden="true"></i>
        <div class="nf mid rise" ${d(1.8)}><span class="nfk">What it strengthens</span><b>Six Leadership Outcomes</b><div class="nfo">${outs}</div></div>
        <i class="nfa grow" ${d(2.0)} aria-hidden="true"></i>
        <div class="nf end rise" ${d(2.1)}><span class="nfk">What it carries</span><b>Transformation Execution</b><small>Readiness, faster adaptation, stronger execution and performance that lasts</small></div>
      </div>`;
    return `<div class="card v8 s-north"><div class="aura"></div>${grain}<div class="in">
      <p class="eyebrow rise" ${d(.1)}>Our North Star</p>
      <div class="nsh">${star}${H('h2', 'Leadership Conditioning Index<sup class="nosplit">™</sup>', .35)}
        <p class="nsq rise" ${d(.7)}>How quickly and consistently can leaders access their best leadership response when navigating change, pressure and urgency?</p></div>
      <div class="nsds">${dims}</div>
      ${flow}
    </div></div>`;
  };

  // ---------------------------------------------------------------- Jordan, the Athleader we follow
  C.persona = () => {
    const p = S().persona;
    return `<div class="card v8 s-persona">${photo('older_leader_window', '80% 40%', 14)}<div class="shade sh-l"></div>${grain}<div class="in">
      <p class="eyebrow rise" ${d(.1)}>The Athleader we’ll follow</p>
      ${H('h2', esc(p.name), .2)}
      <p class="pt8 rise" ${d(.55)}>${esc(p.title)}</p>
      <p class="pq8 rise" ${d(.75)}>${esc(p.tagline)}</p>
      <div class="pf8 glass rise" ${d(1.0)}>
        <div><span>Conditioning priority</span><b>${esc(p.focus)}</b></div>
        <div><span>The habit to change</span><b>${esc(p.habit)}</b></div>
      </div>
    </div></div>`;
  };

  // ---------------------------------------------------------------- three perspectives
  C.cast = () => {
    const f = SC().functions;
    const P = [['older_leader_window', '74% 26%', 'The Athleader', 'Jordan Ellis', 'ath'],
      ['coach_colleague', '40% 35%', 'The Player-Coach', 'Jordan’s manager', 'pc'],
      ['pc_team_huddle', '45% 40%', 'The Squad', `Jordan, ${f[1]} and ${f[2]}`, 'sq']]
      .map((p, i) => `<figure class="who tin" ${d(.4 + i * .14)}><div class="tilt"><div class="wph" style="background-image:url(assets/ph/ai_${p[0]}.jpg);background-position:${p[1]}"></div><span class="shine"></span>
        <figcaption><span class="wk ${p[4]}"><i></i>${esc(p[2])}</span><b>${esc(p[3])}</b></figcaption></div></figure>`).join('');
    return `<div class="card v8 s-cast"><div class="aura"></div>${grain}<div class="in">
      <p class="eyebrow rise" ${d(.1)}>Three perspectives</p>
      ${H('h2', 'Jordan, his manager and his squad', .2)}
      <div class="whos">${P}</div>
    </div></div>`;
  };

  // ---------------------------------------------------------------- his 90-Day Way: three commitments
  C.objective = () => {
    const rows = [
      ['Conditioning priority', `<b>Decision-Making in Ambiguity</b><span class="osm">Getting past his habit of delaying tough decisions</span>`],
      ['Personal commitment', `<b>Respond on purpose under pressure</b><span class="osm">His five words keep him steady, so he decides with confidence</span>`],
      ['Professional commitment', `<b>Make every transformation decision in his area within a week</b><span class="osm">Timely, informed calls that move the work forward and keep current sales on track</span>`]]
      .map((r, i) => `<div class="orw tile rise" ${d(.5 + i * .18)}><span class="onm">0${i + 1}</span><span class="oky">${r[0]}</span><div class="ovl">${r[1]}</div></div>`).join('');
    // Melissa: "The 90-Day Way is the bridge between individual leadership conditioning, daily behavior, and business
    // execution." The picture is that bridge: three spans, one per commitment, ending at the squad's shared goal. It
    // answers the opening screen's bridge, which was missing its last span.
    const SP = [[30, 160, '01', 'Conditioning'], [160, 290, '02', 'Daily behavior'], [290, 420, '03', 'Business result']];
    const spans = SP.map(([a, b, n, t], i) => {
      const m = (a + b) / 2, dl = (.7 + i * .35).toFixed(2);
      return `<path class="ob-arc${i === 2 ? ' last' : ''}" pathLength="1" style="--d:${dl}s" d="M${a} 168 Q${m} 96 ${b} 168"/>
        <line class="ob-pier" style="--d:${dl}s" x1="${b}" y1="104" x2="${b}" y2="168"/>
        <g class="ob-n" style="--d:${(+dl + .25).toFixed(2)}s"><circle cx="${m}" cy="62" r="17"/><text x="${m}" y="67">${n}</text></g>
        <text class="ob-l" style="--d:${(+dl + .3).toFixed(2)}s" x="${m}" y="204">${esc(t)}</text>`;
    }).join('');
    const art = `<svg class="ob-svg" viewBox="0 0 460 222" aria-hidden="true">
        <line class="ob-water" x1="0" y1="170" x2="460" y2="170"/>
        <line class="ob-pier" style="--d:.6s" x1="30" y1="104" x2="30" y2="168"/>
        <line class="ob-deck" pathLength="1" x1="22" y1="104" x2="428" y2="104"/>${spans}
        <g class="ob-flag" style="--d:1.9s"><line x1="428" y1="104" x2="428" y2="58"/><path d="M428 58 L452 66 L428 74Z"/></g></svg>`;
    return `<div class="card v8 s-objective ob8">${grain}<div class="obr8 rise" ${d(.2)}>
        <p class="ob-k">The 90-Day Way is the bridge</p>${art}
        <p class="ob-c">From his conditioning, through what he does every day, to the business result his squad shares.</p></div>
      <div class="in">
      <p class="eyebrow rise" ${d(.15)}>The 90-Day Way</p>
      ${H('h2', 'Jordan’s next 90 days', .25)}
      <div class="orws">${rows}</div>
      <p class="oft rise" ${d(1.2)}>It feeds his squad’s shared goal: ${esc(squadGoal())}.</p>
    </div></div>`;
  };

  // ---------------------------------------------------------------- the close (Melissa, Nov 21 12:15 pm): the buyer becomes the focus
  // "Your Transformation Opportunity" replaces the five-card Game Plan: their priority, what may be at risk, what we
  // condition, and the business opportunity. The last three come from the room's answer, using the same matching as
  // before (slow decisions, resistance to change, burnout or disengagement, silos); presented as potential
  // connections, not a diagnosis. With no match, Melissa's own example. Print or save as PDF stays.
  const OPP = [
    [/decid|decision|slow|delay|stall|wait|approv|hesitat|indecis|speed|bottleneck/i, {
      risk: 'Decision speed. Execution delays. Milestones.', cond: 'Decision-Making in Ambiguity. Agility. Alignment.',
      opp: 'Faster decisions. Fewer delays. Milestones on time.', say: 'faster decisions, fewer delays and milestones that hold' }],
    [/resist|change|adopt|mindset|old way|buy-in|buy in|legacy|comfort|transform/i, {
      risk: 'Readiness. Adoption. Momentum.', cond: 'Change Agility. Decision-Making. Alignment.',
      opp: 'Faster readiness. Stronger adoption.', say: 'faster readiness and stronger adoption' }],
    [/burn|tired|exhaust|disengag|engag|morale|stress|well|retention|turnover|overload|capacity|fatigue/i, {
      risk: 'Engagement. Recovery. Sustained performance.', cond: 'Recovery Capacity. Wellbeing. Leadership Clarity.',
      opp: 'Stronger engagement. Performance that lasts.', say: 'stronger engagement and performance that lasts' }],
    [/silo|cross-functional|cross functional|align|collaborat|handoff|hand-off|turf|priorit|conflict|depart|team/i, {
      risk: 'Cross-functional alignment. Execution.', cond: 'Execution Alignment. Leadership Clarity. Decision-Making.',
      opp: 'Better alignment. Fewer bottlenecks. Stronger results.', say: 'better alignment, fewer bottlenecks and stronger results' }]];
  const OPP0 = { risk: 'Readiness. Adoption. Execution.', cond: 'Change Agility. Decision-Making. Alignment.',
    opp: 'Faster readiness. Stronger execution.', say: 'faster readiness and stronger execution' };
  const oppFor = a => { const m = a && OPP.find(v => v[0].test(a)); return m ? m[1] : OPP0; };
  window.DEMO_OPP_FOR = oppFor;
  // the notes' {value}: the business opportunity, as a phrase to say
  window.DEMO_VALUE_FOR = a => oppFor(a).say;

  const OLDPLAN = window.DEMO_PLAN;
  window.DEMO_PLAN = () => {
    const a = window.DEMO_ANSWER || '', L = window.DEMO_LAYER || '', o = oppFor(a);
    const call = (OLDPLAN && OLDPLAN().find(p => p[0] === 'call')) || ['call', 'How the room voted', 'We’ll vote on this together in Lesson 4.', false];
    return [
      ['priority', 'Your priority', a || 'We’ll fill this in together.', !!a],
      ['risk', 'What may be at risk', o.risk],
      ['condition', 'What we condition', o.cond],
      ['opportunity', 'The business opportunity', o.opp, !!a],
      ['measures', 'What Athleadership measures', 'The Leadership Conditioning Index, six leadership outcomes, and evidence that the change shows up at work.'],
      ['example', 'What you saw today', 'Jordan Ellis, an example sales leader, conditioned one behavior: making tough calls on time. His manager reinforced it, his squad put it to work, and the report showed whether it was improving.'],
      call,
      ['layer', 'What you’d most want to see', L || 'We’ll pick this together.', !!L],
      ['next', 'Recommended next step', 'Business Alignment & Pilot Design, with your business sponsor and talent leader: one priority, one focused cohort, measurable improvement.']];
  };

  C.recap = () => {
    const a = window.DEMO_ANSWER || '', o = oppFor(a);
    const tag = t => `<em class="to8t">${esc(t)}</em>`;
    return `<div class="card v8 s-recap to8">${photo('plan_done_toast_duo', '55% 45%', 8)}<div class="shade sh-duo deep"></div>${grain}<div class="in">
      <div class="gph"><div><p class="eyebrow rise" ${d(.1)}>${CO() ? 'Prepared for ' + esc(CO()) : 'What we uncovered together'}</p>${H('h2', 'Your Transformation Opportunity', .2)}
        <p class="to8s rise" ${d(.5)}>From leadership friction to business performance.</p></div>
        <button type="button" class="gprint rise" ${d(1.3)} title="This page, printed or saved as a PDF to share after the meeting">Print or save as PDF</button></div>
      <div class="to8g">
        <div class="to8c pri tin" ${d(.55)}><span>Your priority</span><b>${esc(a || 'We’ll fill this in together.')}</b>${a ? tag('In your words') : ''}</div>
        <div class="to8c tin" ${d(.75)}><span>What may be at risk</span><b>${esc(o.risk)}</b></div>
        <div class="to8c tin" ${d(.85)}><span>What we condition</span><b>${esc(o.cond)}</b></div>
        <div class="to8c opp tin" ${d(1.05)}><span>The business opportunity</span><b>${esc(o.opp)}</b></div>
      </div>
      <p class="to8n rise" ${d(1.4)}>${a ? 'Possible connections to the priority you named, to explore together.' : 'Possible connections, to explore together.'}</p>
    </div></div>`;
  };

  // ---------------------------------------------------------------- The Next Move: from their challenge to a focused pilot
  C.decide = () => {
    const steps = [['01', 'Align', 'Business priority and accountable leaders'], ['02', 'Condition', '10-week journey and 90-Day Way'],
      ['03', 'Demonstrate', 'Behavior improvement and execution indicators']]
      .map((t, i) => `<div class="nm8s rise" ${d(.9 + i * .2)}><i class="nm8d"></i><span class="nm8n">${t[0]}</span><b>${esc(t[1])}</b><small>${esc(t[2])}</small></div>`).join('');
    return `<div class="card v8 s-decide nm8">${photo('tunnel_light', '70% 50%', 14)}<div class="shade sh-dec"></div>${grain}<div class="in">
      <p class="eyebrow rise" ${d(.1)}>The Next Move</p>
      ${H('h2', 'Turn leadership conditioning into measurable business performance.', .2)}
      <p class="nm8l rise" ${d(.7)}>One priority. One focused cohort. Measurable improvement.</p>
      <div class="nm8p"><i class="nm8r grow" ${d(.85)}></i>${steps}</div>
      <div class="nm8b glass rise" ${d(1.6)}><span>Recommended next step</span><b>Business Alignment &amp; Pilot Design</b><small>Business sponsor + talent leader</small></div>
    </div></div>`;
  };

  // ---------------------------------------------------------------- whose view, and Jordan's five words
  // One label, the same on every screen of Jordan's story: inside the top bar on course and Growth Guide screens
  // (demo.js calls DEMO_PERSP), and in the same top-left place on the story screens. Sized with the stage, so it stays
  // readable on a big screen. His five words sit in the top bar where he uses them (the second vote and the drill).
  const PER = { ath: ['Athleader', () => 'Jordan Ellis'], pc: ['Player-Coach', () => 'Jordan’s manager'],
    sq: ['Squad', () => { const f = SC().functions; return `Jordan, ${f[1]} and ${f[2]}`; }] };
  window.DEMO_PERSP = k => PER[k] ? `<span class="pp8 ${k}"><i></i><b>${esc(PER[k][0])}</b><span>${esc(PER[k][1]())}</span></span>` : '';
  window.DEMO_FIVE = () => {
    const w = (S().carry && S().carry.fivewords) || '';
    return w ? `<span class="src-5"><span>${esc(S().fivewordsBy || 'Jordan')}’s five words</span><b>${esc(w)}</b></span>` : '';
  };

  // the Athleader Pro clip gets the same seek bar as the course videos
  const fmt = s => { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  const PLAY = '<svg viewBox="0 0 16 16"><path d="M4 2.5v11l9-5.5z" fill="currentColor"/></svg>', PAUSE = '<svg viewBox="0 0 16 16"><path d="M3.5 2.5h3v11h-3zM9.5 2.5h3v11h-3z" fill="currentColor"/></svg>';
  function seekBar(v) {
    const host = v && v.parentElement; if (!host || v.dataset.dsk) return; v.dataset.dsk = '1';
    host.classList.add('dsk-host');
    const bar = document.createElement('div'); bar.className = 'dsk';
    bar.innerHTML = `<button type="button" class="dsk-p" aria-label="Play or pause">${PLAY}</button><div class="dsk-t" role="slider" tabindex="0" aria-label="Video position"><div class="dsk-f"></div><div class="dsk-k"></div></div><span class="dsk-c">0:00 / 0:00</span>`;
    host.appendChild(bar);
    const pb = bar.querySelector('.dsk-p'), tr = bar.querySelector('.dsk-t'), fi = bar.querySelector('.dsk-f'), kn = bar.querySelector('.dsk-k'), tc = bar.querySelector('.dsk-c');
    let was = null;
    const paint = () => { const dd = v.duration || 0, p = dd ? Math.min(1, v.currentTime / dd) : 0; fi.style.width = (p * 100) + '%'; kn.style.left = (p * 100) + '%';
      tc.textContent = fmt(v.currentTime) + ' / ' + fmt(dd); if (was !== v.paused) { was = v.paused; pb.innerHTML = v.paused ? PLAY : PAUSE; } bar.classList.toggle('show', v.paused && v.currentTime > .2); };
    ['timeupdate', 'play', 'pause', 'loadedmetadata', 'seeked', 'durationchange', 'ended'].forEach(t => v.addEventListener(t, paint)); paint();
    ['click', 'pointerdown', 'mousedown', 'dblclick'].forEach(t => bar.addEventListener(t, e => e.stopPropagation()));
    pb.addEventListener('click', () => { if (v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => {}); } else v.pause(); });
    const seekTo = e => { const r = tr.getBoundingClientRect(), f = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)); if (v.duration) { v.currentTime = f * v.duration; paint(); } };
    tr.addEventListener('pointerdown', e => { try { tr.setPointerCapture(e.pointerId); } catch (x) {} seekTo(e);
      const mv = ev => seekTo(ev), up = () => { tr.removeEventListener('pointermove', mv); tr.removeEventListener('pointerup', up); };
      tr.addEventListener('pointermove', mv); tr.addEventListener('pointerup', up); });
  }
  C.after = Object.assign(C.after || {}, { proclip: host => seekBar(host.querySelector('.pro-v video')) });

  const stage = document.getElementById('stage');
  if (!stage) return;
  const tag = document.createElement('div');
  tag.className = 'persp8'; tag.hidden = true;
  stage.appendChild(tag);
  let shown = '';
  function sync() {
    const D = window.__demo, x = D && D.FLAT ? D.FLAT[D.cur] : null;
    const k = x && !x.course && !x.doc && x.persp && PER[x.persp] ? x.persp : '';
    if (k && k !== shown) {
      tag.innerHTML = window.DEMO_PERSP(k);
      tag.hidden = false; tag.classList.remove('in'); void tag.offsetWidth; tag.classList.add('in');
    } else if (!k) { tag.hidden = true; tag.classList.remove('in'); }
    shown = k;
  }
  const mo = new MutationObserver(sync);
  const watch = () => {
    const t = document.getElementById('notesTitle'), n = document.getElementById('stopName');
    if (t) mo.observe(t, { childList: true, characterData: true, subtree: true });
    if (n) mo.observe(n, { childList: true, characterData: true, subtree: true });
    sync();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch); else watch();
})();
