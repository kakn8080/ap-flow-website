
"use strict";

/* =========================================
   AP FLOW — LANGUAGE & INTERFACE SCRIPT
   English / Arabic
========================================= */

const translations = {
  en: {
    // Announcement
    announcement: "A clearer way to manage accounts payable",
    learnMore: 'Discover how it works <span aria-hidden="true">↗</span>',

    // Navigation
    navPlatform: "Platform",
    navHow: "How it works",
    navOffer: "Our solution",
    navIndustries: "Industries",
    navEinvoice: "UAE E-Invoicing",
    navSecurity: "Security",
    navFirms: "Accounting firms",
    navContact: "Contact",
    navCta: 'Book a conversation <span>↗</span>',

    // Hero
    heroEyebrow: "ACCOUNTS PAYABLE, REIMAGINED",
    heroTitle: 'From invoice chaos to <span class="gradient-text">financial control.</span>',
    heroDescription: "AP FLOW helps businesses bring supplier invoices into one structured process — from document intake and data extraction to matching, review and export.",
    heroPrimary: 'Talk to our team <span>↗</span>',
    heroSecondary: "Explore the workflow",
    heroNote: "Designed around your finance process, controls and approval rules.",
    heroBottom: "A connected workflow for finance teams and accounting partners",

    // Dashboard
    dashOverview: "WORKSPACE OVERVIEW",
    dashTitle: "Invoice activity",
    dashPeriod: "Sample view · This month",
    metricReceived: "Received",
    metricVolume: "Invoice volume",
    metricProcessed: "Processed",
    metricReviewed: "Ready for review",
    metricExceptions: "Exceptions",
    metricAttention: "Needs attention",
    recentActivity: "Recent activity",
    viewAll: "View all",
    statusMatched: "Matched",
    statusReview: "Review",
    statusPending: "Pending",
    processingStatus: "Processing status",
    sample: "Sample",
    progressCaption: "Illustrative workflow snapshot",
    floatingValidation: "Validation complete",
    floatingMatching: "PO · GRN · Invoice matching",

    // Challenge
    introKicker: "THE CHALLENGE",
    introTitle: "Invoices arrive from everywhere. Your process shouldn't feel scattered.",
    introText: "Email attachments, PDFs, purchase orders, goods receipt records and approval requests can create disconnected work. AP FLOW is designed to bring these steps into a clearer, traceable workflow — while keeping people in control of decisions.",
    challenge1Title: "Scattered intake",
    challenge1Text: "Supplier documents arrive through different channels and formats.",
    challenge2Title: "Manual checks",
    challenge2Text: "Teams repeatedly enter details and verify totals, references and duplicates.",
    challenge3Title: "Disconnected matching",
    challenge3Text: "Invoice details may need to be checked against purchase and receipt records.",
    challenge4Title: "Unclear follow-up",
    challenge4Text: "Exceptions and approvals can be difficult to track across people and systems.",

    // Workflow
    workflowKicker: "HOW IT WORKS",
    workflowTitle: "A more connected path for every invoice.",
    workflowText: "A configurable workflow that helps your team move from incoming documents to reviewed, organized payable data.",
    step1Title: "Receive",
    step1Text: "Collect invoices from supported email, PDF upload and WhatsApp Business channels.",
    step2Title: "Extract",
    step2Text: "Capture key invoice fields such as supplier, dates, tax, totals and line items.",
    step3Title: "Validate",
    step3Text: "Check required fields, calculations and potential duplicate invoices.",
    step4Title: "Match",
    step4Text: "Compare invoice details with available purchase order and goods receipt data.",
    step5Title: "Review & export",
    step5Text: "Route exceptions for human review, record approvals and prepare structured exports.",
    workflowFootnote: "Automation supports the process; authorized people retain control of business approvals and payment decisions.",

    // Core capabilities
    capKicker: "CORE CAPABILITIES",
    capTitle: "Built around the details that matter.",
    capText: "AP FLOW brings key accounts payable tasks into one coordinated process. The exact workflow is configured around each organization's documents, systems and approval policies.",
    capLink: 'Discuss your workflow <span>↗</span>',
    cap1Title: "Multi-channel invoice intake",
    cap1Text: "Bring supported invoice sources into one organized queue.",
    cap2Title: "Structured data extraction",
    cap2Text: "Capture important invoice fields for review and downstream processing.",
    cap3Title: "Validation & duplicate checks",
    cap3Text: "Flag missing information, calculation issues and possible duplicates.",
    cap4Title: "PO and GRN matching",
    cap4Text: "Identify differences between invoice, order and receipt records where data is available.",
    cap5Title: "Human approvals & audit trail",
    cap5Text: "Route items to authorized reviewers and keep a record of actions.",
    cap6Title: "Export & system handoff",
    cap6Text: "Prepare reviewed data for spreadsheets or agreed accounting-system workflows.",

    // Our solution
    offerKicker: "OUR SOLUTION",
    offerTitle: "A structured AP workflow, built around your business.",
    offerText: "AP FLOW helps finance teams manage supplier invoices through a connected workflow — from intake and validation to matching, exception management and controlled approvals.",
    offer1Title: "Invoice processing",
    offer1Text: "Capture and organize supplier invoices from supported sources, extracting structured data for downstream review.",
    offer2Title: "Invoice matching",
    offer2Text: "Compare invoice data with purchase orders and goods receipt records where available.",
    offer3Title: "Exception management",
    offer3Text: "Identify discrepancies and organize unresolved items for review and follow-up.",
    offer4Title: "Controlled approvals",
    offer4Text: "Route invoices to authorized finance personnel for review and approval based on agreed business rules.",
    offer5Title: "Workflow visibility",
    offer5Text: "Track invoice progress, outstanding items and workflow activity through an organized process.",
    offer6Title: "Finance-ready handoff",
    offer6Text: "Prepare reviewed invoice data for agreed exports and accounting system workflows.",
    offerCta: 'Discuss your AP workflow <span>↗</span>',

    // Industries
    industriesKicker: "WHO WE SERVE",
    industriesTitle: "Designed for document-heavy finance operations.",
    industriesText: "We start by understanding how invoices move through your organization, then configure the workflow to fit.",
    industryFocus: "INITIAL FOCUS",
    industry1Title: "Distribution & wholesale",
    industry1Text: "Supplier invoices, purchase orders, goods receipts and recurring high-volume processing.",
    industry2Title: "Oil, gas & industrial",
    industry2Text: "Supplier, maintenance, equipment and service-related invoice workflows.",
    industry3Title: "Construction",
    industry3Text: "Project-related purchasing, supplier documents and review processes.",
    industry4Title: "Logistics & services",
    industry4Text: "Transport, storage, subcontractor and recurring service invoices.",
    industryDisclaimer: "Each sector has different controls and documents. Suitability and scope are confirmed during process discovery.",

    // UAE E-Invoicing
    einvoiceKicker: "UAE E-INVOICING",
    einvoiceTitle: "The UAE is moving to electronic invoicing. Is your AP workflow ready?",
    einvoiceText: "Prepare your accounts payable operations for the UAE's electronic invoicing transition with structured workflows for invoice review, matching, exceptions and approvals.",
    einvoiceSubTitle: "Beyond invoice compliance.",
    einvoiceSubText: "Electronic invoicing introduces structured invoice data exchange. AP FLOW focuses on the internal payable workflow that helps finance teams review, match, manage exceptions and control invoice processing.",
    einvoiceCta: 'Discuss your readiness <span>↗</span>',
    einvoiceDate1Label: "Businesses with revenue of AED 50 million or more",
    einvoiceDate1Text: "Mandatory implementation phase scheduled to begin.",
    einvoiceDate2Label: "Businesses with revenue below AED 50 million",
    einvoiceDate2Text: "Mandatory implementation phase scheduled to begin.",
    einvoiceDate3Label: "Government entities",
    einvoiceDate3Text: "Mandatory implementation phase scheduled to begin.",
    einvoiceDisclaimer: "AP FLOW is an accounts payable workflow automation service. It is not represented as an accredited UAE e-invoicing service provider (ASP). E-invoicing compliance and accredited service provider integrations are subject to applicable regulations and implementation scope.",

    // Security
    securityKicker: "SECURITY & PRIVACY",
    securityTitle: "Financial data deserves responsible handling.",
    securityText: "Accounts payable workflows involve sensitive financial and supplier information. Our approach focuses on controlled access, responsible data handling and human oversight.",
    security1Title: "Access control",
    security1Text: "Access to information is intended to be limited to authorized users and agreed business permissions.",
    security2Title: "Data protection",
    security2Text: "Appropriate safeguards for financial documents, invoice records and supplier information.",
    security3Title: "Auditability",
    security3Text: "Workflow records designed to track relevant processing activities, review and decisions.",
    security4Title: "Human oversight",
    security4Text: "Human review and authorization remain central to critical financial workflow decisions.",
    securityDisclaimer: "Security controls, access policies, data retention and integration permissions are defined and verified as part of the agreed implementation.",

    // Accounting partners
    partnerKicker: "FOR ACCOUNTING PARTNERS",
    partnerTitle: "Give your team a more structured way to handle client invoices.",
    partnerText: "AP FLOW can be configured to support accounting and bookkeeping firms that manage payable records for multiple business clients. Your team stays focused on accounting review and client service while the workflow helps organize invoice processing.",
    partnerCta: 'Explore a partner workflow <span>↗</span>',
    partnerPanelTitle: "A collaborative operating model",
    configured: "Configurable",
    partnerNode1: "Your client businesses",
    partnerNode1Sub: "Separate records and permissions",
    partnerNode2Sub: "Invoice workflow and automation",
    partnerNode3: "Accounting team",
    partnerNode3Sub: "Review, approvals and export",
    partnerPanelFoot: "Access is defined by each client's permissions and agreement.",

    // Introduction video
    videoKicker: "SEE THE BIG PICTURE",
    videoTitle: "A clearer view of AP automation.",
    videoText: "Watch the AP FLOW introduction to understand the challenges, workflow and possibilities for your finance operations.",
    videoHint: "Our short introduction",

    // System demo
    demoKicker: "LIVE WORKFLOW DEMONSTRATION",
    demoTitle: "See how invoice processing works in AP FLOW.",
    demoText: "Explore a demonstration of the AP FLOW workflow, from invoice intake and data extraction to matching, exception handling and human review.",
    demoPoint1: "Invoice data extraction",
    demoPoint2: "Purchase order and goods receipt matching",
    demoPoint3: "Exception detection and review",
    demoPoint4: "Human approval workflow",
    demoCta: 'Request a walkthrough <span>↗</span>',
    demoVideoLabel: "AP FLOW WORKSPACE DEMO",
    demoVideoBadge: "DEMONSTRATION",
    demoVideoCaption: "Demonstration using sample data and a test workflow.",

    // Contact
    contactKicker: "START A CONVERSATION",
    contactTitle: "Let's understand your invoice workflow.",
    contactText: "Tell us how your team or firm currently handles supplier invoices. We can discuss whether an AP FLOW workflow is a fit.",
    emailCta: 'Email our team <span>↗</span>',
    backTop: "Back to top ↑",

    // Footer
    footerTagline: "A more connected workflow for accounts payable.",
    footerContact: "Have a workflow in mind?",
    footerTalk: "Let's talk ↗",
    rights: "All rights reserved.",
    footerDisclaimer: "Concept website. Capabilities are subject to implementation scope and validation."
  },

  ar: {
    // الإعلان
    announcement: "طريقة أوضح لإدارة الحسابات الدائنة",
    learnMore: 'اكتشف كيف يعمل النظام <span aria-hidden="true">↗</span>',

    // القائمة
    navPlatform: "المنصة",
    navHow: "كيف يعمل",
    navOffer: "حلولنا",
    navIndustries: "القطاعات",
    navEinvoice: "الفوترة الإلكترونية",
    navSecurity: "الأمان",
    navFirms: "شركات المحاسبة",
    navContact: "تواصل معنا",
    navCta: 'احجز محادثة <span>↗</span>',

    // الواجهة الرئيسية
    heroEyebrow: "إدارة الحسابات الدائنة بطريقة جديدة",
    heroTitle: 'من فوضى الفواتير إلى <span class="gradient-text">التحكم المالي.</span>',
    heroDescription: "يساعد AP FLOW الشركات على تنظيم فواتير الموردين ضمن عملية موحدة، تبدأ من استلام المستندات واستخراج البيانات، وصولاً إلى المطابقة والمراجعة والتصدير.",
    heroPrimary: 'تواصل مع فريقنا <span>↗</span>',
    heroSecondary: "استكشف سير العمل",
    heroNote: "مصمم ليتوافق مع إجراءاتك المالية وضوابطك وقواعد الموافقة لديك.",
    heroBottom: "سير عمل مترابط للفرق المالية وشركاء المحاسبة",

    // لوحة المعلومات
    dashOverview: "نظرة عامة على مساحة العمل",
    dashTitle: "نشاط الفواتير",
    dashPeriod: "عرض تجريبي · هذا الشهر",
    metricReceived: "المستلمة",
    metricVolume: "حجم الفواتير",
    metricProcessed: "المعالجة",
    metricReviewed: "جاهزة للمراجعة",
    metricExceptions: "الاستثناءات",
    metricAttention: "تحتاج إلى متابعة",
    recentActivity: "النشاط الأخير",
    viewAll: "عرض الكل",
    statusMatched: "تمت المطابقة",
    statusReview: "مراجعة",
    statusPending: "قيد الانتظار",
    processingStatus: "حالة المعالجة",
    sample: "تجريبي",
    progressCaption: "لقطة توضيحية لسير العمل",
    floatingValidation: "اكتمل التحقق",
    floatingMatching: "مطابقة أمر الشراء · الاستلام · الفاتورة",

    // التحديات
    introKicker: "التحدي",
    introTitle: "تصل الفواتير من مصادر مختلفة، لكن لا ينبغي أن تكون إجراءاتك مشتتة.",
    introText: "قد تؤدي مرفقات البريد الإلكتروني وملفات PDF وأوامر الشراء وسجلات استلام البضائع وطلبات الموافقة إلى تشتيت العمل. صُمم AP FLOW لجمع هذه الخطوات ضمن سير عمل أوضح وقابل للتتبع، مع إبقاء القرارات تحت سيطرة الأشخاص المسؤولين.",
    challenge1Title: "استلام مشتت",
    challenge1Text: "تصل مستندات الموردين عبر قنوات وتنسيقات مختلفة.",
    challenge2Title: "مراجعات يدوية",
    challenge2Text: "تضطر الفرق إلى إدخال البيانات والتحقق المتكرر من الإجماليات والمراجع والفواتير المكررة.",
    challenge3Title: "مطابقة غير مترابطة",
    challenge3Text: "قد تحتاج تفاصيل الفاتورة إلى مراجعة ومقارنتها مع سجلات الشراء والاستلام.",
    challenge4Title: "متابعة غير واضحة",
    challenge4Text: "قد يصعب تتبع الاستثناءات والموافقات بين الأشخاص والأنظمة المختلفة.",

    // سير العمل
    workflowKicker: "كيف يعمل",
    workflowTitle: "مسار أكثر ترابطاً لكل فاتورة.",
    workflowText: "سير عمل قابل للتخصيص يساعد فريقك على تحويل المستندات الواردة إلى بيانات مستحقات منظمة وخاضعة للمراجعة.",
    step1Title: "الاستلام",
    step1Text: "استلام الفواتير عبر قنوات البريد الإلكتروني ورفع ملفات PDF وواتساب للأعمال المدعومة.",
    step2Title: "استخراج البيانات",
    step2Text: "استخراج بيانات الفاتورة الأساسية مثل المورد والتواريخ والضرائب والإجماليات وبنود الفاتورة.",
    step3Title: "التحقق",
    step3Text: "التحقق من الحقول المطلوبة والحسابات واحتمالية تكرار الفواتير.",
    step4Title: "المطابقة",
    step4Text: "مقارنة تفاصيل الفاتورة مع بيانات أوامر الشراء وسجلات استلام البضائع المتاحة.",
    step5Title: "المراجعة والتصدير",
    step5Text: "إحالة الاستثناءات للمراجعة البشرية وتسجيل الموافقات وتجهيز البيانات للتصدير.",
    workflowFootnote: "تدعم الأتمتة سير العمل، بينما يحتفظ الأشخاص المخولون بالتحكم في الموافقات وقرارات الدفع.",

    // الإمكانات الأساسية
    capKicker: "الإمكانات الأساسية",
    capTitle: "مصمم للاهتمام بالتفاصيل المهمة.",
    capText: "يجمع AP FLOW المهام الأساسية للحسابات الدائنة ضمن عملية موحدة. ويتم تخصيص سير العمل وفقاً لمستندات كل مؤسسة وأنظمتها وسياسات الموافقة لديها.",
    capLink: 'ناقش سير العمل الخاص بك <span>↗</span>',
    cap1Title: "استلام الفواتير من قنوات متعددة",
    cap1Text: "جمع مصادر الفواتير المدعومة ضمن قائمة منظمة واحدة.",
    cap2Title: "استخراج البيانات المنظمة",
    cap2Text: "استخراج حقول الفاتورة المهمة للمراجعة والمعالجة اللاحقة.",
    cap3Title: "التحقق واكتشاف التكرار",
    cap3Text: "رصد المعلومات الناقصة ومشكلات الحسابات والفواتير المحتمل تكرارها.",
    cap4Title: "مطابقة أوامر الشراء والاستلام",
    cap4Text: "تحديد الاختلافات بين الفاتورة وأمر الشراء وسجلات الاستلام عند توفر البيانات.",
    cap5Title: "الموافقات البشرية وسجل التدقيق",
    cap5Text: "إحالة المعاملات إلى المراجعين المخولين والاحتفاظ بسجل للإجراءات.",
    cap6Title: "التصدير والربط مع الأنظمة",
    cap6Text: "تجهيز البيانات التي تمت مراجعتها للجداول أو إجراءات أنظمة المحاسبة المتفق عليها.",

    // الحل
    offerKicker: "حلولنا",
    offerTitle: "سير عمل منظم للحسابات الدائنة، مصمم وفقاً لطبيعة أعمالك.",
    offerText: "يساعد AP FLOW الفرق المالية على إدارة فواتير الموردين من خلال سير عمل مترابط، يبدأ من الاستلام والتحقق وصولاً إلى المطابقة وإدارة الاستثناءات والموافقات المنضبطة.",
    offer1Title: "معالجة الفواتير",
    offer1Text: "استلام فواتير الموردين وتنظيمها من المصادر المدعومة، مع استخراج بيانات منظمة للمراجعة والمعالجة اللاحقة.",
    offer2Title: "مطابقة الفواتير",
    offer2Text: "مقارنة بيانات الفواتير مع أوامر الشراء وسجلات استلام البضائع عند توفرها.",
    offer3Title: "إدارة الاستثناءات",
    offer3Text: "اكتشاف الاختلافات وتنظيم المعاملات غير المحسومة للمراجعة والمتابعة.",
    offer4Title: "الموافقات المنضبطة",
    offer4Text: "إحالة الفواتير إلى الموظفين الماليين المخولين للمراجعة والموافقة وفقاً لقواعد العمل المتفق عليها.",
    offer5Title: "متابعة سير العمل",
    offer5Text: "تتبع تقدم الفواتير والمعاملات المعلقة ونشاط سير العمل من خلال عملية منظمة.",
    offer6Title: "تجهيز البيانات المالية",
    offer6Text: "تجهيز بيانات الفواتير التي تمت مراجعتها للتصدير أو الربط مع إجراءات أنظمة المحاسبة المتفق عليها.",
    offerCta: 'ناقش سير عمل الحسابات الدائنة <span>↗</span>',

    // القطاعات
    industriesKicker: "القطاعات التي نخدمها",
    industriesTitle: "مصمم للعمليات المالية كثيفة المستندات.",
    industriesText: "نبدأ بفهم كيفية انتقال الفواتير داخل مؤسستك، ثم نخصص سير العمل بما يتناسب مع احتياجاتك.",
    industryFocus: "مجال التركيز الأولي",
    industry1Title: "التوزيع وتجارة الجملة",
    industry1Text: "فواتير الموردين وأوامر الشراء وإشعارات استلام البضائع ومعالجة الفواتير المتكررة بأحجام كبيرة.",
    industry2Title: "النفط والغاز والصناعة",
    industry2Text: "سير عمل فواتير الموردين والصيانة والمعدات والخدمات الصناعية.",
    industry3Title: "الإنشاءات والمقاولات",
    industry3Text: "المشتريات المرتبطة بالمشاريع ومستندات الموردين وإجراءات المراجعة.",
    industry4Title: "الخدمات اللوجستية والخدمات",
    industry4Text: "فواتير النقل والتخزين والمقاولين من الباطن والخدمات المتكررة.",
    industryDisclaimer: "لكل قطاع ضوابط ومستندات مختلفة. ويتم تحديد مدى الملاءمة ونطاق العمل خلال دراسة الإجراءات.",

    // الفوترة الإلكترونية الإماراتية
    einvoiceKicker: "الفوترة الإلكترونية في الإمارات",
    einvoiceTitle: "الإمارات تتجه نحو الفوترة الإلكترونية. هل سير عمل حساباتك الدائنة جاهز؟",
    einvoiceText: "استعد لمرحلة التحول إلى الفوترة الإلكترونية في الإمارات من خلال إجراءات منظمة لمراجعة الفواتير ومطابقتها وإدارة الاستثناءات والموافقات.",
    einvoiceSubTitle: "ما وراء الامتثال للفواتير.",
    einvoiceSubText: "تتيح الفوترة الإلكترونية تبادل بيانات الفواتير بتنسيق منظم. ويركز AP FLOW على إجراءات الحسابات الدائنة الداخلية التي تساعد الفرق المالية على المراجعة والمطابقة وإدارة الاستثناءات والتحكم في معالجة الفواتير.",
    einvoiceCta: 'ناقش مدى جاهزيتك <span>↗</span>',
    einvoiceDate1Label: "الشركات التي تبلغ إيراداتها 50 مليون درهم أو أكثر",
    einvoiceDate1Text: "من المقرر بدء مرحلة التطبيق الإلزامي.",
    einvoiceDate2Label: "الشركات التي تقل إيراداتها عن 50 مليون درهم",
    einvoiceDate2Text: "من المقرر بدء مرحلة التطبيق الإلزامي.",
    einvoiceDate3Label: "الجهات الحكومية",
    einvoiceDate3Text: "من المقرر بدء مرحلة التطبيق الإلزامي.",
    einvoiceDisclaimer: "AP FLOW خدمة لأتمتة سير عمل الحسابات الدائنة، ولا يتم تقديمها باعتبارها مزود خدمة فوترة إلكترونية معتمداً في الإمارات (ASP). ويخضع الامتثال للفوترة الإلكترونية والربط مع مزودي الخدمة المعتمدين للوائح المعمول بها ونطاق التنفيذ المتفق عليه.",

    // الأمان والخصوصية
    securityKicker: "الأمان والخصوصية",
    securityTitle: "البيانات المالية تستحق تعاملاً مسؤولاً.",
    securityText: "تتضمن إجراءات الحسابات الدائنة معلومات مالية ومعلومات حساسة عن الموردين. ويركز نهجنا على التحكم في الوصول والتعامل المسؤول مع البيانات والإشراف البشري.",
    security1Title: "التحكم في الوصول",
    security1Text: "يهدف النظام إلى قصر الوصول إلى المعلومات على المستخدمين المخولين ووفقاً لصلاحيات العمل المتفق عليها.",
    security2Title: "حماية البيانات",
    security2Text: "تطبيق تدابير الحماية المناسبة للمستندات المالية وسجلات الفواتير ومعلومات الموردين.",
    security3Title: "قابلية التدقيق والتتبع",
    security3Text: "سجلات لسير العمل مصممة لتتبع أنشطة المعالجة والمراجعة والقرارات ذات الصلة.",
    security4Title: "الإشراف البشري",
    security4Text: "تظل المراجعة البشرية والتفويض عنصرين أساسيين في القرارات المالية المهمة.",
    securityDisclaimer: "يتم تحديد ضوابط الأمان وسياسات الوصول والاحتفاظ بالبيانات وصلاحيات التكامل والتحقق منها ضمن التنفيذ المتفق عليه.",

    // شركاء المحاسبة
    partnerKicker: "لشركاء المحاسبة",
    partnerTitle: "امنح فريقك طريقة أكثر تنظيماً لإدارة فواتير العملاء.",
    partnerText: "يمكن تخصيص AP FLOW لدعم شركات المحاسبة ومسك الدفاتر التي تدير سجلات الحسابات الدائنة لعدة شركات. ويساعد سير العمل على تنظيم معالجة الفواتير، حتى يتمكن فريقك من التركيز على المراجعة المحاسبية وخدمة العملاء.",
    partnerCta: 'استكشف سير عمل الشراكة <span>↗</span>',
    partnerPanelTitle: "نموذج عمل تعاوني",
    configured: "قابل للتخصيص",
    partnerNode1: "شركات العملاء",
    partnerNode1Sub: "سجلات وصلاحيات منفصلة",
    partnerNode2Sub: "سير عمل الفواتير والأتمتة",
    partnerNode3: "الفريق المحاسبي",
    partnerNode3Sub: "المراجعة والموافقات والتصدير",
    partnerPanelFoot: "يتم تحديد الوصول وفقاً لصلاحيات واتفاقية كل عميل.",

    // الفيديو التعريفي
    videoKicker: "اكتشف الصورة الكاملة",
    videoTitle: "رؤية أوضح لأتمتة الحسابات الدائنة.",
    videoText: "شاهد الفيديو التعريفي لـ AP FLOW لفهم التحديات وسير العمل والإمكانات المتاحة لتطوير عملياتك المالية.",
    videoHint: "فيديو تعريفي قصير",

    // عرض النظام
    demoKicker: "عرض توضيحي لسير العمل",
    demoTitle: "شاهد كيف تتم معالجة الفواتير عبر AP FLOW.",
    demoText: "استكشف عرضاً توضيحياً لسير عمل AP FLOW، بدءاً من استلام الفواتير واستخراج البيانات وصولاً إلى المطابقة ومعالجة الاستثناءات والمراجعة البشرية.",
    demoPoint1: "استخراج بيانات الفواتير",
    demoPoint2: "مطابقة أوامر الشراء واستلام البضائع",
    demoPoint3: "اكتشاف الاستثناءات ومراجعتها",
    demoPoint4: "سير عمل الموافقات البشرية",
    demoCta: 'اطلب عرضاً توضيحياً <span>↗</span>',
    demoVideoLabel: "عرض توضيحي لمساحة عمل AP FLOW",
    demoVideoBadge: "عرض تجريبي",
    demoVideoCaption: "عرض توضيحي باستخدام بيانات تجريبية وسير عمل اختباري.",

    // التواصل
    contactKicker: "لنبدأ محادثة",
    contactTitle: "دعنا نتعرف على طريقة إدارة فواتيرك.",
    contactText: "أخبرنا كيف يدير فريقك أو شركتك فواتير الموردين حالياً، وسنناقش مدى ملاءمة AP FLOW لاحتياجاتك.",
    emailCta: 'راسل فريقنا <span>↗</span>',
    backTop: "العودة إلى الأعلى ↑",

    // التذييل
    footerTagline: "سير عمل أكثر ترابطاً لإدارة الحسابات الدائنة.",
    footerContact: "هل لديك سير عمل ترغب في تطويره؟",
    footerTalk: "لنتحدث ↗",
    rights: "جميع الحقوق محفوظة.",
    footerDisclaimer: "موقع تعريفي تجريبي. تخضع الإمكانات لنطاق التنفيذ والتحقق."
  }
};


