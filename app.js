/* ================================================================
   portfolio — app.js
   كل المحتوى القابل للتخصيص موجود في أعلى الملف (I18N + DATA)
   ================================================================ */

/* ---------- 1) النصوص / Translations ---------- */
const I18N = {
  ar: {
    'common.skip': 'تخطَّ إلى المحتوى',
    'brand.name': 'محمد صلاح ذيب',
    'brand.role': 'تجارة إلكترونية ودعم فني',

    'nav.about': 'نبذة عني',
    'nav.skills': 'المهارات',
    'nav.projects': 'الأعمال',
    'nav.experience': 'الخبرات',
    'nav.contact': 'تواصل معي',
    'nav.cta': 'لنتحدث',

    'hero.available': 'متاح لفرص عمل جديدة',
    'hero.hello': 'مرحباً، أنا',
    'hero.name': 'محمد صلاح ذيب',
    'hero.role': 'أخصائي تشغيل تجارة إلكترونية ودعم فني',
    'hero.bio': 'أدير وأشغّل المتاجر الإلكترونية على منصتي زد وشوبيفاي، وأربط بوابات الدفع وحلول التقسيط، وأشرف على المخزون والشحن مع تقديم دعم فني مباشر يبقي العمليات تعمل بسلاسة.',
    'hero.ctaContact': 'تواصل معي',
    'hero.ctaCv': 'تحميل السيرة الذاتية',
    'hero.statExp': 'سنوات خبرة عملية',
    'hero.statProjects': 'مشروع ومنصة تم تشغيلها',
    'hero.statSkills': 'فئات مهارات متخصصة',
    'hero.badgeTitle': 'تشغيل المتاجر',
    'hero.badgeSub': 'Zid · Shopify',
    'hero.badge2Title': 'دعم فني موثوق',
    'hero.badge2Sub': 'حل المشكلات بسرعة',

    'about.eyebrow': 'من أنا',
    'about.title': 'شغف بالتفاصيل، وتركيز على النتائج',
    'about.subtitle': 'أجمع بين فهم العمليات التجارية والقدرة التقنية على حل المشكلات.',
    'about.p1': 'أخصائي عمليات تجارة إلكترونية ودعم فني، أعمل يومياً على إدارة المتاجر وتشغيلها عبر منصتي زد وشوبيفاي: من إضافة المنتجات وضبط المتغيرات والأسعار، إلى متابعة الطلبات والشحن وإصدار البوالص.',
    'about.p2': 'أمتلك خبرة عملية في ربط بوابات الدفع وحلول التقسيط (تابي وتمارا)، وإدارة المخزون عبر أنظمة المستودعات (WMS)، إلى جانب تقديم الدعم الفني الميداني والمباشر للعملاء. أستخدم أدوات الذكاء الاصطناعي لتحسين بيانات المنتجات وتسريع إعداد التقارير.',
    'about.point1': 'أولوية لاستمرار العمليات دون توقف',
    'about.point2': 'ربط الفجوة بين الفريق التقني والعمليات',
    'about.point3': 'تحسين مستمر بالبيانات والأتمتة',
    'about.location': 'الموقع',
    'about.locationV': 'الرياض، المملكة العربية السعودية',
    'about.languages': 'اللغات',
    'about.languagesV': 'العربية (أم) · الإنجليزية (جيد جداً)',
    'about.education': 'التعليم',
    'about.educationV': 'البيانات والذكاء الاصطناعي — الجامعة الإسلامية بمنيسوتا',
    'about.focus': 'مجال التركيز',
    'about.focusV': 'تجارة إلكترونية · عمليات · دعم تقني',

    'skills.eyebrow': 'مجموعتي التقنية',
    'skills.title': 'مهارات أعمل بها يومياً',
    'skills.subtitle': 'منصات وأدوات أتقنها لتحويل العمليات اليومية إلى سير عمل منظم وقابل للقياس.',

    'projects.eyebrow': 'أعمال مختارة',
    'projects.title': 'مشاريع أفتخر بها',
    'projects.subtitle': 'نماذج من أعمال الويب ولوحات الأنظمة التي بنيتها وتطورت معها.',
    'filter.all': 'الكل',
    'filter.ecommerce': 'متاجر إلكترونية',
    'filter.dashboard': 'لوحات أنظمة',
    'filter.web': 'مواقع ويب',
    'projects.code': 'عرض الكود',

    'experience.eyebrow': 'المسار المهني',
    'experience.title': 'خبراتي العملية',
    'experience.subtitle': 'محطات بنيت فيها خبرتي في تشغيل المتاجر وحل مشكلات العملاء.',
    'experience.eduTitle': 'دراسة البيانات والذكاء الاصطناعي',
    'experience.eduSub': 'الجامعة الإسلامية بمنيسوتا',
    'experience.langs': 'العربية (اللغة الأم) · الإنجليزية (مهنية وتقنية)',

    'contact.eyebrow': 'لنتواصل',
    'contact.title': 'لديك فكرة أو فرصة؟',
    'contact.subtitle': 'يسعدني مناقشة المشاريع وفرص العمل أو تبادل الخبرات في التجارة الإلكترونية والدعم التقني.',
    'contact.direct': 'قنوات الوصول السريع',
    'contact.directNote': 'اختر القناة المناسبة وسأرد في أقرب وقت ممكن.',
    'contact.email': 'البريد الإلكتروني',
    'contact.whatsapp': 'واتساب',
    'contact.name': 'الاسم',
    'contact.emailField': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.namePh': 'اكتب اسمك',
    'contact.emailPh': 'name@example.com',
    'contact.messagePh': 'اكتب رسالتك هنا...',
    'contact.send': 'إرسال الرسالة',
    'contact.hint': 'سيتم فتح تطبيق البريد لديك برسالة جاهزة للإرسال.',
    'toast.invalid': 'يرجى تعبئة الحقول المطلوبة بشكل صحيح.',
    'toast.sent': 'تم تجهيز رسالتك — أكمل الإرسال من تطبيق البريد.',

    'footer.tagline': 'أبني تجارب إلكترونية تعمل بسلاسة، وأحل المشكلات التقنية قبل أن تصبح عائقاً.',
    'footer.quick': 'روابط سريعة',
    'footer.contact': 'تواصل',
    'footer.rights': 'محمد صلاح ذيب. جميع الحقوق محفوظة.',
    'footer.made': 'صُنع بعناية في الرياض',
    'meta.title': 'محمد صلاح ذيب | أخصائي تشغيل تجارة إلكترونية ودعم فني',
    'meta.desc': 'محمد صلاح ذيب — أخصائي تشغيل تجارة إلكترونية ودعم فني في الرياض. خبرة في إدارة متاجر زد وشوبيفاي، بوابات الدفع، المستودعات (WMS) وحلول التقسيط.'
  },

  en: {
    'common.skip': 'Skip to content',
    'brand.name': 'Mohammed Salah Dheeb',
    'brand.role': 'E-commerce Ops & Tech Support',

    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cta': 'Let’s talk',

    'hero.available': 'Available for new opportunities',
    'hero.hello': 'Hello, I’m',
    'hero.name': 'Mohammed Salah Dheeb',
    'hero.role': 'E-commerce Operations & Technical Support Specialist',
    'hero.bio': 'I run and operate online stores on Zid and Shopify, connect payment gateways and instalment solutions, oversee inventory and shipping, and provide hands-on technical support that keeps operations running smoothly.',
    'hero.ctaContact': 'Get in touch',
    'hero.ctaCv': 'Download CV',
    'hero.statExp': 'Years of hands-on experience',
    'hero.statProjects': 'Projects & platforms operated',
    'hero.statSkills': 'Specialised skill areas',
    'hero.badgeTitle': 'Store operations',
    'hero.badgeSub': 'Zid · Shopify',
    'hero.badge2Title': 'Reliable tech support',
    'hero.badge2Sub': 'Fast issue resolution',

    'about.eyebrow': 'Who I am',
    'about.title': 'Detail-driven, results-focused',
    'about.subtitle': 'I bridge business operations with the technical know-how to solve problems.',
    'about.p1': 'I’m an e-commerce operations and technical support specialist. Every day I manage and run stores on Zid and Shopify — from adding products and configuring variants and prices to tracking orders, shipping and creating waybills.',
    'about.p2': 'I have hands-on experience integrating payment gateways and instalment platforms (Tabby and Tamara), managing inventory through warehouse management systems (WMS), and delivering on-site and direct technical support to customers. I also use AI tools to improve product data and speed up reporting.',
    'about.point1': 'Keeping operations running without interruption',
    'about.point2': 'Bridging the gap between tech teams and operations',
    'about.point3': 'Continuous improvement through data and automation',
    'about.location': 'Location',
    'about.locationV': 'Riyadh, Saudi Arabia',
    'about.languages': 'Languages',
    'about.languagesV': 'Arabic (native) · English (fluent)',
    'about.education': 'Education',
    'about.educationV': 'Data & Artificial Intelligence — Islamic University of Minnesota',
    'about.focus': 'Focus area',
    'about.focusV': 'E-commerce · Operations · Technical support',

    'skills.eyebrow': 'My toolkit',
    'skills.title': 'Skills I use every day',
    'skills.subtitle': 'Platforms and tools I master to turn daily operations into structured, measurable workflows.',

    'projects.eyebrow': 'Selected work',
    'projects.title': 'Projects I’m proud of',
    'projects.subtitle': 'A selection of web builds and system dashboards I created and kept improving.',
    'filter.all': 'All',
    'filter.ecommerce': 'E-commerce',
    'filter.dashboard': 'Dashboards',
    'filter.web': 'Websites',
    'projects.code': 'View code',

    'experience.eyebrow': 'Career path',
    'experience.title': 'Work experience',
    'experience.subtitle': 'Milestones where I built my expertise in store operations and customer problem-solving.',
    'experience.eduTitle': 'Data & Artificial Intelligence studies',
    'experience.eduSub': 'Islamic University of Minnesota',
    'experience.langs': 'Arabic (native) · English (professional & technical)',

    'contact.eyebrow': 'Say hello',
    'contact.title': 'Have an idea or an opportunity?',
    'contact.subtitle': 'I’d love to discuss projects, job opportunities, or exchange insights on e-commerce and technical support.',
    'contact.direct': 'Quick ways to reach me',
    'contact.directNote': 'Pick the channel that suits you and I’ll reply as soon as I can.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.name': 'Name',
    'contact.emailField': 'Email',
    'contact.message': 'Message',
    'contact.namePh': 'Your name',
    'contact.emailPh': 'name@example.com',
    'contact.messagePh': 'Write your message here...',
    'contact.send': 'Send message',
    'contact.hint': 'Your email app will open with the message ready to send.',
    'toast.invalid': 'Please fill in the required fields correctly.',
    'toast.sent': 'Your message is ready — finish sending it from your email app.',

    'footer.tagline': 'I build smooth digital experiences and fix technical issues before they become blockers.',
    'footer.quick': 'Quick links',
    'footer.contact': 'Contact',
    'footer.rights': 'Mohammed Salah Dheeb. All rights reserved.',
    'footer.made': 'Crafted with care in Riyadh',
    'meta.title': 'Mohammed Salah Dheeb | E-commerce Ops & Technical Support',
    'meta.desc': 'Mohammed Salah Dheeb — E-commerce operations & technical support specialist in Riyadh. Experienced with Zid, Shopify, payment gateways, WMS and instalment solutions.'
  }
};

