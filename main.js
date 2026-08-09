/**
 * Code92 — main.js v6.0
 * The Quantum Matrix: Signature Mechanisms, HUD Telemetry & Decipher Systems
 * Owner: יותם כהן (Yotam Cohen) | 052-2057074
 * 
 * Signature Systems:
 * 1. Quantum Core WebGL Engine & Impulse Matrix (Click shockwaves)
 * 2. Real-Time HUD Telemetry Readout (Depth, FPS, Coords, System Status)
 * 3. Cybernetic Decipher Text Engine (Binary/Hex kinetic resolution)
 * 4. Doppler Velocity Warp Timeline (Scroll-controlled particle stretch)
 * 5. 3D Orbital Satellite Interactive Deck
 * 6. Preserved Dual-Language Engine & Human Sales Bot
 */
'use strict';

const WA_NUMBER = '972522057074';

/* ═══════════════════════════════════════════════════════════════════
   LANGUAGE DICTIONARY — Complete Hebrew / English
   ═══════════════════════════════════════════════════════════════════ */
const DICT = {
  he: {
    langBtn: 'EN',
    navContactBtnText: 'צרו קשר',
    hudSystemStatus: 'CORE ONLINE',
    heroLine1: 'פתרונות דיגיטליים',
    heroLine2: 'לאנשים שרוצים',
    heroLine3: 'לייצר תוצאות',
    heroSub: 'בניית אתרים, חנויות אונליין, אפליקציות, מערכות ואוטומציות AI <strong>שמקדמות אותכם כמה צעדים לפני המתחרים</strong>.',
    heroCtaText: 'צרו איתנו קשר',
    scrollTxt: 'CLICK CORE TO IMPULSE // SCROLL TO WARP',
    servicesLabel: 'ORBITAL SATELLITES // 04',
    servicesTitle: 'איך אנחנו הופכים רעיון<br><strong>לפתרון שמייצר תוצאות</strong>',
    svcTitle1: 'אסטרטגיה ואפיון',
    svcDesc1: 'איפיון מדויק ומחקר שוק מעמיק שמאתר את מנועי הצמיחה של העסק שלכם כדי לבנות ארכיטקטורה דיגיטלית שממירה גולשים ללקוחות משלמים.',
    svcTitle2: 'פיתוח אתרים ומערכות Web',
    svcDesc2: 'בניית אתרים יוקרתיים, חנויות E-commerce ומערכות Web מתקדמות ברמה בינלאומית עם ביצועים יוצאי דופן.',
    svcTitle3: 'אוטומציות AI ואפליקציות',
    svcDesc3: 'פיתוח אפליקציות מותאמות אישית וסוכני AI חכמים החוסכים 80% מזמן העבודה הידנית ומייעלים את מערך המכירות והשירות 24/7.',
    svcTitle4: 'Cloud, אבטחה וצמיחה',
    svcDesc4: 'תשתיות ענן, אבטחת מידע קפדנית וליווי מקצועי מתמשך בניהול יותם כהן — המבטיח שהמוצר שלכם ממשיך לייצר לידים והכנסות לאורך זמן.',
    metricLabel1: 'פרויקטים שהושלמו',
    metricLabel2: 'Uptime SLA',
    metricLabel3: 'תמיכה וניטור',
    metricLabel4: 'חיסכון בזמן עם AI',
    contactTitle: 'רוצים לשמוע עוד?',
    contactTitleStrong: 'צרו איתנו קשר',
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
    navLabelHero: 'הליבה',
    navLabelServices: 'ממשקים',
    navLabelMetrics: 'אימפקט',
    navLabelContact: 'חיבור',
    // Bot
    botStatus: 'מחובר/ת כעת לשיחה',
    botTyping: 'מקליד/ה...',
    botPlaceholder: 'הקלד/י הודעה או מספר טלפון...',
    botGreeting: (name) => `שלום! 👋 שמי ${name} מ-Code92.\nבמה אוכל לסייע לך בפרויקט היום?`,
    botRedirecting: `תודה רבה! העברתי את פנייתך ליותם כהן ב-Code92.\nלחץ על הלחצן למטה לפתיחת שיחה ב-WhatsApp:`,
    botServices: [
      { id: 'ecommerce', label: '🛍️ חנויות E-commerce', response: `בחירה מעולה! חנויות E-commerce ב-Code92 נבנות להמרה מקסימלית ב-Next.js 🚀\nאשמח לדעת: מדובר בחנות חדשה מאפס או שדרוג חנות קיימת, וכמה מוצרים מתוכננים בה בערך?` },
      { id: 'ai', label: '🤖 אוטומציות עסקיות + AI', response: `בחירה מצוינת! סוכני AI ואוטומציות עסקיות ב-Code92 חוסכים עד 80% מזמן העבודה 🤖\nאיזה תהליך בעסק היית רוצה לאוטמט? (סוכן מכירות, מענה ללקוחות, ניהול CRM או חשבוניות)` },
      { id: 'web', label: '💻 בניית אתרים ומערכות Web לעסקים', response: `נפלא! אנחנו מתמחים בבניית אתרים ומערכות Web פרימיום ב-Code92 ברמה בינלאומית 💻\nמה סוג הפרויקט שדרוש לך? (אתר תדמית יוקרתי, קטלוג מוצרים, או מערכת ניהול מותאמת)` },
      { id: 'apps', label: '📱 פיתוח מערכות ואפליקציות מותאמות לעסק', response: `מעולה! ארכיטקטורת תוכנה, SaaS ואפליקציות מותאמות אישית ב-Code92 📱\nבאיזו פלטפורמה מדובר? (אפליקציית מובייל iOS/Android, מערכת ענן SaaS, או תוכנה פנימית)` },
      { id: 'cloud', label: '🛡️ תחזוקה, Cloud, אבטחה וניהול שוטף', response: `מצוין! תשתיות ענן, DevOps, אבטחת מידע וניהול שוטף עם 99.99% Uptime SLA ב-Code92 🛡️\nבאיזה שירות מדובר? (אבטחת מידע, אחסון ענן AWS, או תחזוקה שוטפת)` }
    ]
  },
  en: {
    langBtn: 'HE',
    navContactBtnText: 'Contact',
    hudSystemStatus: 'CORE ONLINE',
    heroLine1: 'Digital Solutions',
    heroLine2: 'For People Who Want',
    heroLine3: 'To Generate Results',
    heroSub: 'Building websites, online stores, apps, custom systems and AI automations <strong>that keep you steps ahead of your competitors</strong>.',
    heroCtaText: 'Contact Us',
    scrollTxt: 'CLICK CORE TO IMPULSE // SCROLL TO WARP',
    servicesLabel: 'ORBITAL SATELLITES // 04',
    servicesTitle: 'How We Turn An Idea<br><strong>Into A Solution That Drives Results</strong>',
    svcTitle1: 'Strategy & UX Architecture',
    svcDesc1: 'Precise architecture and market research identifying your exact growth engines to convert visitors into paying clients.',
    svcTitle2: 'Websites & Web Systems',
    svcDesc2: 'Building luxury websites, E-commerce stores and advanced Web systems at an international standard with exceptional performance.',
    svcTitle3: 'AI Automations & Custom Apps',
    svcDesc3: 'Custom mobile apps and intelligent AI agents saving up to 80% manual work while boosting sales and 24/7 support.',
    svcTitle4: 'Cloud, Security & Growth',
    svcDesc4: 'Enterprise cloud, cyber security and ongoing personal management by Yotam Cohen ensuring continuous revenue growth.',
    metricLabel1: 'Projects Delivered',
    metricLabel2: 'Uptime SLA',
    metricLabel3: 'Support & Monitoring',
    metricLabel4: 'Time Saved with AI',
    contactTitle: 'Want to hear more?',
    contactTitleStrong: 'Contact Us',
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
    navLabelHero: 'Core',
    navLabelServices: 'Nodes',
    navLabelMetrics: 'Impact',
    navLabelContact: 'Connect',
    // Bot
    botStatus: 'Online Now',
    botTyping: 'typing...',
    botPlaceholder: 'Type a message or phone number...',
    botGreeting: (name) => `Hello! 👋 My name is ${name} from Code92.\nHow can I assist you with your project today?`,
    botRedirecting: `Thank you! I forwarded your inquiry to Yotam Cohen at Code92.\nClick the button below to start a WhatsApp chat:`,
    botServices: [
      { id: 'ecommerce', label: '🛍️ E-Commerce Online Stores', response: `Excellent choice! E-commerce stores by Code92 built in Next.js for high conversion 🚀\nIs this a new store from scratch or an existing store upgrade? How many products are planned?` },
      { id: 'ai', label: '🤖 Business Automation & AI', response: `Great choice! AI Agents & Automations by Code92 saving up to 80% manual work 🤖\nWhich business process would you like to automate? (Sales agent, customer support, CRM)` },
      { id: 'web', label: '💻 Website & Web System Development', response: `Great! At Code92 we engineer world-class premium websites 💻\nWhat type of project do you need? (Luxury brand site, product catalog, or custom Web App)` },
      { id: 'apps', label: '📱 Custom App & Software Engineering', response: `Enterprise software architecture, SaaS & custom mobile apps by Code92 📱\nWhich platform? (iOS/Android mobile app, Cloud SaaS, or internal tool)` },
      { id: 'cloud', label: '🛡️ Cloud, DevOps, Cyber & Maintenance', response: `Cloud infrastructure, DevOps, Cyber Security & ongoing management with 99.99% Uptime SLA by Code92 🛡️\nWhich service? (Cyber security, AWS Cloud, or ongoing maintenance)` }
    ]
  }
};

