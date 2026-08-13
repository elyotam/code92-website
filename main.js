/**
 * Code92 — main.js v35.0
 * Company: Code92
 * Dual Language Translation & AI Sales Concierge Chatbot
 */
'use strict';

const WA_NUMBER = '972500000000';

// Real-AI backend for genuinely open-ended chat questions (see chat-worker/DEPLOY.md).
// Until deployed and this placeholder replaced with the real workers.dev URL,
// askAI() below simply returns null and the guided flow handles everything —
// the chat stays fully functional either way.
const AI_WORKER_URL = 'https://code92-chat-ai.chat-worker.workers.dev';

// 100% Complete Dual Language Dictionary
const DICT = {
  he: {
    langBtn: 'EN',
    navContactBtnText: 'צרו איתנו קשר',
    h1_line1: 'פתרונות דיגיטליים',
    h1_line2: 'לעסקים שרוצים',
    h1_line3: 'לייצר <span class="text-brand">תוצאות</span>',
    heroDesc: 'בניית אתרים, חנויות אונליין, אפליקציות, מערכות ואוטומציות AI <strong>שמקדמות אותכם כמה צעדים לפני המתחרים</strong>.',
    processTitle1: 'איך אנחנו הופכים רעיון',
    processTitle2: 'לפתרון שמייצר תוצאות',
    pCardNum1: '1', pCardHead1: 'אסטרטגיה ואפיון',
    pCardDesc1: 'איפיון מדויק ומחקר שוק מעמיק שמאתר את מנועי הצמיחה של העסק שלכם כדי לבנות ארכיטקטורה דיגיטלית שממירה גולשים ללקוחות משלמים',
    pCardNum2: '2', pCardHead2: 'פיתוח אתרים ומערכות Web',
    pCardDesc2: 'אתרים וחנויות E-commerce ברמת עיצוב גבוהה, בנויים כדי להמיר גולשים ללקוחות משלמים',
    pCardNum3: '3', pCardHead3: 'אוטומציות AI ואפליקציות מותאמות',
    pCardDesc3: 'פיתוח אפליקציות מותאמות אישית וסוכני AI חכמים החוסכים 80% מזמן העבודה הידנית ומייעלים את מערך המכירות והשירות 24/7',
    pCardNum4: '4', pCardHead4: 'מעטפת Cloud אבטחה וצמיחה מתמדת',
    pCardDesc4: 'תשתיות ענן, אבטחת מידע קפדנית וליווי מקצועי צמוד מהצוות שלנו, שמבטיח שהמוצר שלכם ממשיך לייצר לידים והכנסות לאורך זמן',
    contactTitle1: 'רוצים לשמוע עוד?',
    contactTitle2: 'צרו איתנו קשר',
    contactSub: 'השאירו פרטים ונחזור אליכם בהקדם האפשרי עם כל התשובות.',
    lblFullname: 'שם מלא *',
    lblPhone: 'טלפון *',
    lblEmail: 'אימייל *',
    lblMsg: 'הודעה',
    placeholderName: 'שם מלא',
    placeholderPhone: '050-0000000',
    placeholderEmail: 'name@company.com',
    placeholderMsg: 'איך נוכל לעזור?',
    btnSubmitTxt: 'שליחה',
    copyright: '© Code92 · כל הזכויות שמורות',

    // Bot Translations
    botName: 'העוזר הווירטואלי',
    botStatus: 'יועץ דיגיטלי • זמין 24/7',
    botTyping: 'כותב/ת תשובה...',
    botPlaceholder: 'הקלידו הודעה או מספר טלפון...',
    botGreeting: `היי! 👋 אני היועץ הדיגיטלי.\nבמקום למלא טופס יבש — בואו נבין תוך דקה מה הכי מתאים לפרויקט שלכם.\nאיזה תחום הכי קרוב למה שאתם מחפשים?`,
    botStageQ: 'באיזה שלב אתם נמצאים כרגע?',
    botTimingQ: 'ומתי הייתם רוצים להתחיל?',
    botContactQ: `מעולה, יש לי כבר תמונה טובה על הפרויקט 🙌\nכדי שנציג מהצוות שלנו יחזור אליכם באופן אישי — מה השם המלא ומספר הטלפון שלכם?`,
    botServices: [
      {
        id: 'web',
        label: '💻 אתר או חנות אונליין',
        response: `מצוין — בדיוק התחום שלנו 💻 אנחנו בונים אתרי תדמית יוקרתיים, חנויות אונליין ומערכות Web מתקדמות.`
      },
      {
        id: 'ai',
        label: '🤖 אוטומציה או אפליקציה חכמה',
        response: `נשמע מעניין 🤖 אנחנו מפתחים סוכני AI ואפליקציות מותאמות שחוסכות עד 80% מזמן העבודה הידנית.`
      },
      {
        id: 'cloud',
        label: '☁️ תשתית, אבטחה או ליווי שוטף',
        response: `הבנתי ☁️ אנחנו מספקים תשתיות ענן, אבטחת מידע קפדנית וליווי מקצועי שוטף מהצוות שלנו.`
      },
      {
        id: 'unsure',
        label: '🧭 לא בטוחים, צריך ייעוץ',
        response: `אין בעיה 🧭 נתחיל מאיפיון קצר — כך גם אם עדיין לא בטוחים, נדע להכווין אתכם נכון.`
      }
    ],
    botStageOpts: [
      { id: 'idea', label: 'יש רעיון, עדיין בתכנון' },
      { id: 'existing', label: 'יש לנו כבר עסק או מוצר קיים' },
      { id: 'upgrade', label: 'רוצים לשדרג משהו קיים' }
    ],
    botTimingOpts: [
      { id: 'asap', label: 'רוצים להתחיל בהקדם' },
      { id: 'quarter', label: 'ברבעון הקרוב' },
      { id: 'exploring', label: 'עדיין בודקים אפשרויות' }
    ],
    botDidntUnderstand: `אופס, ההודעה שכתבת לא כל כך מובנת לי 😅\nאפשר לנסות לנסח מחדש או לבחור באחת האפשרויות למטה:`,
    botAskPhoneAgain: (name) => `תודה${name ? ', ' + name : ''}! ומה מספר הטלפון הכי נוח ליצירת קשר? 📱`,
    botAskContactAgain: `כדי שנוכל לחזור אליכם, אשמח לקבל שם מלא ומספר טלפון תקין 🙂`,
    botGreetingReply: 'שלום! 😊',
    botNeedQ: 'באיזה תחום תרצו להתמקד?',
    botContactQShort: 'מה השם המלא ומספר הטלפון שלכם? 📱'
  },
  en: {
    langBtn: 'HE',
    navContactBtnText: 'Contact Us',
    h1_line1: 'Digital Solutions',
    h1_line2: 'For Businesses That Want',
    h1_line3: 'To Generate <span class="text-brand">Results</span>',
    heroDesc: 'Building websites, online stores, apps, custom systems and AI automations <strong>that keep you steps ahead of your competitors</strong>.',
    processTitle1: 'How We Turn An Idea',
    processTitle2: 'Into A Solution That Drives Results',
    pCardNum1: '1', pCardHead1: 'Strategy & UX Architecture',
    pCardDesc1: 'Precise architecture and market research identifying your exact growth engines to convert visitors into paying clients',
    pCardNum2: '2', pCardHead2: 'Websites & Web Systems Development',
    pCardDesc2: 'Premium websites and e-commerce stores, built to convert visitors into paying customers',
    pCardNum3: '3', pCardHead3: 'AI Automations & Custom Apps',
    pCardDesc3: 'Custom mobile apps and intelligent AI agents saving up to 80% manual work while boosting sales and 24/7 support',
    pCardNum4: '4', pCardHead4: 'Cloud Infrastructure & Growth',
    pCardDesc4: 'Enterprise cloud infrastructure, rigorous cyber security, and close ongoing management by our team ensuring continuous revenue growth',
    contactTitle1: 'Want to hear more?',
    contactTitle2: 'Contact Us',
    contactSub: 'Leave your details and we will get back to you shortly with full answers.',
    lblFullname: 'Full Name *',
    lblPhone: 'Phone *',
    lblEmail: 'Email *',
    lblMsg: 'Message',
    placeholderName: 'Full Name',
    placeholderPhone: '050-0000000',
    placeholderEmail: 'name@company.com',
    placeholderMsg: 'How can we help?',
    btnSubmitTxt: 'Submit',
    copyright: '© Code92 · All Rights Reserved',

    // Bot Translations
    botName: 'Virtual Assistant',
    botStatus: 'Digital Consultant • Available 24/7',
    botTyping: 'typing a reply...',
    botPlaceholder: 'Type a message or phone number...',
    botGreeting: `Hi! 👋 I'm your digital consultant.\nInstead of a plain form — let's figure out in a minute what fits your project best.\nWhich area is closest to what you're looking for?`,
    botStageQ: 'What stage are you at right now?',
    botTimingQ: 'And when would you like to start?',
    botContactQ: `Great, I have a good picture of the project now 🙌\nSo a member of our team can get back to you personally — what's your full name and phone number?`,
    botServices: [
      {
        id: 'web',
        label: '💻 A website or online store',
        response: `Great — that's exactly our focus 💻 We build luxury brand websites, online stores and advanced Web systems.`
      },
      {
        id: 'ai',
        label: '🤖 Automation or a smart app',
        response: `Sounds interesting 🤖 We develop AI agents and custom apps that save up to 80% of manual work.`
      },
      {
        id: 'cloud',
        label: '☁️ Infrastructure, security or ongoing support',
        response: `Got it ☁️ We provide cloud infrastructure, rigorous information security and ongoing professional management from our team.`
      },
      {
        id: 'unsure',
        label: '🧭 Not sure yet, need advice',
        response: `No problem 🧭 Let's start with a short scoping chat — even if you're not sure yet, we'll help point you in the right direction.`
      }
    ],
    botStageOpts: [
      { id: 'idea', label: 'We have an idea, still planning' },
      { id: 'existing', label: 'We already have a business or product' },
      { id: 'upgrade', label: 'We want to upgrade something existing' }
    ],
    botTimingOpts: [
      { id: 'asap', label: 'Want to start ASAP' },
      { id: 'quarter', label: 'Within this quarter' },
      { id: 'exploring', label: 'Still exploring options' }
    ],
    botDidntUnderstand: `Oops, I couldn't quite understand that 😅\nPlease try rephrasing or choose one of the options below:`,
    botAskPhoneAgain: (name) => `Thanks${name ? ', ' + name : ''}! And what's the best phone number to reach you? 📱`,
    botAskContactAgain: `So we can get back to you, please share your full name and a valid phone number 🙂`,
    botGreetingReply: 'Hi there! 😊',
    botNeedQ: 'Which area would you like to focus on?',
    botContactQShort: "What's your full name and phone number? 📱"
  }
};