/* ---------- 2) المحتوى الديناميكي / Dynamic data ---------- */
const SKILL_GROUPS = [
  {
    icon: 'code',
    title: { ar: 'التطوير ومنصات التجارة', en: 'Development & Commerce' },
    desc: { ar: 'واجهات الويب وإدارة المتاجر', en: 'Web interfaces & store management' },
    tags: [
      { ar: 'HTML5 / CSS3', en: 'HTML5 / CSS3' }, { ar: 'JavaScript', en: 'JavaScript' },
      { ar: 'منصة زد (Zid)', en: 'Zid Platform' }, { ar: 'Shopify', en: 'Shopify' },
      { ar: 'إدارة الكتالوج', en: 'Catalog management' }, { ar: 'تصميم متجاوب', en: 'Responsive design' }
    ]
  },
  {
    icon: 'layers',
    title: { ar: 'الدفع والشحن', en: 'Payments & Shipping' },
    desc: { ar: 'بوابات الدفع وتجربة الاستلام', en: 'Gateways & fulfilment' },
    tags: [
      { ar: 'Tabby', en: 'Tabby' }, { ar: 'Tamara', en: 'Tamara' },
      { ar: 'بوابات الدفع', en: 'Payment gateways' }, { ar: 'حلول التقسيط', en: 'Instalment solutions' },
      { ar: 'بوالص الشحن', en: 'Shipping waybills' }, { ar: 'تتبع الطلبات', en: 'Order tracking' }
    ]
  },
  {
    icon: 'box',
    title: { ar: 'الأنظمة والمخازن', en: 'Systems & Warehousing' },
    desc: { ar: 'المخزون وسلاسل الإمداد', en: 'Inventory & supply chain' },
    tags: [
      { ar: 'Omniful WMS', en: 'Omniful WMS' }, { ar: 'Odoo ERP', en: 'Odoo ERP' },
      { ar: 'إدارة المخزون', en: 'Inventory control' }, { ar: 'مطابقة الجرد', en: 'Stock counting' },
      { ar: 'سلاسل الإمداد', en: 'Supply chain' }, { ar: 'نقاط البيع', en: 'POS systems' }
    ]
  },
  {
    icon: 'spark',
    title: { ar: 'الأدوات والإنتاجية', en: 'Tools & Productivity' },
    desc: { ar: 'التنظيم والأتمتة والدعم', en: 'Organisation, automation & support' },
    tags: [
      { ar: 'Slack', en: 'Slack' }, { ar: 'ClickUp', en: 'ClickUp' },
      { ar: 'Google Sheets', en: 'Google Sheets' }, { ar: 'أدوات الذكاء الاصطناعي', en: 'AI tools' },
      { ar: 'أتمتة التقارير', en: 'Report automation' }, { ar: 'الدعم الفني', en: 'Technical support' }
    ]
  }
];

