/* =============================================
   E-SCOOT — Base de données Produits
   =============================================
   Fichier de données central chargé en premier
   sur toutes les pages (via <script> avant main.js).

   Structure de chaque produit :
   - id            : identifiant URL (ex: "q11-max")
   - name          : nom affiché
   - subtitle      : sous-titre
   - category      : "electric-motorcycle" | "electric-scooter"
   - categoryLabel : label lisible pour l'affichage
   - price         : prix en DA (Dinars Algériens)
   - oldPrice      : ancien prix barré (null si pas de promo)
   - mainImage     : image principale (chemin relatif)
   - images        : tableau de toutes les images du produit
   - colors        : tableau de variantes couleur { name, hex, images[] }
   - specs         : objet clé/valeur des spécifications techniques
   - features      : tableau { icon, title, desc } des points forts
   - description   : texte long de description
   - shortDesc     : description courte (meta / résumé)

   Fonctions utilitaires exportées en bas de fichier :
   - getProductById(id)
   - getProductsByCategory(category)
   - getRelatedProducts(productId, limit)
   - formatPrice(price)
   ============================================= */

const PRODUCTS = [

  /* ------------------------------------------
     MOTOS ÉLECTRIQUES
  ------------------------------------------ */

  {
    id: "q11-max",
    name: "Q11 MAX",
    subtitle: "Moto Puissance 2000W",
    category: "electric-motorcycle",
    categoryLabel: "Moto Électrique",
    price: 0,
    oldPrice: 10,
    badgeColor: "primary",
    mainImage: "assets/images/models/q11-max/main.jpg",
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
        "icon": "zap",
        "title": "Moteur 2000W",
        "desc": "Puissance optimale pour les trajets urbains et périurbains."
      },
      {
        "icon": "battery-charging",
        "title": "Batterie 64V 50Ah",
        "desc": "Grande autonomie de 120 km, idéale pour les longs déplacements."
      },
      {
        "icon": "shield",
        "title": "Freins hydrauliques",
        "desc": "Disques avant et arrière pour un freinage puissant et sécurisé."
      },
      {
        "icon": "bluetooth",
        "title": "Enceinte Bluetooth",
        "desc": "Profitez de votre musique directement depuis le scooter."
      },
      {
        "icon": "sun",
        "title": "Éclairage LED",
        "desc": "Phares et feux LED pour une visibilité et un style modernes."
      },
      {
        "icon": "tool",
        "title": "Service Après-Vente",
        "desc": "Garantie et SAV disponibles en Algérie."
      }
    ],
    "description": "Ce scooter électrique combine puissance, confort et autonomie grâce à son moteur brushless de 2000W et sa batterie Lithium 64V 50Ah. Avec une vitesse maximale de 60 km/h et une autonomie de 120 km, il est parfait pour les trajets quotidiens en ville ou en périphérie. Équipé de freins à disque hydrauliques, d'une double suspension, de pneus tubeless 16 pouces et d'accessoires modernes (éclairage LED, enceinte Bluetooth), il offre une expérience de conduite agréable et sécurisée. Livré avec service après-vente et garantie.",
    "shortDesc": "Scooter électrique 2000W, autonomie 120 km, vitesse 60 km/h, batterie Lithium 64V/50Ah."
  },

  {
    id: "q11-pro",
    name: "Q11 PRO",
    subtitle: "Moto Puissance 2000W",
    category: "electric-motorcycle",
    categoryLabel: "Moto Électrique",
    price: 0,
    oldPrice: 10,
    badgeColor: "primary",
    mainImage: "assets/images/models/q11-pro/main.jpg",
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
      { icon: "battery-charging", title: "Batterie 64V 30Ah", desc: "Autonomie certifiée jusqu'à 60 km" },
      { icon: "shield", title: "Freins Hydrauliques", desc: "Système de freinage hydraulique haute sécurité" },
      { icon: "speaker", title: "Enceinte Bluetooth", desc: "Haut-parleur intégré pour écouter votre musique" },
      { icon: "sun", title: "Éclairage LED", desc: "Phares LED complets pour une visibilité maximale" },
      { icon: "tool", title: "SAV & Garantie", desc: "Service après-vente et garantie disponibles" }
    ],
    description: "La moto électrique Q11 PRO offre un excellent rapport puissance/prix pour la ville. Avec son moteur de 2000W, elle atteint 60 km/h et offre une autonomie de 60 km. Équipée de freins hydrauliques, de doubles suspensions, d'une batterie Lithium 64V 30Ah et même d'un haut-parleur Bluetooth, c'est la solution idéale pour des déplacements quotidiens confortables et pratiques.",
    shortDesc: "Moto électrique 2000W, batterie Lithium 64V 30Ah, autonomie 60 km, vitesse max 60 km/h."
  },

  {
    id: "m8-moto",
    name: "M8 MOTO",
    subtitle: "Moto Puissance 500W",
    category: "electric-motorcycle",
    categoryLabel: "Moto Électrique",
    price: 0,
    oldPrice: 10,
    badgeColor: "primary",
    mainImage: "assets/images/models/m8-moto/main.jpg",
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
      "Freins": "À disque",
      "Suspension": "Fourche télescopique + amortisseur AR",
      "Charge Max": "130 kg",
      "Poids": "65 kg",
      "Temps de charge": "6-8 heures"
    },
    features: [
      { icon: "palette", title: "Design Vintage", desc: "Style rétro élégant avec phare rond" },
      { icon: "zap", title: "Moteur 500W", desc: "Idéal pour les petits trajets urbains" },
      { icon: "battery-charging", title: "Batterie Acide 48V 24Ah", desc: "Autonomie certifiée jusqu'à 50 km" },
      { icon: "shield", title: "Freins à disque", desc: "Freinage sécurisé et réactif" },
      { icon: "sun", title: "Phare LED", desc: "Visibilité optimale avec un style classique" },
      { icon: "tool", title: "SAV & Garantie", desc: "Service après-vente et garantie disponibles" }
    ],
    description: "La moto électrique M8 allie un charme vintage à la mobilité électrique. Son design rétro avec son phare rond caractéristique et sa couleur mint en font un modèle urbain très attrayant. Dotée d'un moteur de 500W, elle atteint une vitesse de 45 km/h. Sa batterie Acide 48V 24Ah offre une autonomie de 50 km, parfaite pour vos trajets quotidiens en ville en toute tranquillité grâce au SAV et à la garantie inclus.",
    shortDesc: "Moto électrique vintage M8 500W, batterie Acide 48V 24Ah, autonomie 50 km, vitesse max 45 km/h."
  },

  {
    id: "n7-super",
    name: "N7 MOTO",
    subtitle: "Moto Puissance 1500W",
    category: "electric-motorcycle",
    categoryLabel: "Moto Électrique",
    price: 0,
    oldPrice: 10,
    badgeColor: "primary",
    mainImage: "assets/images/models/n7/main.jpg",
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
      "Freins": "Hydrauliques (avant/arrière)",
      "Suspension": "Double suspensions",
      "Charge Max": "140 kg",
      "Poids": "75 kg",
      "Temps de charge": "6-8 heures"
    },
    features: [
      { icon: "star", title: "Style Sport Urbain", desc: "Design moderne avec décoration sportive" },
      { icon: "zap", title: "Moteur 1500W", desc: "Puissance idéale pour la ville" },
      { icon: "shield", title: "Freins Hydrauliques", desc: "Système de freinage haute sécurité" },
      { icon: "battery-charging", title: "Autonomie 60km", desc: "Batterie Lithium 48V" },
      { icon: "gauge", title: "Compteur Digital", desc: "Affichage complet (standard pour ce type)" },
      { icon: "tool", title: "SAV & Garantie", desc: "Service après-vente et garantie disponibles" }
    ],
    description: "La moto électrique N7 allie style et praticité urbaine. Son design moderne arbore une décoration sportive épurée. Avec son moteur de 1500W, elle atteint une vitesse de 50 km/h, ce qui la rend parfaite pour les déplacements quotidiens en ville. Elle est équipée de freins hydrauliques, de doubles suspensions, d'une batterie Lithium 48V 30Ah offrant une autonomie de 60 km, ainsi que d'un service après-vente et d'une garantie inclus.",
    shortDesc: "Moto électrique N7, moteur 1500W, batterie Lithium 48V 30Ah, autonomie 60 km."
  },

  /* ------------------------------------------
     TROTTINETTES ÉLECTRIQUES
  ------------------------------------------ */

  {
    id: "g63",
    name: "G-63",
    subtitle: "Trottinette Puissance 1500W",
    category: "electric-scooter",
    categoryLabel: "Trottinette",
    price: 0,
    oldPrice: 10,
    badgeColor: "primary",
    mainImage: "assets/images/models/g63/main.jpg",
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
    "specs": {
      "Vitesse Max": "50-60 km/h",
      "Autonomie": "60-80 km",
      "Moteur": "1500W",
      "Batterie": "48V 20Ah Lithium-Ion (BMS intelligent)",
      "Pneus": "11 pouces tubeless à crampons",
      "Freins": "Hydrauliques",
      "Suspension": "Avant et Arrière",
      "Capacité de franchissement": "30°",
      "Charge Max": "120 kg",
      "Poids": "35 kg",
      "Temps de charge": "5-6 heures"
    },
    "features": [
      {
        "icon": "mountain",
        "title": "Tout-terrain",
        "desc": "Pneus 11\" à crampons et capacité de franchissement de 30°"
      },
      {
        "icon": "zap",
        "title": "Moteur 1500W",
        "desc": "Puissance élevée pour des trajets dynamiques"
      },
      {
        "icon": "shield",
        "title": "Freins hydrauliques",
        "desc": "Freinage puissant et sécurisé en toutes circonstances"
      },
      {
        "icon": "battery-charging",
        "title": "Autonomie 80km",
        "desc": "Batterie haute capacité avec gestion BMS intelligente"
      },
      {
        "icon": "droplets",
        "title": "Étanchéité IP65",
        "desc": "Haute résistance à l'eau et à la poussière (Waterproof)"
      },
      {
        "icon": "tool",
        "title": "SAV & Garantie",
        "desc": "Service Après-Vente disponible et service de garantie inclus"
      }
    ],
    "description": "La G-63 est une trottinette électrique tout-terrain robuste. Avec son moteur puissant de 1500W et sa batterie Lithium-Ion 48V 20Ah gérée par un BMS intelligent, elle offre une vitesse allant jusqu'à 60 km/h et une excellente autonomie de 60 à 80 km. Conçue pour tous les environnements, elle est équipée de pneus 11 pouces tubeless à crampons, de suspensions avant/arrière, de freins hydrauliques, et bénéficie d'une certification d'étanchéité IP65.",
    "shortDesc": "Trottinette électrique tout-terrain G-63 : Moteur 1500W, batterie 48V 20Ah, étanchéité IP65 et jusqu'à 80km d'autonomie."
  },

  {
    id: "m8-scooter",
    name: "M8 SCOOTER",
    subtitle: "Trottinette Puissance 350W",
    category: "electric-scooter",
    categoryLabel: "Trottinette",
    price: 0,
    oldPrice: 10,
    badgeColor: "primary",
    mainImage: "assets/images/models/m8-scooter/main.jpg",
    images: [
      "assets/images/models/m8-scooter/main.jpg"
    ],
    colors: [
      { name: "Noir", hex: "#1a1a1a", images: ["assets/images/models/m8-scooter/main.jpg"] },
      { name: "Gris", hex: "#666666", images: ["assets/images/models/m8-scooter/main.jpg"] }
    ],
    specs: {
      "Vitesse Max": "35 km/h",
      "Autonomie": "40-50 km",
      "Moteur": "500W Brushless",
      "Batterie": "48V 13Ah Lithium",
      "Pneus": "10 pouces tubeless",
      "Freins": "Disque AR + frein électrique",
      "Suspension": "Suspension avant",
      "Charge Max": "100 kg",
      "Poids": "18 kg",
      "Temps de charge": "4-5 heures"
    },
    features: [
      { icon: "arrow-left-right", title: "Clignotants intégrés", desc: "Sécurité optimale en ville" },
      { icon: "zap", title: "Moteur 500W", desc: "Puissance suffisante pour la ville" },
      { icon: "battery-charging", title: "Autonomie 50km", desc: "Idéal pour les trajets quotidiens" },
      { icon: "sun", title: "LED intégrale", desc: "Éclairage avant/arrière + clignotants" },
      { icon: "smartphone", title: "App connectée", desc: "Suivi et paramètres via smartphone" },
      { icon: "scale", title: "Légère", desc: "Seulement 18 kg, facile à transporter" }
    ],
    description: "La M8 SCOOTER est une trottinette électrique urbaine conçue avec un accent particulier sur la sécurité. Ses clignotants intégrés au guidon et son éclairage complet en font la trottinette la plus sûre pour circuler en ville, de jour comme de nuit.",
    shortDesc: "Trottinette électrique avec clignotants intégrés, autonomie 50 km."
  },

  {
    id: "t7",
    name: "T7",
    subtitle: "Trottinette Puissance 350W",
    category: "electric-scooter",
    categoryLabel: "Trottinette",
    price: 0,
    oldPrice: 10,
    badgeColor: "primary",
    mainImage: "assets/images/models/t7/main.jpg",
    images: [
      "assets/images/models/t7/main.jpg"
    ],
    colors: [
      { name: "Noir", hex: "#1a1a1a", images: ["assets/images/models/t7/main.jpg"] },
      { name: "Blanc", hex: "#f5f5f5", images: ["assets/images/models/t7/main.jpg"] }
    ],
    specs: {
      "Vitesse Max": "30 km/h",
      "Autonomie": "35-45 km",
      "Moteur": "350W Brushless",
      "Batterie": "36V 10.4Ah Lithium",
      "Pneus": "8.5 pouces",
      "Freins": "Frein électrique + disque",
      "Suspension": "Non",
      "Charge Max": "100 kg",
      "Poids": "12.5 kg",
      "Temps de charge": "4-5 heures"
    },
    features: [
      { icon: "scale", title: "Ultra légère", desc: "Seulement 12.5 kg" },
      { icon: "fold-horizontal", title: "Pliable", desc: "Se plie en 3 secondes" },
      { icon: "zap", title: "Moteur 350W", desc: "Idéal pour la ville" },
      { icon: "battery-charging", title: "Autonomie 45km", desc: "Batterie amovible" },
      { icon: "smartphone", title: "App connectée", desc: "Contrôle via smartphone" },
      { icon: "sun", title: "LED", desc: "Éclairage avant et arrière" }
    ],
    description: "La T7 est la trottinette urbaine par excellence. Légère, pliable et élégante, elle est parfaite pour les derniers kilomètres et les déplacements en ville. Sa batterie amovible permet de la recharger facilement au bureau ou à la maison.",
    shortDesc: "Trottinette urbaine pliable 350W, 12.5 kg, autonomie 45 km."
  },

  {
    id: "t5",
    name: "T5",
    subtitle: "Trottinette Puissance 150W",
    category: "electric-scooter",
    categoryLabel: "Trottinette",
    price: 0,
    oldPrice: 10,
    badgeColor: "primary",
    mainImage: "assets/images/models/t5/main.jpg",
    images: [
      "assets/images/models/t5/main.jpg"
    ],
    colors: [
      { name: "Blanc/Mint", hex: "#98d8c8", images: ["assets/images/models/t5/main.jpg"] },
      { name: "Rose", hex: "#ffb6c1", images: ["assets/images/models/t5/main.jpg"] }
    ],
    specs: {
      "Vitesse Max": "16 km/h (limitée)",
      "Autonomie": "15-20 km",
      "Moteur": "150W Brushless",
      "Batterie": "24V 4Ah Lithium",
      "Pneus": "6.5 pouces",
      "Freins": "Frein à pied",
      "Suspension": "Non",
      "Charge Max": "50 kg",
      "Poids": "6.5 kg",
      "Temps de charge": "3-4 heures"
    },
    features: [
      { icon: "baby", title: "Sécurisée", desc: "Vitesse limitée à 16 km/h" },
      { icon: "palette", title: "Design coloré", desc: "LED multicolores sur le deck" },
      { icon: "scale", title: "Ultra légère", desc: "Seulement 6.5 kg" },
      { icon: "battery-charging", title: "Autonomie 20km", desc: "Parfaite pour les enfants" },
      { icon: "sun", title: "LED fun", desc: "Lumières colorées pour plus de visibilité" },
      { icon: "check-circle", title: "Conforme normes", desc: "Conforme aux normes de sécurité" }
    ],
    description: "La T5 est la trottinette électrique parfaite pour les enfants. Avec sa vitesse limitée à 16 km/h, ses lumières LED colorées et son poids plume de 6.5 kg, elle offre une expérience de conduite sûre et amusante pour les plus jeunes.",
    shortDesc: "Trottinette électrique pour enfant, vitesse limitée 16 km/h, sécurisée."
  }

];


/* ===========================================
   FONCTIONS UTILITAIRES
   =========================================== */

/**
 * Retourne un produit par son identifiant.
 * @param {string} id - Identifiant du produit (ex: "q11-max")
 * @returns {object|undefined}
 */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

/**
 * Retourne tous les produits d'une catégorie donnée.
 * @param {string} category - "electric-motorcycle" | "electric-scooter"
 * @returns {object[]}
 */
function getProductsByCategory(category) {
  return PRODUCTS.filter(p => p.category === category);
}

/**
 * Retourne des produits similaires (même catégorie, hors produit courant).
 * @param {string} productId - ID du produit courant à exclure
 * @param {number} limit     - Nombre max de résultats (défaut : 3)
 * @returns {object[]}
 */
function getRelatedProducts(productId, limit = 3) {
  const product = getProductById(productId);
  if (!product) return [];
  return PRODUCTS
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}

/**
 * Formate un prix en Dinars Algériens avec séparateurs de milliers.
 * @param {number} price
 * @returns {string} ex: "219 000 DA"
 */
function formatPrice(price) {
  return price.toLocaleString('fr-FR') + ' DA';
}

/* Export pour usage en module Node.js (tests) */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, getProductById, getProductsByCategory, getRelatedProducts, formatPrice };
}