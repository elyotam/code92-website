/**
 * Code92 — main.js v35.0
 * Company: Code92
 * Owner: יותם כהן (Yotam Cohen) | 052-2057074
 * Dual Language Translation & Human Sales Representative Chatbot (5 Core Services + Live Typing Indicator)
 */
'use strict';

const WA_NUMBER = '972522057074';

// 100% Complete Dual Language Dictionary
const DICT = {
  he: {
    langBtn: 'EN',
    navContactBtnText: 'צרו איתנו קשר',
    h1_line1: 'פתרונות דיגיטליים',
    h1_line2: 'לאנשים שרוצים',
    h1_line3: 'לייצר <span class="text-brand">תוצאות</span>',
    heroDesc: 'בניית אתרים, חנויות אונליין, אפליקציות, מערכות ואוטומציות AI <strong>שמקדמות אותכם כמה צעדים לפני המתחרים</strong>.',
    processTitle1: 'איך אנחנו הופכים רעיון',
    processTitle2: 'לפתרון שמייצר תוצאות',
    pCardNum1: '1', pCardHead1: 'אסטרטגיה ואפיון',
    pCardDesc1: 'איפיון מדויק ומחקר שוק מעמיק שמאתר את מנועי הצמיחה של העסק שלכם כדי לבנות ארכיטקטורה דיגיטלית שממירה גולשים ללקוחות משלמים',
    pCardNum2: '2', pCardHead2: 'פיתוח אתרים ומערכות Web',
    pCardDesc2: 'בניית אתרים יוקרתיים חנויות E-commerce ומערכות Web מתקדמות',
    pCardNum3: '3', pCardHead3: 'אוטומציות AI ואפליקציות מותאמות',
    pCardDesc3: 'פיתוח אפליקציות מותאמות אישית וסוכני AI חכמים החוסכים 80% מזמן העבודה הידנית ומייעלים את מערך המכירות והשירות 24/7',
    pCardNum4: '4', pCardHead4: 'מעטפת Cloud אבטחה וצמיחה מתמדת',
    pCardDesc4: 'תשתיות ענן אבטחת מידע קפדנית וליווי מקצועי מתמשך בניהול יותם כהן המבטיח שהמוצר שלכם ממשיך לייצר לידים והכנסות לאורך זמן',
    contactTitle1: 'רוצים לשמוע עוד?',
    contactTitle2: 'צרו איתנו קשר',
    contactSub: 'השאירו פרטים ונחזור אליכם בהקדם האפשרי עם כל התשובות.',
    lblFullname: 'שם מלא *',
    lblPhone: 'טלפון *',
    lblEmail: 'אימייל *',
    lblMsg: 'הודעה',
    placeholderName: 'שם מלא',
    placeholderPhone: '052-2057074',
    placeholderEmail: 'name@company.com',
    placeholderMsg: 'איך נוכל לעזור?',
    btnSubmitTxt: 'שליחה',
    copyright: '© Code92 · כל הזכויות שמורות ליותם כהן',

    // Bot Translations
    botStatus: 'מחובר/ת כעת לשיחה',
    botTyping: 'מקליד/ה הודעה...',
    botPlaceholder: 'הקלד/י הודעה או מספר טלפון...',
    botGreeting: (name) => `שלום! 👋 שמי ${name} מ-Code92.\nבמה אוכל לסייע לך בפרויקט היום?`,
    botRedirecting: `תודה רבה! העברתי את פנייתך ליותם כהן ב-Code92.\nלחץ על הלחצן למטה לפתיחת שיחה ב-WhatsApp:`,
    botServices: [
      { 
        id: 'ecommerce',
        label: '🛍️ חנויות E-commerce', 
        response: `בחירה מעולה! חנויות E-commerce ב-Code92 נבנות להמרה מקסימלית ב-Next.js 🚀\nאשמח לדעת: מדובר בחנות חדשה מאפס או שדרוג חנות קיימת, וכמה מוצרים מתוכננים בה בערך?` 
      },
      { 
        id: 'ai',
        label: '🤖 אוטומציות עסקיות + AI', 
        response: `בחירה מצוינת! סוכני AI ואוטומציות עסקיות ב-Code92 חוסכים עד 80% מזמן העבודה 🤖\nאיזה תהליך בעסק היית רוצה לאוטמט? (סוכן מכירות, מענה ללקוחות, ניהול CRM או חשבוניות)` 
      },
      { 
        id: 'web',
        label: '💻 בניית אתרים ומערכות Web לעסקים', 
        response: `נפלא! אנחנו מתמחים בבניית אתרים ומערכות Web פרימיום ב-Code92 ברמה בינלאומית 💻\nמה סוג הפרויקט שדרוש לך? (אתר תדמית יוקרתי, קטלוג מוצרים, או מערכת ניהול מותאמת)` 
      },
      { 
        id: 'apps',
        label: '📱 פיתוח מערכות ואפליקציות מותאמות לעסק', 
        response: `מעולה! ארכיטקטורת תוכנה, SaaS ואפליקציות מותאמות אישית ב-Code92 📱\nבאיזו פלטפורמה מדובר? (אפליקציית מובייל iOS/Android, מערכת ענן SaaS, או תוכנה פנימית)` 
      },
      { 
        id: 'cloud',
        label: '🛡️ תחזוקה, Cloud, אבטחה וניהול שוטף', 
        response: `מצוין! תשתיות ענן, DevOps, אבטחת מידע וניהול שוטף עם 99.99% Uptime SLA ב-Code92 🛡️\nבאיזה שירות מדובר? (אבטחת מידע, אחסון ענן AWS, או תחזוקה שוטפת)` 
      }
    ]
  },
  en: {
    langBtn: 'HE',
    navContactBtnText: 'Contact Us',
    h1_line1: 'Digital Solutions',
    h1_line2: 'For People Who Want',
    h1_line3: 'To Generate <span class="text-brand">Results</span>',
    heroDesc: 'Building websites, online stores, apps, custom systems and AI automations <strong>that keep you steps ahead of your competitors</strong>.',
    processTitle1: 'How We Turn An Idea',
    processTitle2: 'Into A Solution That Drives Results',
    pCardNum1: '1', pCardHead1: 'Strategy & UX Architecture',
    pCardDesc1: 'Precise architecture and market research identifying your exact growth engines to convert visitors into paying clients',
    pCardNum2: '2', pCardHead2: 'Websites & Web Systems Development',
    pCardDesc2: 'Building luxury websites, E-commerce stores and advanced Web systems',
    pCardNum3: '3', pCardHead3: 'AI Automations & Custom Apps',
    pCardDesc3: 'Custom mobile apps and intelligent AI agents saving up to 80% manual work while boosting sales and 24/7 support',
    pCardNum4: '4', pCardHead4: 'Cloud Infrastructure & Growth',
    pCardDesc4: 'Enterprise cloud cyber security and ongoing personal management by Yotam Cohen ensuring continuous revenue growth',
    contactTitle1: 'Want to hear more?',
    contactTitle2: 'Contact Us',
    contactSub: 'Leave your details and we will get back to you shortly with full answers.',
    lblFullname: 'Full Name *',
    lblPhone: 'Phone *',
    lblEmail: 'Email *',
    lblMsg: 'Message',
    placeholderName: 'Full Name',
    placeholderPhone: '052-2057074',
    placeholderEmail: 'name@company.com',
    placeholderMsg: 'How can we help?',
    btnSubmitTxt: 'Submit',
    copyright: '© Code92 · All Rights Reserved to Yotam Cohen',

    // Bot Translations
    botStatus: 'Online Now',
    botTyping: 'typing a message...',
    botPlaceholder: 'Type a message or phone number...',
    botGreeting: (name) => `Hello! 👋 My name is ${name} from Code92.\nHow can I assist you with your project today?`,
    botRedirecting: `Thank you! I forwarded your inquiry to Yotam Cohen at Code92.\nClick the button below to start a WhatsApp chat:`,
    botServices: [
      { 
        id: 'ecommerce',
        label: '🛍️ E-Commerce Online Stores', 
        response: `Excellent choice! E-commerce stores by Code92 built in Next.js for high conversion 🚀\nIs this a new store from scratch or an existing store upgrade? How many products are planned?` 
      },
      { 
        id: 'ai',
        label: '🤖 Business Automation & AI', 
        response: `Great choice! AI Agents & Automations by Code92 saving up to 80% manual work 🤖\nWhich business process would you like to automate? (Sales agent, customer support, CRM)` 
      },
      { 
        id: 'web',
        label: '💻 Website & Web System Development', 
        response: `Great! At Code92 we engineer world-class premium websites 💻\nWhat type of project do you need? (Luxury brand site, product catalog, or custom Web App)` 
      },
      { 
        id: 'apps',
        label: '📱 Custom App & Software Engineering', 
        response: `Enterprise software architecture, SaaS & custom mobile apps by Code92 📱\nWhich platform? (iOS/Android mobile app, Cloud SaaS, or internal tool)` 
      },
      { 
        id: 'cloud',
        label: '🛡️ Cloud, DevOps, Cyber & Maintenance', 
        response: `Cloud infrastructure, DevOps, Cyber Security & ongoing management with 99.99% Uptime SLA by Code92 🛡️\nWhich service? (Cyber security, AWS Cloud, or ongoing maintenance)` 
      }
    ]
  }
};