const PROJECTS = [
  {
    category: 'dashboard',
    image: 'assets/project-dashboard.svg',
    title: { ar: 'لوحة تشخيص الأنظمة', en: 'System Diagnostic Dashboard' },
    desc: {
      ar: 'لوحة مراقبة تفاعلية تعرض بيانات أداء النظام في الوقت الفعلي مع رسوم بيانية وتصميم ثنائي اللغة (عربي/إنجليزي).',
      en: 'An interactive monitoring dashboard with real-time system performance data, visual charts and full Arabic/English support.'
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'Charts'],
    link: 'https://github.com/M7MM745/System-Diagnostic-Scanner-Pro0'
  },
  {
    category: 'ecommerce',
    image: 'assets/project-storefront.svg',
    title: { ar: 'واجهة متجر إلكتروني', en: 'Modern Storefront' },
    desc: {
      ar: 'واجهة متجر بتجربة تسوق سلسة: عرض المنتجات، سلة المشتريات، وصفحة دفع مبسطة تعمل بسلاسة على كل الأجهزة.',
      en: 'A storefront with a smooth shopping experience: product listings, cart and a streamlined checkout that works on every device.'
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
    link: 'https://github.com/M7MM745/Storefront-project'
  },
  {
    category: 'ecommerce',
    image: 'assets/project-storefront.svg',
    title: { ar: 'متجر ريفي', en: 'Reefi Store' },
    desc: {
      ar: 'متجر إلكتروني عملي يركز على سرعة التصفح ووضوح عرض المنتجات وتجربة مستخدم متجاوبة.',
      en: 'A practical online store focused on fast browsing, clear product presentation and a responsive user experience.'
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/M7MM745/reefi-store'
  },
  {
    category: 'web',
    image: 'assets/project-portfolio.svg',
    title: { ar: 'موقع سيرة ذاتية تفاعلي', en: 'Interactive Portfolio Website' },
    desc: {
      ar: 'موقع شخصي عصري يعرض المهارات والمشاريع والخبرات بتصميم متجاوب ووضع ليلي ودعم كامل للغتين.',
      en: 'A modern personal site showcasing skills, projects and experience with a responsive layout, dark mode and bilingual support.'
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    link: 'https://github.com/M7MM745/web-course-portfolio'
  },
  {
    category: 'web',
    image: 'assets/project-card.svg',
    title: { ar: 'بطاقة تعريف رقمية', en: 'Digital Business Card' },
    desc: {
      ar: 'بطاقة رقمية أنيقة تجمع بيانات التواصل في واجهة واحدة سهلة المشاركة وسريعة التحميل.',
      en: 'An elegant digital card that brings all contact details into one easy-to-share, fast-loading interface.'
    },
    tags: ['HTML', 'CSS', 'UI/UX'],
    link: 'https://github.com/M7MM745/my-card'
  },
  {
    category: 'web',
    image: 'assets/project-portfolio.svg',
    title: { ar: 'تطبيقات ويب بالذكاء الاصطناعي', en: 'AI-Powered Web Apps' },
    desc: {
      ar: 'سلسلة تطبيقات ويب عملية بنيتها أثناء دورة تطوير المواقع بالذكاء الاصطناعي مع تركيز على تجربة المستخدم.',
      en: 'A series of practical web apps built during an AI-assisted web development course, with a focus on user experience.'
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'AI'],
    link: 'https://github.com/M7MM745/websites-ai-course-practice'
  }
];

const EXPERIENCE = [
  {
    role: { ar: 'أخصائي تقنية وعمليات تشغيل', en: 'Technical & Operations Specialist' },
    company: { ar: 'شركة Two', en: 'Two Company' },
    date: { ar: '09/2025 — حتى الآن', en: '09/2025 — Present' },
    achievements: [
      { ar: 'إدارة متجر زد (Zid): إضافة وتعديل كتالوج المنتجات، ضبط المتغيرات (الأسعار، الألوان، المقاسات)، وتفعيل كوبونات الخصم والعروض الترويجية.', en: 'Zid store management: adding and editing the product catalogue, configuring variants (price, colour, size), and activating discount coupons and promotions.' },
      { ar: 'بوابات الدفع والتقسيط: ربط وتفعيل منصتي تابي وتمارا، ومتابعة المعاملات المعلقة وحل مشكلات إتمام الدفع.', en: 'Payment & instalment gateways: integrating and activating Tabby and Tamara, tracking pending transactions and resolving checkout issues.' },
      { ar: 'معالجة الطلبات والشحن: إصدار بوالص الشحن اليومية بالربط المباشر مع شركات النقل، ومتابعة الشحنات المتأخرة مع المناديب.', en: 'Orders & shipping: issuing daily waybills through direct carrier integrations and following up on delayed deliveries with couriers.' },
      { ar: 'إدارة المستودع (Omniful WMS): تسجيل حركات المخزون اليومية ومطابقة الجرد الفعلي لمنع نفاد المنتجات أو البيع بأكثر من المتوفر.', en: 'Warehouse management (Omniful WMS): logging daily stock movements and reconciling physical counts to prevent stockouts and overselling.' },
      { ar: 'الدعم الفني الميداني: تجهيز وصيانة طابعات البوالص وقارئات الباركود وأجهزة نقاط البيع لضمان استمرار العمل دون توقف.', en: 'On-site technical support: setting up and maintaining waybill printers, barcode scanners and POS devices to keep work running without interruption.' },
      { ar: 'تنظيم المهام والعمليات: استخدام أدوات الذكاء الاصطناعي لتحسين بيانات المنتجات وإعداد التقارير وسير العمل اليومي.', en: 'Task & workflow organisation: using AI tools to improve product data and produce reports for the daily workflow.' }
    ]
  },
  {
    role: { ar: 'مسؤول دعم فني وتجربة عملاء', en: 'Technical Support & Customer Experience Executive' },
    company: { ar: 'شركة جملة التقنية', en: 'Jomla Tech Company' },
    date: { ar: '04/2025 — 09/2025', en: '04/2025 — 09/2025' },
    achievements: [
      { ar: 'الدعم الفني المباشر: استقبال بلاغات العملاء عبر قنوات الاتصال والواتساب، وتشخيص المشكلات التقنية والتشغيلية وحلها مباشرة.', en: 'Direct technical support: receiving customer reports via call and WhatsApp channels, diagnosing technical and operational issues and resolving them immediately.' },
      { ar: 'متابعة تذاكر الدعم: إدارة ومعالجة الطلبات والاستفسارات بمهنية لرفع مستوى رضا العملاء وسرعة الاستجابة.', en: 'Support ticket follow-up: managing and processing requests and enquiries professionally to raise customer satisfaction and response speed.' },
      { ar: 'التصعيد والتوثيق: حصر المشكلات التقنية المتكررة، توثيقها ورفعها للفرق المختصة لمعالجتها جذرياً.', en: 'Escalation & documentation: identifying recurring technical issues, documenting them and escalating to the right teams for root-cause fixes.' }
    ]
  }
];

/* ---------- 3) الحالة العامة ---------- */
let currentLang = 'ar';
let revealObserver = null;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
const L = (obj) => (obj && typeof obj === 'object' ? obj[currentLang] || obj.ar || '' : obj || '');
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- 4) الإعدادات: اللغة والمظهر ---------- */
function getStored(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch (e) { return fallback; }
}
function store(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* تجاهل */ }
}

function setTheme(theme, persist = true) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  $('#themeToggle')?.setAttribute('aria-pressed', String(theme === 'dark'));
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0B0F19' : '#F6F8FC');
  if (persist) store('portfolio-theme', theme);
}