let currentLang = 'he';

// ==========================================================================
// Lightweight offline understanding layer for the chat concierge.
// No external API/LLM — everything runs client-side, so there's nothing that
// could be exposed as a stealable key on a static, no-backend site. Instead of
// blindly accepting any free text as an answer, incoming messages are checked
// against known filler/greeting patterns (rejected, re-asked) and matched
// against bilingual keyword sets per question (accepted + normalized). Real
// answers that don't match a known phrase are still accepted as free text —
// this only filters out clear non-answers, it never blocks genuine input.
// ==========================================================================
// Greetings ("שלום", "hi"...) are the single most natural thing a visitor types
// to open a chat — they get a warm reply that re-asks the pending question, NOT
// a "didn't understand" rejection. Neutral filler ("test", "ok"...) has no
// conversational content worth replying to, so it just re-asks plainly.
const GREETING_WORDS = [
  'היי', 'הי', 'הייי', 'הלו', 'שלום', 'אהלה', 'מה קורה', 'מה נשמע', 'מה המצב', 'מה העניינים',
  'hi', 'hii', 'hey', 'heyy', 'hello', 'yo', 'sup', 'howdy'
];

const FILLER_WORDS = [
  'test', 'טסט', 'בדיקה', 'ניסיון', 'בודק', 'בודקת',
  'אוקיי', 'אוקי', 'בסדר', 'כן', 'לא', 'נו', 'ok', 'okay', 'k', 'sure', 'cool', 'nice'
];

function normalizeForFillerCheck(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[!.?,;:'"״’]/g, '')
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '')
    .trim();
}

function isGreetingOnly(text) {
  return GREETING_WORDS.includes(normalizeForFillerCheck(text));
}

function isFillerOnly(text) {
  const stripped = normalizeForFillerCheck(text);
  if (!stripped) return true;
  return FILLER_WORDS.includes(stripped);
}

const NEED_KEYWORDS = {
  web: ['אתר', 'חנות', 'דף נחיתה', 'קטלוג', 'landing', 'website', 'site', 'store', 'shop', 'e-commerce', 'ecommerce'],
  ai: ['אוטומצי', 'בוט', 'סוכן חכם', 'אפליקצי', 'automation', 'bot', 'ai agent', 'chatbot', 'smart app', 'custom app'],
  cloud: ['ענן', 'אבטחה', 'שרת', 'תחזוקה', 'ליווי', 'cloud', 'security', 'hosting', 'server', 'maintenance', 'devops'],
  unsure: ['לא בטוח', 'לא יודע', 'ייעוץ', 'not sure', "don't know", 'advice', 'consult', 'unsure']
};

const STAGE_KEYWORDS = {
  idea: ['רעיון', 'בתכנון', 'לתכנן', 'עוד לא התחלנו', 'עדיין לא', 'idea', 'planning', "haven't started", 'not started yet'],
  existing: ['יש לנו', 'יש כבר', 'קיים', 'פועל כבר', 'עסק קיים', 'מוצר קיים', 'already have', 'existing', 'up and running', 'have a business', 'have a product'],
  upgrade: ['שדרוג', 'לשדרג', 'לשפר', 'לחדש', 'לעדכן', 'upgrade', 'improve', 'revamp', 'redesign']
};

const TIMING_KEYWORDS = {
  asap: ['בהקדם', 'מיד', 'דחוף', 'עכשיו', 'כמה שיותר מהר', 'asap', 'urgent', 'right away', 'immediately'],
  quarter: ['רבעון', 'חודש', 'שבועות', 'בקרוב', 'quarter', 'month', 'weeks', 'soon'],
  exploring: ['בודקים', 'מתלבטים', 'לא בטוחים', 'רק בודק', 'עדיין חושבים', 'exploring', 'just looking', 'not sure yet', 'still thinking']
};

function matchKeywords(text, dict) {
  const lower = text.toLowerCase();
  for (const key of Object.keys(dict)) {
    if (dict[key].some((kw) => lower.includes(kw.toLowerCase()))) return key;
  }
  return null;
}

const QUESTION_STARTERS = /^(איך|למה|מה|כמה|האם|מתי|מי|איפה|תסביר|why|how|what|when|who|where|which|do you|does|can you|is it|are you|will you)\b/i;

function looksLikeOpenQuestion(text) {
  return /\?/.test(text) || QUESTION_STARTERS.test(text.trim());
}