/* =========================================
   ELEMENTS
========================================= */

const languageSwitch = document.getElementById("languageSwitch");
const languageLabel = document.getElementById("languageLabel");
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mainNav = document.getElementById("mainNav");


/* =========================================
   LANGUAGE FUNCTION
========================================= */

function setLanguage(lang) {
  const selectedLanguage = translations[lang] ? lang : "en";
  const dictionary = translations[selectedLanguage];

  // Update document direction and language
  document.documentElement.lang = selectedLanguage;
  document.documentElement.dir =
    selectedLanguage === "ar" ? "rtl" : "ltr";

  // Toggle Arabic font/style class
  document.body.classList.toggle(
    "arabic",
    selectedLanguage === "ar"
  );

  // Translate every element with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.innerHTML = dictionary[key];
    } else {
      console.warn("AP FLOW: Missing translation key:", key);
    }
  });

  // Update language switch label
  if (languageLabel) {
    languageLabel.textContent =
      selectedLanguage === "ar" ? "English" : "العربية";
  }

  // Update accessibility label
  if (languageSwitch) {
    languageSwitch.setAttribute(
      "aria-label",
      selectedLanguage === "ar"
        ? "Switch to English"
        : "التبديل إلى العربية"
    );
  }

  // Save selected language
  try {
    localStorage.setItem("apflow-language", selectedLanguage);
  } catch (error) {
    console.warn("AP FLOW: Could not save language preference.", error);
  }
}


