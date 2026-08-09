/**
 * CODE92 — main.js v8.0
 * CODE BECOMES REALITY: Source -> Compile -> Build -> Deploy -> Scale Engine
 * Owner: יותם כהן (Yotam Cohen) | 052-2057074
 * 
 * Signature Mechanics:
 * 1. CodeCompilerEngine (Three.js WebGL: AST Nodes, Wireframes, Geometry Compilation)
 * 2. Source <-> Reality Pointer Scrubbing: Horizontal mouse X position scrubs raw syntax to compiled UI
 * 3. Signature REALITY DECOMPILATION: Hovering elements reveals underlying wireframe & coordinate skeleton
 * 4. 5 Executable Program Modules: WEB -> APPS -> COMMERCE -> DEVOPS -> AI -> build_next() Collapse
 * 5. C92://INITIALIZING Opening Sequence (5s)
 * 6. Cybernetic Decipher Animation Engine
 * 7. Preserved Dual-Language Engine & Human Sales Bot Widget
 */
'use strict';

const WA_NUMBER = '972522057074';

/* ═══════════════════════════════════════════════════════════════════
   LANGUAGE DICTIONARY — Complete Hebrew / English
   ═══════════════════════════════════════════════════════════════════ */
const DICT = {
  he: {
    langBtn: 'EN',
    navContactBtnText: 'מתחילים פרויקט',
    hudSystemStatus: 'SYSTEM // EXECUTING',
    heroLine1: 'אנחנו כותבים',
    heroLine2: 'את מה שאחרים',
    heroLine3: 'רק מדמיינים.',
    heroSub: 'אתרים, אפליקציות, מסחר דיגיטלי, תשתיות DevOps ופתרונות AI מתקדמים <strong>הנבנים מקוד למציאות פועלת</strong>.',
    heroCtaText: 'מתחילים פרויקט',
    scrollTxt: 'SCRUB HORIZONTALLY: SOURCE ↔ REALITY // SCROLL TO EXECUTE PROGRAM',
    webTitle: 'STRUCTURE BECOMING EXPERIENCE',
    webDesc: 'בניית אתרי פרימיום, חנויות אונליין וממשקי Web מתקדמים ברמה בינלאומית עם ביצועים יוצאי דופן.',
    appsTitle: 'LOGIC BECOMING PRODUCT',
    appsDesc: 'ארכיטקטורת תוכנה, מערכות SaaS ואפליקציות מובייל מותאמות אישית המציגות ממשקי משתמש עוצמתיים.',
    commerceTitle: 'TRANSACTIONS BECOMING FLOW',
    commerceDesc: 'רשתות מסחר דיגיטליות, סליקה מתקדמת וחנויות E-commerce שנבנות להמרה מקסימלית בטכנולוגיות Next.js.',
    devopsTitle: 'INFRASTRUCTURE UNDERNEATH REALITY',
    devopsDesc: 'טופולוגיות ענן מורכבות (AWS/GCP), ניהול Kubernetes, אבטחת מידע קפדנית ורמת זמינות של 99.99% Uptime SLA.',
    aiTitle: 'COMPUTATION BECOMING INTELLIGENCE',
    aiDesc: 'סוכני AI חכמים, אוטומציות עסקיות ואלגוריתמים המייעלים את מערך המכירות והשירות 24/7 וחוסכים 80% מזמן העבודה.',
    metricLabel1: 'פרויקטים שהושלמו',
    metricLabel2: 'Uptime SLA',
    metricLabel3: 'תמיכה וניטור',
    metricLabel4: 'חיסכון בזמן עם AI',
    contactTitle: 'יש לכם רעיון?',
    contactTitleStrong: 'בואו נהפוך אותו למציאות.',
    contactSub: 'השאירו פרטים ונחזור אליכם בהקדם האפשרי עם כל התשובות.',
    lblFullname: 'שם מלא *',
    lblPhone: 'טלפון *',
    lblEmail: 'אימייל *',
    lblMsg: 'הודעה',
    placeholderName: 'שם מלא',
    placeholderPhone: '052-2057074',
    placeholderEmail: 'name@company.com',
    placeholderMsg: 'איך נוכל לעזור?',
    btnSubmitTxt: 'מתחילים פרויקט',
    copyright: '© CODE92 · כל הזכויות שמורות ליותם כהן',
    navLabelHero: 'SOURCE',
    navLabelWeb: 'MOD_01',
    navLabelApps: 'MOD_02',
    navLabelCommerce: 'MOD_03',
    navLabelDevops: 'MOD_04',
    navLabelAi: 'MOD_05',
    navLabelContact: 'DEPLOY',
    // Bot
    botStatus: 'מחובר/ת כעת לשיחה',
    botTyping: 'מקליד/ה...',
    botPlaceholder: 'הקלד/י הודעה או מספר טלפון...',
    botGreeting: (name) => `שלום! 👋 שמי ${name} מ-CODE92.\nבמה אוכל לסייע לך בפרויקט היום?`,
    botRedirecting: `תודה רבה! העברתי את פנייתך ליותם כהן ב-CODE92.\nלחץ על הלחצן למטה לפתיחת שיחה ב-WhatsApp:`,
    botServices: [
      { id: 'ecommerce', label: '🛍️ חנויות E-commerce', response: `בחירה מעולה! חנויות E-commerce ב-CODE92 נבנות להמרה מקסימלית ב-Next.js 🚀\nאשמח לדעת: מדובר בחנות חדשה מאפס או שדרוג חנות קיימת, וכמה מוצרים מתוכננים בה בערך?` },
      { id: 'ai', label: '🤖 אוטומציות עסקיות + AI', response: `בחירה מצוינת! סוכני AI ואוטומציות עסקיות ב-CODE92 חוסכים עד 80% מזמן העבודה 🤖\nאיזה תהליך בעסק היית רוצה לאוטמט? (סוכן מכירות, מענה ללקוחות, ניהול CRM או חשבוניות)` },
      { id: 'web', label: '💻 בניית אתרים ומערכות Web לעסקים', response: `נפלא! אנחנו מתמחים בבניית אתרים ומערכות Web פרימיום ב-CODE92 ברמה בינלאומית 💻\nמה סוג הפרויקט שדרוש לך? (אתר תדמית יוקרתי, קטלוג מוצרים, או מערכת ניהול מותאמת)` },
      { id: 'apps', label: '📱 פיתוח מערכות ואפליקציות מותאמות לעסק', response: `מעולה! ארכיטקטורת תוכנה, SaaS ואפליקציות מותאמות אישית ב-CODE92 📱\nבאיזו פלטפורמה מדובר? (אפליקציית מובייל iOS/Android, מערכת ענן SaaS, או תוכנה פנימית)` },
      { id: 'cloud', label: '🛡️ תחזוקה, Cloud, אבטחה וניהול שוטף', response: `מצוין! תשתיות ענן, DevOps, אבטחת מידע וניהול שוטף עם 99.99% Uptime SLA ב-CODE92 🛡️\nבאיזה שירות מדובר? (אבטחת מידע, אחסון ענן AWS, או תחזוקה שוטפת)` }
    ]
  },
  en: {
    langBtn: 'HE',
    navContactBtnText: 'Start Project',
    hudSystemStatus: 'SYSTEM // EXECUTING',
    heroLine1: 'We Engineer What',
    heroLine2: 'Others Only',
    heroLine3: 'Imagine.',
    heroSub: 'Websites, mobile apps, E-commerce platforms, DevOps cloud infrastructure and AI systems built from code into working reality.',
    heroCtaText: 'Start Project',
    scrollTxt: 'SCRUB HORIZONTALLY: SOURCE ↔ REALITY // SCROLL TO EXECUTE PROGRAM',
    webTitle: 'STRUCTURE BECOMING EXPERIENCE',
    webDesc: 'Building luxury websites, E-commerce stores and advanced Web applications at international standards with exceptional performance.',
    appsTitle: 'LOGIC BECOMING PRODUCT',
    appsDesc: 'Software architecture, custom SaaS platforms and native mobile apps engineered for powerful user experiences.',
    commerceTitle: 'TRANSACTIONS BECOMING FLOW',
    commerceDesc: 'Digital commerce networks, payment routing and high-conversion E-commerce built with Next.js.',
    devopsTitle: 'INFRASTRUCTURE UNDERNEATH REALITY',
    devopsDesc: 'Complex cloud topologies (AWS/GCP), Kubernetes orchestration, cyber security, and 99.99% Uptime SLA.',
    aiTitle: 'COMPUTATION BECOMING INTELLIGENCE',
    aiDesc: 'Intelligent AI agents, business automations and algorithms saving up to 80% manual work with 24/7 reliability.',
    metricLabel1: 'Projects Delivered',
    metricLabel2: 'Uptime SLA',
    metricLabel3: 'Support & Monitoring',
    metricLabel4: 'Time Saved with AI',
    contactTitle: 'Have an Idea?',
    contactTitleStrong: 'Let Us Turn It Into Reality.',
    contactSub: 'Leave your details and we will get back to you shortly with full answers.',
    lblFullname: 'Full Name *',
    lblPhone: 'Phone *',
    lblEmail: 'Email *',
    lblMsg: 'Message',
    placeholderName: 'Full Name',
    placeholderPhone: '052-2057074',
    placeholderEmail: 'name@company.com',
    placeholderMsg: 'How can we help?',
    btnSubmitTxt: 'Start Project',
    copyright: '© CODE92 · All Rights Reserved to Yotam Cohen',
    navLabelHero: 'SOURCE',
    navLabelWeb: 'MOD_01',
    navLabelApps: 'MOD_02',
    navLabelCommerce: 'MOD_03',
    navLabelDevops: 'MOD_04',
    navLabelAi: 'MOD_05',
    navLabelContact: 'DEPLOY',
    // Bot
    botStatus: 'Online Now',
    botTyping: 'typing...',
    botPlaceholder: 'Type a message or phone number...',
    botGreeting: (name) => `Hello! 👋 My name is ${name} from CODE92.\nHow can I assist you with your project today?`,
    botRedirecting: `Thank you! I forwarded your inquiry to Yotam Cohen at CODE92.\nClick the button below to start a WhatsApp chat:`,
    botServices: [
      { id: 'ecommerce', label: '🛍️ E-Commerce Online Stores', response: `Excellent choice! E-commerce stores by CODE92 built in Next.js for high conversion 🚀\nIs this a new store from scratch or an existing store upgrade? How many products are planned?` },
      { id: 'ai', label: '🤖 Business Automation & AI', response: `Great choice! AI Agents & Automations by CODE92 saving up to 80% manual work 🤖\nWhich business process would you like to automate? (Sales agent, customer support, CRM)` },
      { id: 'web', label: '💻 Website & Web System Development', response: `Great! At CODE92 we engineer world-class premium websites 💻\nWhat type of project do you need? (Luxury brand site, product catalog, or custom Web App)` },
      { id: 'apps', label: '📱 Custom App & Software Engineering', response: `Enterprise software architecture, SaaS & custom mobile apps by CODE92 📱\nWhich platform? (iOS/Android mobile app, Cloud SaaS, or internal tool)` },
      { id: 'cloud', label: '🛡️ Cloud, DevOps, Cyber & Maintenance', response: `Cloud infrastructure, DevOps, Cyber Security & ongoing management with 99.99% Uptime SLA by CODE92 🛡️\nWhich service? (Cyber security, AWS Cloud, or ongoing maintenance)` }
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
   1. CODE COMPILER ENGINE (Three.js WebGL Architecture)
   ═══════════════════════════════════════════════════════════════════ */
class CodeCompilerEngine {
  constructor() {
    this.canvas = document.getElementById('webglCanvas');
    if (!this.canvas || typeof THREE === 'undefined') return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 20);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.compileRatio = 0; // 0 = Source (raw code), 0.5 = Compiling, 1.0 = Compiled Reality
    this.scrollProgress = 0;
    this.lastFrameTime = performance.now();
    this.frameCount = 0;
    this.fps = 60;
    this.isDecompiling = false;

    this.initLights();
    this.createCompilerObjects();
    this.createSyntaxParticleCloud();
    this.bindEvents();
    this.animate();
  }

  initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    this.scene.add(ambientLight);

    this.emeraldLight = new THREE.PointLight(0x00e676, 3.5, 60);
    this.emeraldLight.position.set(6, 6, 12);
    this.scene.add(this.emeraldLight);

    this.cyanLight = new THREE.PointLight(0x00e5ff, 3, 60);
    this.cyanLight.position.set(-6, -6, -6);
    this.scene.add(this.cyanLight);
  }

  createCompilerObjects() {
    this.masterGroup = new THREE.Group();

    // ── Source Layer: Raw AST Wireframe Geometries
    this.wireframeCore = new THREE.Group();
    const innerGeo = new THREE.IcosahedronGeometry(2.8, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00e676,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    this.wireframeCore.add(new THREE.Mesh(innerGeo, innerMat));

    const ringGeo = new THREE.TorusGeometry(4.2, 0.03, 16, 80);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true, transparent: true, opacity: 0.6 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI * 0.35;
    this.wireframeCore.add(ring);

    this.masterGroup.add(this.wireframeCore);

    // ── Compiled Reality Layer: Solid Polished Geometry Hull
    this.compiledCore = new THREE.Group();
    const outerGeo = new THREE.DodecahedronGeometry(3.6, 1);
    const outerMat = new THREE.MeshPhongMaterial({
      color: 0x00e676,
      emissive: 0x001100,
      specular: 0x00e5ff,
      shininess: 100,
      wireframe: false,
      transparent: true,
      opacity: 0.15
    });
    this.compiledMesh = new THREE.Mesh(outerGeo, outerMat);
    this.compiledCore.add(this.compiledMesh);

    this.masterGroup.add(this.compiledCore);

    this.scene.add(this.masterGroup);
  }

  createSyntaxParticleCloud() {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 1000 : 2500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 28 + 4;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00e676,
      size: 0.075,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    this.particleSystem = new THREE.Points(geometry, material);
    this.scene.add(this.particleSystem);
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

    // Signature Interaction: Reality Decompilation Hover Trigger
    document.querySelectorAll('.module-scene, .hero-cta, .btn-cta, .nav-dot').forEach(el => {
      el.addEventListener('mouseenter', () => this.triggerDecompilation());
    });
  }

  // Signature Mechanism: 200ms REALITY DECOMPILATION Skeleton Reveal
  triggerDecompilation() {
    if (this.isDecompiling) return;
    this.isDecompiling = true;

    if (this.compiledMesh) {
      this.compiledMesh.material.wireframe = true;
      this.compiledMesh.material.opacity = 0.8;
    }

    const cursorRing = document.getElementById('cursorRing');
    const cursorState = document.getElementById('cursorState');
    if (cursorRing) cursorRing.classList.add('decompiling');
    if (cursorState) {
      cursorState.style.display = 'block';
      cursorState.textContent = 'DECOMPILE';
    }

    setTimeout(() => {
      if (this.compiledMesh) {
        this.compiledMesh.material.wireframe = false;
        this.compiledMesh.material.opacity = 0.15;
      }
      if (cursorRing) cursorRing.classList.remove('decompiling');
      if (cursorState) cursorState.style.display = 'none';
      this.isDecompiling = false;
    }, 250);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // FPS calculation
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

    // Signature Hero Mouse X Pointer Scrubbing: Source <-> Reality
    // Map mouse.x (-1 to +1) to compileRatio (0 to 1)
    const targetRatio = Math.max(0, Math.min(1, (this.mouse.x + 1) / 2));
    this.compileRatio += (targetRatio - this.compileRatio) * 0.06;

    // Transform Wireframe vs Compiled opacity based on compileRatio
    if (this.wireframeCore && this.compiledCore) {
      this.wireframeCore.scale.setScalar(1 + (1 - this.compileRatio) * 0.4);
      this.compiledCore.scale.setScalar(1 + this.compileRatio * 0.3);
    }

    // Rotate master computational group
    if (this.masterGroup) {
      this.masterGroup.rotation.y += 0.003;
      this.masterGroup.rotation.x = -this.mouse.y * 0.35;
    }

    if (this.particleSystem) {
      this.particleSystem.rotation.y += 0.0004;
    }

    this.renderer.render(this.scene, this.camera);
  }

  setCameraSpatialState(progress) {
    this.scrollProgress = progress;

    if (this.camera && this.masterGroup) {
      // Camera Z penetration: 20m -> -15m
      this.camera.position.z = 20 - progress * 35;
      this.camera.position.y = -progress * 6;
      this.masterGroup.rotation.z = progress * Math.PI;
    }
  }

  updateHUDTelemetry() {
    const telDepth = document.getElementById('telDepth');
    const telFps = document.getElementById('telFps');
    const telCompileRatio = document.getElementById('telCompileRatio');
    const telState = document.getElementById('telState');

    const depthVal = (20 - this.scrollProgress * 35).toFixed(1);
    if (telDepth) telDepth.textContent = `DEPTH: ${depthVal}m`;
    if (telFps) telFps.textContent = `${this.fps} FPS`;

    const pct = Math.round(this.compileRatio * 100);
    if (telCompileRatio) telCompileRatio.textContent = `COMPILE: ${pct}%`;

    if (telState) {
      if (this.compileRatio < 0.35) telState.textContent = 'STATE: SOURCE';
      else if (this.compileRatio < 0.70) telState.textContent = 'STATE: COMPILING';
      else telState.textContent = 'STATE: REALITY';
    }
  }
}

let coreEngine = null;

/* ═══════════════════════════════════════════════════════════════════
   2. CYBERNETIC DECIPHER TEXT ENGINE
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

/* ═══════════════════════════════════════════════════════════════════
   3. C92://INITIALIZING OPENING SEQUENCE (First 5 Seconds)
   ═══════════════════════════════════════════════════════════════════ */
function initLoadingSequence() {
  const loader = document.getElementById('loader');
  const bar = document.getElementById('loaderBarFill');
  const wordmark = document.getElementById('loaderWordmark');
  const status = document.getElementById('loaderStatus');
  const prefix = document.querySelector('.loader-terminal-prefix');
  if (!loader) return;

  runDecipherEffect(status, 'COMPILING SOURCE CODE INTO REALITY...');

  const tl = gsap.timeline({
    onComplete: () => {
      loader.style.pointerEvents = 'none';
      initHeroEntrance();
    }
  });

  tl.to(prefix, { opacity: 1, duration: 0.4 }, 0.2)
    .to(bar, { width: '100%', duration: 1.2, ease: 'power2.inOut' }, 0.4)
    .to(wordmark, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.8)
    .to(status, { opacity: 1, duration: 0.4, ease: 'power2.out' }, 1.0)
    .to(wordmark, { opacity: 0, y: -20, duration: 0.5 }, 2.0)
    .to(status, { opacity: 0 }, 2.0)
    .to(prefix, { opacity: 0 }, 2.0)
    .to(loader, { opacity: 0, duration: 0.6 }, 2.4)
    .set(loader, { display: 'none' }, 3.0);
}

/* ═══════════════════════════════════════════════════════════════════
   4. HERO ENTRANCE & KINETIC TYPOGRAPHY OCCLUSION
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
   5. GSAP SPATIAL SCROLL TIMELINE (Executing 5 Program Modules)
   ═══════════════════════════════════════════════════════════════════ */
function initScrollTimeline() {
  gsap.registerPlugin(ScrollTrigger);

  const header = document.getElementById('mainHeader');
  const navDots = document.getElementById('navDots');

  ScrollTrigger.create({
    trigger: '#module-web',
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

  // Spatial Camera Penetration Timeline
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

  // Reveal Executable Program Modules
  document.querySelectorAll('.module-scene').forEach(mod => {
    const title = mod.querySelector('.module-title');
    if (title) {
      ScrollTrigger.create({
        trigger: mod,
        start: 'top 70%',
        onEnter: () => runDecipherEffect(title)
      });
    }
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
   7. MOUSE LIGHTING & CURSOR TARGET RING
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
      cursorRing.style.transform = `translate(${targetX - 16}px, ${targetY - 16}px)`;
    }

    requestAnimationFrame(update);
  }
  update();
}

function initVerticalNav() {
  const dots = document.querySelectorAll('.nav-dot');
  const sections = ['hero', 'module-web', 'module-apps', 'module-commerce', 'module-devops', 'module-ai', 'contact'];

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
    if (el) runDecipherEffect(el, v);
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

  // Modules
  setText('webTitle', d.webTitle); setText('webDesc', d.webDesc);
  setText('appsTitle', d.appsTitle); setText('appsDesc', d.appsDesc);
  setText('commerceTitle', d.commerceTitle); setText('commerceDesc', d.commerceDesc);
  setText('devopsTitle', d.devopsTitle); setText('devopsDesc', d.devopsDesc);
  setText('aiTitle', d.aiTitle); setText('aiDesc', d.aiDesc);

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
  setText('navLabelWeb', d.navLabelWeb);
  setText('navLabelApps', d.navLabelApps);
  setText('navLabelCommerce', d.navLabelCommerce);
  setText('navLabelDevops', d.navLabelDevops);
  setText('navLabelAi', d.navLabelAi);
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
    if (nameEl) nameEl.textContent = isHe ? `${activeRep.name} מ-CODE92` : `${activeRep.enName} from CODE92`;
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
      const ask = isHe ? `מעולה! קיבלתי את כל הנתונים 👍\nכדי ששיחה תועבר לטיפול אישי של יותם כהן ב-CODE92 — נא להקליד שם מלא ומספר טלפון לחזרה:` : `Great! Received all details 👍\nPlease type your Full Name and Phone Number for Yotam Cohen at CODE92:`;
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
      ? `תודה רבה! 🙏\nפנייתך נקלטה בהצלחה במערכת CODE92:\n• תחום: ${chatState.category || 'פנייה כללית'}\n• פרטים: ${chatState.specificDetails || '-'}\n• לוח זמנים: ${chatState.timeline || '-'}\n• איש קשר: ${chatState.userPhone || chatState.userName || 'פרטים התקבלו'}\n\nנציג מ-CODE92 (ניהול יותם כהן) יחזור אליך בהקדם!`
      : `Thank you! 🙏\nYour inquiry is submitted to CODE92:\n• Category: ${chatState.category || 'General'}\n• Details: ${chatState.specificDetails || '-'}\n• Timeline: ${chatState.timeline || '-'}\n• Contact: ${chatState.userPhone || chatState.userName || 'Details received'}\n\nA representative from CODE92 will contact you shortly!`;

    replyWithTyping(summary, () => {
      const waNote = isHe ? 'מעדיף/ה להמשיך את השיחה ב-WhatsApp כעת?' : 'Prefer to continue on WhatsApp now?';
      const btnLabel = isHe ? '📲 לחץ/י כאן לפתיחת שיחה ב-WhatsApp' : '📲 Click to open WhatsApp chat with CODE92';
      const text = encodeURIComponent(
        `שלום ליותם כהן (CODE92)! 👋\n` +
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
      `שלום ליותם כהן (CODE92)! 👋\n\n` +
      `פנייה חדשה מאתר CODE92:\n` +
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
  coreEngine = new CodeCompilerEngine();

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
