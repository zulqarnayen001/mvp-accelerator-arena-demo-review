/* Nov 22, 2026 (Melissa's email of Nov 22, 1:43 am). Loaded after story21.js.
   - The North Star builds in three clicks: the North Star; then Frequency, Speed and Consistency; then the rest.
     "What it carries" becomes "What it delivers".
   - Meet Jordan: The Transformation Leader
   - Your Transformation Opportunity: "What we uncovered together" always (no "Prepared for ..."), her new line, her
     wording on the three cards for every meeting (the room's answer still fills Your Priority), no "possible
     connections" line and no Print or save as PDF button
   - Value and ROI: her simplified layout (From Potential to Performance; Leadership, Execution, ROI)
   - The Next Move: her new headline; the next step as one bar, "Let's identify where to begin." */
(() => {
  'use strict';
  const C = window.DEMO_CARDS, S = () => window.DEMO_SAMPLE;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const d = t => `style="--d:${(+t).toFixed(2)}s"`;
  const photo = (n, pos, z) => `<div class="plx" style="--z:${z == null ? 14 : z}"><div class="ph kb" style="background-image:url(assets/ph/ai_${n}.jpg);background-position:${pos || '50% 50%'}"></div></div>`;
  const grain = '<div class="grain" aria-hidden="true"></div>';
  const H = (tag, txt, d0, cls) => `<${tag} class="${cls || ''}" data-split style="--d0:${d0}s">${txt}</${tag}>`;

  // ---------------------------------------------------------------- the North Star, in three clicks
  const star = `<svg class="ns-star" viewBox="-60 -60 120 120" aria-hidden="true"><defs>
      <radialGradient id="nsg9" cx="0" cy="0" r="60" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#F1E2BC" stop-opacity=".55"/><stop offset=".45" stop-color="#C9A45C" stop-opacity=".16"/><stop offset="1" stop-color="#C9A45C" stop-opacity="0"/></radialGradient>
      <linearGradient id="nsf9" x1="0" y1="-46" x2="0" y2="46" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#F1E2BC"/><stop offset="1" stop-color="#C9A45C"/></linearGradient></defs>
      <circle class="ns-glow" r="58" fill="url(#nsg9)"/>
      <path class="ns-ray" d="M0 -52 L0 -30 M0 30 L0 52 M-52 0 L-30 0 M30 0 L52 0" pathLength="1"/>
      <path class="ns-pt" fill="url(#nsf9)" d="M0 -44 C3 -12 12 -3 44 0 C12 3 3 12 0 44 C-3 12 -12 3 -44 0 C-12 -3 -3 -12 0 -44Z"/></svg>`;
  // Every part is always laid out, so nothing moves between clicks; the parts not shown yet are held invisible.
  // On a continued click only the newly shown parts animate (nx8), the rest stay as they were.
  C.northstar = x => {
    const b = x.build || 3, cont = !!x._cont;
    const part = (n, t0) => {   // class and start time for a part that first shows on click n
      if (b < n) return { c: ' ns9-hold', t: t0 };
      if (cont && b === n) return { c: ' nx8', t: .1 };
      return { c: '', t: t0 };
    };
    const p2 = part(2, 1.0), p3 = part(3, 1.5);
    const dims = [['Frequency', 'How often leaders reach their best response'],
      ['Speed', 'How quickly they recover, adapt and respond'],
      ['Consistency', 'How reliably they reach it as conditions change']]
      .map((t, i) => `<div class="nsd tile rise${p2.c}" ${d(p2.t + i * .14)}><b>${esc(t[0])}</b><span>${esc(t[1])}</span></div>`).join('');
    const outs = S().impact.outcomes.map(o => `<span>${esc(o[0])}</span>`).join('');
    const flow = `<div class="nsf8">
        <div class="nf rise${p3.c}" ${d(p3.t)}><span class="nfk">How we condition</span><b>Athleadership Conditioning</b><small>Agility, Resilience, Alignment and Wellbeing, through M.V.P., practice and real work</small></div>
        <i class="nfa grow${p3.c}" ${d(p3.t + .2)} aria-hidden="true"></i>
        <div class="nf mid rise${p3.c}" ${d(p3.t + .3)}><span class="nfk">What it strengthens</span><b>Six Leadership Outcomes</b><div class="nfo">${outs}</div></div>
        <i class="nfa grow${p3.c}" ${d(p3.t + .5)} aria-hidden="true"></i>
        <div class="nf end rise${p3.c}" ${d(p3.t + .6)}><span class="nfk">What it delivers</span><b>Transformation Execution</b><small>Readiness, faster adaptation, stronger execution and performance that lasts</small></div>
      </div>`;
    return `<div class="card v8 s-north${cont ? ' cont' : ''}"><div class="aura"></div>${grain}<div class="in">
      <p class="eyebrow rise" ${d(.1)}>Our North Star</p>
      <div class="nsh">${star}${H('h2', 'Leadership Conditioning Index<sup class="nosplit">™</sup>', .35)}
        <p class="nsq rise" ${d(.7)}>How quickly and consistently can leaders access their best leadership response when navigating change, pressure and urgency?</p></div>
      <div class="nsds">${dims}</div>
      ${flow}
    </div></div>`;
  };

  // ---------------------------------------------------------------- Meet Jordan: The Transformation Leader
  const PERSONA = C.persona;
  C.persona = x => PERSONA(x).replace('The Athleader we’ll follow', 'Meet Jordan');

  // ---------------------------------------------------------------- Your Transformation Opportunity (her wording)
  const OPPX = {
    risk: 'Leaders lose confidence. Change loses momentum. Business goals slip.',
    cond: 'Leadership Clarity. Values in Action. Change Agility. Decision-Making in Ambiguity. Recovery Capacity. Execution Alignment.',
    opp: 'Better decisions. Faster adoption. Stronger execution.',
    say: 'better decisions, faster adoption and stronger execution' };
  window.DEMO_OPP_FOR = () => OPPX;
  window.DEMO_VALUE_FOR = () => OPPX.say;
  const PLAN21 = window.DEMO_PLAN;
  window.DEMO_PLAN = () => (PLAN21 ? PLAN21() : []).map(p =>
    p[0] === 'risk' ? ['risk', 'What may be at risk', OPPX.risk]
      : p[0] === 'condition' ? ['condition', 'What we condition and measure', OPPX.cond]
        : p[0] === 'opportunity' ? ['opportunity', 'The business opportunity', OPPX.opp, p[3]] : p);

  C.recap = () => {
    const a = window.DEMO_ANSWER || '';
    return `<div class="card v8 s-recap to8 to9">${photo('plan_done_toast_duo', '55% 45%', 8)}<div class="shade sh-duo deep"></div>${grain}<div class="in">
      <div class="gph"><div><p class="eyebrow rise" ${d(.1)}>What we uncovered together</p>${H('h2', 'Your Transformation Opportunity', .2)}
        <p class="to8s rise" ${d(.5)}>From leadership friction to accelerated business performance.</p></div></div>
      <div class="to8g">
        <div class="to8c pri tin" ${d(.55)}><span>Your priority</span><b>${esc(a || 'We’ll fill this in together.')}</b>${a ? '<em class="to8t">In your words</em>' : ''}</div>
        <div class="to8c tin" ${d(.75)}><span>What may be at risk</span><b>${esc(OPPX.risk)}</b></div>
        <div class="to8c cnd tin" ${d(.85)}><span>What we condition and measure</span><b>${esc(OPPX.cond)}</b></div>
        <div class="to8c opp tin" ${d(1.05)}><span>The business opportunity</span><b>${esc(OPPX.opp)}</b></div>
      </div>
    </div></div>`;
  };

  // ---------------------------------------------------------------- Value and ROI (her simplified layout)
  C.value = () => {
    const box = [['Leadership', 'Measure behavior change', ''], ['Execution', 'Track business indicators', ''], ['ROI', 'Evaluate financial impact', ' roi']]
      .map((v, i) => `<div class="v9b tin${v[2]}" ${d(.9 + i * .22)}><b>${esc(v[0])}</b><span>${esc(v[1])}</span></div>`)
      .join('<i class="v9a rise" aria-hidden="true">→</i>');
    return `<div class="card v8 s-value v9"><div class="sideph narrow wipe" ${d(0)}>${photo('stage_leader_spotlight', '50% 35%', 8)}<div class="shade sh-side"></div></div>${grain}<div class="in">
      <p class="eyebrow rise" ${d(.1)}>Value and ROI</p>
      ${H('h2', 'From Potential to Performance', .2)}
      <p class="v9s rise" ${d(.55)}>Connecting leadership conditioning to measurable business value.</p>
      <div class="v9p glass rise" ${d(.75)}><span class="v9k">How we demonstrate value</span>
        <div class="v9r">${box}</div>
        <p class="v9f rise" ${d(1.7)}>Condition the behavior. Track the execution. Evaluate the return.</p></div>
    </div></div>`;
  };

  // ---------------------------------------------------------------- The Next Move (her new headline and next-step bar)
  C.decide = () => {
    const steps = [['01', 'Align', 'Business priority and accountable leaders'], ['02', 'Condition', '10-week journey and 90-Day Way'],
      ['03', 'Demonstrate', 'Behavior improvement and execution indicators']]
      .map((t, i) => `<div class="nm8s rise" ${d(.9 + i * .2)}><i class="nm8d"></i><span class="nm8n">${t[0]}</span><b>${esc(t[1])}</b><small>${esc(t[2])}</small></div>`).join('');
    return `<div class="card v8 s-decide nm8 nm9">${photo('tunnel_light', '70% 50%', 14)}<div class="shade sh-dec"></div>${grain}<div class="in">
      <p class="eyebrow rise" ${d(.1)}>The Next Move</p>
      ${H('h2', 'Your strategy is only as strong as the leaders conditioned to execute it.', .2)}
      <p class="nm8l rise" ${d(.7)}>One priority. One focused cohort. Measurable improvement.</p>
      <div class="nm8p"><i class="nm8r grow" ${d(.85)}></i>${steps}</div>
      <div class="nm9b glass rise" ${d(1.6)}><div class="nm9k"><span>Recommended next step</span><b>Let’s identify where to begin.</b></div>
        <i class="nm9v" aria-hidden="true"></i><div class="nm9w"><b>Business Alignment &amp; Pilot Design</b><small>Business sponsor + talent leader</small></div></div>
    </div></div>`;
  };
})();