/* =========================================
   LANGUAGE SWITCH BUTTON
========================================= */

if (languageSwitch) {
  languageSwitch.addEventListener("click", () => {
    const currentLanguage =
      document.documentElement.lang === "ar" ? "ar" : "en";

    const nextLanguage =
      currentLanguage === "en" ? "ar" : "en";

    setLanguage(nextLanguage);
  });
}


/* =========================================
   MOBILE MENU
========================================= */

if (mobileMenuButton && mainNav) {
  mobileMenuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("active");

    mobileMenuButton.classList.toggle("active", isOpen);
    mobileMenuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  // Close menu after clicking a navigation link
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      mobileMenuButton.classList.remove("active");
      mobileMenuButton.setAttribute("aria-expanded", "false");
    });
  });
}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   INITIALIZE LANGUAGE
========================================= */

let savedLanguage = "en";

try {
  savedLanguage = localStorage.getItem("apflow-language") || "en";
} catch (error) {
  console.warn("AP FLOW: Could not read saved language.", error);
}

setLanguage(savedLanguage);


/* =========================================
   TRANSLATION DIAGNOSTICS
   Check missing keys in browser console
========================================= */

function checkTranslations() {
  const elements = document.querySelectorAll("[data-i18n]");
  const missingKeys = [];

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (!translations.en[key] || !translations.ar[key]) {
      missingKeys.push(key);
    }
  });

  if (missingKeys.length > 0) {
    console.warn(
      "AP FLOW: Missing translation entries:",
      [...new Set(missingKeys)]
    );
  } else {
    console.info(
      `AP FLOW: Translation check passed. ${elements.length} elements found.`
    );
  }
}

checkTranslations();