// Calls the Cloudflare Worker (see chat-worker/) for a real, grounded AI answer.
// mode: 'answer' (default) for genuine open questions, or 'redirect' for a
// one-sentence reaction to a message that didn't clearly answer the pending
// guided-flow question (the caller appends the real question text itself —
// see handleUnclearInput below — since the model doesn't reliably track which
// question is pending when asked to pick the follow-up itself).
// Returns null on any failure (not deployed yet, network error, rate limit) so
// callers can fall back to canned copy — the chat never breaks over this.
async function askAI(question, mode) {
  if (AI_WORKER_URL.includes('YOUR-SUBDOMAIN')) return null;
  try {
    const res = await fetch(AI_WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, lang: currentLang, mode: mode || 'answer' }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data && data.answer ? String(data.answer) : null;
  } catch {
    return null;
  }
}

// Durable lead capture — fires alongside the existing WhatsApp handoff (contact
// form and chat) so a submission is never silently lost if the visitor doesn't
// finish sending the WhatsApp message. Purely additive: never awaited by the
// caller, never blocks or alters the existing flow, silently no-ops if the
// Worker isn't deployed or the request fails.
function saveLead(fields) {
  if (AI_WORKER_URL.includes('YOUR-SUBDOMAIN')) return;
  fetch(AI_WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'lead', lang: currentLang, ...fields }),
  }).catch(() => {});
}

let updateBotUiFn = null;
let lenisInstance = null;

function toggleLanguage() {
  currentLang = currentLang === 'he' ? 'en' : 'he';
  const data = DICT[currentLang];

  document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;

  const btn = document.getElementById('langToggleBtn');
  if (btn) btn.textContent = data.langBtn;

  const setHtml = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setPlaceholder = (id, val) => { const el = document.getElementById(id); if (el) el.placeholder = val; };

  setText('navContactBtnText', data.navContactBtnText);
  setHtml('heroHeadline', `<span class="border-b-line">${data.h1_line1}</span><span class="border-b-line">${data.h1_line2}</span><span class="border-b-line">${data.h1_line3}</span>`);
  setHtml('heroSubtitle', data.heroDesc);
  setHtml('processTitle', `<span class="border-b-line" style="color:#cfcfcf;font-weight:300">${data.processTitle1}</span><span class="border-b-line text-brand">${data.processTitle2}</span>`);

  setText('pCardNum1', data.pCardNum1); setText('pCardHead1', data.pCardHead1); setText('pCardDesc1', data.pCardDesc1);
  setText('pCardNum2', data.pCardNum2); setText('pCardHead2', data.pCardHead2); setText('pCardDesc2', data.pCardDesc2);
  setText('pCardNum3', data.pCardNum3); setText('pCardHead3', data.pCardHead3); setText('pCardDesc3', data.pCardDesc3);
  setText('pCardNum4', data.pCardNum4); setText('pCardHead4', data.pCardHead4); setText('pCardDesc4', data.pCardDesc4);

  setHtml('contactTitle', `<span class="border-b-line">${data.contactTitle1}</span><span class="border-b-line text-brand">${data.contactTitle2}</span>`);
  setText('contactSubtitle', data.contactSub);

  setText('lblFullname', data.lblFullname); setText('lblPhone', data.lblPhone);
  setText('lblEmail', data.lblEmail); setText('lblMsg', data.lblMsg);

  setPlaceholder('name', data.placeholderName);
  setPlaceholder('phone', data.placeholderPhone);
  setPlaceholder('email', data.placeholderEmail);
  setPlaceholder('message', data.placeholderMsg);

  setText('btnSubmitTxt', data.btnSubmitTxt);
  setText('copyrightBar', data.copyright);

  if (typeof updateBotUiFn === 'function') {
    updateBotUiFn();
  }
}

