/* =============================================
   E-SCOOT v3.0 — Système de Traduction Multilingue
   =============================================
   Langues : Français (fr), English (en), العربية (ar)
   Direction : LTR (fr/en), RTL (ar)
   ============================================= */

const TRANSLATIONS = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.models": "Modèles",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Nouvelle Collection 2026",
    "hero.title1": "Roulez",
    "hero.title2": "Électrique, Roulez Futur",
    "hero.desc": "Motos et trottinettes électriques haute performance. Livraison partout en Algérie avec un Service de Garantie.",
    "hero.cta1": "Découvrir les modèles",
    "hero.cta2": "Nous contacter",
    "hero.stat1.label": "Modèles",
    "hero.stat2.label": "Watts Max",
    "hero.stat3.label": "Km Autonomie",
    "hero.stat4.label": "Couleurs",

    // Categories
    "cat.title": "Nos Catégories",
    "cat.subtitle": "Choisissez le véhicule électrique adapté à vos besoins",
    "cat.moto.title": "Motos Électriques",
    "cat.moto.subtitle": "4 modèles • 500W à 2000W",
    "cat.trot.title": "Trottinettes",
    "cat.trot.subtitle": "4 modèles • 150W à 1500W",

    // Popular Models
    "pop.title": "Modèles Populaires",
    "pop.subtitle": "Les best-sellers de notre collection",
    "pop.cta": "Voir tous les modèles",
    "pop.view": "Voir →",

    // Features
    "feat.title": "Pourquoi choisir E-Scoot ?",
    "feat.subtitle": "Les avantages de nos véhicules électriques",
    "feat.1.title": "Livraison",
    "feat.1.desc": "Livraison à domicile partout en Algérie",
    "feat.2.title": "Paiement Flexible",
    "feat.2.desc": "Paiement à la livraison",
    "feat.3.title": "Garantie",
    "feat.3.desc": "Garantie complète sur le cadre, moteur et batterie",
    "feat.4.title": "SAV Premium",
    "feat.4.desc": "Service après-vente disponibles",

    // Partnership
    "part.badge": "Partenariat officiel",
    "part.title1": "Une qualité",
    "part.title2": "maîtrisée de la Chine à l'Algérie",
    "part.desc": "Derrière chaque véhicule E-Scoot se cache l'expertise de notre partenaire de confiance, <strong>AliExports</strong>. Grâce à son équipe basée en Chine, nous garantissons :",
    "part.li1": "Des produits rigoureusement inspectés",
    "part.li2": "Les meilleurs prix grâce à un sourcing direct",
    "part.li3": "Une logistique fiable et transparente",
    "part.cta": "Découvrir AliExports →",
    "part.card.title": "E-Scoot × AliExports",
    "part.card.sub": "Un partenariat stratégique depuis 2023",
    "part.founder": "Fondateur d'E-Scoot & CEO d'AliExports",
    "part.quote": "« Notre double expertise garantit une qualité irréprochable et une totale transparence. »",

    // CTA
    "cta.badge": "Offre limitée",
    "cta.title1": "Prêt à passer à",
    "cta.title2": "l'électrique ?",
    "cta.desc": "Contactez-nous dès maintenant pour une démonstration gratuite ou pour passer commande. Notre équipe vous répond sous 24h.",
    "cta.btn1": "Commander sur WhatsApp",
    "cta.btn2": "Nous appeler",
    "cta.stat1.label": "Réponse garantie",
    "cta.stat2.label": "Satisfaction",
    "cta.stat3.label": "Démonstration",

    // Footer
    "foot.desc": "Votre spécialiste des véhicules électriques en Algérie. Motos et trottinettes de qualité avec livraison et garantie.",
    "foot.nav.title": "Navigation",
    "foot.srv.title": "Nos services",
    "foot.srv.1": "Garantie & SAV",
    "foot.srv.2": "Livraison",
    "foot.srv.3": "FAQ",
    "foot.srv.4": "Blog",
    "foot.contact.title": "Contact",
    "foot.partner": "Partenaire officiel",
    "foot.copyright": "© 2026 E-Scoot. Tous droits réservés.",
    "foot.legal.1": "Mentions légales",
    "foot.legal.2": "Politique de confidentialité",
    "foot.legal.3": "CGV",

    // Models Page
    "models.title": "Nos Modèles",
    "models.subtitle": "8 véhicules électriques pour tous les besoins et tous les budgets",
    "models.filter.cat": "Catégorie :",
    "models.filter.all": "Tous",
    "models.filter.moto": "Motos",
    "models.filter.trot": "Trottinettes",
    "models.filter.price": "Prix :",
    "models.filter.price.all": "Tous les prix",
    "models.filter.price.1": "Moins de 000 000 DA",
    "models.filter.price.2": "000 000 - 000 000 DA",
    "models.filter.price.3": "000 000 - 000 000 DA",
    "models.filter.price.4": "Plus de 000 000 DA",
    "models.filter.sort": "Trier :",
    "models.filter.sort.def": "Par défaut",
    "models.filter.sort.asc": "Prix croissant",
    "models.filter.sort.desc": "Prix décroissant",
    "models.filter.sort.name": "Nom A-Z",
    "models.count": "modèle",
    "models.count.plural": "modèles",
    "models.empty.emoji": "🔍",
    "models.empty.title": "Aucun modèle trouvé",
    "models.empty.desc": "Essayez d'autres critères de recherche",

    // Product Page
    "prod.breadcrumb.home": "Accueil",
    "prod.breadcrumb.models": "Modèles",
    "prod.color.label": "Couleur :",
    "prod.whatsapp": "Commander sur WhatsApp",
    "prod.tab.specs": "Fiche Technique",
    "prod.tab.features": "Caractéristiques",
    "prod.tab.desc": "Description",
    "prod.warranty.title": "✓ Garantie & Service",
    "prod.warranty.text": "Tous nos véhicules électriques sont livrés avec une garantie constructeur <strong>sur le cadre</strong> et <strong>sur la batterie et le moteur</strong>. Nous assurons le service après-vente et proposons des forfaits de maintenance adaptés. Livraison partout en Algérie.",
    "prod.related.title": "Modèles similaires",
    "prod.related.subtitle": "Découvrez d'autres modèles de la même catégorie",
    "prod.error.emoji": "😕",
    "prod.error.title": "Produit non trouvé",
    "prod.error.desc": "Le modèle que vous recherchez n'existe pas ou a été retiré.",
    "prod.error.cta": "Voir tous les modèles",

    // Specs icons mapping
    "spec.Vitesse Max": "Vitesse Max",
    "spec.Vitesse": "Vitesse",
    "spec.Autonomie": "Autonomie",
    "spec.Moteur": "Moteur",
    "spec.Batterie": "Batterie",
    "spec.Pneus": "Pneus",
    "spec.Freins": "Freins",
    "spec.Suspension": "Suspension",
    "spec.Charge Max": "Charge Max",
    "spec.Poids": "Poids",
    "spec.Temps de charge": "Temps de charge",

    // Contact Page
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Nous sommes à votre disposition pour toute question ou commande",
    "contact.info.title": "Parlons de votre projet",
    "contact.info.desc": "Vous avez une question sur nos modèles ? Vous souhaitez passer commande ? Contactez-nous par le moyen qui vous convient le mieux.",
    "contact.method.wa": "WhatsApp",
    "contact.method.wa.val": "+213 770 28 62 69",
    "contact.method.wa.note": "Réponse rapide garantie",
    "contact.method.tel": "Téléphone",
    "contact.method.tel.val": "07 70 28 62 69",
    "contact.method.email": "Email",
    "contact.method.email.val": "sarlecocycleinnovations@gmail.com",
    "contact.method.email.note": "Réponse sous 24h",
    "contact.method.addr": "Adresse",
    "contact.method.addr.val": "Bordj El Kiffan, Alger, Algérie",
    "contact.social.fb": "Facebook",
    "contact.form.title": "Envoyez-nous un message",
    "contact.form.firstname": "Prénom",
    "contact.form.lastname": "Nom",
    "contact.form.email": "Email",
    "contact.form.phone": "Téléphone",
    "contact.form.phone.hint": "Format: +213 suivi de 9 chiffres",
    "contact.form.subject": "Sujet",
    "contact.form.sub.order": "🛒 Commande",
    "contact.form.sub.info": "💬 Renseignement",
    "contact.form.sub.test": "🏍️ Essai",
    "contact.form.sub.sav": "🛠️ SAV",
    "contact.form.sub.other": "✨ Autre",
    "contact.form.message": "Message",
    "contact.form.message.ph": "Décrivez votre demande...",
    "contact.form.submit": "Envoyer le message",
    "contact.form.sending": "⏳ Envoi en cours...",
    "contact.form.success": "Message envoyé avec succès !",
    "contact.form.error": "Erreur lors de l'envoi. Veuillez réessayer.",
    "contact.map.btn": "Ouvrir dans Google Maps",
    "contact.map.open": "Showroom ouvert",

    // Common
    "btn.view": "Voir →",
    "spec.speed": "Vitesse",
    "spec.autonomy": "Autonomie",
    "spec.motor": "Moteur",
    "badge.moto": "Moto Électrique",
    "badge.trot": "Trottinette",
    "price.note": "Prix",
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.models": "Models",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "New 2026 Collection",
    "hero.title1": "Ride",
    "hero.title2": "Electric, Ride the Future",
    "hero.desc": "High-performance electric motorcycles and scooters. Delivery everywhere in Algeria with Warranty Service.",
    "hero.cta1": "Discover Models",
    "hero.cta2": "Contact Us",
    "hero.stat1.label": "Models",
    "hero.stat2.label": "Watts Max",
    "hero.stat3.label": "Km Range",
    "hero.stat4.label": "Colors",

    // Categories
    "cat.title": "Our Categories",
    "cat.subtitle": "Choose the electric vehicle that suits your needs",
    "cat.moto.title": "Electric Motorcycles",
    "cat.moto.subtitle": "4 models • 500W to 2000W",
    "cat.trot.title": "Electric Scooters",
    "cat.trot.subtitle": "4 models • 150W to 1500W",

    // Popular Models
    "pop.title": "Popular Models",
    "pop.subtitle": "Our collection's best-sellers",
    "pop.cta": "View All Models",
    "pop.view": "View →",

    // Features
    "feat.title": "Why Choose E-Scoot?",
    "feat.subtitle": "The advantages of our electric vehicles",
    "feat.1.title": "Delivery",
    "feat.1.desc": "Home delivery everywhere in Algeria",
    "feat.2.title": "Flexible Payment",
    "feat.2.desc": "Pay on delivery",
    "feat.3.title": "Warranty",
    "feat.3.desc": "Full warranty on frame, motor and battery",
    "feat.4.title": "Premium After-Sales",
    "feat.4.desc": "After-sales service available",

    // Partnership
    "part.badge": "Official Partnership",
    "part.title1": "Quality",
    "part.title2": "mastered from China to Algeria",
    "part.desc": "Behind every E-Scoot vehicle lies the expertise of our trusted partner, <strong>AliExports</strong>. Thanks to their team based in China, we guarantee:",
    "part.li1": "Rigorously inspected products",
    "part.li2": "Best prices through direct sourcing",
    "part.li3": "Reliable and transparent logistics",
    "part.cta": "Discover AliExports →",
    "part.card.title": "E-Scoot × AliExports",
    "part.card.sub": "A strategic partnership since 2023",
    "part.founder": "Founder of E-Scoot & CEO of AliExports",
    "part.quote": "« Our dual expertise guarantees impeccable quality and total transparency. »",

    // CTA
    "cta.badge": "Limited Offer",
    "cta.title1": "Ready to go",
    "cta.title2": "electric?",
    "cta.desc": "Contact us now for a free demonstration or to place an order. Our team will get back to you within 24 hours.",
    "cta.btn1": "Order on WhatsApp",
    "cta.btn2": "Call Us",
    "cta.stat1.label": "Response Guaranteed",
    "cta.stat2.label": "Satisfaction",
    "cta.stat3.label": "Free Demo",

    // Footer
    "foot.desc": "Your electric vehicle specialist in Algeria. Quality motorcycles and scooters with delivery and warranty.",
    "foot.nav.title": "Navigation",
    "foot.srv.title": "Our Services",
    "foot.srv.1": "Warranty & After-Sales",
    "foot.srv.2": "Delivery",
    "foot.srv.3": "FAQ",
    "foot.srv.4": "Blog",
    "foot.contact.title": "Contact",
    "foot.partner": "Official Partner",
    "foot.copyright": "© 2026 E-Scoot. All rights reserved.",
    "foot.legal.1": "Legal Notice",
    "foot.legal.2": "Privacy Policy",
    "foot.legal.3": "Terms of Sale",

    // Models Page
    "models.title": "Our Models",
    "models.subtitle": "8 electric vehicles for all needs and budgets",
    "models.filter.cat": "Category:",
    "models.filter.all": "All",
    "models.filter.moto": "Motorcycles",
    "models.filter.trot": "Scooters",
    "models.filter.price": "Price:",
    "models.filter.price.all": "All Prices",
    "models.filter.price.1": "Less than 000 000 DA",
    "models.filter.price.2": "000 000 - 000 000 DA",
    "models.filter.price.3": "000 000 - 000 000 DA",
    "models.filter.price.4": "More than 000 000 DA",
    "models.filter.sort": "Sort:",
    "models.filter.sort.def": "Default",
    "models.filter.sort.asc": "Price: Low to High",
    "models.filter.sort.desc": "Price: High to Low",
    "models.filter.sort.name": "Name A-Z",
    "models.count": "model",
    "models.count.plural": "models",
    "models.empty.emoji": "🔍",
    "models.empty.title": "No models found",
    "models.empty.desc": "Try different search criteria",

    // Product Page
    "prod.breadcrumb.home": "Home",
    "prod.breadcrumb.models": "Models",
    "prod.color.label": "Color:",
    "prod.whatsapp": "Order on WhatsApp",
    "prod.tab.specs": "Specifications",
    "prod.tab.features": "Features",
    "prod.tab.desc": "Description",
    "prod.warranty.title": "✓ Warranty & Service",
    "prod.warranty.text": "All our electric vehicles come with a manufacturer warranty on the <strong>frame</strong> and on the <strong>battery and motor</strong>. We provide after-sales service and offer tailored maintenance packages. Delivery everywhere in Algeria.",
    "prod.related.title": "Similar Models",
    "prod.related.subtitle": "Discover other models in the same category",
    "prod.error.emoji": "😕",
    "prod.error.title": "Product Not Found",
    "prod.error.desc": "The model you are looking for does not exist or has been removed.",
    "prod.error.cta": "View All Models",

    // Specs icons mapping
    "spec.Vitesse Max": "Max Speed",
    "spec.Vitesse": "Speed",
    "spec.Autonomie": "Range",
    "spec.Moteur": "Motor",
    "spec.Batterie": "Battery",
    "spec.Pneus": "Tires",
    "spec.Freins": "Brakes",
    "spec.Suspension": "Suspension",
    "spec.Charge Max": "Max Load",
    "spec.Poids": "Weight",
    "spec.Temps de charge": "Charging Time",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "We are at your disposal for any question or order",
    "contact.info.title": "Let's Talk About Your Project",
    "contact.info.desc": "Have a question about our models? Want to place an order? Contact us by the method that suits you best.",
    "contact.method.wa": "WhatsApp",
    "contact.method.wa.val": "+213 770 28 62 69",
    "contact.method.wa.note": "Guaranteed quick response",
    "contact.method.tel": "Phone",
    "contact.method.tel.val": "07 70 28 62 69",
    "contact.method.email": "Email",
    "contact.method.email.val": "sarlecocycleinnovations@gmail.com",
    "contact.method.email.note": "Reply within 24h",
    "contact.method.addr": "Address",
    "contact.method.addr.val": "Bordj El Kiffan, Algiers, Algeria",
    "contact.social.fb": "Facebook",
    "contact.form.title": "Send Us a Message",
    "contact.form.firstname": "First Name",
    "contact.form.lastname": "Last Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.phone.hint": "Format: +213 followed by 9 digits",
    "contact.form.subject": "Subject",
    "contact.form.sub.order": "🛒 Order",
    "contact.form.sub.info": "💬 Inquiry",
    "contact.form.sub.test": "🏍️ Test Ride",
    "contact.form.sub.sav": "🛠️ After-Sales",
    "contact.form.sub.other": "✨ Other",
    "contact.form.message": "Message",
    "contact.form.message.ph": "Describe your request...",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "⏳ Sending...",
    "contact.form.success": "Message sent successfully!",
    "contact.form.error": "Error while sending. Please try again.",
    "contact.map.btn": "Open in Google Maps",
    "contact.map.open": "Showroom open",

    // Common
    "btn.view": "View →",
    "spec.speed": "Speed",
    "spec.autonomy": "Range",
    "spec.motor": "Motor",
    "badge.moto": "Electric Motorcycle",
    "badge.trot": "Electric Scooter",
    "price.note": "Price",
  },

  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.models": "الموديلات",
    "nav.contact": "اتصل بنا",

    // Hero
    "hero.badge": "مجموعة 2026 الجديدة",
    "hero.title1": "تنقل",
    "hero.title2": "كهربائيًا، تنقل نحو المستقبل",
    "hero.desc": "دراجات نارية و سكوترات كهربائية عالية الأداء. توصيل لجميع أنحاء الجزائر مع خدمة الضمان.",
    "hero.cta1": "اكتشف الموديلات",
    "hero.cta2": "اتصل بنا",
    "hero.stat1.label": "موديل",
    "hero.stat2.label": "واط كحد أقصى",
    "hero.stat3.label": "كم المدى",
    "hero.stat4.label": "لون",

    // Categories
    "cat.title": "فئاتنا",
    "cat.subtitle": "اختر المركبة الكهربائية المناسبة لاحتياجاتك",
    "cat.moto.title": "🏍️ الدراجات النارية الكهربائية",
    "cat.moto.subtitle": "4 موديلات • 500W إلى 2000W",
    "cat.trot.title": "🛴 السكوترات الكهربائية",
    "cat.trot.subtitle": "4 موديلات • 150W إلى 1500W",

    // Popular Models
    "pop.title": "الموديلات الأكثر مبيعًا",
    "pop.subtitle": "الأكثر مبيعًا في مجموعتنا",
    "pop.cta": "عرض جميع الموديلات",
    "pop.view": "عرض →",

    // Features
    "feat.title": "لماذا تختار E-Scoot؟",
    "feat.subtitle": "مميزات مركباتنا الكهربائية",
    "feat.1.title": "التوصيل",
    "feat.1.desc": "توصيل لحد المنزل في جميع أنحاء الجزائر",
    "feat.2.title": "دفع مرن",
    "feat.2.desc": "الدفع عند الاستلام",
    "feat.3.title": "ضمان",
    "feat.3.desc": "ضمان شامل على الإطار والمحرك والبطارية",
    "feat.4.title": "خدمة ما بعد البيع المتميزة",
    "feat.4.desc": "خدمة ما بعد البيع متوفرة",

    // Partnership
    "part.badge": "شراكة رسمية",
    "part.title1": "جودة",
    "part.title2": "محكومة من الصين إلى الجزائر",
    "part.desc": "خلف كل مركبة E-Scoot تكمن خبرة شريكنا الموثوق <strong>AliExports</strong>. بفضل فريقهم في الصين، نضمن:",
    "part.li1": "منتجات مفحوصة بدقة",
    "part.li2": "أفضل الأسعار من خلال التوريد المباشر",
    "part.li3": "خدمات لوجستية موثوقة وشفافة",
    "part.cta": "اكتشف AliExports →",
    "part.card.title": "E-Scoot × AliExports",
    "part.card.sub": "شراكة استراتيجية منذ 2023",
    "part.founder": "مؤسس E-Scoot والرئيس التنفيذي لـ AliExports",
    "part.quote": "« خبرتنا المزدوجة تضمن جودة لا تشوبها شائبة وشفافية كاملة. »",

    // CTA
    "cta.badge": "عرض محدود",
    "cta.title1": "مستعد للتحول إلى",
    "cta.title2": "الكهرباء؟",
    "cta.desc": "اتصل بنا الآن للحصول على عرض تجريبي مجاني أو لتقديم طلب. سيعود فريقنا إليك في غضون 24 ساعة.",
    "cta.btn1": "اطلب عبر واتساب",
    "cta.btn2": "اتصل بنا",
    "cta.stat1.label": "رد مضمون",
    "cta.stat2.label": "رضا",
    "cta.stat3.label": "عرض تجريبي مجاني",

    // Footer
    "foot.desc": "متخصص المركبات الكهربائية في الجزائر. دراجات نارية وسكوترات عالية الجودة مع التوصيل والضمان.",
    "foot.nav.title": "التنقل",
    "foot.srv.title": "خدماتنا",
    "foot.srv.1": "الضمان وخدمة ما بعد البيع",
    "foot.srv.2": "التوصيل",
    "foot.srv.3": "الأسئلة الشائعة",
    "foot.srv.4": "المدونة",
    "foot.contact.title": "اتصل بنا",
    "foot.partner": "شريك رسمي",
    "foot.copyright": "© 2026 E-Scoot. جميع الحقوق محفوظة.",
    "foot.legal.1": "إشعار قانوني",
    "foot.legal.2": "سياسة الخصوصية",
    "foot.legal.3": "شروط البيع",

    // Models Page
    "models.title": "موديلاتنا",
    "models.subtitle": "8 مركبات كهربائية لجميع الاحتياجات والميزانيات",
    "models.filter.cat": "الفئة:",
    "models.filter.all": "الكل",
    "models.filter.moto": "دراجات نارية",
    "models.filter.trot": "سكوترات",
    "models.filter.price": "السعر:",
    "models.filter.price.all": "جميع الأسعار",
    "models.filter.price.1": "أقل من 000 000 دج",
    "models.filter.price.2": "000 000 - 000 000 دج",
    "models.filter.price.3": "000 000 - 000 000 دج",
    "models.filter.price.4": "أكثر من 000 000 دج",
    "models.filter.sort": "ترتيب:",
    "models.filter.sort.def": "افتراضي",
    "models.filter.sort.asc": "السعر: من الأقل",
    "models.filter.sort.desc": "السعر: من الأعلى",
    "models.filter.sort.name": "الاسم أ-ي",
    "models.count": "موديل",
    "models.count.plural": "موديلات",
    "models.empty.emoji": "🔍",
    "models.empty.title": "لم يتم العثور على موديلات",
    "models.empty.desc": "جرب معايير بحث أخرى",

    // Product Page
    "prod.breadcrumb.home": "الرئيسية",
    "prod.breadcrumb.models": "الموديلات",
    "prod.color.label": "اللون:",
    "prod.whatsapp": "اطلب عبر واتساب",
    "prod.tab.specs": "المواصفات الفنية",
    "prod.tab.features": "المميزات",
    "prod.tab.desc": "الوصف",
    "prod.warranty.title": "✓ الضمان والخدمة",
    "prod.warranty.text": "جميع مركباتنا الكهربائية مزودة بضمان الشركة المصنعة على <strong>الإطار</strong> وعلى <strong>البطارية والمحرك</strong>. نحن نقدم خدمة ما بعد البيع ونقدم باقات صيانة مخصصة. التوصيل في جميع أنحاء الجزائر.",
    "prod.related.title": "موديلات مماثلة",
    "prod.related.subtitle": "اكتشف موديلات أخرى من نفس الفئة",
    "prod.error.emoji": "😕",
    "prod.error.title": "المنتج غير موجود",
    "prod.error.desc": "الموديل الذي تبحث عنه غير موجود أو تمت إزالته.",
    "prod.error.cta": "عرض جميع الموديلات",

    // Specs icons mapping
    "spec.Vitesse Max": "السرعة القصوى",
    "spec.Vitesse": "السرعة",
    "spec.Autonomie": "المدى",
    "spec.Moteur": "المحرك",
    "spec.Batterie": "البطارية",
    "spec.Pneus": "الإطارات",
    "spec.Freins": "الفرامل",
    "spec.Suspension": "المعلق",
    "spec.Charge Max": "الحمولة القصوى",
    "spec.Poids": "الوزن",
    "spec.Temps de charge": "وقت الشحن",

    // Contact Page
    "contact.title": "اتصل بنا",
    "contact.subtitle": "نحن تحت تصرفك لأي سؤال أو طلب",
    "contact.info.title": "لنتحدث عن مشروعك",
    "contact.info.desc": "لديك سؤال حول موديلاتنا؟ تريد تقديم طلب؟ اتصل بنا بالطريقة التي تناسبك best.",
    "contact.method.wa": "واتساب",
    "contact.method.wa.val": "+213 770 28 62 69",
    "contact.method.wa.note": "رد سريع مضمون",
    "contact.method.tel": "هاتف",
    "contact.method.tel.val": "07 70 28 62 69",
    "contact.method.email": "بريد إلكتروني",
    "contact.method.email.val": "sarlecocycleinnovations@gmail.com",
    "contact.method.email.note": "رد في غضون 24 ساعة",
    "contact.method.addr": "العنوان",
    "contact.method.addr.val": "برج الكيفان، الجزائر العاصمة، الجزائر",
    "contact.social.fb": "فيسبوك",
    "contact.form.title": "أرسل لنا رسالة",
    "contact.form.firstname": "الاسم الأول",
    "contact.form.lastname": "الاسم الأخير",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.phone": "الهاتف",
    "contact.form.phone.hint": "الصيغة: +213 متبوعًا بـ 9 أرقام",
    "contact.form.subject": "الموضوع",
    "contact.form.sub.order": "🛒 طلب",
    "contact.form.sub.info": "💬 استفسار",
    "contact.form.sub.test": "🏍️ تجربة",
    "contact.form.sub.sav": "🛠️ ما بعد البيع",
    "contact.form.sub.other": "✨ آخر",
    "contact.form.message": "الرسالة",
    "contact.form.message.ph": "صف طلبك...",
    "contact.form.submit": "إرسال الرسالة",
    "contact.form.sending": "⏳ جاري الإرسال...",
    "contact.form.success": "تم إرسال الرسالة بنجاح!",
    "contact.form.error": "خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.",
    "contact.map.btn": "فتح في خرائط جوجل",
    "contact.map.open": "صالة العرض مفتوحة",

    // Common
    "btn.view": "عرض →",
    "spec.speed": "السرعة",
    "spec.autonomy": "المدى",
    "spec.motor": "المحرك",
    "badge.moto": "دراجة نارية كهربائية",
    "badge.trot": "سكوتر كهربائي",
    "price.note": "السعر",
  }
};