function setLanguage(lang, persist = true) {
  currentLang = lang === 'en' ? 'en' : 'ar';
  const root = document.documentElement;
  root.lang = currentLang;
  root.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  // النصوص الثابتة
  $$('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (I18N[currentLang][key] !== undefined) el.textContent = I18N[currentLang][key];
  });
  // الأماكن النائبة (placeholders）
  $$('[data-ph]').forEach((el) => {
    const key = el.dataset.ph;
    if (I18N[currentLang][key] !== undefined) el.placeholder = I18N[currentLang][key];
  });

  // SEO
  document.title = I18N[currentLang]['meta.title'];
  const desc = $('meta[name="description"]');
  if (desc) desc.setAttribute('content', I18N[currentLang]['meta.desc']);
  const ogTitle = $('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', I18N[currentLang]['meta.title']);

  // زر اللغة
  const langLabel = $('#langLabel');
  if (langLabel) langLabel.textContent = currentLang === 'ar' ? 'EN' : 'ع';
  $('#langToggle')?.setAttribute('aria-label', currentLang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');

  renderSkills();
  renderProjects();
  renderExperience();
  applyFilter(activeFilter);

  if (persist) store('portfolio-lang', currentLang);
}

/* ---------- 5) توليد الأقسام الديناميكية ---------- */
function renderSkills() {
  const grid = $('#skillsGrid');
  if (!grid) return;
  grid.innerHTML = SKILL_GROUPS.map((group, i) => `
    <article class="skill-card reveal" style="--delay:${(i * 0.07).toFixed(2)}s">
      <div class="skill-head">
        <span class="skill-icon"><svg class="icon"><use href="#i-${group.icon}"></use></svg></span>
        <div><h3>${escapeHTML(L(group.title))}</h3><p>${escapeHTML(L(group.desc))}</p></div>
      </div>
      <div class="skill-tags">
        ${group.tags.map((tag) => `<span class="skill-tag">${escapeHTML(L(tag))}</span>`).join('')}
      </div>
    </article>`).join('');
  observeReveals(grid);
}