let currentLang = 'he';

/* ═══════════════════════════════════════════════════════════════════
   SALES REPRESENTATIVES POOL (Preserved)
   ═══════════════════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════════════════
   1. QUANTUM CORE ENGINE & IMPULSE MATRIX (Signature 3D Engine)
   ═══════════════════════════════════════════════════════════════════ */
class QuantumCoreEngine {
  constructor() {
    this.canvas = document.getElementById('webglCanvas');
    if (!this.canvas || typeof THREE === 'undefined') return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 18);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scrollProgress = 0;
    this.lastFrameTime = performance.now();
    this.frameCount = 0;
    this.fps = 60;
    this.impulsePower = 0;

    this.initLights();
    this.createCoreGeometry();
    this.createParticleCloud();
    this.createEnergyRings();
    this.bindEvents();
    this.animate();
  }

  initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    this.emeraldLight = new THREE.PointLight(0x00e676, 3, 50);
    this.emeraldLight.position.set(5, 5, 10);
    this.scene.add(this.emeraldLight);

    this.cyanLight = new THREE.PointLight(0x00e5ff, 2.5, 50);
    this.cyanLight.position.set(-5, -5, -5);
    this.scene.add(this.cyanLight);
  }

  createCoreGeometry() {
    this.coreGroup = new THREE.Group();

    // Inner Wireframe Core
    const innerGeo = new THREE.IcosahedronGeometry(2.8, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00e676,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    this.innerMesh = new THREE.Mesh(innerGeo, innerMat);
    this.coreGroup.add(this.innerMesh);

    // Outer Glass Dodecahedron Hull
    const outerGeo = new THREE.DodecahedronGeometry(3.6, 1);
    const outerMat = new THREE.MeshPhongMaterial({
      color: 0x00e676,
      emissive: 0x002211,
      specular: 0x00e5ff,
      shininess: 90,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    this.outerMesh = new THREE.Mesh(outerGeo, outerMat);
    this.coreGroup.add(this.outerMesh);

    // Center Nucleus Sphere
    const nucleusGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0x00e676,
      transparent: true,
      opacity: 0.85
    });
    this.nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    this.coreGroup.add(this.nucleusMesh);

    this.scene.add(this.coreGroup);
  }

  createParticleCloud() {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 900 : 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 24 + 4;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.originalPositions = originalPositions;

    const material = new THREE.PointsMaterial({
      color: 0x00e676,
      size: 0.08,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    this.particleSystem = new THREE.Points(geometry, material);
    this.scene.add(this.particleSystem);
  }

  createEnergyRings() {
    this.ringGroup = new THREE.Group();
    const ringGeo = new THREE.TorusGeometry(5.4, 0.025, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.35
    });

    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI * (i * 0.3);
      ring.rotation.y = Math.PI * (i * 0.25);
      this.ringGroup.add(ring);
    }

    this.scene.add(this.ringGroup);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    document.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Signature Mechanism: Click Shockwave Impulse
    window.addEventListener('click', (e) => {
      if (e.target.closest('#salesChatPanel') || e.target.closest('.lang-toggle') || e.target.closest('input')) return;
      this.triggerCoreImpulse();
    });
  }

  // Signature Interaction: Shockwave Energy Pulse
  triggerCoreImpulse() {
    this.impulsePower = 1.0;

    const telStatus = document.getElementById('telStatus');
    if (telStatus) {
      telStatus.textContent = 'CORE: IMPULSE DISCHARGED';
      setTimeout(() => { telStatus.textContent = 'CORE: IMPULSE READY'; }, 1500);
    }

    // Shockwave timeline on geometry and particles
    gsap.to(this.coreGroup.scale, {
      x: 1.4, y: 1.4, z: 1.4,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });

    if (this.particleSystem) {
      gsap.to(this.particleSystem.material, {
        size: 0.18,
        opacity: 0.85,
        duration: 0.3,
        yoyo: true,
        repeat: 1
      });
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Compute real-time FPS
    const now = performance.now();
    this.frameCount++;
    if (now > this.lastFrameTime + 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastFrameTime));
      this.frameCount = 0;
      this.lastFrameTime = now;
      this.updateHUDTelemetry();
    }

    // Smooth lerp mouse vector
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // Core Rotations
    if (this.coreGroup) {
      this.innerMesh.rotation.x += 0.003;
      this.innerMesh.rotation.y += 0.005;

      this.outerMesh.rotation.x -= 0.002;
      this.outerMesh.rotation.y -= 0.004;

      this.coreGroup.rotation.y = this.mouse.x * 0.45;
      this.coreGroup.rotation.x = -this.mouse.y * 0.45;
    }

    // Particle Cloud Drift
    if (this.particleSystem) {
      this.particleSystem.rotation.y += 0.0006;
    }

    // Ring Accelerators
    if (this.ringGroup) {
      this.ringGroup.rotation.z += 0.0025;
      this.ringGroup.rotation.x += 0.0015;
    }

    this.renderer.render(this.scene, this.camera);
  }

  setCameraSpatialState(progress) {
    this.scrollProgress = progress;

    if (this.camera && this.coreGroup) {
      this.camera.position.z = 18 - progress * 10;
      this.camera.position.y = -progress * 4;
      this.coreGroup.scale.setScalar(1 + progress * 0.35);
    }
  }

  updateHUDTelemetry() {
    const telDepth = document.getElementById('telDepth');
    const telFps = document.getElementById('telFps');
    const telCoords = document.getElementById('telCoords');

    const depthVal = (18 - this.scrollProgress * 10).toFixed(1);
    if (telDepth) telDepth.textContent = `DEPTH: ${depthVal}m`;
    if (telFps) telFps.textContent = `${this.fps} FPS`;
    if (telCoords) telCoords.textContent = `X: ${this.mouse.x.toFixed(2)} Y: ${this.mouse.y.toFixed(2)}`;
  }
}

