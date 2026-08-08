/**
 * ELYOTAM 1:1 EXACT CLONE — main.js v35.0
 * Company: ELYOTAM
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
    copyright: '© ELYOTAM · כל הזכויות שמורות ליותם כהן',

    // Bot Translations
    botStatus: 'מחובר/ת כעת לשיחה',
    botTyping: 'מקליד/ה הודעה...',
    botPlaceholder: 'הקלד/י הודעה או מספר טלפון...',
    botGreeting: (name) => `שלום! 👋 שמי ${name} מ-ELYOTAM.\nבמה אוכל לסייע לך בפרויקט היום?`,
    botRedirecting: `תודה רבה! העברתי את פנייתך ישירות ליותם כהן ב-WhatsApp (052-2057074).\nפותח כעת שיחה...`,
    botServices: [
      { 
        label: '🤖 אוטומציות עסקיות + AI', 
        response: `בחירה מעולה! סוכני AI ואוטומציות עסקיות ב-ELYOTAM שחוסכות 80% מזמן העבודה. השאירו שם וטלפון ונחזור אליכם מיידית!` 
      },
      { 
        label: '💻 בניית אתרים ומערכות Web לעסקים', 
        response: `מעולה! אנחנו בוראים אתרים ומערכות Web פרימיום ב-ELYOTAM ברמה בינלאומית. יש לנו הטבה מיוחדת של 15% הנחה לפונים היום!\nאשמח לדעת מה שמך ומספר הטלפון שלך לחזרה?` 
      },
      { 
        label: '🛍️ חנויות E-commerce', 
        response: `בחירה מעולה! חנויות E-commerce ב-ELYOTAM שמגדילות מכירות ב-Next.js. השאירו שם וטלפון ונחזור אליכם מיידית!` 
      },
      { 
        label: '📱 פיתוח מערכות ואפליקציות מותאמות לעסק', 
        response: `ארכיטקטורת תוכנה, SaaS ואפליקציות מותאמות ב-ELYOTAM בניהול יותם כהן. השאירו פרטים ליצירת קשר מהירה!` 
      },
      { 
        label: '🛡️ תחזוקה, Cloud, אבטחה וניהול שוטף', 
        response: `תשתיות ענן, DevOps, אבטחת מידע וניהול שוטף עם 99.99% Uptime SLA. השאירו שם וטלפון ונחזור אליכם מיידית!` 
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
    copyright: '© ELYOTAM · All Rights Reserved to Yotam Cohen',

    // Bot Translations
    botStatus: 'Online Now',
    botTyping: 'typing a message...',
    botPlaceholder: 'Type a message or phone number...',
    botGreeting: (name) => `Hello! 👋 My name is ${name} from ELYOTAM.\nHow can I assist you with your project today?`,
    botRedirecting: `Thank you! I forwarded your request directly to Yotam Cohen on WhatsApp (052-2057074).\nOpening chat now...`,
    botServices: [
      { 
        label: '🤖 Business Automation & AI', 
        response: `Great choice! AI Agents & Automations by ELYOTAM saving up to 80% manual work. Leave your name and phone number for immediate contact!` 
      },
      { 
        label: '💻 Website & Web System Development', 
        response: `Great! At ELYOTAM we engineer world-class premium websites. We offer a special 15% discount for inquiries today!\nPlease share your name and phone number so we can reach out.` 
      },
      { 
        label: '🛍️ E-Commerce Online Stores', 
        response: `Excellent choice! E-commerce stores built to maximize revenue. Leave your name and phone number for immediate contact!` 
      },
      { 
        label: '📱 Custom App & Software Engineering', 
        response: `Enterprise software architecture led personally by Yotam Cohen. Leave your contact details for quick dispatch!` 
      },
      { 
        label: '🛡️ Cloud, DevOps, Cyber & Maintenance', 
        response: `Cloud infrastructure, DevOps, Cyber Security and ongoing management with 99.99% Uptime SLA. Leave your phone number for priority callback!` 
      }
    ]
  }
};

let currentLang = 'he';

// Human Representatives Pool
const SALES_REPS = [
  { name: 'ענבל', initial: 'ע', enName: 'Inbal' },
  { name: 'דניאל', initial: 'ד', enName: 'Daniel' },
  { name: 'רוני', initial: 'ר', enName: 'Roni' },
  { name: 'אלון', initial: 'א', enName: 'Alon' },
  { name: 'שירה', initial: 'ש', enName: 'Shira' },
  { name: 'עידו', initial: 'ע', enName: 'Ido' }
];

let activeRep = null;
let updateBotUiFn = null;

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

// ================= HUMAN SALES REPRESENTATIVE BOT =================
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

  function renderRepInfo() {
    const isHe = currentLang === 'he';
    if (avatar) avatar.textContent = activeRep.initial;
    if (nameEl) nameEl.textContent = isHe ? `${activeRep.name} מ-ELYOTAM` : `${activeRep.enName} from ELYOTAM`;
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
    }, 1200);
  }

  function openWhatsApp(customText) {
    const waText = encodeURIComponent(`שלום ליותם כהן (ELYOTAM)! 👋\nפנייה מנציג/ה: ${activeRep.name}\n${customText}`);
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${waText}`;
    try {
      window.location.href = waUrl;
    } catch (e) {
      window.open(waUrl, '_blank');
    }
  }

  function setOptions(optionsList) {
    opts.innerHTML = '';
    optionsList.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'chip-btn';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => {
        addMsg(opt.label, false);
        opts.innerHTML = '';
        replyWithTyping(opt.response, () => {
          const redirectMsg = currentLang === 'he' ? 'מעביר אותך כעת ל-WhatsApp...' : 'Redirecting to WhatsApp...';
          const btnLabel = currentLang === 'he' ? '📲 פתח שיחה ב-WhatsApp בלחיצה כאן' : '📲 Click to Open WhatsApp Chat';
          const waText = encodeURIComponent(`שלום ליותם כהן (ELYOTAM)! 👋\nפנייה מנציג/ה: ${activeRep.name}\nנושא: ${opt.label}`);
          const waUrl = `https://wa.me/${WA_NUMBER}?text=${waText}`;
          
          addMsg(`${redirectMsg}<br><br><a href="${waUrl}" target="_blank" rel="noopener" class="chat-wa-direct-btn">${btnLabel}</a>`);
          
          setTimeout(() => {
            openWhatsApp(`נושא: ${opt.label}`);
          }, 1400);
        });
      });
      opts.appendChild(btn);
    });
  }

  function startSalesFunnel() {
    msgs.innerHTML = '';
    const name = currentLang === 'he' ? activeRep.name : activeRep.enName;
    addMsg(DICT[currentLang].botGreeting(name));
    setOptions(DICT[currentLang].botServices);
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

  function handleUserInput() {
    const val = input.value.trim();
    if (!val) return;

    addMsg(val, false);
    input.value = '';

    replyWithTyping(DICT[currentLang].botRedirecting, () => {
      const btnLabel = currentLang === 'he' ? '📲 לחץ כאן למעבר מיידי ל-WhatsApp' : '📲 Click here for instant WhatsApp chat';
      const waText = encodeURIComponent(`שלום ליותם כהן (ELYOTAM)! 👋\nפנייה מנציג/ה: ${activeRep.name}\nהודעת לקוח: ${val}`);
      const waUrl = `https://wa.me/${WA_NUMBER}?text=${waText}`;
      
      addMsg(`<a href="${waUrl}" target="_blank" rel="noopener" class="chat-wa-direct-btn">${btnLabel}</a>`);

      setTimeout(() => {
        openWhatsApp(`הודעת לקוח: ${val}`);
      }, 1400);
    });
  }

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
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message')?.value.trim() || '';

      if (!name || !phone || !email) {
        alert('נא למלא את כל שדות החובה (*)');
        return;
      }

      const text = encodeURIComponent(
        `שלום ליותם כהן (ELYOTAM)! 👋\n\n` +
        `פנייה חדשה מאתר ELYOTAM:\n` +
        `👤 שם: ${name}\n` +
        `📞 טלפון: ${phone}\n` +
        `✉️ אימייל: ${email}\n` +
        (message ? `📝 הודעה: ${message}\n` : '')
      );

      window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
      form.reset();
    });
  }

  initHumanSalesBot();
  initHeroParticlesCanvas();
  initProcessCardTypewriter();
});

// Dynamic Real-Time Typewriter Effect for Process Cards
let typingTimers = {};

function initProcessCardTypewriter() {
  const cards = document.querySelectorAll('.process-card');

  cards.forEach(card => {
    const cardId = card.getAttribute('data-card');
    const descEl = card.querySelector('.card-desc');
    if (!descEl || !cardId) return;

    function getTargetText() {
      const dictKey = `pCardDesc${cardId}`;
      return DICT[currentLang]?.[dictKey] || descEl.getAttribute('data-fulltext') || descEl.textContent.trim();
    }

    function startTyping() {
      if (typingTimers[cardId]) {
        clearInterval(typingTimers[cardId]);
      }

      const fullText = getTargetText();
      descEl.setAttribute('data-fulltext', fullText);
      
      descEl.style.opacity = '1';
      descEl.style.transform = 'translateY(0)';

      let charIndex = 0;
      descEl.innerHTML = '<span class="typed-content"></span><span class="typing-cursor">|</span>';
      const typedSpan = descEl.querySelector('.typed-content');

      typingTimers[cardId] = setInterval(() => {
        if (charIndex < fullText.length) {
          typedSpan.textContent += fullText.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typingTimers[cardId]);
          const cursor = descEl.querySelector('.typing-cursor');
          if (cursor) cursor.style.display = 'none';
        }
      }, 16);
    }

    function stopTyping() {
      if (typingTimers[cardId]) {
        clearInterval(typingTimers[cardId]);
      }
      descEl.style.opacity = '0';
      descEl.style.transform = 'translateY(12px)';
      const fullText = descEl.getAttribute('data-fulltext') || getTargetText();
      descEl.textContent = fullText;
    }

    // Desktop Mouse Hover
    card.addEventListener('mouseenter', startTyping);
    card.addEventListener('mouseleave', stopTyping);

    // Mobile Tap / Click
    card.addEventListener('click', () => {
      const isActive = card.classList.contains('active');
      
      cards.forEach(c => {
        c.classList.remove('active');
        const cId = c.getAttribute('data-card');
        const cDesc = c.querySelector('.card-desc');
        if (cDesc && typingTimers[cId]) {
          clearInterval(typingTimers[cId]);
          cDesc.style.opacity = '0';
          cDesc.style.transform = 'translateY(12px)';
        }
      });

      if (!isActive) {
        card.classList.add('active');
        startTyping();
      }
    });
  });
}

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
