/* =============================================
   E-SCOOT — Base de donnees Produits (i18n v2)
   =============================================
   Fichier de donnees central avec traductions
   FR (defaut) / EN / AR
   ============================================= */

const PRODUCTS = [

  /* ------------------------------------------
     Q11 MAX
  ------------------------------------------ */

  {
    id: "q11-max",
    name: "Q11 MAX",
    subtitle: "Moto Puissance 2000W",
    category: "electric-motorcycle",
    categoryLabel: "Moto Électrique",
    price: 380000,
    oldPrice: 420000,
    badgeColor: "primary",
    mainImage: "assets/images/models/q11-max/main.jpg",
    description: "Ce scooter electrique combine puissance, confort et autonomie grace a son moteur brushless de 2000W et sa batterie Lithium 64V 50Ah. Avec une vitesse maximale de 60 km/h et une autonomie de 120 km, il est parfait pour les trajets quotidiens en ville ou en peripherie. Equipe de freins a disque hydrauliques, d'une double suspension, de pneus tubeless 16 pouces et d'accessoires modernes (eclairage LED, enceinte Bluetooth), il offre une experience de conduite agreable et securisee. Livre avec service apres-vente et garantie.",
    shortDesc: "Scooter electrique 2000W, autonomie 120 km, vitesse 60 km/h, batterie Lithium 64V/50Ah.",
    images: [
      "assets/images/models/q11-max/main.jpg",
      "assets/images/models/q11-max/Q11_1.jpeg",
      "assets/images/models/q11-max/Q11_2.jpeg",
      "assets/images/models/q11-max/Q11_3.jpeg",
      "assets/images/models/q11-max/Q11_4.jpeg",
    ],
    colors: [
      {
        name: "Noir",
        hex: "#000000",
        images: [
          "assets/images/models/q11-max/main.jpg",
          "assets/images/models/q11-max/Q11_1.jpeg",
          "assets/images/models/q11-max/Q11_2.jpeg",
          "assets/images/models/q11-max/Q11_3.jpeg",
          "assets/images/models/q11-max/Q11_4.jpeg",
        ]
      },
      {
        name: "Blanc",
        hex: "#ffffff",
        images: [
          "assets/images/models/q11-max/Q11_9.jpeg",
          "assets/images/models/q11-max/Q11_10.jpeg",
          "assets/images/models/q11-max/Q11_11.jpeg",
          "assets/images/models/q11-max/Q11_12.jpeg"
        ]
      },
      {
        name: "Argent",
        hex: "#C0C0C0",
        images: [
          "assets/images/models/q11-max/Q11_5.jpeg",
          "assets/images/models/q11-max/Q11_6.jpeg",
          "assets/images/models/q11-max/Q11_7.jpeg",
          "assets/images/models/q11-max/Q11_8.jpeg"
        ]
      }
    ],
    specs: {
      "Vitesse Max": "60 km/h",
      "Autonomie": "120 km",
      "Moteur": "2000W Brushless",
      "Batterie": "Lithium 64V 50Ah",
      "Pneus": "16 pouces Tubeless",
      "Freins": "Disques hydrauliques AV/AR",
      "Suspension": "Fourche hydraulique AV + double amortisseur AR",
      "Charge Max": "160 kg",
      "Poids": "78 kg",
      "Temps de charge": "6-8 heures"
    },
    features: [
      {
        icon: "zap",
        title: "Moteur 2000W",
        desc: "Puissance optimale pour les trajets urbains et periurbains."
      },
      {
        icon: "batr",
        title: "Batterie 64V 50Ah",
        desc: "Grande autonomie de 120 km, ideale pour les longs deplacements."
      },
      {
        icon: "shield",
        title: "Freins hydrauliques",
        desc: "Disques avant et arriere pour un freinage puissant et securise."
      },
      {
        icon: "blth",
        title: "Enceinte Bluetooth",
        desc: "Profitez de votre musique directement depuis le scooter."
      },
      {
        icon: "sun",
        title: "Eclairage LED",
        desc: "Phares et feux LED pour une visibilite et un style modernes."
      },
      {
        icon: "tool",
        title: "Service Apres-Vente",
        desc: "Garantie et SAV disponibles en Algerie."
      }
    ],
    i18n: {
      en: {
        subtitle: "2000W Power Motorcycle",
        categoryLabel: "Electric Motorcycle",
        description: "This electric scooter combines power, comfort and autonomy thanks to its 2000W brushless motor and its 64V 50Ah Lithium battery. With a maximum speed of 60 km/h and a range of 120 km, it is perfect for daily trips in the city or suburbs. Equipped with hydraulic disc brakes, double suspension, 16-inch tubeless tires and modern accessories (LED lighting, Bluetooth speaker), it offers a pleasant and safe driving experience. Delivered with after-sales service and warranty.",
        shortDesc: "Electric scooter 2000W, range 120 km, speed 60 km/h, Lithium battery 64V/50Ah.",
        features: [
          {
            title: "2000W Motor",
            desc: "Optimal power for urban and peri-urban trips."
          },
          {
            title: "64V 50Ah Battery",
            desc: "Great autonomy of 120 km, ideal for long trips."
          },
          {
            title: "Hydraulic Brakes",
            desc: "Front and rear discs for powerful and safe braking."
          },
          {
            title: "Bluetooth Speaker",
            desc: "Enjoy your music directly from the scooter."
          },
          {
            title: "LED Lighting",
            desc: "LED headlights and taillights for modern visibility and style."
          },
          {
            title: "After-Sales Service",
            desc: "Warranty and after-sales service available in Algeria."
          }
        ],
      },
      ar: {
        subtitle: "دراجة نارية بقوة 2000 واط",
        categoryLabel: "دراجة نارية كهربائية",
        description: "يجمع هذا السكوتر الكهربائي بين القوة والراحة والاستقلالية بفضل محركه brushless بقوة 2000 واط وبطاريته الليثيوم 64V 50Ah. بسرعة قصوى تبلغ 60 كم/ساعة ومدى يصل إلى 120 كم، هو مثالي للتنقلات اليومية في المدينة أو الضواحي. مجهز بفرامل قرصية هيدروليكية وتعليق مزدوج وإطارات tubeless مقاس 16 بوصة وإكسسوارات حديثة (إضاءة LED ومكبر صوت Bluetooth)، يوفر تجربة قيادة ممتعة وآمنة. يتم التوصيل مع خدمة ما بعد البيع والضمان.",
        shortDesc: "سكوتر كهربائي 2000 واط، مدى 120 كم، سرعة 60 كم/ساعة، بطارية ليثيوم 64V/50Ah.",
        features: [
          {
            title: "محرك 2000 واط",
            desc: "قوة مثالية للتنقلات الحضرية وشبه الحضرية."
          },
          {
            title: "بطارية 64V 50Ah",
            desc: "استقلالية كبيرة تصل إلى 120 كم، مثالية للتنقلات الطويلة."
          },
          {
            title: "فرامل هيدروليكية",
            desc: "أقراص أمامية وخلفية لتوقف قوي وآمن."
          },
          {
            title: "مكبر صوت Bluetooth",
            desc: "استمتع بموسيقاك مباشرة من السكوتر."
          },
          {
            title: "إضاءة LED",
            desc: "مصابيح أمامية وخلفية LED للرؤية والأناقة العصريين."
          },
          {
            title: "خدمة ما بعد البيع",
            desc: "الضمان وخدمة ما بعد البيع متوفرة في الجزائر."
          }
        ],
      },
    }
  },

  /* ------------------------------------------
     Q11 PRO
  ------------------------------------------ */

  {
    id: "q11-pro",
    name: "Q11 PRO",
    subtitle: "Moto Puissance 2000W",
    category: "electric-motorcycle",
    categoryLabel: "Moto Électrique",
    price: 280000,
    oldPrice: 320000,
    badgeColor: "primary",
    mainImage: "assets/images/models/q11-pro/main.jpg",
    description: "La moto electrique Q11 PRO offre un excellent rapport puissance/prix pour la ville. Avec son moteur de 2000W, elle atteint 60 km/h et offre une autonomie de 60 km. Equipee de freins hydrauliques, de doubles suspensions, d'une batterie Lithium 64V 30Ah et meme d'un haut-parleur Bluetooth, c'est la solution ideale pour des deplacements quotidiens confortables et pratiques.",
    shortDesc: "Moto electrique 2000W, batterie Lithium 64V 30Ah, autonomie 60 km, vitesse max 60 km/h.",
    images: [
      "assets/images/models/q11-pro/main.jpg",
      "assets/images/models/q11-pro/Q11_7.jpeg",
      "assets/images/models/q11-pro/Q11_8.jpeg",
      "assets/images/models/q11-pro/Q11_9.jpeg",
      "assets/images/models/q11-pro/Q11_10.jpeg",
      "assets/images/models/q11-pro/Q11_11.jpeg",
      "assets/images/models/q11-pro/Q11_12.jpeg"
    ],
    colors: [
      {
        name: "Noir",
        hex: "#000000",
        images: [
          "assets/images/models/q11-pro/main.jpg",
          "assets/images/models/q11-pro/Q11_1.jpeg",
          "assets/images/models/q11-pro/Q11_2.jpeg",
          "assets/images/models/q11-pro/Q11_3.jpeg",
          "assets/images/models/q11-pro/Q11_4.jpeg",
        ]
      },
      {
        name: "Blanc",
        hex: "#ffffff",
        images: [
          "assets/images/models/q11-pro/Q11_9.jpeg",
          "assets/images/models/q11-pro/Q11_10.jpeg",
          "assets/images/models/q11-pro/Q11_11.jpeg",
          "assets/images/models/q11-pro/Q11_12.jpeg"
        ]
      },
      {
        name: "Argent",
        hex: "#C0C0C0",
        images: [
          "assets/images/models/q11-pro/Q11_5.jpeg",
          "assets/images/models/q11-pro/Q11_6.jpeg",
          "assets/images/models/q11-pro/Q11_7.jpeg",
          "assets/images/models/q11-pro/Q11_8.jpeg"
        ]
      }
    ],
    specs: {
      "Vitesse Max": "60 km/h",
      "Autonomie": "60 km",
      "Moteur": "2000W",
      "Batterie": "64V 30Ah Lithium",
      "Pneus": "120/70-12 Tubeless",
      "Freins": "Hydrauliques",
      "Suspension": "Double suspensions",
      "Charge Max": "150 kg",
      "Poids": "72 kg",
      "Temps de charge": "5-7 heures"
    },
    features: [
      { icon: "zap", title: "Moteur 2000W", desc: "Puissance optimale pour vos trajets urbains" },
      { icon: "batr", title: "Batterie 64V 30Ah", desc: "Autonomie certifiee jusqu'a 60 km" },
      { icon: "shield", title: "Freins Hydrauliques", desc: "Systeme de freinage hydraulique haute securite" },
      { icon: "blth", title: "Enceinte Bluetooth", desc: "Haut-parleur integre pour ecouter votre musique" },
      { icon: "sun", title: "Eclairage LED", desc: "Phares LED complets pour une visibilite maximale" },
      { icon: "tool", title: "SAV & Garantie", desc: "Service apres-vente et garantie disponibles" }
    ],
    i18n: {
      en: {
        subtitle: "2000W Power Motorcycle",
        categoryLabel: "Electric Motorcycle",
        description: "The Q11 PRO electric motorcycle offers an excellent power/price ratio for the city. With its 2000W motor, it reaches 60 km/h and offers a range of 60 km. Equipped with hydraulic brakes, double suspensions, a 64V 30Ah Lithium battery and even a Bluetooth speaker, it is the ideal solution for comfortable and practical daily commuting.",
        shortDesc: "Electric motorcycle 2000W, Lithium battery 64V 30Ah, range 60 km, max speed 60 km/h.",
        features: [
          { title: "2000W Motor", desc: "Optimal power for your urban trips" },
          { title: "64V 30Ah Battery", desc: "Certified range up to 60 km" },
          { title: "Hydraulic Brakes", desc: "High-security hydraulic braking system" },
          { title: "Bluetooth Speaker", desc: "Integrated speaker to listen to your music" },
          { title: "LED Lighting", desc: "Full LED headlights for maximum visibility" },
          { title: "After-Sales & Warranty", desc: "After-sales service and warranty available" }
        ],
      },
      ar: {
        subtitle: "دراجة نارية بقوة 2000 واط",
        categoryLabel: "دراجة نارية كهربائية",
        description: "توفر دراجة Q11 PRO الكهربائية نسبة ممتازة بين القوة والسعر للمدينة. بمحركها بقوة 2000 واط، تصل إلى 60 كم/ساعة وتقدم مدى يصل إلى 60 كم. مجهزة بفرامل هيدروليكية وتعليق مزدوج وبطارية ليثيوم 64V 30Ah ومكبر صوت Bluetooth، هي الحل المثالي للتنقلات اليومية المريحة والعملية.",
        shortDesc: "دراجة نارية كهربائية 2000 واط، بطارية ليثيوم 64V 30Ah، مدى 60 كم، سرعة قصوى 60 كم/ساعة.",
        features: [
          { title: "محرك 2000 واط", desc: "قوة مثالية للتنقلات الحضرية" },
          { title: "بطارية 64V 30Ah", desc: "مدى معتمد يصل إلى 60 كم" },
          { title: "فرامل هيدروليكية", desc: "نظام فرامل هيدروليكي عالي الأمان" },
          { title: "مكبر صوت Bluetooth", desc: "سماعة مدمجة للاستماع إلى موسيقاك" },
          { title: "إضاءة LED", desc: "مصابيح LED كاملة لأقصى رؤية" },
          { title: "خدمة ما بعد البيع والضمان", desc: "خدمة ما بعد البيع والضمان متوفرة" }
        ],
      },
    }
  },

  /* ------------------------------------------
     M8 MOTO
  ------------------------------------------ */

  {
    id: "m8-moto",
    name: "M8 MOTO",
    subtitle: "Moto Puissance 500W",
    category: "electric-motorcycle",
    categoryLabel: "Moto Électrique",
    price: 180000,
    oldPrice: 210000,
    badgeColor: "primary",
    mainImage: "assets/images/models/m8-moto/main.jpg",
    description: "La moto electrique M8 allie un charme vintage a la mobilite electrique. Son design retro avec son phare rond caracteristique et sa couleur mint en font un modele urbain tres attrayant. Dotee d'un moteur de 500W, elle atteint une vitesse de 45 km/h. Sa batterie Acide 48V 24Ah offre une autonomie de 50 km, parfaite pour vos trajets quotidiens en ville en toute tranquillite grace au SAV et a la garantie inclus.",
    shortDesc: "Moto electrique vintage M8 500W, batterie Acide 48V 24Ah, autonomie 50 km, vitesse max 45 km/h.",
    images: [
      "assets/images/models/m8-moto/main.jpg",
      "assets/images/models/m8-moto/M8_1.jpeg",
      "assets/images/models/m8-moto/M8_2.jpeg",
      "assets/images/models/m8-moto/M8_3.jpeg",
      "assets/images/models/m8-moto/M8_4.jpeg"
    ],
    colors: [
      {
        name: "Vert",
        hex: "#008000",
        images: [
          "assets/images/models/m8-moto/main.jpg",
          "assets/images/models/m8-moto/M8_1.jpeg",
          "assets/images/models/m8-moto/M8_2.jpeg",
          "assets/images/models/m8-moto/M8_3.jpeg",
          "assets/images/models/m8-moto/M8_4.jpeg"
        ]
      },
      {
        name: "Rose",
        hex: "#FFC0CB",
        images: [
          "assets/images/models/m8-moto/M8_5.jpeg",
          "assets/images/models/m8-moto/M8_6.jpeg",
          "assets/images/models/m8-moto/M8_7.jpeg",
          "assets/images/models/m8-moto/M8_8.jpeg"
        ]
      }
    ],
    specs: {
      "Vitesse Max": "45 km/h",
      "Autonomie": "50 km",
      "Moteur": "500W",
      "Batterie": "48V 24Ah Acide",
      "Pneus": "3.00-10 Tubeless",
      "Freins": "A disque",
      "Suspension": "Fourche telescopique + amortisseur AR",
      "Charge Max": "130 kg",
      "Poids": "65 kg",
      "Temps de charge": "6-8 heures"
    },
    features: [
      { icon: "plt", title: "Design Vintage", desc: "Style retro elegant avec phare rond" },
      { icon: "zap", title: "Moteur 500W", desc: "Ideal pour les petits trajets urbains" },
      { icon: "batr", title: "Batterie Acide 48V 24Ah", desc: "Autonomie certifiee jusqu'a 50 km" },
      { icon: "shield", title: "Freins a disque", desc: "Freinage securise et reactif" },
      { icon: "sun", title: "Phare LED", desc: "Visibilite optimale avec un style classique" },
      { icon: "tool", title: "SAV & Garantie", desc: "Service apres-vente et garantie disponibles" }
    ],
    i18n: {
      en: {
        subtitle: "500W Power Motorcycle",
        categoryLabel: "Electric Motorcycle",
        description: "The M8 electric motorcycle combines vintage charm with electric mobility. Its retro design with its characteristic round headlight and mint color make it a very attractive urban model. With its 500W motor, it reaches a speed of 45 km/h. Its Acid 48V 24Ah battery offers a range of 50 km, perfect for your daily city trips with complete peace of mind thanks to the included after-sales service and warranty.",
        shortDesc: "Vintage electric motorcycle M8 500W, Acid battery 48V 24Ah, range 50 km, max speed 45 km/h.",
        features: [
          { title: "Vintage Design", desc: "Elegant retro style with round headlight" },
          { title: "500W Motor", desc: "Ideal for short urban trips" },
          { title: "Acid Battery 48V 24Ah", desc: "Certified range up to 50 km" },
          { title: "Disc Brakes", desc: "Secure and responsive braking" },
          { title: "LED Headlight", desc: "Optimal visibility with a classic style" },
          { title: "After-Sales & Warranty", desc: "After-sales service and warranty available" }
        ],
      },
      ar: {
        subtitle: "دراجة نارية بقوة 500 واط",
        categoryLabel: "دراجة نارية كهربائية",
        description: "تجمع دراجة M8 الكهربائية بين جاذبية الطراز القديم والتنقل الكهربائي. تصميمها الكلاسيكي بمصباحها الأمامي الدائري المميز ولونها النعناعي يجعلانها نموذجًا حضريًا جذابًا للغاية. بمحركها بقوة 500 واط، تصل إلى سرعة 45 كم/ساعة. بطاريتها الحمضية 48V 24Ah توفر مدى يصل إلى 50 كم، مثالية للتنقلات اليومية في المدينة بكل هدوء بفضل خدمة ما بعد البيع والضمان المشمولين.",
        shortDesc: "دراجة نارية كهربائية كلاسيكية M8 بقوة 500 واط، بطارية حمضية 48V 24Ah، مدى 50 كم، سرعة قصوى 45 كم/ساعة.",
        features: [
          { title: "تصميم كلاسيكي", desc: "أسلوب أنيق ريترو مع مصباح أمامي دائري" },
          { title: "محرك 500 واط", desc: "مثالي للتنقلات الحضرية القصيرة" },
          { title: "بطارية حمضية 48V 24Ah", desc: "مدى معتمد يصل إلى 50 كم" },
          { title: "فرامل قرصية", desc: "توقف آمن وسريع الاستجابة" },
          { title: "مصباح أمامي LED", desc: "رؤية مثالية بأسلوب كلاسيكي" },
          { title: "خدمة ما بعد البيع والضمان", desc: "خدمة ما بعد البيع والضمان متوفرة" }
        ],
      },
    }
  },

  /* ------------------------------------------
     N7 MOTO
  ------------------------------------------ */

  {
    id: "n7-super",
    name: "N7 MOTO",
    subtitle: "Moto Puissance 1500W",
    category: "electric-motorcycle",
    categoryLabel: "Moto Électrique",
    price: 240000,
    oldPrice: 270000,
    badgeColor: "primary",
    mainImage: "assets/images/models/n7/main.jpg",
    description: "La moto electrique N7 allie style et praticite urbaine. Son design moderne arbore une decoration sportive epuree. Avec son moteur de 1500W, elle atteint une vitesse de 50 km/h, ce qui la rend parfaite pour les deplacements quotidiens en ville. Elle est equipee de freins hydrauliques, de doubles suspensions, d'une batterie Lithium 48V 30Ah offrant une autonomie de 60 km, ainsi que d'un service apres-vente et d'une garantie inclus.",
    shortDesc: "Moto electrique N7, moteur 1500W, batterie Lithium 48V 30Ah, autonomie 60 km.",
    images: [
      "assets/images/models/n7/main.jpg",
      "assets/images/models/n7/N7_5.jpeg"
    ],
    colors: [
      {
        name: "Noir",
        hex: "#000000",
        images: [
          "assets/images/models/n7/main.jpg",
          "assets/images/models/n7/N7_3.jpeg",
          "assets/images/models/n7/N7_4.jpeg"
        ]
      },
      {
        name: "Blanc",
        hex: "#ffffff",
        images: [
          "assets/images/models/n7/N7_1.jpeg",
          "assets/images/models/n7/N7_2.jpeg"
        ]
      },
      {
        name: "Argent",
        hex: "#C0C0C0",
        images: [
          "assets/images/models/n7/N7_5.jpeg",
          "assets/images/models/n7/N7_6.jpeg",
        ]
      }
    ],
    specs: {
      "Vitesse Max": "50 km/h",
      "Autonomie": "60 km",
      "Moteur": "1500W",
      "Batterie": "48V 30Ah Lithium",
      "Pneus": "120/70-12 (Taille standard visible)",
      "Freins": "Hydrauliques (avant/arriere)",
      "Suspension": "Double suspensions",
      "Charge Max": "140 kg",
      "Poids": "75 kg",
      "Temps de charge": "6-8 heures"
    },
    features: [
      { icon: "star", title: "Style Sport Urbain", desc: "Design moderne avec decoration sportive" },
      { icon: "zap", title: "Moteur 1500W", desc: "Puissance ideale pour la ville" },
      { icon: "shield", title: "Freins Hydrauliques", desc: "Systeme de freinage haute securite" },
      { icon: "batr", title: "Autonomie 60km", desc: "Batterie Lithium 48V" },
      { icon: "gauge", title: "Compteur Digital", desc: "Affichage complet (standard pour ce type)" },
      { icon: "tool", title: "SAV & Garantie", desc: "Service apres-vente et garantie disponibles" }
    ],
    i18n: {
      en: {
        subtitle: "1500W Power Motorcycle",
        categoryLabel: "Electric Motorcycle",
        description: "The N7 electric motorcycle combines style and urban practicality. Its modern design features a sleek sporty decoration. With its 1500W motor, it reaches a speed of 50 km/h, making it perfect for daily city commuting. It is equipped with hydraulic brakes, double suspensions, a 48V 30Ah Lithium battery offering a range of 60 km, as well as an included after-sales service and warranty.",
        shortDesc: "Electric motorcycle N7, 1500W motor, Lithium battery 48V 30Ah, range 60 km.",
        features: [
          { title: "Urban Sport Style", desc: "Modern design with sporty decoration" },
          { title: "1500W Motor", desc: "Ideal power for the city" },
          { title: "Hydraulic Brakes", desc: "High-security braking system" },
          { title: "60km Range", desc: "48V Lithium battery" },
          { title: "Digital Dashboard", desc: "Full display (standard for this type)" },
          { title: "After-Sales & Warranty", desc: "After-sales service and warranty available" }
        ],
      },
      ar: {
        subtitle: "دراجة نارية بقوة 1500 واط",
        categoryLabel: "دراجة نارية كهربائية",
        description: "تجمع دراجة N7 الكهربائية بين الأناقة والعملية الحضرية. تصميمها العصري يتزين بزينة رياضية أنيقة. بمحركها بقوة 1500 واط، تصل إلى سرعة 50 كم/ساعة، مما يجعلها مثالية للتنقلات اليومية في المدينة. مجهزة بفرامل هيدروليكية وتعليق مزدوج وبطارية ليثيوم 48V 30Ah توفر مدى يصل إلى 60 كم، بالإضافة إلى خدمة ما بعد البيع والضمان المشمولين.",
        shortDesc: "دراجة نارية كهربائية N7، محرك 1500 واط، بطارية ليثيوم 48V 30Ah، مدى 60 كم.",
        features: [
          { title: "أسلوب رياضي حضري", desc: "تصميم عصري بزينة رياضية" },
          { title: "محرك 1500 واط", desc: "قوة مثالية للمدينة" },
          { title: "فرامل هيدروليكية", desc: "نظام فرامل عالي الأمان" },
          { title: "مدى 60 كم", desc: "بطارية ليثيوم 48V" },
          { title: "عداد رقمي", desc: "عرض كامل (قياسي لهذا النوع)" },
          { title: "خدمة ما بعد البيع والضمان", desc: "خدمة ما بعد البيع والضمان متوفرة" }
        ],
      },
    }
  },

  /* ------------------------------------------
     TROTTINETTES ÉLECTRIQUES
  ------------------------------------------ */

  /* ------------------------------------------
     G-63
  ------------------------------------------ */

  {
    id: "g63",
    name: "G-63",
    subtitle: "Trottinette Puissance 1500W",
    category: "electric-scooter",
    categoryLabel: "Trottinette",
    price: 220000,
    oldPrice: 250000,
    badgeColor: "primary",
    mainImage: "assets/images/models/g63/main.jpg",
    description: "La G-63 est une trottinette electrique tout-terrain robuste. Avec son moteur puissant de 1500W et sa batterie Lithium-Ion 48V 20Ah geree par un BMS intelligent, elle offre une vitesse allant jusqu'a 60 km/h et une excellente autonomie de 60 a 80 km. Concue pour tous les environnements, elle est equipee de pneus 11 pouces tubeless a crampons, de suspensions avant/arriere, de freins hydrauliques, et beneficie d'une certification d'etancheite IP65.",
    shortDesc: "Trottinette electrique tout-terrain G-63 : Moteur 1500W, batterie 48V 20Ah, etancheite IP65 et jusqu'a 80km d'autonomie.",
    images: [
      "assets/images/models/g63/main.jpg",
      "assets/images/models/g63/G63_1.jpeg",
      "assets/images/models/g63/G63_2.jpeg",
      "assets/images/models/g63/G63_3.jpeg",
      "assets/images/models/g63/G63_4.jpeg",
      "assets/images/models/g63/G63_5.jpeg",
      "assets/images/models/g63/G63_6.jpeg"
    ],
    colors: [
      {
        name: "Noir",
        hex: "#000000",
        images: [
          "assets/images/models/g63/main.jpg",
          "assets/images/models/g63/G63_1.jpeg",
          "assets/images/models/g63/G63_2.jpeg",
          "assets/images/models/g63/G63_3.jpeg",
          "assets/images/models/g63/G63_4.jpeg",
          "assets/images/models/g63/G63_5.jpeg",
          "assets/images/models/g63/G63_6.jpeg"
        ]
      }
    ],
    specs: {
      "Vitesse Max": "50-60 km/h",
      "Autonomie": "60-80 km",
      "Moteur": "1500W",
      "Batterie": "48V 20Ah Lithium-Ion (BMS intelligent)",
      "Pneus": "11 pouces tubeless a crampons",
      "Freins": "Hydrauliques",
      "Suspension": "Avant et Arriere",
      "Capacite de franchissement": "30°",
      "Charge Max": "120 kg",
      "Poids": "35 kg",
      "Temps de charge": "5-6 heures"
    },
    features: [
      {
        icon: "mountain",
        title: "Tout-terrain",
        desc: "Pneus 11\" a crampons et capacite de franchissement de 30°"
      },
      {
        icon: "zap",
        title: "Moteur 1500W",
        desc: "Puissance elevee pour des trajets dynamiques"
      },
      {
        icon: "shield",
        title: "Freins hydrauliques",
        desc: "Freinage puissant et securise en toutes circonstances"
      },
      {
        icon: "batr",
        title: "Autonomie 80km",
        desc: "Batterie haute capacite avec gestion BMS intelligente"
      },
      {
        icon: "droplets",
        title: "Etancheite IP65",
        desc: "Haute resistance a l'eau et a la poussiere (Waterproof)"
      },
      {
        icon: "tool",
        title: "SAV & Garantie",
        desc: "Service Apres-Vente disponible et service de garantie inclus"
      }
    ],
    i18n: {
      en: {
        subtitle: "1500W Power Scooter",
        categoryLabel: "Electric Scooter",
        description: "The G-63 is a robust all-terrain electric scooter. With its powerful 1500W motor and its 48V 20Ah Lithium-Ion battery managed by an intelligent BMS, it offers a speed of up to 60 km/h and an excellent range of 60 to 80 km. Designed for all environments, it is equipped with 11-inch tubeless studded tires, front/rear suspensions, hydraulic brakes, and benefits from an IP65 waterproof certification.",
        shortDesc: "All-terrain electric scooter G-63: 1500W motor, 48V 20Ah battery, IP65 waterproof and up to 80km range.",
        features: [
          {
            title: "All-Terrain",
            desc: "11\" studded tires and 30° climbing capacity"
          },
          {
            title: "1500W Motor",
            desc: "High power for dynamic trips"
          },
          {
            title: "Hydraulic Brakes",
            desc: "Powerful and safe braking in all circumstances"
          },
          {
            title: "80km Range",
            desc: "High-capacity battery with intelligent BMS management"
          },
          {
            title: "IP65 Waterproof",
            desc: "High resistance to water and dust (Waterproof)"
          },
          {
            title: "After-Sales & Warranty",
            desc: "After-sales service available and warranty service included"
          }
        ],
      },
      ar: {
        subtitle: "سكوتر بقوة 1500 واط",
        categoryLabel: "سكوتر كهربائي",
        description: "G-63 هو سكوتر كهربائي قوي لجميع التضاريس. بمحركه القوي بقوة 1500 واط وبطاريته الليثيوم أيون 48V 20Ah المدارة بواسطة BMS ذكي، يوفر سرعة تصل إلى 60 كم/ساعة ومدى ممتاز يتراوح بين 60 و80 كم. مصمم لجميع البيئات، مجهز بإطارات tubeless مقاس 11 بوصة بمسامير وتعليق أمامي/خلفي وفرامل هيدروليكية، ويستفيد من شهادة مقاومة للماء IP65.",
        shortDesc: "سكوتر كهربائي لجميع التضاريس G-63: محرك 1500 واط، بطارية 48V 20Ah، مقاوم للماء IP65 ومدى يصل إلى 80 كم.",
        features: [
          {
            title: "جميع التضاريس",
            desc: "إطارات مقاس 11\" بمسامير وقدرة تسلق 30°"
          },
          {
            title: "محرك 1500 واط",
            desc: "قوة عالية للتنقلات الديناميكية"
          },
          {
            title: "فرامل هيدروليكية",
            desc: "توقف قوي وآمن في جميع الظروف"
          },
          {
            title: "مدى 80 كم",
            desc: "بطارية عالية السعة مع إدارة BMS ذكية"
          },
          {
            title: "مقاومة للماء IP65",
            desc: "مقاومة عالية للماء والغبار (Waterproof)"
          },
          {
            title: "خدمة ما بعد البيع والضمان",
            desc: "خدمة ما بعد البيع متوفرة وخدمة الضمان مشمولة"
          }
        ],
      },
    }
  },

  /* ------------------------------------------
     M8 SCOOTER
  ------------------------------------------ */

  {
    id: "m8-scooter",
    name: "M8 SCOOTER",
    subtitle: "Trottinette Puissance 350W",
    category: "electric-scooter",
    categoryLabel: "Trottinette",
    price: 85000,
    oldPrice: 100000,
    badgeColor: "primary",
    mainImage: "assets/images/models/m8-scooter/main.jpg",
    description: "La E-SCOOTER M8 est une trottinette electrique urbaine pensee pour vous faciliter la vie ('Make your life easier'). Equipee d'un moteur de 350W et d'une batterie de 36V 10.4Ah, elle offre une autonomie fiable de 30 a 35 km pour une vitesse de pointe de 25 km/h. Particulierement securisante grace a ses freins a disque et ses clignotants directement integres au guidon, elle se distingue egalement par sa praticite avec un systeme de pliage rapide en 3 etapes.",
    shortDesc: "Trottinette electrique M8 : Moteur 350W, autonomie de 30-35 km, freins a disque et clignotants au guidon integres.",
    images: [
      "assets/images/models/m8-scooter/main.jpg"
    ],
    colors: [
      { name: "Noir", hex: "#000000", images: ["assets/images/models/m8-scooter/main.jpg"] },
      { name: "Blanc", hex: "#ffffff", images: ["assets/images/models/m8-scooter/main.jpg"] }
    ],
    specs: {
      "Vitesse Max": "25 km/h",
      "Autonomie": "30-35 km",
      "Moteur": "350W",
      "Batterie": "36V 10.4Ah Lithium-ion",
      "Pneus": "10 pouces tubeless",
      "Freins": "A Disque",
      "Suspension": "Suspension avant",
      "Charge Max": "100 kg",
      "Poids": "18 kg",
      "Temps de charge": "4-5 heures"
    },
    features: [
      { icon: "arrow-left-right", title: "Clignotants de guidon", desc: "Clignotants integres pour une securite optimale en ville" },
      { icon: "zap", title: "Moteur 350W", desc: "Puissance ideale pour vos deplacements urbains" },
      { icon: "batr", title: "Autonomie 30-35 km", desc: "Parfait pour les trajets quotidiens" },
      { icon: "fold", title: "Pliage en 3 etapes", desc: "Systeme de pliage simple, rapide et pratique" },
      { icon: "sun", title: "Eclairage complet", desc: "Eclairage avant/arriere et clignotants" },
      { icon: "shield", title: "Garantie & SAV", desc: "Service Apres-Vente et garantie disponibles" }
    ],
    i18n: {
      en: {
        subtitle: "350W Power Scooter",
        categoryLabel: "Electric Scooter",
        description: "The E-SCOOTER M8 is an urban electric scooter designed to make your life easier. Equipped with a 350W motor and a 36V 10.4Ah battery, it offers a reliable range of 30 to 35 km for a top speed of 25 km/h. Particularly safe thanks to its disc brakes and turn signals directly integrated into the handlebars, it also stands out for its practicality with a quick 3-step folding system.",
        shortDesc: "Electric scooter M8: 350W motor, range of 30-35 km, disc brakes and integrated handlebar turn signals.",
        features: [
          { title: "Handlebar Turn Signals", desc: "Integrated turn signals for optimal city safety" },
          { title: "350W Motor", desc: "Ideal power for your urban trips" },
          { title: "30-35 km Range", desc: "Perfect for daily commutes" },
          { title: "3-Step Folding", desc: "Simple, fast and practical folding system" },
          { title: "Full Lighting", desc: "Front/rear lighting and turn signals" },
          { title: "Warranty & After-Sales", desc: "After-sales service and warranty available" }
        ],
      },
      ar: {
        subtitle: "سكوتر بقوة 350 واط",
        categoryLabel: "سكوتر كهربائي",
        description: "E-SCOOTER M8 هو سكوتر كهربائي حضري مصمم لتسهيل حياتك. مجهز بمحرك بقوة 350 واط وبطارية 36V 10.4Ah، يوفر مدى موثوق يتراوح بين 30 و35 كم لسرعة قصوى تبلغ 25 كم/ساعة. آمن بشكل خاص بفضل فرامله القرصية وإشارات الانعطاف المدمجة مباشرة في المقود، يتميز أيضًا بعمليته مع نظام طي سريع في 3 خطوات.",
        shortDesc: "سكوتر كهربائي M8: محرك 350 واط، مدى يتراوح بين 30-35 كم، فرامل قرصية وإشارات انعطاف مدمجة في المقود.",
        features: [
          { title: "إشارات انعطاف في المقود", desc: "إشارات انعطاف مدمجة لأمان مثالي في المدينة" },
          { title: "محرك 350 واط", desc: "قوة مثالية للتنقلات الحضرية" },
          { title: "مدى 30-35 كم", desc: "مثالي للتنقلات اليومية" },
          { title: "طي في 3 خطوات", desc: "نظام طي بسيط وسريع وعملي" },
          { title: "إضاءة كاملة", desc: "إضاءة أمامية/خلفية وإشارات انعطاف" },
          { title: "الضمان وخدمة ما بعد البيع", desc: "خدمة ما بعد البيع والضمان متوفرة" }
        ],
      },
    }
  },

  /* ------------------------------------------
     T7
  ------------------------------------------ */

  {
    id: "t7",
    name: "T7",
    subtitle: "Trottinette Puissance 350W",
    category: "electric-scooter",
    categoryLabel: "Trottinette",
    price: 70000,
    oldPrice: 85000,
    badgeColor: "primary",
    mainImage: "assets/images/models/t7/main.jpg",
    description: "La E-SCOOTER T7 est la trottinette urbaine par excellence pour faciliter votre quotidien ('Make your life easier'). Equipee d'un moteur de 350W et d'une batterie de 36V 7.8Ah, elle offre une autonomie pratique de 25 a 35 km et peut atteindre une vitesse de 25 a 30 km/h. Legere et dotee d'un systeme de pliage rapide en 3 etapes, elle est ideale pour les derniers kilometres et les deplacements en ville. Elle assure egalement votre securite grace a son freinage a disque.",
    shortDesc: "Trottinette urbaine T7 : Moteur 350W, pliage en 3 etapes, autonomie de 25-35 km et freins a disque.",
    images: [
      "assets/images/models/t7/main.jpg"
    ],
    colors: [
      { name: "Gris", hex: "#808080", images: ["assets/images/models/t7/main.jpg"] },
      { name: "Blanc", hex: "#ffffff", images: ["assets/images/models/t7/main.jpg"] }
    ],
    specs: {
      "Vitesse Max": "25-30 km/h",
      "Autonomie": "25-35 km",
      "Moteur": "350W",
      "Batterie": "36V 7.8Ah Lithium-ion",
      "Pneus": "8.5 pouces",
      "Freins": "A Disque",
      "Suspension": "Non",
      "Charge Max": "100 kg",
      "Poids": "12.5 kg",
      "Temps de charge": "4-5 heures"
    },
    features: [
      { icon: "scale", title: "Legere et pratique", desc: "Poids de 12.5 kg facilitant le transport urbain" },
      { icon: "fold-horizontal", title: "Pliage en 3 etapes", desc: "Systeme de pliage simple, rapide et efficace" },
      { icon: "zap", title: "Moteur 350W", desc: "Puissance ideale pour les trajets en ville" },
      { icon: "batr", title: "Autonomie 25-35 km", desc: "Parfait pour les deplacements du quotidien" },
      { icon: "sun", title: "Eclairage LED", desc: "Visibilite assuree avec eclairage avant et arriere" },
      { icon: "shield", title: "Garantie & SAV", desc: "Service Apres-Vente et garantie disponibles" }
    ],
    i18n: {
      en: {
        subtitle: "350W Power Scooter",
        categoryLabel: "Electric Scooter",
        description: "The E-SCOOTER T7 is the ultimate urban scooter to make your daily life easier. Equipped with a 350W motor and a 36V 7.8Ah battery, it offers a practical range of 25 to 35 km and can reach a speed of 25 to 30 km/h. Lightweight and featuring a quick 3-step folding system, it is ideal for last-mile trips and city commuting. It also ensures your safety thanks to its disc braking.",
        shortDesc: "Urban scooter T7: 350W motor, 3-step folding, range of 25-35 km and disc brakes.",
        features: [
          { title: "Light & Practical", desc: "Weight of 12.5 kg facilitating urban transport" },
          { title: "3-Step Folding", desc: "Simple, fast and efficient folding system" },
          { title: "350W Motor", desc: "Ideal power for city trips" },
          { title: "25-35 km Range", desc: "Perfect for daily commutes" },
          { title: "LED Lighting", desc: "Visibility assured with front and rear lighting" },
          { title: "Warranty & After-Sales", desc: "After-sales service and warranty available" }
        ],
      },
      ar: {
        subtitle: "سكوتر بقوة 350 واط",
        categoryLabel: "سكوتر كهربائي",
        description: "E-SCOOTER T7 هو السكوتر الحضري المثالي لتسهيل حياتك اليومية. مجهز بمحرك بقوة 350 واط وبطارية 36V 7.8Ah، يوفر مدى عملي يتراوح بين 25 و35 كم ويمكن أن تصل سرعته إلى 25-30 كم/ساعة. خفيف الوزن ومزود بنظام طي سريع في 3 خطوات، هو مثالي للكيلومترات الأخيرة والتنقلات الحضرية. يضمن أيضًا سلامتك بفضل فرامله القرصية.",
        shortDesc: "سكوتر حضري T7: محرك 350 واط، طي في 3 خطوات، مدى يتراوح بين 25-35 كم وفرامل قرصية.",
        features: [
          { title: "خفيف وعملي", desc: "وزن 12.5 كجم يسهل النقل الحضري" },
          { title: "طي في 3 خطوات", desc: "نظام طي بسيط وسريع وفعال" },
          { title: "محرك 350 واط", desc: "قوة مثالية للتنقلات في المدينة" },
          { title: "مدى 25-35 كم", desc: "مثالي للتنقلات اليومية" },
          { title: "إضاءة LED", desc: "رؤية مضمونة مع إضاءة أمامية وخلفية" },
          { title: "الضمان وخدمة ما بعد البيع", desc: "خدمة ما بعد البيع والضمان متوفرة" }
        ],
      },
    }
  },

  /* ------------------------------------------
     T5
  ------------------------------------------ */

  {
    id: "t5",
    name: "T5",
    subtitle: "Trottinette Puissance 150W",
    category: "electric-scooter",
    categoryLabel: "Trottinette",
    price: 45000,
    oldPrice: 55000,
    badgeColor: "primary",
    mainImage: "assets/images/models/t5/main.jpg",
    description: "La T5 est la trottinette electrique ideale pour l'initiation des plus jeunes. Concue pour etre 'votre vie plus facile', elle mise sur une securite totale avec une vitesse bridee entre 8 et 10 km/h et un freinage electronique. Son design ludique avec sa pedale lumineuse (LED multicolores sur les cotes) et sa legerete record de 6.5 kg en font le cadeau parfait pour circuler en toute confiance.",
    shortDesc: "Trottinette electrique enfant : Vitesse 8-10 km/h, deck LED multicolore, ultra legere (6.5 kg).",
    images: [
      "assets/images/models/t5/main.jpg"
    ],
    colors: [
      { name: "Noir", hex: "#000000", images: ["assets/images/models/t5/main.jpg"] },
      { name: "Bleu", hex: "#0000FF", images: ["assets/images/models/t5/main.jpg"] },
      { name: "Rose", hex: "#FFC0CB", images: ["assets/images/models/t5/main.jpg"] }
    ],
    specs: {
      "Vitesse Max": "8-10 km/h",
      "Autonomie": "10 km",
      "Moteur": "150W",
      "Batterie": "Lithium-ion",
      "Pneus": "6.5 pouces",
      "Freins": "Electronique",
      "Suspension": "Non",
      "Charge Max": "50 kg",
      "Poids": "6.5 kg",
      "Temps de charge": "3-4 heures"
    },
    features: [
      { icon: "plt", title: "Pedale lumineuse", desc: "Deck equipe de LED multicolores pour un look fun" },
      { icon: "baby", title: "Vitesse adaptee", desc: "Limitee a 8-10 km/h pour une securite maximale" },
      { icon: "scale", title: "Ultra legere", desc: "Seulement 6.5 kg, facile a manipuler pour un enfant" },
      { icon: "fold", title: "Pliage en 3 etapes", desc: "Se plie facilement pour le rangement ou le transport" },
      { icon: "zap", title: "Moteur 150W", desc: "Puissance douce et securisante pour l'apprentissage" },
      { icon: "shield-check", title: "SAV & Garantie", desc: "Service apres-vente et garantie inclus" }
    ],
    i18n: {
      en: {
        subtitle: "150W Power Scooter",
        categoryLabel: "Electric Scooter",
        description: "The T5 is the ideal electric scooter for introducing the youngest riders. Designed to make your life easier, it focuses on total safety with a speed limited between 8 and 10 km/h and electronic braking. Its playful design with its luminous deck (multicolor LEDs on the sides) and its record lightness of 6.5 kg make it the perfect gift for getting around with complete confidence.",
        shortDesc: "Kids electric scooter: Speed 8-10 km/h, multicolor LED deck, ultra-light (6.5 kg).",
        features: [
          { title: "Luminous Deck", desc: "Deck equipped with multicolor LEDs for a fun look" },
          { title: "Adapted Speed", desc: "Limited to 8-10 km/h for maximum safety" },
          { title: "Ultra Light", desc: "Only 6.5 kg, easy for a child to handle" },
          { title: "3-Step Folding", desc: "Folds easily for storage or transport" },
          { title: "150W Motor", desc: "Gentle and reassuring power for learning" },
          { title: "After-Sales & Warranty", desc: "After-sales service and warranty included" }
        ],
      },
      ar: {
        subtitle: "سكوتر بقوة 150 واط",
        categoryLabel: "سكوتر كهربائي",
        description: "T5 هو السكوتر الكهربائي المثالي لتعليم الأطفال. مصمم لتسهيل حياتك، يركز على الأمان الكامل مع سرعة محدودة بين 8 و10 كم/ساعة وفرامل إلكترونية. تصميمه المرح مع سطحه المضيء (LED متعددة الألوان على الجوانب) وخفته القياسية التي تبلغ 6.5 كجم تجعلانها الهدية المثالية للتنقل بكل ثقة.",
        shortDesc: "سكوتر كهربائي للأطفال: سرعة 8-10 كم/ساعة، سطح LED متعدد الألوان، خفيف للغاية (6.5 كجم).",
        features: [
          { title: "سطح مضيء", desc: "سطح مزود بLED متعددة الألوان لمظهر مرح" },
          { title: "سرعة مناسبة", desc: "محددة بين 8-10 كم/ساعة لأقصى أمان" },
          { title: "خفيف للغاية", desc: "فقط 6.5 كجم، سهل التحكم للطفل" },
          { title: "طي في 3 خطوات", desc: "يطوى بسهولة للتخزين أو النقل" },
          { title: "محرك 150 واط", desc: "قوة ناعمة ومطمئنة للتعلم" },
          { title: "خدمة ما بعد البيع والضمان", desc: "خدمة ما بعد البيع والضمان مشمولان" }
        ],
      },
    }
  },
];


