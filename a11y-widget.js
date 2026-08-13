/**
 * Accessibility Widget — drop-in, self-contained, no external libraries.
 * Requires: a11y-widget.css + the markup block from index.html pasted once
 * near the end of <body>. Everything below is scoped to elements with
 * a11y- prefixed ids/classes; it never reaches into unrelated page code.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'a11yWidgetPrefs_v1';
  var FONT_STEPS = [100, 110, 120, 130];

  var defaults = {
    fontStep: 0,
    letterSpacing: false,
    highContrast: false,
    invert: false,
    grayscale: false,
    linkHighlight: false,
    headingHighlight: false,
    readableFont: false,
    bigCursor: false,
    cursorContrast: false,
    reduceMotion: false,
    readingGuide: false,
    bigTargets: false,
  };

  // maps a pref key -> the html.* class it toggles (font-size + reading-guide are handled separately)
  var CLASS_MAP = {
    letterSpacing: 'a11y-letter-spacing',
    highContrast: 'a11y-high-contrast',
    invert: 'a11y-invert',
    grayscale: 'a11y-grayscale',
    linkHighlight: 'a11y-link-highlight',
    headingHighlight: 'a11y-heading-highlight',
    readableFont: 'a11y-readable-font',
    bigCursor: 'a11y-big-cursor',
    cursorContrast: 'a11y-cursor-contrast',
    reduceMotion: 'a11y-reduce-motion',
    bigTargets: 'a11y-big-targets',
  };

  function loadPrefs() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return Object.assign({}, defaults);
      return Object.assign({}, defaults, JSON.parse(raw));
    } catch (e) {
      return Object.assign({}, defaults);
    }
  }

  function savePrefs() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {
      /* localStorage unavailable (private mode / quota) — feature still works for this page view */
    }
  }

  var prefs = loadPrefs();
  var html = document.documentElement;
  var panel = document.getElementById('a11yPanel');
  var fab = document.getElementById('a11yToggleBtn');
  var closeBtn = document.getElementById('a11yCloseBtn');
  var readingGuideEl = null;
  var lastFocusedBeforeOpen = null;

  function announce(msg) {
    var live = document.getElementById('a11yLiveRegion');
    if (live) live.textContent = msg;
  }

  function applyFontStep() {
    var pct = FONT_STEPS[prefs.fontStep];
    html.style.fontSize = prefs.fontStep === 0 ? '' : pct + '%';
    var valueEl = document.getElementById('a11yFontSizeValue');
    if (valueEl) valueEl.textContent = pct + '%';
    var decBtn = document.getElementById('a11yFontDecBtn');
    var incBtn = document.getElementById('a11yFontIncBtn');
    if (decBtn) decBtn.disabled = prefs.fontStep === 0;
    if (incBtn) incBtn.disabled = prefs.fontStep === FONT_STEPS.length - 1;
  }

  function applyToggleClasses() {
    Object.keys(CLASS_MAP).forEach(function (key) {
      html.classList.toggle(CLASS_MAP[key], !!prefs[key]);
    });
  }

  function syncButtonsUI() {
    document.querySelectorAll('[data-a11y-toggle]').forEach(function (btn) {
      var key = btn.getAttribute('data-a11y-toggle');
      btn.setAttribute('aria-pressed', prefs[key] ? 'true' : 'false');
    });
  }

  function onGuideMove(e) {
    if (readingGuideEl) readingGuideEl.style.setProperty('--a11y-guide-y', e.clientY + 'px');
  }

  function applyReadingGuide() {
    if (prefs.readingGuide && !readingGuideEl) {
      readingGuideEl = document.createElement('div');
      readingGuideEl.className = 'a11y-reading-guide';
      readingGuideEl.setAttribute('aria-hidden', 'true');
      document.body.appendChild(readingGuideEl);
      document.addEventListener('mousemove', onGuideMove);
    } else if (!prefs.readingGuide && readingGuideEl) {
      document.removeEventListener('mousemove', onGuideMove);
      readingGuideEl.remove();
      readingGuideEl = null;
    }
  }

  // Optional, graceful integration: if this page exposes a Lenis smooth-scroll
  // instance on window.lenisInstance, pause/resume it with the reduce-motion
  // toggle. Absent on other sites this widget is dropped into — no-op then.
  function applyMotionIntegration() {
    if (window.lenisInstance && typeof window.lenisInstance.stop === 'function') {
      if (prefs.reduceMotion) window.lenisInstance.stop();
      else window.lenisInstance.start();
    }
  }

  function applyAll() {
    applyFontStep();
    applyToggleClasses();
    syncButtonsUI();
    applyReadingGuide();
    applyMotionIntegration();
  }

  // Reads the language main.js's toggleLanguage() sets on <html lang="...">
  // so announcements stay in sync without this widget depending on main.js.
  function isHe() {
    return document.documentElement.lang !== 'en';
  }

  function toggleFeature(key, label) {
    prefs[key] = !prefs[key];
    savePrefs();
    applyAll();
    announce(label + (isHe() ? (prefs[key] ? ' הופעל' : ' כובה') : (prefs[key] ? ' enabled' : ' disabled')));
  }

  function resetAll() {
    prefs = Object.assign({}, defaults);
    savePrefs();
    applyAll();
    announce(isHe() ? 'כל הגדרות הנגישות אופסו לברירת המחדל' : 'All accessibility settings reset to default');
  }

  // ---- Panel open / close / focus trap ----
  function getFocusable() {
    return Array.prototype.slice
      .call(panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
      .filter(function (el) { return !el.disabled && el.offsetParent !== null; });
  }

  function onKeydown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closePanel();
      return;
    }
    if (e.key === 'Tab') {
      var focusable = getFocusable();
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function onOutsideClick(e) {
    if (!panel.contains(e.target) && e.target !== fab && !fab.contains(e.target)) {
      closePanel();
    }
  }

  function openPanel() {
    lastFocusedBeforeOpen = document.activeElement;
    panel.hidden = false;
    fab.setAttribute('aria-expanded', 'true');
    document.addEventListener('keydown', onKeydown, true);
    document.addEventListener('mousedown', onOutsideClick, true);
    var focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  }

  function closePanel() {
    if (panel.hidden) return;
    panel.hidden = true;
    fab.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', onKeydown, true);
    document.removeEventListener('mousedown', onOutsideClick, true);
    if (lastFocusedBeforeOpen && typeof lastFocusedBeforeOpen.focus === 'function') {
      lastFocusedBeforeOpen.focus();
    } else {
      fab.focus();
    }
  }

  fab.addEventListener('click', function () {
    if (panel.hidden) openPanel(); else closePanel();
  });
  closeBtn.addEventListener('click', closePanel);

  document.getElementById('a11yFontIncBtn').addEventListener('click', function () {
    if (prefs.fontStep < FONT_STEPS.length - 1) {
      prefs.fontStep++;
      savePrefs();
      applyFontStep();
      announce(isHe() ? 'גודל טקסט ' + FONT_STEPS[prefs.fontStep] + ' אחוז' : 'Text size ' + FONT_STEPS[prefs.fontStep] + ' percent');
    }
  });
  document.getElementById('a11yFontDecBtn').addEventListener('click', function () {
    if (prefs.fontStep > 0) {
      prefs.fontStep--;
      savePrefs();
      applyFontStep();
      announce(isHe() ? 'גודל טקסט ' + FONT_STEPS[prefs.fontStep] + ' אחוז' : 'Text size ' + FONT_STEPS[prefs.fontStep] + ' percent');
    }
  });

  document.querySelectorAll('[data-a11y-toggle]').forEach(function (btn) {
    var key = btn.getAttribute('data-a11y-toggle');
    var label = (btn.textContent || '').trim();
    btn.addEventListener('click', function () { toggleFeature(key, label); });
  });

  document.getElementById('a11yResetBtn').addEventListener('click', resetAll);

  applyAll();
})();