let coreEngine = null;

/* ═══════════════════════════════════════════════════════════════════
   2. CYBERNETIC DECIPHER TEXT ENGINE (Kinetic Text Resolution)
   ═══════════════════════════════════════════════════════════════════ */
function runDecipherEffect(element, targetText) {
  if (!element) return;

  const chars = '0123456789ABCDEF!@#$%^&*()_+-=[]{}|;:,.<>?';
  const text = targetText || element.getAttribute('data-decipher') || element.textContent;
  const length = text.length;

  let iteration = 0;
  clearInterval(element._decipherInterval);

  element._decipherInterval = setInterval(() => {
    element.textContent = text
      .split('')
      .map((char, index) => {
        if (index < iteration) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    if (iteration >= length) {
      clearInterval(element._decipherInterval);
      element.textContent = text;
    }

    iteration += 1 / 2;
  }, 25);
}

function initDecipherTextOnScroll() {
  const elements = document.querySelectorAll('[data-decipher]');
  elements.forEach(el => {
    runDecipherEffect(el);
  });
}

/* ═══════════════════════════════════════════════════════════════════
   3. SYSTEM IGNITION LOADER
   ═══════════════════════════════════════════════════════════════════ */
function initLoadingSequence() {
  const loader = document.getElementById('loader');
  const flare = document.getElementById('loaderFlare');
  const wordmark = document.getElementById('loaderWordmark');
  const status = document.getElementById('loaderStatus');
  if (!loader) return;

  runDecipherEffect(status, 'INITIALIZING QUANTUM CORE...');

  const tl = gsap.timeline({
    onComplete: () => {
      loader.style.pointerEvents = 'none';
      initHeroEntrance();
    }
  });

  tl.to(flare, { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.2)
    .to(flare, { width: '85vw', height: '3px', duration: 0.8, ease: 'power3.out' }, 0.5)
    .to(wordmark, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 1.0)
    .to(status, { opacity: 1, duration: 0.4, ease: 'power2.out' }, 1.2)
    .to(flare, { opacity: 0, width: '140vw', height: '140vh', duration: 0.7, ease: 'power2.in' }, 1.8)
    .to(wordmark, { opacity: 0, y: -20, duration: 0.5 }, 1.8)
    .to(status, { opacity: 0 }, 1.8)
    .to(loader, { opacity: 0, duration: 0.6 }, 2.2)
    .set(loader, { display: 'none' }, 2.8);
}

/* ═══════════════════════════════════════════════════════════════════
   4. HERO ENTRANCE & KINETIC TYPOGRAPHY
   ═══════════════════════════════════════════════════════════════════ */
function initHeroEntrance() {
  const lines = document.querySelectorAll('.title-line');
  const sub = document.querySelector('.hero-sub');
  const ctaWrap = document.querySelector('.hero-cta-wrap');
  const scrollInd = document.getElementById('scrollIndicator');
  const cursorGlow = document.getElementById('cursorGlow');

  lines.forEach(line => runDecipherEffect(line));

  const tl = gsap.timeline();

  tl.to(lines, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: 'power3.out'
  }, 0)
  .to(sub, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.5)
  .to(ctaWrap, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.7)
  .to(scrollInd, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 1.0);

  if (cursorGlow) setTimeout(() => cursorGlow.classList.add('active'), 600);
}

/* ═══════════════════════════════════════════════════════════════════
   5. GSAP SPATIAL SCROLL TIMELINE
   ═══════════════════════════════════════════════════════════════════ */
function initScrollTimeline() {
  gsap.registerPlugin(ScrollTrigger);

  const header = document.getElementById('mainHeader');
  const navDots = document.getElementById('navDots');

  ScrollTrigger.create({
    trigger: '#services',
    start: 'top 80%',
    onEnter: () => {
      header?.classList.add('visible');
      navDots?.classList.add('visible');
    },
    onLeaveBack: () => {
      header?.classList.remove('visible');
      navDots?.classList.remove('visible');
    }
  });

  ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    onUpdate: (self) => {
      if (coreEngine) {
        coreEngine.setCameraSpatialState(self.progress);
      }
    }
  });

  // Orbital Satellites Reveal
  gsap.to('.hud-tag', {
    opacity: 1, y: 0, duration: 0.7,
    scrollTrigger: { trigger: '#services', start: 'top 75%' }
  });

  gsap.to('.section-title', {
    opacity: 1, y: 0, duration: 0.8,
    scrollTrigger: { trigger: '#services', start: 'top 70%' }
  });

  gsap.to('.satellite-card', {
    opacity: 1, y: 0, duration: 0.85, stagger: 0.15, ease: 'power2.out',
    clearProps: 'transform',
    scrollTrigger: { trigger: '.orbital-satellites-deck', start: 'top 75%' }
  });

  // Metrics Reveal & Counter Animation
  gsap.to('.metric-card', {
    opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
    scrollTrigger: {
      trigger: '.metrics-grid', start: 'top 80%',
      onEnter: () => animateMetrics()
    }
  });

  // Contact Form Reveal
  gsap.to('.contact-text', {
    opacity: 1, y: 0, duration: 0.8,
    scrollTrigger: { trigger: '#contact', start: 'top 75%' }
  });

  gsap.to('.form-box', {
    opacity: 1, y: 0, duration: 0.8, delay: 0.1,
    scrollTrigger: { trigger: '#contact', start: 'top 70%' }
  });
}