let currentLang = 'he';

// Human Representatives Pool (Updated with Dana, Guy, Ahuvit, Ido, Aviv, Karin)
const SALES_REPS = [
  { name: 'דנה', gender: 'female', img: 'assets/rep_dana.jpg', icon: '👩‍💼', enName: 'Dana' },
  { name: 'גיא', gender: 'male', img: 'assets/rep_guy.jpg', icon: '👨‍💼', enName: 'Guy' },
  { name: 'אהובית', gender: 'female', img: 'assets/rep_ahuvit.jpg', icon: '👩‍💼', enName: 'Ahuvit' },
  { name: 'עידו', gender: 'male', img: 'assets/rep_ido.png', icon: '👨‍💼', enName: 'Ido' },
  { name: 'אביב', gender: 'male', img: 'assets/rep_aviv.png', icon: '👨‍💼', enName: 'Aviv' },
  { name: 'קארין', gender: 'female', img: 'assets/rep_karin.png', icon: '👩‍💼', enName: 'Karin' }
];

let activeRep = null;
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
  setHtml('processTitle', `<p class="border-b-line" style="color:#cfcfcf;font-weight:300">${data.processTitle1}</p><p class="border-b-line text-brand">${data.processTitle2}</p>`);

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

// ================= CODE92 SMART AI SALES BOT =================
function initHumanSalesBot() {
  activeRep = SALES_REPS[Math.floor(Math.random() * SALES_REPS.length)];

  const avatar = document.getElementById('repAvatar');
  const nameEl = document.getElementById('repName');
  const statusEl = document.getElementById('repStatusTxt');
  const panel = document.getElementById('salesChatPanel');
  const fab = document.getElementById('salesChatFab');
  const close = document.getElementById('salesChatClose');
  const msgs = document.getElementById('salesChatMessages');
  const opts = document.getElementById('salesChatOpts');
  const input = document.getElementById('salesChatInput');
  const send = document.getElementById('salesChatSend');

  let isOpen = false;

  // Bot State Management
  let chatState = {
    step: 'INIT', // 'INIT', 'CATEGORY_SELECTED', 'SPECIFIC_ANSWERED', 'TIMELINE_ANSWERED', 'DONE'
    category: '',
    categoryId: '',
    specificDetails: '',
    timeline: '',
    userName: '',
    userPhone: ''
  };

  function renderRepInfo() {
    const isHe = currentLang === 'he';
    if (avatar) {
      if (activeRep.img) {
        avatar.innerHTML = `<img src="${activeRep.img}" alt="${activeRep.name}" class="rep-avatar-img" />`;
        avatar.style.backgroundColor = 'transparent';
      } else {
        avatar.innerHTML = activeRep.icon;
        avatar.style.fontSize = '1.35rem';
        avatar.style.backgroundColor = activeRep.gender === 'female' ? '#db2777' : 'var(--brand-red)';
      }
    }
    if (nameEl) nameEl.textContent = isHe ? `${activeRep.name} מ-Code92` : `${activeRep.enName} from Code92`;
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

  function setOptions(optionsList) {
    opts.innerHTML = '';
    if (!optionsList || !optionsList.length) return;

    optionsList.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'chip-btn';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => {
        addMsg(opt.label, false);
        opts.innerHTML = '';
        handleOptionSelection(opt);
      });
      opts.appendChild(btn);
    });
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

    // Check Gibberish
    if (isGibberish(text)) return { intent: 'GIBBERISH' };

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

  // Category specific follow-up options
  function getCategorySubOptions(catId) {
    const isHe = currentLang === 'he';
    switch (catId) {
      case 'ecommerce':
        return isHe ? [
          { label: '🆕 חנות חדשה מאפס (עד 50 מוצרים)' },
          { label: '🚀 חנות גדולה / מורכבת (100+ מוצרים)' },
          { label: '🔄 שדרוג חנות קיימת / מעבר מערכת' }
        ] : [
          { label: '🆕 New Store from Scratch (Up to 50 items)' },
          { label: '🚀 Large Enterprise Store (100+ items)' },
          { label: '🔄 Existing Store Redesign / Migration' }
        ];
      case 'ai':
        return isHe ? [
          { label: '🤖 סוכן AI למכירות ושירות 24/7' },
          { label: '⚡ אוטומציית לידים, WhatsApp ו-CRM' },
          { label: '🔗 חיבור וסנכרון מערכות עסקיות' }
        ] : [
          { label: '🤖 24/7 Sales & Support AI Agent' },
          { label: '⚡ Leads, WhatsApp & CRM Automations' },
          { label: '🔗 Business Systems Integration' }
        ];
      case 'web':
        return isHe ? [
          { label: '✨ אתר תדמית יוקרתי לעסק' },
          { label: '🖥️ מערכת ניהול / Web App מותאם' },
          { label: '🛠️ שדרוג וחידוש אתר קיים' }
        ] : [
          { label: '✨ Luxury Corporate Website' },
          { label: '🖥️ Custom Web Application / Portal' },
          { label: '🛠️ Existing Website Overhaul' }
        ];
      case 'apps':
        return isHe ? [
          { label: '📱 אפליקציית מובייל (iOS / Android)' },
          { label: '☁️ מערכת SaaS בענן' },
          { label: '🏢 תוכנה פנימית וארגונית לעסק' }
        ] : [
          { label: '📱 Mobile App (iOS / Android)' },
          { label: '☁️ Cloud SaaS Product' },
          { label: '🏢 Internal Enterprise Software' }
        ];
      case 'cloud':
      default:
        return isHe ? [
          { label: '☁️ תשתיות ענן, AWS ו-DevOps' },
          { label: '🔒 אבטחת מידע וסייבר' },
          { label: '⚙️ תחזוקה וניהול שוטף' }
        ] : [
          { label: '☁️ Cloud Infrastructure, AWS & DevOps' },
          { label: '🔒 Cyber & Information Security' },
          { label: '⚙️ Maintenance & Managed Services' }
        ];
    }
  }

  // Handle Category Option Selection
  function handleOptionSelection(opt) {
    const isHe = currentLang === 'he';

    if (chatState.step === 'INIT') {
      chatState.category = opt.label;
      chatState.categoryId = opt.id || 'web';
      chatState.step = 'CATEGORY_SELECTED';

      const categoryResponse = opt.response;

      replyWithTyping(categoryResponse, () => {
        const subOpts = getCategorySubOptions(chatState.categoryId);
        setOptions(subOpts);
      });
    } else if (chatState.step === 'CATEGORY_SELECTED') {
      chatState.specificDetails = opt.label;
      chatState.step = 'SPECIFIC_ANSWERED';

      const timelinePrompt = isHe
        ? `רשמתי! 👍 מה לוח הזמנים המועדף עליך לעלייה לאוויר?`
        : `Noted! 👍 What is your target timeline to go live?`;

      replyWithTyping(timelinePrompt, () => {
        const timelineOpts = isHe ? [
          { label: '⚡ מיידי (1-2 שבועות)' },
          { label: '📅 במהלך החודש הקרוב' },
          { label: '🔍 בודק/ת אפשרויות ותקציב' }
        ] : [
          { label: '⚡ Immediate (1-2 weeks)' },
          { label: '📅 Within next month' },
          { label: '🔍 Exploring options' }
        ];
        setOptions(timelineOpts);
      });
    } else if (chatState.step === 'SPECIFIC_ANSWERED') {
      chatState.timeline = opt.label;
      chatState.step = 'TIMELINE_ANSWERED';

      const askContactPrompt = isHe
        ? `מעולה! קיבלתי את כל הנתונים 👍\nכדי ששיחה תועבר לטיפול אישי של יותם כהן ב-Code92 — נא להקליד שם מלא ומספר טלפון לחזרה:`
        : `Great! Received all details 👍\nPlease type your Full Name and Phone Number so Yotam Cohen at Code92 can contact you:`;

      replyWithTyping(askContactPrompt, () => {
        setOptions([]);
      });
    }
  }

  // Handle Free Text User Input
  function handleUserInput() {
    const val = input.value.trim();
    if (!val) return;

    addMsg(val, false);
    input.value = '';
    opts.innerHTML = '';

    const isHe = currentLang === 'he';
    const analysis = detectIntent(val);

    // 1. Gibberish Response
    if (analysis.intent === 'GIBBERISH') {
      const gibberishMsg = isHe
        ? `אופס, ההודעה שכתבת לא כל כך מובנת לי 😅\nאפשר לנסות לנסח מחדש או לבחור באחת האפשרויות למטה:`
        : `Oops, I couldn't quite understand that 😅\nPlease try rephrasing or choose one of the options below:`;

      replyWithTyping(gibberishMsg, () => {
        if (chatState.step === 'INIT') {
          setOptions(DICT[currentLang].botServices);
        } else if (chatState.step === 'CATEGORY_SELECTED') {
          setOptions(getCategorySubOptions(chatState.categoryId));
        }
      });
      return;
    }

    // 2. Phone / Contact Info Detected
    if (analysis.intent === 'PHONE' || chatState.step === 'TIMELINE_ANSWERED' || chatState.step === 'DONE') {
      chatState.userPhone = analysis.val || val;
      if (!chatState.userName) chatState.userName = val.replace(analysis.val || '', '').trim() || 'לקוח יקר';
      chatState.step = 'DONE';

      finishLeadCapture();
      return;
    }

    // 3. Pricing Query Handling
    if (analysis.intent === 'PRICING') {
      const priceMsg = isHe
        ? `מחירי הפרויקטים ב-Code92 נגזרים מאפיון מדויק והיקף העבודה. אנו מציעים הצעת מחיר שקופה ומותאמת אישית 💎\nבאיזה תחום מדובר? אפשר לבחור קטגוריה למטה:`
        : `Project pricing at Code92 depends on scope and technical architecture. We provide transparent, custom quotes 💎\nWhich category fits your project? Choose below:`;

      replyWithTyping(priceMsg, () => {
        setOptions(DICT[currentLang].botServices);
      });
      return;
    }

    // 4. Timeline Query Handling
    if (analysis.intent === 'TIMELINE') {
      const timelineMsg = isHe
        ? `אתרי תדמית ומערכות בסיסיות נבנים בדרך כלל תוך 1-2 שבועות. מערכות מורכבות וסוכני AI מפותחים תוך 3-4 שבועות ⚡\nמה לוח הזמנים המועדף עליך?`
        : `Websites and core solutions are delivered within 1-2 weeks. Custom apps & AI agents take 3-4 weeks ⚡\nWhat is your target timeline?`;

      replyWithTyping(timelineMsg, () => {
        const timelineOpts = isHe ? [
          { label: '⚡ מיידי (1-2 שבועות)' },
          { label: '📅 במהלך החודש הקרוב' },
          { label: '🔍 בודק/ת אפשרויות' }
        ] : [
          { label: '⚡ Immediate (1-2 weeks)' },
          { label: '📅 Within next month' },
          { label: '🔍 Exploring options' }
        ];
        setOptions(timelineOpts);
      });
      return;
    }

    // 5. Tech Stack Query Handling
    if (analysis.intent === 'TECH') {
      const techMsg = isHe
        ? `אנחנו ב-Code92 מפתחים בטכנולוגיות המתקדמות בעולם: React, Next.js, Node.js, Python, Tailwind, ותשתיות AWS/Cloud 🚀\nאיזה סוג פרויקט תרצה שנבנה עבורך?`
        : `At Code92 we build with modern tech: React, Next.js, Node.js, Python, Tailwind, and AWS Cloud 🚀\nWhat type of project would you like us to engineer?`;

      replyWithTyping(techMsg, () => {
        setOptions(DICT[currentLang].botServices);
      });
      return;
    }

    // 6. Generic Text Input Handling through flow steps
    if (chatState.step === 'INIT') {
      chatState.specificDetails = val;
      chatState.step = 'INIT_RESPONSE_SENT';

      const ackMsg = isHe
        ? `תודה! קיבלתי את הודעתך: "${val}" 👍\nבאיזה תחום מדובר? אפשר לבחור באחת האפשרויות למטה:`
        : `Thank you! Received your message: "${val}" 👍\nWhich category fits your project best? Choose below:`;

      replyWithTyping(ackMsg, () => {
        setOptions(DICT[currentLang].botServices);
      });
    } else if (chatState.step === 'INIT_RESPONSE_SENT' || chatState.step === 'CATEGORY_SELECTED') {
      chatState.specificDetails = val;
      chatState.step = 'SPECIFIC_ANSWERED';

      const askContact = isHe
        ? `מצויין! מה לוח הזמנים הרצוי עליך?`
        : `Excellent! What is your target timeline?`;

      replyWithTyping(askContact, () => {
        const timelineOpts = isHe ? [
          { label: '⚡ מיידי (1-2 שבועות)' },
          { label: '📅 במהלך החודש הקרוב' },
          { label: '🔍 בודק/ת אפשרויות' }
        ] : [
          { label: '⚡ Immediate (1-2 weeks)' },
          { label: '📅 Within next month' },
          { label: '🔍 Exploring options' }
        ];
        setOptions(timelineOpts);
      });
    } else if (chatState.step === 'SPECIFIC_ANSWERED') {
      chatState.userPhone = val;
      chatState.step = 'DONE';

      finishLeadCapture();
    }
  }

  // Complete Intake & Bridge to WhatsApp
  function finishLeadCapture() {
    const isHe = currentLang === 'he';

    const summaryText = isHe
      ? `תודה רבה! 🙏\nפנייתך נקלטה בהצלחה במערכת Code92:\n• תחום: ${chatState.category || 'פנייה כללית'}\n• פרטים: ${chatState.specificDetails || '-'}\n• לוח זמנים: ${chatState.timeline || '-'}\n• איש קשר: ${chatState.userPhone || chatState.userName || 'פרטים התקבלו'}\n\nנציג מ-Code92 (ניהול יותם כהן) יחזור אליך בהקדם!`
      : `Thank you! 🙏\nYour inquiry is submitted to Code92:\n• Category: ${chatState.category || 'General'}\n• Details: ${chatState.specificDetails || '-'}\n• Timeline: ${chatState.timeline || '-'}\n• Contact: ${chatState.userPhone || chatState.userName || 'Details received'}\n\nA representative from Code92 will contact you shortly!`;

    replyWithTyping(summaryText, () => {
      const waNote = isHe ? 'מעדיף/ה להמשיך את השיחה ב-WhatsApp כעת?' : 'Prefer to continue on WhatsApp now?';
      const btnLabel = isHe ? '📲 לחץ/י כאן לפתיחת שיחה ב-WhatsApp מול Code92' : '📲 Click to open WhatsApp chat with Code92';
      
      const waMessageText = encodeURIComponent(
        `שלום ליותם כהן (Code92)! 👋\n` +
        `פנייה חדשה מאת פנייה מנציג/ה: ${activeRep.name}\n` +
        `תחום: ${chatState.category || 'כללי'}\n` +
        `פירוט: ${chatState.specificDetails || '-'}\n` +
        `לוח זמנים: ${chatState.timeline || '-'}\n` +
        `איש קשר: ${chatState.userPhone || chatState.userName}`
      );
      const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMessageText}`;

      addMsg(`${waNote}<br><br><a href="${waUrl}" target="_blank" rel="noopener" class="chat-wa-direct-btn">${btnLabel}</a>`);
    });
  }

  function startSalesFunnel() {
    msgs.innerHTML = '';
    chatState = {
      step: 'INIT',
      category: '',
      categoryId: '',
      specificDetails: '',
      timeline: '',
      userName: '',
      userPhone: ''
    };
    const name = currentLang === 'he' ? activeRep.name : activeRep.enName;
    addMsg(DICT[currentLang].botGreeting(name));
    setOptions([]); // DO NOT display options initially!
  }

  updateBotUiFn = () => {
    renderRepInfo();
    if (isOpen) {
      startSalesFunnel();
    }
  };

  renderRepInfo();

  function toggleChat(state) {
    isOpen = state !== undefined ? state : !isOpen;
    panel.classList.toggle('open', isOpen);
    if (isOpen && msgs.children.length === 0) {
      startSalesFunnel();
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
        `שלום ליותם כהן (Code92)! 👋\n\n` +
        `פנייה חדשה מאתר Code92:\n` +
        `👤 שם: ${name}\n` +
        `📞 טלפון: ${phone}\n` +
        `✉️ אימייל: ${email}\n` +
        (message ? `📝 הודעה: ${message}\n` : '')
      );

      window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
      showFormSuccess(form);
      form.reset();
    });
  }

  initHumanSalesBot();
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

  gsap.set(stages, { opacity: 0, y: 40 });
  gsap.set(stages[0], { opacity: 1, y: 0 });

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
    tl.to({}, { duration: HOLD })
      .to(stages[i - 1], { opacity: 0, y: -40, duration: TRANS })
      .fromTo(stages[i], { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: TRANS }, '<');
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
    desc: 'בניית אתרים יוקרתיים חנויות E-commerce ומערכות Web מתקדמות',
    badge: '<svg viewBox="0 0 120 120" fill="none"><rect x="25" y="45" width="75" height="55" rx="6" fill="#00e676" fill-opacity="0.5" stroke="#00e676" stroke-width="1.5"/><rect x="15" y="25" width="80" height="58" rx="6" fill="#fff" fill-opacity="0.08" stroke="#fff" stroke-opacity="0.4" stroke-width="1.5"/><circle cx="27" cy="34" r="2.5" fill="#00e676"/><circle cx="35" cy="34" r="2.5" fill="#fff" fill-opacity="0.6"/><circle cx="43" cy="34" r="2.5" fill="#fff" fill-opacity="0.6"/></svg>',
  },
  ai: {
    title: 'אוטומציות AI ואפליקציות מותאמות',
    desc: 'פיתוח אפליקציות מותאמות אישית וסוכני AI חכמים החוסכים 80% מזמן העבודה הידנית ומייעלים את מערך המכירות והשירות 24/7',
    badge: '<svg viewBox="0 0 120 120" fill="none"><rect x="35" y="18" width="50" height="84" rx="10" fill="#fff" fill-opacity="0.08" stroke="#fff" stroke-opacity="0.4" stroke-width="1.5"/><rect x="44" y="42" width="32" height="32" rx="6" fill="#00e676" fill-opacity="0.5" stroke="#00e676" stroke-width="1.5"/><path d="M60 48 L60 68 M50 60 L70 60" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>',
  },
  cloud: {
    title: 'מעטפת Cloud אבטחה וצמיחה מתמדת',
    desc: 'תשתיות ענן אבטחת מידע קפדנית וליווי מקצועי מתמשך בניהול יותם כהן המבטיח שהמוצר שלכם ממשיך לייצר לידים והכנסות לאורך זמן',
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
