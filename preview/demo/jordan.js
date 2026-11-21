/* Nov 20, 2026 (Melissa's demo notes): two new screens and Jordan's five words. Loaded after cards_v8.js; it uses the
   same 1280 x 720 frame, the same motion classes (rise, tile, data-split) and the same glass panels. */
(() => {
  'use strict';
  const C = window.DEMO_CARDS, S = () => window.DEMO_SAMPLE;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const d = t => `style="--d:${(+t).toFixed(2)}s"`;
  const photo = (n, pos, z) => `<div class="plx" style="--z:${z == null ? 14 : z}"><div class="ph kb" style="background-image:url(assets/ph/ai_${n}.jpg);background-position:${pos || '50% 50%'}"></div></div>`;
  const grain = '<div class="grain" aria-hidden="true"></div>';
  const H = (tag, txt, d0, cls) => `<${tag} class="${cls || ''}" data-split style="--d0:${d0}s">${txt}</${tag}>`;

  // Act 1: the leader we follow (an example persona; the label says so)
  C.persona = () => {
    const p = S().persona;
    return `<div class="card v8 s-persona">${photo('older_leader_window', '80% 40%', 14)}<div class="shade sh-l"></div>${grain}<div class="in">
      <p class="eyebrow rise" ${d(.1)}>Meet the leader we’ll follow</p>
      ${H('h2', esc(p.name), .2)}
      <p class="pt8 rise" ${d(.55)}>${esc(p.title)}</p>
      <p class="pq8 rise" ${d(.75)}>${esc(p.tagline)}</p>
      <div class="pf8 glass rise" ${d(1.0)}>
        <div><span>Leadership conditioning focus</span><b>${esc(p.focus)}</b></div>
        <div><span>Business imperative</span><b>${esc(p.imperative)}</b></div>
      </div>
    </div></div>`;
  };

  // Act 1: what the pressure looks like for Jordan (Melissa's table); the highlighted row is the one the demo follows
  C.pressure = () => {
    const rows = S().pressure.map((r, i) => `<div class="pr8 tile rise${i === 1 ? ' key' : ''}" ${d(.6 + i * .12)}>
        <b>${esc(r[0])}</b><span>${esc(r[1])}</span><em>${esc(r[2])}</em>${i === 1 ? '<i class="pk8">The one we’ll follow</i>' : ''}</div>`).join('');
    return `<div class="card v8 s-press"><div class="aura"></div>${grain}<div class="in">
      <p class="eyebrow rise" ${d(.1)}>Where execution stalls</p>
      ${H('h2', 'When the pressure rises, old habits take over', .2)}
      <div class="ph8 rise" ${d(.45)}><span>Behavior under pressure</span><span>What it looks like for Jordan</span><span>Athleadership outcome</span></div>
      <div class="prs8">${rows}</div>
    </div></div>`;
  };

  // Jordan's five words, on the steps marked five: the Moment, the drill, the squad and the after cards
  const stage = document.getElementById('stage');
  if (!stage) return;
  const chip = document.createElement('div');
  chip.className = 'five8'; chip.hidden = true; chip.setAttribute('aria-label', 'Jordan’s five words');
  stage.appendChild(chip);
  const words = () => (S().carry && S().carry.fivewords) || '';
  function sync() {
    const t = document.getElementById('notesTitle'), b = document.querySelector('#stopName b');
    const label = t ? t.textContent.replace(/ \(leave out in the shorter run\)$/, '') : '';
    const st = b && (window.DEMO_STOPS || []).find(s => s.short && s.title === b.textContent);
    const x = st && st.steps.find(s => s.label === label);
    const on = !!(x && x.five && words());
    if (on && chip.hidden) {
      chip.innerHTML = `<span>${esc(S().fivewordsBy || 'Their')}’s five words</span><b>${esc(words())}</b>`;
      chip.hidden = false; chip.classList.remove('in'); void chip.offsetWidth; chip.classList.add('in');
    } else if (!on) { chip.hidden = true; chip.classList.remove('in'); }
    if (on) chip.classList.toggle('l', x.five === 'l');
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