/* ===========================================
   FONCTIONS DE LECTURE i18n
   =========================================== */

function getProductText(product, field, lang) {
  lang = lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
  if (lang === 'fr' || !product.i18n || !product.i18n[lang]) {
    return product[field] !== undefined ? product[field] : ''; 
  }
  var trans = product.i18n[lang][field];
  return trans !== undefined ? trans : product[field];
}

function getProductFeatures(product, lang) {
  lang = lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
  if (lang === 'fr' || !product.i18n || !product.i18n[lang] || !product.i18n[lang].features) {
    return product.features || [];
  }
  return product.i18n[lang].features;
}

/* ===========================================
   FONCTIONS UTILITAIRES EXISTANTES
   =========================================== */

function getProductById(id) {
  return PRODUCTS.find(function(p) { return p.id === id; });
}

function getProductsByCategory(category) {
  return PRODUCTS.filter(function(p) { return p.category === category; });
}

function getRelatedProducts(productId, limit) {
  limit = limit || 3;
  var product = getProductById(productId);
  if (!product) return [];
  return PRODUCTS
    .filter(function(p) { return p.id !== productId && p.category === product.category; })
    .slice(0, limit);
}

function formatPrice(price) {
  if (price === null || price === undefined || price === 0) {
    if (typeof getTranslation === 'function') return getTranslation('price.onRequest');
    return 'Sur demande';
  }
  return price.toLocaleString('fr-FR') + ' DA';
}

/* Export pour usage en module Node.js (tests) */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, getProductById, getProductsByCategory, getRelatedProducts, formatPrice, getProductText, getProductFeatures };
}