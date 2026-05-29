'use strict';

/**
 * Rendering logic — purely responsible for:
 *  1. Reading from data.js (profile, i18n)
 *  2. Cloning <template> elements from index.html
 *  3. Filling bound elements via [data-bind="key"]
 *  4. Wiring up interactivity (language switch, scroll, mobile menu)
 *
 * To change card/item layout → edit <template> in index.html
 * To change styling          → edit styles.css
 * To change content/copy     → edit data.js
 */

(function () {

  // ── Language ────────────────────────────────────────────────────────────────
  const STORAGE_KEY  = 'km_lang';
  const SUPPORTED    = ['en', 'es', 'it'];

  function detectLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : 'en';
  }

  let lang = detectLang();

  // ── Date helpers ─────────────────────────────────────────────────────────────
  const MONTHS = {
    en: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    es: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    it: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic']
  };

  function fmtDate(d) {
    return d ? `${MONTHS[lang][d.month - 1]} ${d.year}` : i18n[lang].current;
  }

  function fmtDuration(start, end) {
    const e   = end ? new Date(end.year, end.month - 1) : new Date();
    const s   = new Date(start.year, start.month - 1);
    let   m   = (e.getFullYear() - s.getFullYear()) * 12 + e.getMonth() - s.getMonth();
    const y   = Math.floor(m / 12);
    m         = m % 12;
    const parts = [];
    if (lang === 'en') {
      if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`);
      if (m) parts.push(`${m} mo${m > 1 ? 's' : ''}`);
    } else if (lang === 'es') {
      if (y) parts.push(`${y} año${y !== 1 ? 's' : ''}`);
      if (m) parts.push(`${m} mes${m !== 1 ? 'es' : ''}`);
    } else {
      if (y) parts.push(`${y} ann${y === 1 ? 'o' : 'i'}`);
      if (m) parts.push(`${m} mes${m === 1 ? 'e' : 'i'}`);
    }
    return parts.join(' ') || '—';
  }

  // ── Template engine ───────────────────────────────────────────────────────────
  /**
   * Clones a <template id="tmplId"> and fills [data-bind="key"] elements.
   *
   * bindings value types:
   *   string   → el.textContent = value
   *   string[] → el becomes a <ul>/<ol> filled with <li> children
   *   null     → el.hidden = true
   *   {html: "..."} → el.innerHTML = value.html   (use only for trusted markup)
   *
   * Returns the cloned root element.
   */
  function fill(tmplId, bindings) {
    const tmpl = document.getElementById(tmplId);
    if (!tmpl) { console.warn(`Template #${tmplId} not found`); return null; }
    const frag = tmpl.content.cloneNode(true);

    Object.entries(bindings).forEach(([key, val]) => {
      frag.querySelectorAll(`[data-bind="${key}"]`).forEach(el => {
        if (val === null || val === undefined) {
          el.hidden = true;
        } else if (Array.isArray(val)) {
          el.innerHTML = val.map(v => `<li>${v}</li>`).join('');
        } else if (typeof val === 'object' && 'html' in val) {
          el.innerHTML = val.html;
          if (val.style) Object.assign(el.style, val.style);
        } else if (typeof val === 'object' && ('text' in val || 'style' in val)) {
          if (val.text !== undefined) el.textContent = val.text;
          if (val.style) Object.assign(el.style, val.style);
        } else {
          el.textContent = String(val);
        }
      });
    });

    // Return first element child (templates usually wrap content in one root)
    return frag.firstElementChild || frag;
  }

  function clearAndFill(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    items.forEach(node => { if (node) container.appendChild(node); });
  }

  // ── DOM text helpers ──────────────────────────────────────────────────────────
  function $(id)       { return document.getElementById(id); }
  function text(id, t) { const el = $(id); if (el) el.textContent = t; }

  // ── Logo binding builder ──────────────────────────────────────────────────────
  // Returns a fill() binding value for .org-logo:
  //   • real image  → {html: '<img...>', style: {background}}
  //   • initials    → {text: abbr,       style: {background}}
  function buildLogo(logo) {
    if (logo && logo.src) {
      return {
        html:  `<img src="${logo.src}" alt="">`,
        style: { background: logo.bg || '#fff' }
      };
    }
    return {
      text:  logo ? logo.abbr : '?',
      style: { background: logo ? logo.bg : '#999' }
    };
  }

  // ── Section renderers ─────────────────────────────────────────────────────────

  function renderNav() {
    const t     = i18n[lang].nav;
    const links = ['about','experience','education','skills','certifications','contact'];
    clearAndFill('nav-list', links.map(s => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.className   = 'nav-link';
      a.href        = `#${s}`;
      a.textContent = t[s];
      li.appendChild(a);
      return li;
    }));
  }

  function renderHero() {
    const t = i18n[lang].hero;
    text('hero-eyebrow',  t.eyebrow);
    text('hero-tagline',  t.tagline);
    text('hero-cta',      t.cta);
    text('hero-explore',  t.explore);
    text('hero-dl-label', t.downloadCV);
  }

  function renderAbout() {
    const t = i18n[lang];
    text('label-about', t.sections.about.label);
    text('title-about', t.sections.about.title);
    const p = $('about-text');
    if (p) p.textContent = summary[lang];
    text('stat-label-years',     t.stats.years);
    text('stat-label-methods',   t.stats.methods);
    text('stat-label-languages', t.stats.languages);
    text('stat-label-certs',     t.stats.certs);
  }

  function renderExperience() {
    const t = i18n[lang];
    text('label-experience', t.sections.experience.label);
    text('title-experience', t.sections.experience.title);

    const items = experience.map((exp, i) => {
      const node = fill('tmpl-timeline-item', {
        logo:     buildLogo(exp.logo),
        dates:    `${fmtDate(exp.startDate)} – ${fmtDate(exp.endDate)}`,
        duration: fmtDuration(exp.startDate, exp.endDate),
        title:    exp.title[lang],
        org:      `${exp.organization} · ${exp.location}`,
        list:     exp.responsibilities[lang],
        note:     null
      });
      if (node && i === 0) node.classList.add('timeline-item--current');
      return node;
    });
    clearAndFill('experience-list', items);
  }

  function renderEducation() {
    const t = i18n[lang];
    text('label-education', t.sections.education.label);
    text('title-education', t.sections.education.title);

    const items = education.map(edu => {
      return fill('tmpl-timeline-item', {
        logo:     buildLogo(edu.logo),
        dates:    fmtDate(edu.date),
        duration: null,
        title:    edu.degree[lang],
        org:      `${edu.institution} · ${edu.location}`,
        list:     null,
        note:     edu.note ? edu.note[lang] : null
      });
    });
    clearAndFill('education-list', items);
  }

  function renderSkills() {
    const t = i18n[lang];
    text('label-skills', t.sections.skills.label);
    text('title-skills', t.sections.skills.title);
    text('title-tech',   t.skillsHeaders.technical);
    text('title-it',     t.skillsHeaders.it);
    text('title-langs',  t.skillsHeaders.languages);

    clearAndFill('list-tech', skills.technical[lang].map(s => {
      const li = document.createElement('li');
      li.className = 'skill-item';
      li.textContent = s;
      return li;
    }));

    clearAndFill('list-it', skills.itTools[lang].map(s => {
      const li = document.createElement('li');
      li.className = 'skill-item';
      li.textContent = s;
      return li;
    }));

    const langNodes = languages.map(l =>
      fill('tmpl-lang-row', {
        'lang-name':  l.name[lang],
        'lang-level': l.level[lang]
      })
    );
    // Set bar widths after DOM insertion
    langNodes.forEach((node, i) => {
      if (node) {
        const bar = node.querySelector('.lang-fill');
        if (bar) bar.dataset.width = languages[i].proficiency;
      }
    });
    clearAndFill('list-langs', langNodes);

    // Animate: double rAF so browser paints at width:0 before transition kicks in
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.querySelectorAll('.lang-fill').forEach(bar => {
        bar.style.width = (bar.dataset.width || 0) + '%';
      });
    }));
  }

  function renderCertifications() {
    const t = i18n[lang];
    text('label-certs', t.sections.certifications.label);
    text('title-certs', t.sections.certifications.title);

    // Group by category
    const groups = {};
    certifications.forEach(c => {
      (groups[c.category] = groups[c.category] || []).push(c);
    });

    const nodes = Object.entries(groups).map(([cat, list]) =>
      fill('tmpl-cert-group', {
        'cert-cat':  t.certCategories[cat] || cat,
        'cert-list': list.map(c => c.name[lang])
      })
    );
    clearAndFill('cert-grid', nodes);
  }

  function renderContact() {
    const t = i18n[lang];
    text('label-contact', t.sections.contact.label);
    text('title-contact',  t.sections.contact.title);
    text('lbl-email',    t.contact.email);
    text('lbl-linkedin', t.contact.linkedin);
    text('lbl-location', t.contact.location);
    text('lbl-license',  t.contact.license);
  }

  // ── Full render ───────────────────────────────────────────────────────────────
  function render() {
    document.documentElement.lang = lang;
    document.title = `Ketrina Martinaj | ${i18n[lang].hero.eyebrow}`;
    renderNav();
    renderHero();
    renderAbout();
    renderExperience();
    renderEducation();
    renderSkills();
    renderCertifications();
    renderContact();

    document.querySelectorAll('.lang-btn').forEach(btn =>
      btn.classList.toggle('active', btn.dataset.lang === lang)
    );
  }

  // ── Language switcher ─────────────────────────────────────────────────────────
  function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn =>
      btn.addEventListener('click', () => {
        lang = btn.dataset.lang;
        localStorage.setItem(STORAGE_KEY, lang);
        render();
        // Re-run reveal for newly created elements
        initReveal();
      })
    );
  }

  // ── Mobile hamburger ──────────────────────────────────────────────────────────
  function initMobileMenu() {
    const burger = $('hamburger');
    const nav    = $('nav');
    if (!burger || !nav) return;
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('nav--open');
      burger.classList.toggle('hamburger--open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', e => {
      if (e.target.classList.contains('nav-link')) {
        nav.classList.remove('nav--open');
        burger.classList.remove('hamburger--open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Sticky header ─────────────────────────────────────────────────────────────
  function initStickyHeader() {
    const header = $('header');
    window.addEventListener('scroll', () =>
      header.classList.toggle('header--scrolled', window.scrollY > 40),
    { passive: true });
  }

  // ── Scroll-reveal ─────────────────────────────────────────────────────────────
  function initReveal() {
    const io = new IntersectionObserver(entries =>
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.07 });

    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => io.observe(el));
  }

  // ── Active nav highlight ──────────────────────────────────────────────────────
  function initActiveNav() {
    const sectionIds = ['about','experience','education','skills','certifications','contact'];
    const io = new IntersectionObserver(entries =>
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('.nav-link').forEach(a =>
            a.classList.toggle('nav-link--active', a.getAttribute('href') === `#${e.target.id}`)
          );
        }
      }),
    { rootMargin: '-40% 0px -55% 0px' });

    sectionIds.forEach(id => { const el = $(id); if (el) io.observe(el); });
  }

  // ── Smooth scroll ─────────────────────────────────────────────────────────────
  function initSmoothScroll() {
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  }

  // ── Theme toggle ──────────────────────────────────────────────────────────────
  function initTheme() {
    const btn = $('theme-btn');
    if (!btn) return;

    function applyTheme(t) {
      document.documentElement.dataset.theme = t;
      localStorage.setItem('km_theme', t);
      btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }

    btn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });

    // Sync aria-label with current theme
    const current = document.documentElement.dataset.theme || 'light';
    btn.setAttribute('aria-label', current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // ── Boot ──────────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    render();
    initLangSwitcher();
    initMobileMenu();
    initStickyHeader();
    initReveal();
    initActiveNav();
    initSmoothScroll();
    initTheme();
  });

})();