/* ===========================================
   FONCTIONS DE TRADUCTION
   =========================================== */

let currentLang = localStorage.getItem('lang') || 'fr';

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Mettre à jour l'attribut lang et dir
  document.documentElement.lang = lang === 'ar' ? 'ar' : (lang === 'en' ? 'en' : 'fr');
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Mettre à jour les attributs data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = getTranslation(key);
    if (translation) el.textContent = translation;
  });

  // Mettre à jour les attributs data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const translation = getTranslation(key);
    if (translation) el.innerHTML = translation;
  });

  // Mettre à jour les placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = getTranslation(key);
    if (translation) el.placeholder = translation;
  });

  // Mettre à jour le titre de la page si data-i18n-title
  const pageTitle = document.querySelector('[data-i18n-title]');
  if (pageTitle) {
    const key = pageTitle.getAttribute('data-i18n-title');
    const t = getTranslation(key);
    if (t) document.title = t;
  }

  // Mettre à jour le sélecteur de langue visuellement
  updateLangSelectorUI();

  // Déclencher un événement personnalisé pour les scripts dynamiques
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function getTranslation(key) {
  return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS['fr']?.[key] || key;
}

function updateLangSelectorUI() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const lang = btn.getAttribute('data-lang');
    btn.classList.toggle('active', lang === currentLang);
  });
}

function initI18n() {
  // Appliquer la langue initiale
  setLanguage(currentLang);
}

// Écouter l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', initI18n);