function renderProjects() {
  const grid = $('#projectsGrid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map((project, i) => {
    const categoryKey = 'filter.' + project.category;
    return `
    <article class="project-card reveal" data-category="${project.category}" style="--delay:${(i * 0.06).toFixed(2)}s">
      <div class="project-media">
        <span class="project-category">${escapeHTML(I18N[currentLang][categoryKey] || project.category)}</span>
        <img src="${project.image}" alt="${escapeHTML(L(project.title))}" loading="lazy" decoding="async" width="800" height="450">
      </div>
      <div class="project-body">
        <h3>${escapeHTML(L(project.title))}</h3>
        <p>${escapeHTML(L(project.desc))}</p>
        <div class="project-tags">${project.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
      </div>
      <div class="project-footer">
        <a class="project-link" href="${project.link}" target="_blank" rel="noopener">
          ${escapeHTML(I18N[currentLang]['projects.code'])} <svg class="icon"><use href="#i-external"></use></svg>
        </a>
        <span class="project-index">${String(i + 1).padStart(2, '0')}</span>
      </div>
    </article>`;
  }).join('');
  observeReveals(grid);
  applyFilter(activeFilter);
}

function renderExperience() {
  const timeline = $('#timeline');
  if (!timeline) return;
  timeline.innerHTML = EXPERIENCE.map((job, i) => `
    <div class="timeline-item reveal" style="--delay:${(i * 0.1).toFixed(2)}s">
      <article class="timeline-card">
        <div class="timeline-top">
          <div><h3>${escapeHTML(L(job.role))}</h3><span class="timeline-company">${escapeHTML(L(job.company))}</span></div>
          <span class="timeline-date">${escapeHTML(L(job.date))}</span>
        </div>
        <ul class="timeline-achievements">
          ${job.achievements.map((item) => `<li>${escapeHTML(L(item))}</li>`).join('')}
        </ul>
      </article>
    </div>`).join('');
  observeReveals(timeline);
}

