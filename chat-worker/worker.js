/**
 * Code92 chat-widget AI backend (Cloudflare Worker + Workers AI).
 *
 * Handles ONLY genuinely open-ended visitor questions ("how do you build a
 * site", "do you work with restaurants", etc.) — the guided need/stage/timing/
 * contact flow in main.js is unchanged and handles everything else for free,
 * with zero network calls. Keeping the AI call rare (one per open question,
 * not one per message) is what makes the free daily Neuron allocation actually
 * cover a real day of site traffic.
 *
 * No third-party API key is used or stored anywhere — env.AI is a native
 * Cloudflare binding, so there is nothing here that could leak.
 */

// Only these origins may call this Worker — keeps the free daily quota from
// being burned by unrelated traffic. Add your real custom domain here if you
// ever attach one to the GitHub Pages site.
const ALLOWED_ORIGINS = [
  'https://elyotam.github.io',
  'http://localhost:5500',
  'http://localhost:5502',
  'http://127.0.0.1:5500',
  'http://127.0.0.1:5502',
];

const MODEL = '@cf/mistralai/mistral-small-3.1-24b-instruct'; // llama-3.1-8b-instruct was deprecated 2026-05-30; llama-3.2-3b-instruct's Hebrew output was unreliable (garbled/incoherent) in testing
const MAX_QUESTION_LENGTH = 400;

// Grounded, real content only — reused verbatim from the site's own service
// copy (index.html / main.js DICT). The model is explicitly told not to
// invent prices, timelines, guarantees, or claims beyond this.
const SERVICES_HE = `
1. אסטרטגיה ואפיון — איפיון מדויק ומחקר שוק מעמיק שמאתר את מנועי הצמיחה של העסק כדי לבנות ארכיטקטורה דיגיטלית שממירה גולשים ללקוחות משלמים.
2. פיתוח אתרים ומערכות Web — בניית אתרים יוקרתיים, חנויות E-commerce ומערכות Web מתקדמות.
3. אוטומציות AI ואפליקציות מותאמות — פיתוח אפליקציות מותאמות אישית וסוכני AI חכמים שחוסכים עד 80% מזמן העבודה הידנית ומייעלים מכירות ושירות 24/7.
4. מעטפת Cloud, אבטחה וצמיחה מתמדת — תשתיות ענן, אבטחת מידע קפדנית וליווי מקצועי מתמשך בניהול אישי של יותם כהן.
`.trim();

const SERVICES_EN = `
1. Strategy & Scoping — precise scoping and market research that identifies the business's real growth engines to build a digital architecture that converts visitors into paying customers.
2. Website & Web Systems Development — luxury websites, e-commerce stores, and advanced web systems.
3. AI Automations & Custom Apps — custom apps and smart AI agents that save up to 80% of manual work and streamline sales and support 24/7.
4. Cloud, Security & Ongoing Growth — cloud infrastructure, rigorous information security, and continuous personal management by Yotam Cohen.
`.trim();

function buildSystemPrompt(lang) {
  const isHe = lang !== 'en';
  const services = isHe ? SERVICES_HE : SERVICES_EN;
  const langLine = isHe
    ? 'Respond ONLY in simple, grammatically correct, natural conversational Hebrew — full sentences, never a word list or sentence fragments. Do not mix in English words unless it is a proper noun like a technology name.'
    : 'Respond ONLY in English, in a warm, concise, professional tone.';

  return `You are the AI assistant embedded in Code92's website chat widget. Code92 is a real digital agency owned by Yotam Cohen (יותם כהן), reachable at +972-52-205-7074 (WhatsApp).

Code92's real services (the ONLY services it offers — do not invent others):
${services}

Rules you must follow strictly:
- First, directly answer the SPECIFIC question the visitor asked — do not just list services if they asked something else (e.g. timing, process, who you work with).
- Keep it to 2-4 short, complete, natural sentences. No long essays, no bullet/word lists.
- NEVER invent specific prices, delivery dates, client names, testimonials, statistics, or guarantees. If asked about price or exact timeline, say it depends on project scope and Yotam gives a custom quote after a short chat.
- If the question is unrelated to Code92 or web/app/AI/cloud development, say so honestly and offer to connect them with Yotam directly instead of guessing.
- Never claim to be a human. If asked, say you're Code92's site assistant.
- ${langLine}`;
}

// A different job from buildSystemPrompt: the visitor's message did NOT clearly
// answer the guided flow's pending question. Rather than trust the model to also
// pick/rephrase the right follow-up question (it drifted to generic or wrong
// questions in testing, ignoring which one was actually pending), this mode ONLY
// asks for a one-sentence reaction — the caller appends the real, verbatim
// pending-question text afterward, so that part is always correct.
function buildRedirectPrompt(lang) {
  const isHe = lang !== 'en';
  const langLine = isHe
    ? 'Respond ONLY in simple, grammatically correct, natural conversational Hebrew, one full sentence.'
    : 'Respond ONLY in English, one warm, natural sentence.';

  return `You are the AI assistant embedded in Code92's website chat widget, mid-conversation with a visitor. Code92 is a real digital agency owned by Yotam Cohen.

The visitor just sent a message that does not clearly answer the question the chat is currently waiting on. Your ONLY job: write ONE short, warm, natural sentence reacting to their message — acknowledge it if it has real content (small talk, a stray comment, a partial thought), or gently note if it looks like random/garbled typing.

Rules:
- Exactly one sentence. Do not ask any question — someone else will ask the follow-up right after your sentence.
- NEVER reintroduce yourself, greet them again, or list Code92's services — this is the middle of an ongoing conversation, not the start.
- Never invent prices, dates, or facts about Code92.
- ${langLine}`;
}

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8',
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers });
    }

    if (!ALLOWED_ORIGINS.includes(origin)) {
      return new Response(JSON.stringify({ error: 'Origin not allowed' }), { status: 403, headers });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers });
    }

    const question = String(body.question || '').trim().slice(0, MAX_QUESTION_LENGTH);
    const lang = body.lang === 'en' ? 'en' : 'he';
    const mode = body.mode === 'redirect' ? 'redirect' : 'answer';

    if (!question) {
      return new Response(JSON.stringify({ error: 'Missing question' }), { status: 400, headers });
    }

    try {
      const systemPrompt = mode === 'redirect' ? buildRedirectPrompt(lang) : buildSystemPrompt(lang);
      const userContent = mode === 'redirect'
        ? `The visitor's message: "${question}"`
        : question;

      const result = await env.AI.run(MODEL, {
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userContent },
        ],
        max_tokens: 250,
        temperature: 0.4,
      });

      const answer = (result && result.response ? String(result.response) : '').trim();
      if (!answer) {
        return new Response(JSON.stringify({ error: 'Empty model response' }), { status: 502, headers });
      }

      return new Response(JSON.stringify({ answer }), { headers });
    } catch (err) {
      console.error('AI request failed:', err && err.stack ? err.stack : err);
      return new Response(JSON.stringify({ error: 'AI request failed', detail: String(err && err.message || err) }), { status: 502, headers });
    }
  },
};