/* ═══════════════════════════════════════════════════════════════════
   6. ANIMATED METRICS COUNTER ENGINE
   ═══════════════════════════════════════════════════════════════════ */
let metricsDone = false;

function animateMetrics() {
  if (metricsDone) return;
  metricsDone = true;

  document.querySelectorAll('.metric-card').forEach(card => {
    const valEl = card.querySelector('.metric-val');
    if (!valEl) return;

    const target = parseFloat(card.dataset.target) || 0;
    const decimals = parseInt(card.dataset.decimals) || 0;

    gsap.to({ v: 0 }, {
      v: target,
      duration: 2.2,
      ease: 'power2.out',
      onUpdate: function() {
        valEl.textContent = this.targets()[0].v.toFixed(decimals);
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════════════
   7. MOUSE LIGHTING & CURSOR RING
   ═══════════════════════════════════════════════════════════════════ */
function initMouseLighting() {
  const cursorGlow = document.getElementById('cursorGlow');
  const cursorRing = document.getElementById('cursorRing');

  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    if (cursorRing) cursorRing.classList.add('active');
  });

  function update() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    if (cursorGlow) {
      cursorGlow.style.transform = `translate(${currentX - 350}px, ${currentY - 350}px)`;
    }

    if (cursorRing) {
      cursorRing.style.transform = `translate(${targetX - 12}px, ${targetY - 12}px)`;
    }

    requestAnimationFrame(update);
  }
  update();
}

function initVerticalNav() {
  const dots = document.querySelectorAll('.nav-dot');
  const sections = ['hero', 'services', 'metrics', 'contact'];

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = dot.getAttribute('data-section');
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  function updateNav() {
    const scrollY = window.scrollY + window.innerHeight / 2;
    let currentSection = 'hero';

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) currentSection = id;
    });

    dots.forEach(d => {
      d.classList.toggle('active', d.dataset.section === currentSection);
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
}

/* ═══════════════════════════════════════════════════════════════════
   8. LANGUAGE TOGGLE (RTL/LTR) WITH DECIPHER RESOLUTION
   ═══════════════════════════════════════════════════════════════════ */
function toggleLanguage() {
  currentLang = currentLang === 'he' ? 'en' : 'he';
  const d = DICT[currentLang];

  document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;

  const setText = (id, v) => {
    const el = document.getElementById(id);
    if (el) {
      runDecipherEffect(el, v);
    }
  };
  const setHtml = (id, v) => { const el = document.getElementById(id); if (el) el.innerHTML = v; };
  const setPlc = (id, v) => { const el = document.getElementById(id); if (el) el.placeholder = v; };

  setText('langToggleBtn', d.langBtn);
  setText('navContactBtnText', d.navContactBtnText);
  setText('hudSystemStatus', d.hudSystemStatus);

  // Hero
  setText('heroLine1', d.heroLine1);
  setText('heroLine2', d.heroLine2);
  setText('heroLine3', d.heroLine3);
  setHtml('heroSub', d.heroSub);
  setText('heroCtaText', d.heroCtaText);
  setText('scrollTxt', d.scrollTxt);

  // Services
  setText('servicesLabel', d.servicesLabel);
  setHtml('servicesTitle', d.servicesTitle);
  setText('svcTitle1', d.svcTitle1); setText('svcDesc1', d.svcDesc1);
  setText('svcTitle2', d.svcTitle2); setText('svcDesc2', d.svcDesc2);
  setText('svcTitle3', d.svcTitle3); setText('svcDesc3', d.svcDesc3);
  setText('svcTitle4', d.svcTitle4); setText('svcDesc4', d.svcDesc4);

  // Metrics
  setText('metricLabel1', d.metricLabel1);
  setText('metricLabel2', d.metricLabel2);
  setText('metricLabel3', d.metricLabel3);
  setText('metricLabel4', d.metricLabel4);

  // Contact
  const titleEl = document.getElementById('contactTitle');
  if (titleEl) titleEl.innerHTML = `${d.contactTitle}<br><strong id="contactTitleStrong">${d.contactTitleStrong}</strong>`;
  setText('contactSubtitle', d.contactSub);

  // Form
  setText('lblFullname', d.lblFullname);
  setText('lblPhone', d.lblPhone);
  setText('lblEmail', d.lblEmail);
  setText('lblMsg', d.lblMsg);
  setPlc('name', d.placeholderName);
  setPlc('phone', d.placeholderPhone);
  setPlc('email', d.placeholderEmail);
  setPlc('message', d.placeholderMsg);
  setText('btnSubmitTxt', d.btnSubmitTxt);
  setText('copyrightBar', d.copyright);

  // Nav dots
  setText('navLabelHero', d.navLabelHero);
  setText('navLabelServices', d.navLabelServices);
  setText('navLabelMetrics', d.navLabelMetrics);
  setText('navLabelContact', d.navLabelContact);

  if (typeof updateBotUiFn === 'function') updateBotUiFn();
}

/* ═══════════════════════════════════════════════════════════════════
   9. SALES CHATBOT (100% Preserved Logic)
   ═══════════════════════════════════════════════════════════════════ */
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

  let chatState = {
    step: 'INIT', category: '', categoryId: '',
    specificDetails: '', timeline: '', userName: '', userPhone: ''
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
        avatar.style.backgroundColor = activeRep.gender === 'female' ? '#db2777' : 'var(--emerald)';
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
    row.innerHTML = `<div class="typing-bubble"><span style="font-size:0.72rem;color:#666">${DICT[currentLang].botTyping}</span><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
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

  function detectIntent(text) {
    const lower = text.toLowerCase();
    const phoneMatch = text.match(/\b05\d[-]?\d{7}\b/) || text.match(/\b0\d[-]?\d{7,8}\b/);
    if (phoneMatch) return { intent: 'PHONE', val: phoneMatch[0] };
    if (/(מחיר|עלות|כמה עולה|תמחור|הצעה|cost|price|budget|quote)/i.test(lower)) return { intent: 'PRICING' };
    if (/(כמה זמן|זמנים|לוח זמנים|מהיר|mti|timeline|how long)/i.test(lower)) return { intent: 'TIMELINE' };
    if (/(שפות|טכנולוגיה|react|next|python|node|aws)/i.test(lower)) return { intent: 'TECH' };
    return { intent: 'GENERAL' };
  }

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

  function handleOptionSelection(opt) {
    const isHe = currentLang === 'he';

    if (chatState.step === 'INIT') {
      chatState.category = opt.label;
      chatState.categoryId = opt.id || 'web';
      chatState.step = 'CATEGORY_SELECTED';
      replyWithTyping(opt.response, () => setOptions(getCategorySubOptions(chatState.categoryId)));
    } else if (chatState.step === 'CATEGORY_SELECTED') {
      chatState.specificDetails = opt.label;
      chatState.step = 'SPECIFIC_ANSWERED';
      const prompt = isHe ? `רשמתי! 👍 מה לוח הזמנים המועדף עליך לעלייה לאוויר?` : `Noted! 👍 What is your target timeline?`;
      replyWithTyping(prompt, () => {
        const tOpts = isHe ? [
          { label: '⚡ מיידי (1-2 שבועות)' },
          { label: '📅 במהלך החודש הקרוב' },
          { label: '🔍 בודק/ת אפשרויות' }
        ] : [
          { label: '⚡ Immediate (1-2 weeks)' },
          { label: '📅 Within next month' },
          { label: '🔍 Exploring options' }
        ];
        setOptions(tOpts);
      });
    } else if (chatState.step === 'SPECIFIC_ANSWERED') {
      chatState.timeline = opt.label;
      chatState.step = 'TIMELINE_ANSWERED';
      const ask = isHe ? `מעולה! קיבלתי את כל הנתונים 👍\nכדי ששיחה תועבר לטיפול אישי של יותם כהן ב-Code92 — נא להקליד שם מלא ומספר טלפון לחזרה:` : `Great! Received all details 👍\nPlease type your Full Name and Phone Number for Yotam Cohen at Code92:`;
      replyWithTyping(ask, () => setOptions([]));
    }
  }

  function handleUserInput() {
    const val = input.value.trim();
    if (!val) return;
    addMsg(val, false);
    input.value = '';
    opts.innerHTML = '';
    const isHe = currentLang === 'he';
    const analysis = detectIntent(val);

    if (analysis.intent === 'PHONE' || chatState.step === 'TIMELINE_ANSWERED' || chatState.step === 'DONE') {
      chatState.userPhone = analysis.val || val;
      if (!chatState.userName) chatState.userName = val.replace(analysis.val || '', '').trim() || 'לקוח יקר';
      chatState.step = 'DONE';
      finishLeadCapture();
      return;
    }

    if (chatState.step === 'INIT') {
      chatState.specificDetails = val;
      chatState.step = 'INIT_RESPONSE_SENT';
      const ack = isHe ? `תודה! קיבלתי את הודעתך 👍\nבאיזה תחום מדובר? אפשר לבחור באחת האפשרויות למטה:` : `Thank you! Received your message 👍\nWhich category fits your project best? Choose below:`;
      replyWithTyping(ack, () => setOptions(DICT[currentLang].botServices));
    }
  }

  function finishLeadCapture() {
    const isHe = currentLang === 'he';
    const summary = isHe
      ? `תודה רבה! 🙏\nפנייתך נקלטה בהצלחה במערכת Code92:\n• תחום: ${chatState.category || 'פנייה כללית'}\n• פרטים: ${chatState.specificDetails || '-'}\n• לוח זמנים: ${chatState.timeline || '-'}\n• איש קשר: ${chatState.userPhone || chatState.userName || 'פרטים התקבלו'}\n\nנציג מ-Code92 (ניהול יותם כהן) יחזור אליך בהקדם!`
      : `Thank you! 🙏\nYour inquiry is submitted to Code92:\n• Category: ${chatState.category || 'General'}\n• Details: ${chatState.specificDetails || '-'}\n• Timeline: ${chatState.timeline || '-'}\n• Contact: ${chatState.userPhone || chatState.userName || 'Details received'}\n\nA representative from Code92 will contact you shortly!`;

    replyWithTyping(summary, () => {
      const waNote = isHe ? 'מעדיף/ה להמשיך את השיחה ב-WhatsApp כעת?' : 'Prefer to continue on WhatsApp now?';
      const btnLabel = isHe ? '📲 לחץ/י כאן לפתיחת שיחה ב-WhatsApp' : '📲 Click to open WhatsApp chat with Code92';
      const text = encodeURIComponent(
        `שלום ליותם כהן (Code92)! 👋\n` +
        `פנייה חדשה מאת נציג/ה: ${activeRep.name}\n` +
        `תחום: ${chatState.category || 'כללי'}\n` +
        `פירוט: ${chatState.specificDetails || '-'}\n` +
        `לוח זמנים: ${chatState.timeline || '-'}\n` +
        `איש קשר: ${chatState.userPhone || chatState.userName}`
      );
      const url = `https://wa.me/${WA_NUMBER}?text=${text}`;
      addMsg(`${waNote}<br><br><a href="${url}" target="_blank" rel="noopener" class="chat-wa-direct-btn">${btnLabel}</a>`);
    });
  }

  function startSalesFunnel() {
    msgs.innerHTML = '';
    chatState = { step: 'INIT', category: '', categoryId: '', specificDetails: '', timeline: '', userName: '', userPhone: '' };
    const name = currentLang === 'he' ? activeRep.name : activeRep.enName;
    addMsg(DICT[currentLang].botGreeting(name));
    setOptions([]);
  }

  updateBotUiFn = () => {
    renderRepInfo();
    if (isOpen) startSalesFunnel();
  };

  renderRepInfo();

  function toggleChat(state) {
    isOpen = state !== undefined ? state : !isOpen;
    panel.classList.toggle('open', isOpen);
    if (isOpen && msgs.children.length === 0) startSalesFunnel();
  }

  fab?.addEventListener('click', () => toggleChat());
  close?.addEventListener('click', () => toggleChat(false));
  send?.addEventListener('click', handleUserInput);
  input?.addEventListener('keydown', e => { if (e.key === 'Enter') handleUserInput(); });
}

/* ═══════════════════════════════════════════════════════════════════
   10. CONTACT FORM HANDLER (Preserved)
   ═══════════════════════════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById('rubiconContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message')?.value.trim() || '';

    if (!name || !phone || !email) {
      alert(currentLang === 'he' ? 'נא למלא את כל שדות החובה (*)' : 'Please fill all required fields (*)');
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
    form.reset();
  });
}

/* ═══════════════════════════════════════════════════════════════════
   INITIALIZATION
   ═══════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  coreEngine = new QuantumCoreEngine();

  document.getElementById('langToggleBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    toggleLanguage();
  });

  initLoadingSequence();
  initMouseLighting();
  initScrollTimeline();
  initVerticalNav();
  initHumanSalesBot();
  initContactForm();
});