// ================= CODE92 AI CONCIERGE =================
// Transparently-automated assistant — no fake human identity, no stock photo.
// Question flow mirrors the real project-matcher tool (#matcher) 1:1 so both
// tools stay consistent and every recommendation traces back to real,
// already-published service content (see MATCHER_RESULTS / MATCHER_LABELS below).
function initSmartConcierge() {
  const nameEl = document.getElementById('botNameTitle');
  const statusEl = document.getElementById('botStatusTxt');
  const panel = document.getElementById('salesChatPanel');
  const fab = document.getElementById('salesChatFab');
  const close = document.getElementById('salesChatClose');
  const msgs = document.getElementById('salesChatMessages');
  const input = document.getElementById('salesChatInput');
  const send = document.getElementById('salesChatSend');

  let isOpen = false;
  let currentOptsRow = null; // the live chip row, if any — always lives inside the scrolling message flow

  // Bot State Management — mirrors the matcher tool's need -> stage -> timing arc
  let chatState = {
    step: 'INIT', // 'INIT' -> 'NEED_SELECTED' -> 'STAGE_SELECTED' -> 'TIMING_SELECTED' -> 'DONE'
    needId: '',
    needLabel: '',
    stageLabel: '',
    timingLabel: '',
    userName: '',
    userPhone: ''
  };

  function renderBotInfo() {
    if (nameEl) nameEl.textContent = DICT[currentLang].botName;
    if (statusEl) statusEl.textContent = DICT[currentLang].botStatus;
    if (input) input.placeholder = DICT[currentLang].botPlaceholder;
  }

  function addMsg(text, isRep = true) {
    const row = document.createElement('div');
    row.className = `chat-bubble-row ${isRep ? 'rep' : 'user'}`;
    row.innerHTML = `<div class="chat-bubble">${text.replace(/\n/g, '<br>')}</div>`;
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showTypingIndicator() {
    const row = document.createElement('div');
    row.className = 'typing-row';
    row.id = 'typingIndicatorRow';
    row.innerHTML = `
      <div class="typing-bubble">
        <span style="font-size:0.75rem;color:#878787">${DICT[currentLang].botTyping}</span>
        <div class="typing-dots"><span></span><span></span><span></span></div>
      </div>
    `;
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function removeTypingIndicator() {
    const el = document.getElementById('typingIndicatorRow');
    if (el) el.remove();
  }

  function replyWithTyping(responseText, callback) {
    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      addMsg(responseText);
      if (callback) callback();
    }, 900);
  }

  // Chips render as the newest item in the scrolling message list itself (not a
  // separate fixed footer) — this is what keeps them from ever competing for a
  // fixed pixel budget with the messages above them on short mobile viewports.
  function clearOptions() {
    if (currentOptsRow) {
      currentOptsRow.remove();
      currentOptsRow = null;
    }
  }

  function setOptions(optionsList) {
    clearOptions();
    if (!optionsList || !optionsList.length) return;

    const row = document.createElement('div');
    row.className = 'chat-quick-opts-inline';

    optionsList.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'chip-btn';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => {
        addMsg(opt.label, false);
        clearOptions();
        handleOptionSelection(opt);
      });
      row.appendChild(btn);
    });

    currentOptsRow = row;
    msgs.appendChild(row);
    msgs.scrollTop = msgs.scrollHeight;
  }

  // AI & NLP: Detect gibberish / unreadable inputs
  function isGibberish(text) {
    const clean = text.trim();
    if (clean.length < 3) return false;

    // 1. Repeated character mash (e.g. "חחחחחח", "אאאאא", "ssssss")
    if (/([a-zA-Zא-ת])\1{4,}/.test(clean)) return true;

    // 2. Keyboard rows / Mash patterns (e.g. "asdfghjkl", "qwertyuiop", "זסדגכע")
    const mashes = ['asdfg', 'dfghj', 'fghjk', 'ghjkl', 'qwerty', 'werty', 'zxcvb', 'xcvbn', 'שדגכע', 'דגכעי', 'גכעיח'];
    const lower = clean.toLowerCase();
    if (mashes.some(m => lower.includes(m))) return true;

    // 3. Low character diversity in long strings (e.g. "בלחלגחכלחגכלג")
    const uniqueChars = new Set(clean.toLowerCase()).size;
    if (clean.length > 8 && (uniqueChars / clean.length) < 0.3) return true;

    // 4. Random consonant mashes without vowels or space
    if (/^[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]{7,}$/.test(clean)) return true;

    return false;
  }

  // AI & NLP: Intent Detection Engine
  function detectIntent(text) {
    const lower = text.toLowerCase();

    // Check Phone Number
    const phoneMatch = text.match(/\b05\d[-]?\d{7}\b/) || text.match(/\b0\d[-]?\d{7,8}\b/);
    if (phoneMatch) return { intent: 'PHONE', val: phoneMatch[0] };

    // Check Greeting — a friendly opener, answered warmly, never rejected
    if (isGreetingOnly(text)) return { intent: 'GREETING' };

    // Check Gibberish / filler-only messages ("test", "ok"...) — not real answers
    if (isFillerOnly(text) || isGibberish(text)) return { intent: 'GIBBERISH' };

    // Check Price Inquiry
    if (/(מחיר|עלות|כמה עולה|תמחור|הצעה|הצעת מחיר|תקציב|cost|price|budget|quote)/i.test(lower)) {
      return { intent: 'PRICING' };
    }

    // Check Timeline Inquiry
    if (/(כמה זמן|זמנים|לוח זמנים|דחיפות|מהיר|מתי|timeline|how long|duration)/i.test(lower)) {
      return { intent: 'TIMELINE' };
    }

    // Check Tech Stack Inquiry
    if (/(שפות|טכנולוגיה|איך בונים|react|next|python|node|vue|tailwind|aws|cloud)/i.test(lower)) {
      return { intent: 'TECH' };
    }

    return { intent: 'GENERAL' };
  }

  // Step 2: stage question — identical wording to the #matcher tool's stage step
  function askStage() {
    replyWithTyping(DICT[currentLang].botStageQ, () => {
      setOptions(DICT[currentLang].botStageOpts);
    });
  }

  // Step 3: timing question — identical wording to the #matcher tool's timing step
  function askTiming() {
    replyWithTyping(DICT[currentLang].botTimingQ, () => {
      setOptions(DICT[currentLang].botTimingOpts);
    });
  }

  // Step 4: contact capture
  function askContact() {
    replyWithTyping(DICT[currentLang].botContactQ, () => {
      setOptions([]);
    });
  }

  // Anything that doesn't clearly answer the pending question (small talk,
  // filler, garbled typing) still gets a real, varied reply instead of the same
  // canned "I didn't understand" every time: the AI generates a one-sentence
  // reaction (see chat-worker/'s "redirect" mode), and the code appends the
  // ACTUAL pending question verbatim — so the follow-up is always correct even
  // though the model doesn't reliably track it itself. Falls back to plain
  // canned copy if the AI is unreachable; either way the state never advances.
  async function handleUnclearInput(val) {
    const d = DICT[currentLang];
    const isContactStep = chatState.step === 'TIMING_SELECTED' || chatState.step === 'DONE';
    const contextQuestion = chatState.step === 'NEED_SELECTED' ? d.botStageQ
      : chatState.step === 'STAGE_SELECTED' ? d.botTimingQ
      : isContactStep ? d.botContactQShort
      : d.botNeedQ;

    showTypingIndicator();
    const reaction = await askAI(val, 'redirect');
    removeTypingIndicator();

    const message = reaction ? `${reaction} ${contextQuestion}` : (isContactStep ? d.botAskContactAgain : d.botDidntUnderstand);
    addMsg(message);

    if (chatState.step === 'INIT') setOptions(d.botServices);
    else if (chatState.step === 'NEED_SELECTED') setOptions(d.botStageOpts);
    else if (chatState.step === 'STAGE_SELECTED') setOptions(d.botTimingOpts);
    // contact step has no buttons — the message above already re-asks in words
  }

  // Handle Chip/Button Option Selection
  function handleOptionSelection(opt) {
    if (chatState.step === 'INIT') {
      chatState.needId = opt.id || 'unsure';
      chatState.needLabel = opt.label;
      chatState.step = 'NEED_SELECTED';
      replyWithTyping(opt.response, askStage);
    } else if (chatState.step === 'NEED_SELECTED') {
      chatState.stageLabel = opt.label;
      chatState.step = 'STAGE_SELECTED';
      askTiming();
    } else if (chatState.step === 'STAGE_SELECTED') {
      chatState.timingLabel = opt.label;
      chatState.step = 'TIMING_SELECTED';
      askContact();
    }
  }

  // Handle Free Text User Input. Disabled for the duration of processing so a
  // fast typist can't fire overlapping AI calls / out-of-order responses.
  let isProcessingInput = false;
  async function handleUserInput() {
    if (isProcessingInput) return;
    const val = input.value.trim();
    if (!val) return;

    isProcessingInput = true;
    if (send) send.disabled = true;
    if (input) input.disabled = true;

    try {
      await processUserInput(val);
    } finally {
      isProcessingInput = false;
      if (send) send.disabled = false;
      if (input) { input.disabled = false; input.focus(); }
    }
  }

  async function processUserInput(val) {
    addMsg(val, false);
    input.value = '';
    clearOptions();

    const isHe = currentLang === 'he';
    const analysis = detectIntent(val);

    // 1. Greeting — the single most natural way to open a chat ("שלום"/"hi").
    // Never treated as a non-answer; replies warmly and re-asks whatever
    // question is actually pending, instead of "I didn't understand you".
    if (analysis.intent === 'GREETING') {
      const d = DICT[currentLang];
      let questionText;
      if (chatState.step === 'NEED_SELECTED') questionText = d.botStageQ;
      else if (chatState.step === 'STAGE_SELECTED') questionText = d.botTimingQ;
      else if (chatState.step === 'TIMING_SELECTED' || chatState.step === 'DONE') questionText = d.botContactQShort;
      else questionText = d.botNeedQ;

      replyWithTyping(`${d.botGreetingReply} ${questionText}`, () => {
        if (chatState.step === 'INIT') setOptions(d.botServices);
        else if (chatState.step === 'NEED_SELECTED') setOptions(d.botStageOpts);
        else if (chatState.step === 'STAGE_SELECTED') setOptions(d.botTimingOpts);
        // contact step has no buttons — the message above already re-asks in words
      });
      return;
    }

    // 1b. Gibberish / filler-only Response — a non-answer never advances the flow;
    // gets a real AI-generated reaction plus the actual pending question, not a
    // static template (see handleUnclearInput above).
    if (analysis.intent === 'GIBBERISH') {
      await handleUnclearInput(val);
      return;
    }

    // 2. Phone number typed anywhere — accepted immediately regardless of step
    if (analysis.intent === 'PHONE') {
      chatState.userPhone = analysis.val;
      if (!chatState.userName) chatState.userName = val.replace(analysis.val, '').trim() || (isHe ? 'לקוח יקר' : 'Prospective client');
      chatState.step = 'DONE';
      finishLeadCapture();
      return;
    }

    // 2b. At the contact step but no phone digits in this message — capture it as
    // the name and ask specifically for a phone number instead of misfiling it.
    if (chatState.step === 'TIMING_SELECTED' || chatState.step === 'DONE') {
      if (!chatState.userName) chatState.userName = val;
      chatState.step = 'TIMING_SELECTED';
      replyWithTyping(DICT[currentLang].botAskPhoneAgain(chatState.userName));
      return;
    }

    // 3. Pricing Query Handling
    if (analysis.intent === 'PRICING') {
      const priceMsg = isHe
        ? `מחירי הפרויקטים ב-Code92 נגזרים מאפיון מדויק והיקף העבודה. אנו מציעים הצעת מחיר שקופה ומותאמת אישית 💎\nבאיזה תחום מדובר? אפשר לבחור למטה:`
        : `Project pricing at Code92 depends on scope and technical architecture. We provide transparent, custom quotes 💎\nWhich area fits your project? Choose below:`;

      replyWithTyping(priceMsg, () => setOptions(DICT[currentLang].botServices));
      return;
    }

    // 4. Timeline Query Handling
    if (analysis.intent === 'TIMELINE') {
      const timelineMsg = isHe
        ? `אתרי תדמית ומערכות בסיסיות נבנים בדרך כלל תוך 1-2 שבועות. מערכות מורכבות וסוכני AI מפותחים תוך 3-4 שבועות ⚡\nמה לוח הזמנים המועדף עליך?`
        : `Websites and core solutions are delivered within 1-2 weeks. Custom apps & AI agents take 3-4 weeks ⚡\nWhat is your target timeline?`;

      replyWithTyping(timelineMsg, () => setOptions(DICT[currentLang].botTimingOpts));
      return;
    }

    // 5. Tech Stack Query Handling
    if (analysis.intent === 'TECH') {
      const techMsg = isHe
        ? `אנחנו ב-Code92 מפתחים בטכנולוגיות המתקדמות בעולם: React, Next.js, Node.js, Python, Tailwind, ותשתיות AWS/Cloud 🚀\nאיזה סוג פרויקט תרצה שנבנה עבורך?`
        : `At Code92 we build with modern tech: React, Next.js, Node.js, Python, Tailwind, and AWS Cloud 🚀\nWhat type of project would you like us to engineer?`;

      replyWithTyping(techMsg, () => setOptions(DICT[currentLang].botServices));
      return;
    }

    // 5c. Genuinely open-ended questions ("how do you build this", "do you work
    // with restaurants", etc.) get a real, grounded AI answer instead of a canned
    // reply — see chat-worker/. Only fires for actual questions, so the free daily
    // Neuron allocation is spent on real Q&A, not on every single message. If the
    // Worker isn't deployed yet or is unreachable, askAI() resolves to null and we
    // silently fall through to the guided-flow handling below — chat never breaks.
    if (looksLikeOpenQuestion(val)) {
      showTypingIndicator();
      const aiAnswer = await askAI(val);
      removeTypingIndicator();

      if (aiAnswer) {
        addMsg(aiAnswer);
        setTimeout(() => {
          if (chatState.step === 'INIT') setOptions(DICT[currentLang].botServices);
          else if (chatState.step === 'NEED_SELECTED') setOptions(DICT[currentLang].botStageOpts);
          else if (chatState.step === 'STAGE_SELECTED') setOptions(DICT[currentLang].botTimingOpts);
        }, 300);
        return;
      }
      // aiAnswer is null (not deployed / network error) — fall through below
    }

    // 5b. Guard for all three categorical questions (need/stage/timing): a fixed
    // filler-word list can never cover every typo/variant ("חיי" vs "היי" etc.),
    // so anything short that ALSO doesn't match a known concept for the question
    // actually being asked is treated as not-understood rather than silently
    // accepted as the answer. Longer free text is still accepted even without a
    // keyword hit — this only catches short non-answers, never genuine (if
    // differently-phrased) ones, and INIT stays the most lenient of the three
    // since describing a project in your own words is legitimately open-ended.
    const isShortUnmatchedNeed = chatState.step === 'INIT' && val.length < 8 && !matchKeywords(val, NEED_KEYWORDS);
    const isShortUnmatchedStage = chatState.step === 'NEED_SELECTED' && val.length < 8 && !matchKeywords(val, STAGE_KEYWORDS);
    const isShortUnmatchedTiming = chatState.step === 'STAGE_SELECTED' && val.length < 8 && !matchKeywords(val, TIMING_KEYWORDS);

    if (isShortUnmatchedNeed || isShortUnmatchedStage || isShortUnmatchedTiming) {
      await handleUnclearInput(val);
      return;
    }

    // 6. Generic free-text answers through the need -> stage -> timing flow.
    // Each is checked against a bilingual keyword set for that specific question first —
    // a match is normalized to the same canonical option a button-click would produce
    // (and, for the need step, triggers the same personalized reply as clicking the
    // matching chip). Text that matches nothing is still accepted as-is: this layer
    // only filters out clear non-answers (already caught above), never genuine ones.
    if (chatState.step === 'INIT') {
      const matchedId = matchKeywords(val, NEED_KEYWORDS);
      const matchedService = matchedId && DICT[currentLang].botServices.find((s) => s.id === matchedId);

      chatState.needId = matchedService ? matchedService.id : 'custom';
      chatState.needLabel = matchedService ? matchedService.label : val;
      chatState.step = 'NEED_SELECTED';

      const ackMsg = matchedService
        ? matchedService.response
        : (isHe ? `תודה, קיבלתי 👍 בואו נבין עוד קצת על הפרויקט.` : `Thanks, got it 👍 Let's understand the project a bit more.`);

      replyWithTyping(ackMsg, askStage);
    } else if (chatState.step === 'NEED_SELECTED') {
      const matchedId = matchKeywords(val, STAGE_KEYWORDS);
      const matchedOpt = matchedId && DICT[currentLang].botStageOpts.find((o) => o.id === matchedId);

      chatState.stageLabel = matchedOpt ? matchedOpt.label : val;
      chatState.step = 'STAGE_SELECTED';
      askTiming();
    } else if (chatState.step === 'STAGE_SELECTED') {
      const matchedId = matchKeywords(val, TIMING_KEYWORDS);
      const matchedOpt = matchedId && DICT[currentLang].botTimingOpts.find((o) => o.id === matchedId);

      chatState.timingLabel = matchedOpt ? matchedOpt.label : val;
      chatState.step = 'TIMING_SELECTED';
      askContact();
    }
  }

  // Complete Intake & Bridge to WhatsApp — recommendation copy reuses the exact
  // same MATCHER_RESULTS titles shown in the #matcher tool, nothing invented here.
  function finishLeadCapture() {
    const isHe = currentLang === 'he';
    const matched = MATCHER_RESULTS[chatState.needId] || null;
    const needSummary = matched ? matched.title : (chatState.needLabel || (isHe ? 'פנייה כללית' : 'General inquiry'));

    saveLead({
      source: 'chat',
      name: chatState.userName || '',
      phone: chatState.userPhone || '',
      needSummary,
      stageLabel: chatState.stageLabel || '',
      timingLabel: chatState.timingLabel || '',
    });

    const summaryText = isHe
      ? `תודה רבה! 🙏\nהפנייה שלכם נקלטה בהצלחה:\n• תחום מומלץ: ${needSummary}\n• שלב: ${chatState.stageLabel || '-'}\n• לוח זמנים: ${chatState.timingLabel || '-'}\n• יצירת קשר: ${chatState.userPhone || chatState.userName || 'פרטים התקבלו'}\n\nהצוות שלנו מ-Code92 יחזור אליכם בהקדם!`
      : `Thank you! 🙏\nYour inquiry was received:\n• Recommended area: ${needSummary}\n• Stage: ${chatState.stageLabel || '-'}\n• Timeline: ${chatState.timingLabel || '-'}\n• Contact: ${chatState.userPhone || chatState.userName || 'Details received'}\n\nOur team at Code92 will get back to you shortly!`;

    replyWithTyping(summaryText, () => {
      const waNote = isHe ? 'רוצים להמשיך את השיחה ב-WhatsApp כעת?' : 'Want to continue on WhatsApp now?';
      const btnLabel = isHe ? '📲 פתיחת שיחה ב-WhatsApp מול Code92' : '📲 Open WhatsApp chat with Code92';

      const waMessageText = encodeURIComponent(
        `שלום Code92! 👋\n` +
        `פנייה חדשה מהצ'אט באתר.\n` +
        `תחום מומלץ: ${needSummary}\n` +
        `שלב: ${chatState.stageLabel || '-'}\n` +
        `לוח זמנים: ${chatState.timingLabel || '-'}\n` +
        `יצירת קשר: ${chatState.userPhone || chatState.userName}`
      );
      const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMessageText}`;

      addMsg(`${waNote}<br><br><a href="${waUrl}" target="_blank" rel="noopener" class="chat-wa-direct-btn">${btnLabel}</a>`);
    });
  }

  function startConversation() {
    msgs.innerHTML = '';
    chatState = {
      step: 'INIT',
      needId: '',
      needLabel: '',
      stageLabel: '',
      timingLabel: '',
      userName: '',
      userPhone: ''
    };
    addMsg(DICT[currentLang].botGreeting);
    setOptions(DICT[currentLang].botServices);
  }

  updateBotUiFn = () => {
    renderBotInfo();
    if (isOpen) startConversation();
  };

  renderBotInfo();

  function toggleChat(state) {
    isOpen = state !== undefined ? state : !isOpen;
    panel.classList.toggle('open', isOpen);
    if (isOpen && msgs.children.length === 0) {
      startConversation();
    }
  }

  fab?.addEventListener('click', () => toggleChat());
  close?.addEventListener('click', () => toggleChat(false));

  send?.addEventListener('click', handleUserInput);
  input?.addEventListener('keydown', e => { if (e.key === 'Enter') handleUserInput(); });

  // Automatic Pop-Up after 3 seconds
  setTimeout(() => {
    if (!isOpen) {
      toggleChat(true);
    }
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('langToggleBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    toggleLanguage();
  });

  const form = document.getElementById('rubiconContactForm');
  if (form) {
    const requiredFields = ['name', 'phone', 'email'];
    requiredFields.forEach((id) => {
      const field = document.getElementById(id);
      field?.addEventListener('input', () => clearFieldError(field));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameField = document.getElementById('name');
      const phoneField = document.getElementById('phone');
      const emailField = document.getElementById('email');
      const message = document.getElementById('message')?.value.trim() || '';

      const name = nameField.value.trim();
      const phone = phoneField.value.trim();
      const email = emailField.value.trim();

      let firstInvalid = null;
      [ [nameField, name], [phoneField, phone], [emailField, email] ].forEach(([field, value]) => {
        if (!value) {
          showFieldError(field, 'שדה חובה');
          firstInvalid = firstInvalid || field;
        }
      });
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFieldError(emailField, 'כתובת אימייל לא תקינה');
        firstInvalid = firstInvalid || emailField;
      }
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      const text = encodeURIComponent(
        `שלום Code92! 👋\n\n` +
        `פנייה חדשה מאתר Code92:\n` +
        `👤 שם: ${name}\n` +
        `📞 טלפון: ${phone}\n` +
        `✉️ אימייל: ${email}\n` +
        (message ? `📝 הודעה: ${message}\n` : '')
      );

      saveLead({ source: 'contact-form', name, phone, email, message });
      window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
      showFormSuccess(form);
      form.reset();
    });
  }

  initSmartConcierge();
  initHeroParticlesCanvas();
  initLenisSmoothScroll();
  initScrollAnimations();
  initMagneticCursor();
  initMagneticButtons();
  initScrollChrome();
  initCardTilt();
  initHeroScrollCue();
  initProcessCinematic();
  initProjectMatcher();
});

// Dynamic Cyber Particle Matrix Canvas
function initHeroParticlesCanvas() {
  const canvas = document.getElementById('heroParticlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = canvas.offsetWidth || window.innerWidth;
  let height = canvas.height = canvas.offsetHeight || 940;

  window.addEventListener('resize', () => {
    if (!canvas) return;
    width = canvas.width = canvas.offsetWidth || window.innerWidth;
    height = canvas.height = canvas.offsetHeight || 940;
  });

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? '#00e676' : '#ffffff',
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  let mouseX = width / 2;
  let mouseY = height / 2;

  const heroSection = document.getElementById('hero');
  heroSection?.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.strokeStyle = `rgba(0, 230, 118, ${(1 - dist / 140) * 0.35})`;
          ctx.lineWidth = 1;
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw and update particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse attraction
      const mdx = mouseX - p.x;
      const mdy = mouseY - p.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 180) {
        p.x += (mdx / mdist) * 0.3;
        p.y += (mdy / mdist) * 0.3;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================================================
// Contact Form Feedback — inline field errors + visible success confirmation
// ==========================================================================
function showFieldError(field, message) {
  field.setAttribute('aria-invalid', 'true');
  const wrap = field.closest('.form-field');
  if (!wrap) return;
  let err = wrap.querySelector('.field-error');
  if (!err) {
    err = document.createElement('span');
    err.className = 'field-error';
    err.setAttribute('role', 'alert');
    wrap.appendChild(err);
  }
  err.textContent = message;
}

function clearFieldError(field) {
  field.removeAttribute('aria-invalid');
  const err = field.closest('.form-field')?.querySelector('.field-error');
  if (err) err.remove();
}

function showFormSuccess(form) {
  let note = form.querySelector('.form-success-note');
  if (!note) {
    note = document.createElement('div');
    note.className = 'form-success-note';
    note.setAttribute('role', 'status');
    form.appendChild(note);
  }
  note.textContent = currentLang === 'en'
    ? 'Thanks! Your WhatsApp message is ready to send.'
    : 'תודה! פתחנו לך הודעת WhatsApp מוכנה לשליחה.';
  note.classList.add('is-visible');
  clearTimeout(note._hideTimer);
  note._hideTimer = setTimeout(() => note.classList.remove('is-visible'), 5000);
}

// ==========================================================================
// Scroll-Driven Motion (GSAP + ScrollTrigger) — respects prefers-reduced-motion
// ==========================================================================
function initScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return; // everything is visible by default in the base CSS — nothing to reveal

  gsap.registerPlugin(ScrollTrigger);

  // Hero headline: line-by-line entrance on load (not scroll-gated — it's above the fold)
  const headlineLines = document.querySelectorAll('#heroHeadline .border-b-line');
  if (headlineLines.length) {
    gsap.from(headlineLines, {
      opacity: 0,
      y: 28,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.15,
    });
  }
  const heroDesc = document.getElementById('heroSubtitle');
  if (heroDesc) {
    gsap.from(heroDesc, { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out', delay: 0.55 });
  }

  // Subtle parallax on the hero video/gradient layer only — never on text (motion-sickness risk)
  gsap.to('.hero-video', {
    yPercent: 8,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 },
  });

  // Process section title: fade up on scroll into view
  const processTitle = document.getElementById('processTitle');
  if (processTitle) {
    gsap.from(processTitle.children, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: processTitle, start: 'top 85%', toggleActions: 'play none none reverse' },
    });
  }

  // Matcher section: eyebrow title fades up, then the card itself rises and
  // scales in — previously had no reveal at all, so it just snapped into view.
  const matcherTitle = document.querySelector('.matcher-section .process-title');
  const matcherCardWrap = document.querySelector('.matcher-card-wrap');
  if (matcherTitle && matcherCardWrap) {
    gsap.from(matcherTitle.children, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: matcherTitle, start: 'top 85%', toggleActions: 'play none none reverse' },
    });
    gsap.from(matcherCardWrap, {
      opacity: 0,
      y: 50,
      scale: 0.94,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: { trigger: matcherCardWrap, start: 'top 88%', toggleActions: 'play none none reverse' },
    });
  }

  // Why Code92 section: plain fade-up, same treatment as everything else —
  // deliberately not a new effect, this section is meant to read as calm.
  const whyUsTitle = document.querySelector('.why-us-title');
  const whyUsCards = document.querySelectorAll('.why-us-card');
  if (whyUsTitle && whyUsCards.length) {
    gsap.from(whyUsTitle.children, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: whyUsTitle, start: 'top 85%', toggleActions: 'play none none reverse' },
    });
    gsap.from(whyUsCards, {
      opacity: 0,
      y: 30,
      duration: 0.55,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.why-us-grid', start: 'top 88%', toggleActions: 'play none none reverse' },
    });
  }

  // Contact section: title + form fade up together
  const contactTitle = document.querySelector('.contact-title');
  const formBox = document.querySelector('.form-box');
  if (contactTitle && formBox) {
    gsap.from([contactTitle, formBox], {
      opacity: 0,
      y: 30,
      duration: 0.65,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.footer-contact-section', start: 'top 78%', toggleActions: 'play none none reverse' },
    });
  }
}

// ==========================================================================
// Custom Magnetic/Glow Cursor — desktop (fine pointer) only, respects reduced-motion
// ==========================================================================
function initMagneticCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  document.documentElement.classList.add('has-custom-cursor');

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let cx = x;
  let cy = y;

  window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
  }, { passive: true });

  function raf() {
    cx += (x - cx) * 0.18;
    cy += (y - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(raf);
  }
  raf();

  const interactiveSelector = 'a, button, input, textarea, .stage-badge, [data-cursor-hover]';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) cursor.classList.add('is-active');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) cursor.classList.remove('is-active');
  });
}

// ==========================================================================
// Magnetic Buttons — CTA pulls slightly toward the cursor within its own bounds
// ==========================================================================
function initMagneticButtons() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.btn-rubicon, .btn-wa-sq').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${relX * 0.25}px, ${relY * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ==========================================================================
// Lenis Smooth Scroll — wired to GSAP's ticker + ScrollTrigger per the
// documented integration pattern. Skipped entirely under reduced-motion,
// so native (instant) scrolling is what those users get.
// ==========================================================================
function initLenisSmoothScroll() {
  if (typeof Lenis === 'undefined' || typeof gsap === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const lenis = new Lenis({
    duration: 0.9,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 1,
  });
  lenisInstance = lenis;
  window.lenisInstance = lenis; // optional hook for a11y-widget.js's reduce-motion toggle

  if (typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
  }
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Lenis doesn't intercept in-page anchor links on its own — wire it explicitly
  // so header/skip-link jumps animate through the same smoothing, not a native jump
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -20 });
    });
  });
}

// ==========================================================================
// Scroll Chrome — progress bar fill, header shrink/hide, back-to-top visibility
// ==========================================================================
function initScrollChrome() {
  const header = document.querySelector('.header');
  const progressBar = document.getElementById('scrollProgressBar');
  const backToTop = document.getElementById('backToTopBtn');
  let lastY = window.scrollY;
  let ticking = false;

  function update() {
    const y = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(1, Math.max(0, y / docHeight)) : 0;

    if (progressBar) progressBar.style.width = `${progress * 100}%`;

    if (header) {
      header.classList.toggle('is-scrolled', y > 40);
      if (y > lastY && y > 160) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }
    }

    if (backToTop) backToTop.classList.toggle('is-visible', y > 600);

    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();

  backToTop?.addEventListener('click', () => {
    if (lenisInstance) { lenisInstance.scrollTo(0); return; }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
}

// ==========================================================================
// 3D Badge Tilt — each stage's 3D SVG badge tilts toward the cursor. Desktop only.
// ==========================================================================
function initCardTilt() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.stage-badge').forEach((card) => {
    let rafId = null;
    let targetRotX = 0, targetRotY = 0;
    let curRotX = 0, curRotY = 0;

    function loop() {
      curRotX += (targetRotX - curRotX) * 0.15;
      curRotY += (targetRotY - curRotY) * 0.15;
      card.style.transform = `rotateX(${curRotX}deg) rotateY(${curRotY}deg)`;
      if (Math.abs(targetRotX - curRotX) > 0.05 || Math.abs(targetRotY - curRotY) > 0.05) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = null;
      }
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = px * 16;
      targetRotX = py * -16;
      if (!rafId) rafId = requestAnimationFrame(loop);
    });

    card.addEventListener('mouseleave', () => {
      targetRotX = 0;
      targetRotY = 0;
      if (!rafId) rafId = requestAnimationFrame(loop);
    });
  });
}

// ==========================================================================
// Hero Scroll Cue — small animated hint inviting the visitor to keep scrolling
// ==========================================================================
function initHeroScrollCue() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const cue = document.createElement('button');
  cue.className = 'hero-scroll-cue';
  cue.setAttribute('aria-label', 'גללו למטה');
  cue.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true"><path d="M12 5v13M6 13l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  hero.appendChild(cue);

  cue.addEventListener('click', () => {
    const target = document.getElementById('process');
    if (!target) return;
    if (lenisInstance) { lenisInstance.scrollTo(target, { offset: -20 }); return; }
    target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });

  window.addEventListener('scroll', () => {
    cue.classList.toggle('is-hidden', window.scrollY > 120);
  }, { passive: true });
}

// ==========================================================================
// Process Cinematic — pins the process section and crossfades through the
// 4 real stages as the user scrolls, instead of a static side-by-side grid.
// Falls back to a plain stacked, always-visible layout on mobile and under
// prefers-reduced-motion (no pin, no scroll-jacking, nothing hidden by JS).
// ==========================================================================
function initProcessCinematic() {
  const wrap = document.getElementById('processPinWrap');
  const pin = wrap?.querySelector('.process-pin');
  const stages = document.querySelectorAll('.process-stage');
  const dots = document.querySelectorAll('.stage-dot');
  if (!wrap || !pin || !stages.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isNarrow = window.matchMedia('(max-width: 768px)').matches;
  const gsapReady = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

  if (reduceMotion || isNarrow || !gsapReady) {
    wrap.classList.add('process-static-fallback');
    return;
  }

  gsap.set(stages, { opacity: 0, y: 40, scale: 0.94, filter: 'blur(6px)' });
  gsap.set(stages[0], { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' });

  let activeIndex = 0;
  function setActive(index) {
    if (index === activeIndex) return;
    activeIndex = index;
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
  }

  // Each stage HOLDS fully visible (readable) for most of its share of the scroll
  // range, with a short crossfade burst into the next — not a continuous blend
  // across the whole pin, which never let any stage actually settle.
  const HOLD = 2.4, TRANS = 0.6, CYCLE = HOLD + TRANS;
  function computeActiveIndex(t) {
    const lastIndex = stages.length - 1;
    if (t >= lastIndex * CYCLE) return lastIndex;
    const j = Math.floor(t / CYCLE);
    const localT = t - j * CYCLE;
    return localT < HOLD + TRANS / 2 ? j : j + 1;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      pin: pin,
      onUpdate(self) {
        setActive(computeActiveIndex(self.progress * tl.duration()));
      },
    },
  });

  for (let i = 1; i < stages.length; i++) {
    const inBadge = stages[i].querySelector('.stage-badge');
    // Camera-cut feel: outgoing stage pushes back and racks out of focus
    // (scale up + blur), incoming stage pulls in from soft-focus to sharp —
    // a proper focus-pull, not just a flat crossfade.
    tl.to({}, { duration: HOLD })
      .to(stages[i - 1], { opacity: 0, y: -70, scale: 1.08, filter: 'blur(10px)', duration: TRANS, ease: 'power2.in' })
      .fromTo(stages[i],
        { opacity: 0, y: 70, scale: 0.92, filter: 'blur(10px)' },
        { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: TRANS, ease: 'power2.out' },
        '<');
    // Extra bouncy pop on the incoming badge, layered on top of the fade above
    // (doesn't touch it — just adds energy the flat opacity/y crossfade lacks).
    if (inBadge) {
      tl.fromTo(inBadge, { scale: 0.5, rotate: -14 }, { scale: 1, rotate: 0, duration: TRANS * 1.4, ease: 'back.out(2.2)' }, '<');
    }
  }
  tl.to({}, { duration: HOLD }); // hold the final stage through the tail of the scroll range

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const st = tl.scrollTrigger;
      const stageTimelinePos = i === 0 ? 0 : HOLD + (i - 1) * (HOLD + TRANS) + TRANS;
      const progress = stageTimelinePos / tl.duration();
      const target = st.start + (st.end - st.start) * progress;
      if (lenisInstance) lenisInstance.scrollTo(target);
      else window.scrollTo({ top: target, behavior: 'smooth' });
    });
  });
}

// ==========================================================================
// Project Matcher — 3-question tool. Recommendations reuse the exact same
// service copy already shown in the process section above; nothing invented.
// ==========================================================================
const MATCHER_RESULTS = {
  web: {
    title: 'פיתוח אתרים ומערכות Web',
    desc: 'אתרים וחנויות E-commerce ברמת עיצוב גבוהה, בנויים כדי להמיר גולשים ללקוחות משלמים',
    badge: '<svg viewBox="0 0 120 120" fill="none"><rect x="25" y="45" width="75" height="55" rx="6" fill="#00e676" fill-opacity="0.5" stroke="#00e676" stroke-width="1.5"/><rect x="15" y="25" width="80" height="58" rx="6" fill="#fff" fill-opacity="0.08" stroke="#fff" stroke-opacity="0.4" stroke-width="1.5"/><circle cx="27" cy="34" r="2.5" fill="#00e676"/><circle cx="35" cy="34" r="2.5" fill="#fff" fill-opacity="0.6"/><circle cx="43" cy="34" r="2.5" fill="#fff" fill-opacity="0.6"/></svg>',
  },
  ai: {
    title: 'אוטומציות AI ואפליקציות מותאמות',
    desc: 'פיתוח אפליקציות מותאמות אישית וסוכני AI חכמים החוסכים 80% מזמן העבודה הידנית ומייעלים את מערך המכירות והשירות 24/7',
    badge: '<svg viewBox="0 0 120 120" fill="none"><rect x="35" y="18" width="50" height="84" rx="10" fill="#fff" fill-opacity="0.08" stroke="#fff" stroke-opacity="0.4" stroke-width="1.5"/><rect x="44" y="42" width="32" height="32" rx="6" fill="#00e676" fill-opacity="0.5" stroke="#00e676" stroke-width="1.5"/><path d="M60 48 L60 68 M50 60 L70 60" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>',
  },
  cloud: {
    title: 'מעטפת Cloud אבטחה וצמיחה מתמדת',
    desc: 'תשתיות ענן, אבטחת מידע קפדנית וליווי מקצועי צמוד מהצוות שלנו, שמבטיח שהמוצר שלכם ממשיך לייצר לידים והכנסות לאורך זמן',
    badge: '<svg viewBox="0 0 120 120" fill="none"><path d="M30 65 C25 65 20 60 20 52 C20 45 26 40 33 40 C36 32 45 28 55 30 C63 25 74 28 80 35 C88 36 94 43 93 51 C98 55 97 65 90 67 Z" fill="#fff" fill-opacity="0.08" stroke="#fff" stroke-opacity="0.4" stroke-width="1.5"/><path d="M60 48 L78 56 V72 C78 84 60 92 60 92 C60 92 42 84 42 72 V56 L60 48 Z" fill="#00e676" fill-opacity="0.5" stroke="#00e676" stroke-width="1.5"/></svg>',
  },
  unsure: {
    title: 'אסטרטגיה ואפיון',
    desc: 'איפיון מדויק ומחקר שוק מעמיק שמאתר את מנועי הצמיחה של העסק שלכם כדי לבנות ארכיטקטורה דיגיטלית שממירה גולשים ללקוחות משלמים',
    badge: '<svg viewBox="0 0 120 120" fill="none"><path d="M60 15 L105 38 L60 61 L15 38 Z" fill="#fff" fill-opacity="0.08" stroke="#fff" stroke-opacity="0.4" stroke-width="1.5"/><path d="M60 55 L105 78 L60 101 L15 78 Z" fill="#00e676" fill-opacity="0.5" stroke="#00e676" stroke-width="2"/><circle cx="60" cy="25" r="5" fill="#00e676"/></svg>',
  },
};

const MATCHER_LABELS = {
  need: { web: 'אתר או חנות אונליין', ai: 'אוטומציה או אפליקציה חכמה', cloud: 'תשתית, אבטחה או ליווי שוטף', unsure: 'ייעוץ כללי' },
  stage: { idea: 'יש רעיון, עדיין בתכנון', existing: 'יש כבר עסק או מוצר קיים', upgrade: 'שדרוג של משהו קיים' },
  timing: { asap: 'בהקדם האפשרי', quarter: 'ברבעון הקרוב', exploring: 'עדיין בודקים אפשרויות' },
};

function initProjectMatcher() {
  const card = document.getElementById('matcherCard');
  if (!card) return;

  const steps = card.querySelectorAll('.matcher-step, .matcher-result');
  const progressFill = document.getElementById('matcherProgressFill');
  const answers = {};
  let stepIndex = 0;

  function showStep(index) {
    stepIndex = index;
    steps.forEach((s) => { s.hidden = Number(s.dataset.step) !== index; });
    progressFill.style.width = `${(Math.min(index, 3) / 3) * 100}%`;
  }

  function renderResult() {
    const result = MATCHER_RESULTS[answers.need] || MATCHER_RESULTS.unsure;
    document.getElementById('matcherResultBadge').innerHTML = result.badge;
    document.getElementById('matcherResultTitle').textContent = result.title;
    document.getElementById('matcherResultDesc').textContent = result.desc;

    const summary = `היי! השתמשתי בכלי ההתאמה באתר.\n` +
      `מה שאני צריך/ה: ${MATCHER_LABELS.need[answers.need] || ''}\n` +
      `שלב נוכחי: ${MATCHER_LABELS.stage[answers.stage] || ''}\n` +
      `לוח זמנים: ${MATCHER_LABELS.timing[answers.timing] || ''}`;

    const cta = document.getElementById('matcherCta');
    cta.addEventListener('click', () => {
      const messageField = document.getElementById('message');
      if (messageField && !messageField.value.trim()) messageField.value = summary;
    }, { once: true });
  }

  card.querySelectorAll('.matcher-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      answers[btn.dataset.key] = btn.dataset.value;
      if (stepIndex < 2) {
        showStep(stepIndex + 1);
      } else {
        renderResult();
        showStep(3);
      }
    });
  });

  document.getElementById('matcherRestart')?.addEventListener('click', () => {
    Object.keys(answers).forEach((k) => delete answers[k]);
    showStep(0);
  });

  showStep(0);
}
