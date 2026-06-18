/* ============================================================
   RITISH RAJ — PORTFOLIO
   js/main.js — All interactivity
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. CUSTOM CURSOR ── */
  const c1 = document.getElementById('cur');
  const c2 = document.getElementById('cur2');
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    c1.style.left = mx + 'px';
    c1.style.top  = my + 'px';
  }, { passive: true });

  (function loop() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    c2.style.left = rx + 'px';
    c2.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('ch'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('ch'));
  });

  /* ── 2. SCROLL PROGRESS BAR ── */
  const sp = document.getElementById('sp');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - innerHeight) * 100;
    sp.style.width = pct + '%';
  }, { passive: true });

  /* ── 3. SCROLL REVEAL ── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.rev').forEach(r => observer.observe(r));

  /* ── 4. CANVAS PARTICLE NETWORK ── */
  const cv  = document.getElementById('hc');
  const ctx = cv.getContext('2d');
  let W, H;

  function resize() {
    W = cv.width  = window.innerWidth;
    H = cv.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const pts = Array.from({ length: 80 }, () => ({
    x: Math.random() * 2200 - 600,
    y: Math.random() * 1400 - 200,
    vx: (Math.random() - .5) * 0.18,
    vy: (Math.random() - .5) * 0.12,
    r:  Math.random() * 1.4 + 0.3,
    a:  Math.random() * 0.6 + 0.1,
  }));

  (function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < -150) p.x = W + 150; if (p.x > W + 150) p.x = -150;
      if (p.y < -150) p.y = H + 150; if (p.y > H + 150) p.y = -150;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(79,142,247,${p.a * .5})`;
      ctx.fill();
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d  = Math.hypot(dx, dy);
        if (d < 140) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(99,102,241,${(1 - d / 140) * .1})`;
          ctx.lineWidth   = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  })();

  /* ── 5. TYPEWRITER EFFECT on hero subtitle ── */
  const sub = document.querySelector('.hsub');
  if (sub) {
    const full = sub.innerHTML;
    sub.innerHTML = '';
    let i = 0;
    const timer = setInterval(() => {
      if (i < full.length) { sub.innerHTML = full.slice(0, ++i); }
      else clearInterval(timer);
    }, 18);
  }

  /* ── 6. ACTIVE NAV LINK on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nul a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  }, { passive: true });

});