/* ---------- 6) فلترة المشاريع ---------- */
let activeFilter = 'all';

function applyFilter(filter) {
  activeFilter = filter;
  $$('.project-card').forEach((card) => {
    const show = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('is-hidden', !show);
  });
  $$('.filter-btn').forEach((btn) => {
    const active = btn.dataset.filter === filter;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

/* ---------- 7) حركات الظهور ---------- */
function observeReveals(scope = document) {
  const targets = $$('.reveal:not(.in-view)', scope);
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('in-view'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  }
  targets.forEach((el) => revealObserver.observe(el));
}

/* ---------- 8) التنقل والتمرير ---------- */
function setupNavigation() {
  const nav = $('#mainNav');
  const menuToggle = $('#menuToggle');

  const closeMenu = () => {
    nav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', currentLang === 'ar' ? 'فتح القائمة' : 'Open menu');
  };

  menuToggle?.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  $$('.main-nav a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('click', (event) => {
    if (nav?.classList.contains('is-open') && !nav.contains(event.target) && !menuToggle?.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });

  // إبراز الرابط النشط أثناء التمرير
  if ('IntersectionObserver' in window) {
    const links = $$('.main-nav a[href^="#"]');
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-35% 0px -60% 0px', threshold: 0 });
    ['home', 'about', 'skills', 'projects', 'experience', 'contact'].forEach((id) => {
      const section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }

  // شريط التقدم + زر العودة للأعلى
  const progress = $('#scrollProgress');
  const toTop = $('#toTop');
  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = percent + '%';
    toTop?.classList.toggle('is-visible', window.scrollY > 500);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();

  toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------- 9) نموذج التواصل ---------- */
function showToast(message) {
  const toast = $('#toast');
  const text = $('#toastText');
  if (!toast || !text) return;
  text.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 4500);
}

function setupContactForm() {
  const form = $('#contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const errors = {
      name: name.length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email),
      message: message.length < 10
    };

    ['name', 'email', 'message'].forEach((field) => {
      const input = form.elements[field];
      const errorEl = $(`[data-error-for="${field}"]`, form);
      input?.classList.toggle('is-invalid', errors[field]);
      if (errorEl) errorEl.textContent = errors[field] ? (currentLang === 'ar' ? 'يرجى إدخال قيمة صحيحة' : 'Please enter a valid value') : '';
    });

    if (Object.values(errors).some(Boolean)) {
      showToast(I18N[currentLang]['toast.invalid']);
      form.querySelector('.is-invalid')?.focus();
      return;
    }

    const subject = currentLang === 'ar' ? `رسالة من موقعي الشخصي — ${name}` : `Portfolio message — ${name}`;
    const body = `${currentLang === 'ar' ? 'الاسم' : 'Name'}: ${name}\n${currentLang === 'ar' ? 'البريد' : 'Email'}: ${email}\n\n${message}`;
    const mailto = `mailto:mhamd77deep@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast(I18N[currentLang]['toast.sent']);
    window.location.href = mailto;
  });

  form.addEventListener('input', (event) => {
    const field = event.target;
    if (field.classList?.contains('is-invalid')) {
      field.classList.remove('is-invalid');
      const errorEl = $(`[data-error-for="${field.name}"]`, form);
      if (errorEl) errorEl.textContent = '';
    }
  });
}

/* ---------- 10) التهيئة ---------- */
function init() {
  setTheme(getStored('portfolio-theme', 'dark'), false);
  const savedLang = getStored('portfolio-lang', 'ar');
  setLanguage(savedLang, false);

  $('#themeToggle')?.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });
  $('#langToggle')?.addEventListener('click', () => {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
  });

  $('#filterBar')?.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-btn');
    if (button) applyFilter(button.dataset.filter);
  });

  // صورة شخصية احتياطية إذا تعذّر تحميلها
  const photo = $('#profilePhoto');
  const showFallback = () => $('#avatarFallback')?.parentElement?.classList.add('is-fallback');
  photo?.addEventListener('error', showFallback);
  if (photo?.complete && photo.naturalWidth === 0) showFallback();

  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  setupNavigation();
  setupContactForm();
  observeReveals();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
