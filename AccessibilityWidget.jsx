// React version — optional deliverable. Reuses a11y-widget.css as-is (import it once
// in your app root). Drop <AccessibilityWidget /> anywhere, ideally near the app root.
import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'a11yWidgetPrefs_v1';
const FONT_STEPS = [100, 110, 120, 130];

const DEFAULTS = {
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

const CLASS_MAP = {
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

const TOGGLES = [
  ['letterSpacing', 'ריווח טקסט משופר'],
  ['highContrast', 'ניגודיות גבוהה'],
  ['invert', 'היפוך צבעים'],
  ['grayscale', 'גווני אפור'],
  ['linkHighlight', 'הדגשת קישורים'],
  ['headingHighlight', 'הדגשת כותרות'],
  ['readableFont', 'גופן קריא'],
  ['bigCursor', 'סמן עכבר מוגדל'],
  ['cursorContrast', 'סמן בניגודיות גבוהה'],
  ['reduceMotion', 'ביטול אנימציות'],
  ['readingGuide', 'קו קריאה'],
  ['bigTargets', 'הגדלת אזורי לחיצה'],
];

function loadPrefs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : { ...DEFAULTS };
  } catch {
    return { ...DEFAULTS };
  }
}

export default function AccessibilityWidget() {
  const [prefs, setPrefs] = useState(loadPrefs);
  const [open, setOpen] = useState(false);
  const [liveMsg, setLiveMsg] = useState('');
  const panelRef = useRef(null);
  const fabRef = useRef(null);
  const lastFocused = useRef(null);

  // persist + apply side effects whenever prefs change
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs)); } catch { /* private mode / quota */ }

    const html = document.documentElement;
    html.style.fontSize = prefs.fontStep === 0 ? '' : `${FONT_STEPS[prefs.fontStep]}%`;
    Object.entries(CLASS_MAP).forEach(([key, cls]) => html.classList.toggle(cls, !!prefs[key]));

    if (window.lenisInstance?.stop) {
      if (prefs.reduceMotion) window.lenisInstance.stop();
      else window.lenisInstance.start();
    }
  }, [prefs]);

  // reading guide bar follows the mouse while enabled
  useEffect(() => {
    if (!prefs.readingGuide) return undefined;
    const el = document.createElement('div');
    el.className = 'a11y-reading-guide';
    el.setAttribute('aria-hidden', 'true');
    document.body.appendChild(el);
    const onMove = (e) => el.style.setProperty('--a11y-guide-y', `${e.clientY}px`);
    document.addEventListener('mousemove', onMove);
    return () => {
      document.removeEventListener('mousemove', onMove);
      el.remove();
    };
  }, [prefs.readingGuide]);

  // focus trap + ESC + outside click while panel is open
  useEffect(() => {
    if (!open) return undefined;
    lastFocused.current = document.activeElement;
    const panel = panelRef.current;
    const getFocusable = () =>
      Array.from(panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
        .filter((el) => !el.disabled && el.offsetParent !== null);

    getFocusable()[0]?.focus();

    function onKeydown(e) {
      if (e.key === 'Escape') { e.preventDefault(); setOpen(false); return; }
      if (e.key !== 'Tab') return;
      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    function onOutsideClick(e) {
      if (!panel.contains(e.target) && !fabRef.current?.contains(e.target)) setOpen(false);
    }

    document.addEventListener('keydown', onKeydown, true);
    document.addEventListener('mousedown', onOutsideClick, true);
    return () => {
      document.removeEventListener('keydown', onKeydown, true);
      document.removeEventListener('mousedown', onOutsideClick, true);
      lastFocused.current?.focus?.();
    };
  }, [open]);

  function toggle(key, label) {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
    setLiveMsg(`${label} ${prefs[key] ? 'כובה' : 'הופעל'}`);
  }
  function step(dir) {
    setPrefs((p) => {
      const next = Math.min(FONT_STEPS.length - 1, Math.max(0, p.fontStep + dir));
      setLiveMsg(`גודל טקסט ${FONT_STEPS[next]} אחוז`);
      return { ...p, fontStep: next };
    });
  }
  function reset() {
    setPrefs({ ...DEFAULTS });
    setLiveMsg('כל הגדרות הנגישות אופסו לברירת המחדל');
  }

  return (
    <>
      <button
        ref={fabRef}
        type="button"
        className="a11y-fab"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="a11yPanel"
        aria-label="פתיחת סרגל נגישות"
        onClick={() => setOpen((o) => !o)}
      >
        {/* Icon source: https://upload.wikimedia.org/wikipedia/commons/0/0c/Wheelchair_symbol.svg */}
        <svg className="a11y-fab-icon" viewBox="0 0 483.2226563 551.4306641" fill="currentColor" aria-hidden="true" focusable="false">
          <path fillRule="evenodd" clipRule="evenodd" d="M161.9882813,98.1240234c24.9628906-2.3046875,44.3574219-23.8110352,44.3574219-48.9658203C206.3457031,22.0830078,184.2626953,0,157.1875,0s-49.1572266,22.0830078-49.1572266,49.1582031c0,8.2568359,2.3037109,16.7055664,6.1445313,23.8105469l17.515625,246.4667969l180.3964844,0.0488281l73.9912109,173.3652344l97.1445313-38.0976563l-15.0429688-35.8203125l-54.3662109,19.625l-71.5908203-165.2802734l-167.7294922,1.1269531l-2.3027344-31.2128906l121.4228516,0.0483398v-46.1831055l-126.0546875-0.0493164L161.9882813,98.1240234z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M343.4199219,451.5908203c-30.4472656,60.1875-94.1748047,99.8398438-162.1503906,99.8398438C81.4296875,551.4306641,0,470.0009766,0,370.1611328c0-70.1005859,42.4853516-135.2436523,105.8818359-164.1210938l4.1025391,53.5375977c-37.4970703,23.628418-60.6123047,66.262207-60.6123047,110.9506836c0,72.4267578,59.0712891,131.4970703,131.4970703,131.4970703c66.2617188,0,122.7646484-50.8515625,130.4697266-116.0869141L343.4199219,451.5908203z" />
        </svg>
      </button>

      {open && (
        <div
          id="a11yPanel"
          ref={panelRef}
          className="a11y-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="a11yPanelTitle"
        >
          <div className="a11y-panel-header">
            <h2 id="a11yPanelTitle" className="a11y-panel-title">סרגל נגישות</h2>
            <button type="button" className="a11y-close-btn" aria-label="סגירת סרגל נגישות" onClick={() => setOpen(false)}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="a11y-panel-body">
            <div className="a11y-row a11y-row-fontsize">
              <span className="a11y-row-label" id="a11yFontSizeLabel">גודל טקסט</span>
              <div className="a11y-fontsize-controls" role="group" aria-labelledby="a11yFontSizeLabel">
                <button type="button" className="a11y-step-btn" disabled={prefs.fontStep === 0} onClick={() => step(-1)} aria-label="הקטן טקסט">א-</button>
                <span className="a11y-fontsize-value" aria-live="polite">{FONT_STEPS[prefs.fontStep]}%</span>
                <button type="button" className="a11y-step-btn" disabled={prefs.fontStep === FONT_STEPS.length - 1} onClick={() => step(1)} aria-label="הגדל טקסט">א+</button>
              </div>
            </div>

            {TOGGLES.map(([key, label]) => (
              <button
                key={key}
                type="button"
                className="a11y-toggle-row"
                aria-pressed={!!prefs[key]}
                onClick={() => toggle(key, label)}
              >
                <span>{label}</span>
                <span className="a11y-switch" aria-hidden="true"><span className="a11y-switch-knob" /></span>
              </button>
            ))}

            <button type="button" className="a11y-reset-btn" onClick={reset}>איפוס כל ההגדרות</button>

            <div className="a11y-statement">
              <h3 className="a11y-statement-title">הצהרת נגישות</h3>
              <p>אנו משקיעים מאמצים להנגיש את האתר בהתאם להנחיות WCAG 2.1 ברמה AA, במטרה לאפשר חוויית שימוש נוחה ושוויונית לכלל המשתמשים.</p>
              <p>במידה ונתקלתם בקושי או בתקלה בנושא נגישות, נשמח לקבל פנייה ולטפל בה בהקדם.</p>
              <p>אחראי נגישות: <strong>[BRAND_NAME]</strong> · טלפון: <strong>[PHONE]</strong> · אימייל: <strong>[EMAIL]</strong></p>
              <p>פנייה זמינה גם בוואטסאפ / טופס יצירת קשר (אם קיים).</p>
              <p className="a11y-statement-updated">עודכן לאחרונה: [DATE]</p>
            </div>
          </div>
        </div>
      )}

      <div className="a11y-sr-only" role="status" aria-live="polite">{liveMsg}</div>
    </>
  );
}
