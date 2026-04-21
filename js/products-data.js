/* =============================================
   E-SCOOT — Products Data (Updated with Real Images)
   ============================================= */

const PRODUCTS = [
  {
    id: "q11-max",
    name: "Q11 MAX",
    subtitle: "Moto Électrique Puissante",
    category: "electric-motorcycle",
    categoryLabel: "Moto Électrique",
    price: 219000,
    oldPrice: 255000,
    badge: "Populaire",
    badgeColor: "primary",
    mainImage: "assets/images/models/q11-max/main.jpg",
    images: [
      "assets/images/models/q11-max/main.jpg",
      "assets/images/models/q11-max/Q11_1.jpeg",
      "assets/images/models/q11-max/Q11_2.jpeg",
      "assets/images/models/q11-max/Q11_3.jpeg",
      "assets/images/models/q11-max/Q11_4.jpeg",
      "assets/images/models/q11-max/Q11_5.jpeg",
      "assets/images/models/q11-max/Q11_6.jpeg"
    ],
    colors: [
      { 
        name: "Noir", 
        hex: "#1a1a1a",
        images: [
          "assets/images/models/q11-max/main.jpg",
          "assets/images/models/q11-max/Q11_1.jpeg",
          "assets/images/models/q11-max/Q11_2.jpeg",
          "assets/images/models/q11-max/Q11_3.jpeg",
          "assets/images/models/q11-max/Q11_4.jpeg",
          "assets/images/models/q11-max/Q11_5.jpeg",
          "assets/images/models/q11-max/Q11_6.jpeg"
        ]
      },
      { 
        name: "Rouge", 
        hex: "#cc0000",
        images: [
          "assets/images/models/q11-max/Q11_3.jpeg",
          "assets/images/models/q11-max/Q11_4.jpeg",
          "assets/images/models/q11-max/main.jpg",
          "assets/images/models/q11-max/Q11_1.jpeg",
          "assets/images/models/q11-max/Q11_2.jpeg",
          "assets/images/models/q11-max/Q11_5.jpeg",
          "assets/images/models/q11-max/Q11_6.jpeg"
        ]
      }
    ],
    specs: {
      "Vitesse Max": "90 km/h",
      "Autonomie": "120-140 km",
      "Moteur": "3000W Brushless",
      "Batterie": "72V 40Ah Lithium",
      "Pneus": "120/70-12 Tubeless",
      "Freins": "Disque AV/AR (ABS)",
      "Suspension": "Fourche hydraulique + amortisseur AR",
      "Charge Max": "160 kg",
      "Poids": "78 kg",
      "Temps de charge": "6-8 heures"
    },
    features: [
      { icon: "zap", title: "Moteur 3000W", desc: "Puissance exceptionnelle pour toutes les routes" },
      { icon: "battery-charging", title: "Batterie 72V 40Ah", desc: "Autonomie record de 140 km en mode éco" },
      { icon: "shield", title: "Freins à disque", desc: "Double disque avec système ABS" },
      { icon: "smartphone", title: "Connectivité", desc: "Application smartphone avec GPS" },
      { icon: "key", title: "Démarrage sans clé", desc: "Démarrage électronique avec alarme" },
      { icon: "sun", title: "LED Full", desc: "Éclairage LED avant/arrière complet" }
    ],
    description: "La Q11 MAX est notre moto électrique phare, alliant puissance et autonomie exceptionnelles. Avec son moteur de 3000W et sa batterie lithium-ion 72V 40Ah, elle offre des performances équivalentes aux scooters thermiques 125cc, sans émissions et avec des coûts de fonctionnement réduits. Parfaite pour les déplacements urbains et périurbains en Algérie.",
    shortDesc: "Moto électrique puissante 3000W, autonomie 120-140 km, vitesse max 90 km/h."
  },
  {
    id: "q11-pro",
    name: "Q11 PRO",
    subtitle: "Moto Électrique Performance",
    category: "electric-motorcycle",
    categoryLabel: "Moto Électrique",
    price: 189000,
    oldPrice: 215000,
    badge: "Nouveau",
    badgeColor: "accent",
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
        name: "Rouge", 
        hex: "#cc0000",
        images: [
          "assets/images/models/q11-pro/main.jpg",
          "assets/images/models/q11-pro/Q11_7.jpeg",
          "assets/images/models/q11-pro/Q11_8.jpeg",
          "assets/images/models/q11-pro/Q11_9.jpeg",
          "assets/images/models/q11-pro/Q11_10.jpeg",
          "assets/images/models/q11-pro/Q11_11.jpeg",
          "assets/images/models/q11-pro/Q11_12.jpeg"
        ]
      },
      { 
        name: "Noir", 
        hex: "#1a1a1a",
        images: [
          "assets/images/models/q11-pro/Q11_9.jpeg",
          "assets/images/models/q11-pro/Q11_10.jpeg",
          "assets/images/models/q11-pro/Q11_11.jpeg",
          "assets/images/models/q11-pro/main.jpg",
          "assets/images/models/q11-pro/Q11_7.jpeg",
          "assets/images/models/q11-pro/Q11_8.jpeg",
          "assets/images/models/q11-pro/Q11_12.jpeg"
        ]
      }
    ],
    specs: {
      "Vitesse Max": "80 km/h",
      "Autonomie": "100-120 km",
      "Moteur": "2000W Brushless",
      "Batterie": "72V 32Ah Lithium",
      "Pneus": "120/70-12 Tubeless",
      "Freins": "Disque AV/AR",
      "Suspension": "Fourche hydraulique + amortisseur AR",
      "Charge Max": "150 kg",
      "Poids": "72 kg",
      "Temps de charge": "5-7 heures"
    },
    features: [
      { icon: "zap", title: "Moteur 2000W", desc: "Puissance optimale pour la ville" },
      { icon: "battery-charging", title: "Batterie 72V 32Ah", desc: "Autonomie de 100-120 km" },
      { icon: "shield", title: "Freins à disque", desc: "Double disque avant et arrière" },
      { icon: "smartphone", title: "Connectivité", desc: "Application smartphone" },
      { icon: "lock", title: "Démarrage électronique", desc: "Système antivol intégré" },
      { icon: "sun", title: "LED Full", desc: "Éclairage LED complet" }
    ],
    description: "La Q11 PRO offre un excellent rapport puissance/prix. Avec son moteur 2000W, elle atteint 80 km/h et offre une autonomie de 100-120 km. Le design élégant et les finitions soignées en font une moto électrique idéale pour les déplacements quotidiens.",
    shortDesc: "Moto électrique 2000W, autonomie 100-120 km, vitesse max 80 km/h."
  },
  {
    id: "m8-moto",
    name: "M8 MOTO",
    subtitle: "Moto Vintage Électrique",
    category: "electric-motorcycle",
    categoryLabel: "Moto Électrique",
    price: 145000,
    oldPrice: null,
    badge: "Style",
    badgeColor: "warning",
    mainImage: "assets/images/models/m8-moto/main.jpg",
    images: [
      "assets/images/models/m8-moto/main.jpg",
      "assets/images/models/m8-moto/M8_1.jpeg",
      "assets/images/models/m8-moto/M8_2.jpeg",
      "assets/images/models/m8-moto/M8_3.jpeg",
      "assets/images/models/m8-moto/M8_4.jpeg",
      "assets/images/models/m8-moto/M8_5.jpeg",
      "assets/images/models/m8-moto/M8_6.jpeg",
      "assets/images/models/m8-moto/M8_7.jpeg",
      "assets/images/models/m8-moto/M8_8.jpeg"
    ],
    colors: [
      { 
        name: "Vert Mint", 
        hex: "#98d8c8",
        images: [
          "assets/images/models/m8-moto/main.jpg",
          "assets/images/models/m8-moto/M8_1.jpeg",
          "assets/images/models/m8-moto/M8_2.jpeg",
          "assets/images/models/m8-moto/M8_3.jpeg",
          "assets/images/models/m8-moto/M8_4.jpeg",
          "assets/images/models/m8-moto/M8_5.jpeg",
          "assets/images/models/m8-moto/M8_6.jpeg",
          "assets/images/models/m8-moto/M8_7.jpeg",
          "assets/images/models/m8-moto/M8_8.jpeg"
        ]
      },
      { 
        name: "Crème", 
        hex: "#f5f5dc",
        images: [
          "assets/images/models/m8-moto/M8_3.jpeg",
          "assets/images/models/m8-moto/M8_4.jpeg",
          "assets/images/models/m8-moto/M8_5.jpeg",
          "assets/images/models/m8-moto/main.jpg",
          "assets/images/models/m8-moto/M8_1.jpeg",
          "assets/images/models/m8-moto/M8_2.jpeg",
          "assets/images/models/m8-moto/M8_6.jpeg",
          "assets/images/models/m8-moto/M8_7.jpeg",
          "assets/images/models/m8-moto/M8_8.jpeg"
        ]
      }
    ],
    specs: {
      "Vitesse Max": "55 km/h",
      "Autonomie": "80-100 km",
      "Moteur": "1500W Brushless",
      "Batterie": "60V 26Ah Lithium",
      "Pneus": "3.00-10 Tubeless",
      "Freins": "Disque AV, tambour AR",
      "Suspension": "Fourche télescopique + amortisseur AR",
      "Charge Max": "130 kg",
      "Poids": "65 kg",
      "Temps de charge": "5-6 heures"
    },
    features: [
      { icon: "palette", title: "Design Vintage", desc: "Style rétro avec technologie moderne" },
      { icon: "zap", title: "Moteur 1500W", desc: "Idéal pour la ville" },
      { icon: "briefcase", title: "Top Case", desc: "Porte-bagages avec top case inclus" },
      { icon: "battery-charging", title: "Autonomie 100km", desc: "Parfait pour les trajets quotidiens" },
      { icon: "sun", title: "Phare rond LED", desc: "Style classique avec technologie LED" },
      { icon: "shield", title: "Garde-boue chromé", desc: "Finitions premium" }
    ],
    description: "La M8 MOTO allie le charme vintage des années 60 à la technologie électrique moderne. Son design rétro avec phare rond, garde-boue chromé et couleur mint unique en font une moto qui attire tous les regards. Parfaite pour les amateurs de style et l'urbanisme quotidien.",
    shortDesc: "Moto électrique vintage 1500W, style rétro unique, autonomie 80-100 km."
  },
  {
    id: "n7-super",
    name: "N7 SUPER",
    subtitle: "Moto Racing Électrique",
    category: "electric-motorcycle",
    categoryLabel: "Moto Électrique",
    price: 165000,
    oldPrice: 185000,
    badge: "Racing",
    badgeColor: "danger",
    mainImage: "assets/images/models/n7/main.jpg",
    images: [
      "assets/images/models/n7/main.jpg",
      "assets/images/models/n7/N7_5.jpeg"
    ],
    colors: [
      { 
        name: "Racing Blanc", 
        hex: "#ffffff",
        images: [
          "assets/images/models/n7/main.jpg",
          "assets/images/models/n7/N7_5.jpeg"
        ]
      },
      { 
        name: "Racing Noir", 
        hex: "#1a1a1a",
        images: [
          "assets/images/models/n7/N7_5.jpeg",
          "assets/images/models/n7/main.jpg"
        ]
      }
    ],
    specs: {
      "Vitesse Max": "90 km/h",
      "Autonomie": "100-120 km",
      "Moteur": "3000W Brushless",
      "Batterie": "72V 35Ah Lithium",
      "Pneus": "120/70-12 Racing",
      "Freins": "Double disque sport",
      "Suspension": "Fourche inversée + mono-amortisseur",
      "Charge Max": "140 kg",
      "Poids": "75 kg",
      "Temps de charge": "6-7 heures"
    },
    features: [
      { icon: "flag", title: "Look Racing", desc: "Décoration sportive type MotoGP" },
      { icon: "zap", title: "Moteur 3000W", desc: "Accélération fulgurante" },
      { icon: "shield", title: "Freins Sport", desc: "Double disque avec étriers radiaux" },
      { icon: "battery-charging", title: "Autonomie 120km", desc: "Batterie haute capacité" },
      { icon: "gauge", title: "Tableau digital", desc: "Compteur TFT couleur" },
      { icon: "wind", title: "Aérodynamique", desc: "Carénage sport optimisé" }
    ],
    description: "La N7 SUPER est la moto électrique racing de notre gamme. Avec son look inspiré de la MotoGP, son moteur 3000W et ses freins sport, elle offre des sensations de conduite uniques. La version TC (Total Control) ajoute un mode de conduite avancé pour les passionnés.",
    shortDesc: "Moto racing électrique 3000W, look MotoGP, vitesse 90 km/h."
  },
  {
    id: "g63",
    name: "G-63",
    subtitle: "Trottinette Tout-Terrain 4x4",
    category: "electric-scooter",
    categoryLabel: "Trottinette",
    price: 95000,
    oldPrice: 110000,
    badge: "Tout-terrain",
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
        hex: "#1a1a1a",
        images: [
          "assets/images/models/g63/main.jpg",
          "assets/images/models/g63/G63_1.jpeg",
          "assets/images/models/g63/G63_2.jpeg",
          "assets/images/models/g63/G63_3.jpeg",
          "assets/images/models/g63/G63_4.jpeg",
          "assets/images/models/g63/G63_5.jpeg",
          "assets/images/models/g63/G63_6.jpeg"
        ]
      },
      { 
        name: "Vert Militaire", 
        hex: "#4b5320",
        images: [
          "assets/images/models/g63/G63_3.jpeg",
          "assets/images/models/g63/G63_4.jpeg",
          "assets/images/models/g63/G63_5.jpeg",
          "assets/images/models/g63/main.jpg",
          "assets/images/models/g63/G63_1.jpeg",
          "assets/images/models/g63/G63_2.jpeg",
          "assets/images/models/g63/G63_6.jpeg"
        ]
      }
    ],
    specs: {
      "Vitesse Max": "55 km/h",
      "Autonomie": "50-60 km",
      "Moteur": "2x 1200W Brushless",
      "Batterie": "48V 20Ah Lithium",
      "Pneus": "11 pouces tout-terrain",
      "Freins": "Disque hydraulique AV/AR",
      "Suspension": "Double suspension AV/AR",
      "Charge Max": "120 kg",
      "Poids": "35 kg",
      "Temps de charge": "5-6 heures"
    },
    features: [
      { icon: "mountain", title: "4x4 Électrique", desc: "Double moteur pour terrains difficiles" },
      { icon: "link", title: "Système de chenille", desc: "Option chenille pour neige/sable" },
      { icon: "zap", title: "2x 1200W", desc: "Double moteur brushless" },
      { icon: "shield", title: "Freins hydrauliques", desc: "Freinage puissant en tout terrain" },
      { icon: "battery-charging", title: "Autonomie 60km", desc: "Batterie haute capacité" },
      { icon: "droplets", title: "IP54", desc: "Résistance eau et poussière" }
    ],
    description: "La G-63 est une trottinette tout-terrain unique en son genre. Avec ses deux moteurs de 1200W et son système de chenille amovible, elle peut affronter n'importe quel terrain : sable, neige, boue, gravier. La double suspension et les freins hydrauliques assurent sécurité et confort.",
    shortDesc: "Trottinette tout-terrain 4x4 électrique, double moteur 2x1200W."
  },
  {
    id: "m8-scooter",
    name: "M8 SCOOTER",
    subtitle: "Trottinette Urbaine avec Clignotants",
    category: "electric-scooter",
    categoryLabel: "Trottinette",
    price: 65000,
    oldPrice: null,
    badge: "Sécurité",
    badgeColor: "accent",
    mainImage: "assets/images/models/m8-scooter/main.jpg",
    images: [
      "assets/images/models/m8-scooter/main.jpg"
    ],
    colors: [
      { 
        name: "Noir", 
        hex: "#1a1a1a",
        images: [
          "assets/images/models/m8-scooter/main.jpg"
        ]
      },
      { 
        name: "Gris", 
        hex: "#666666",
        images: [
          "assets/images/models/m8-scooter/main.jpg"
        ]
      }
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
    subtitle: "Trottinette Urbaine Pliable",
    category: "electric-scooter",
    categoryLabel: "Trottinette",
    price: 45000,
    oldPrice: 52000,
    badge: "Best-seller",
    badgeColor: "primary",
    mainImage: "assets/images/models/t7/main.jpg",
    images: [
      "assets/images/models/t7/main.jpg"
    ],
    colors: [
      { 
        name: "Noir", 
        hex: "#1a1a1a",
        images: [
          "assets/images/models/t7/main.jpg"
        ]
      },
      { 
        name: "Blanc", 
        hex: "#f5f5f5",
        images: [
          "assets/images/models/t7/main.jpg"
        ]
      }
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
    subtitle: "Trottinette Enfant",
    category: "electric-scooter",
    categoryLabel: "Trottinette",
    price: 25000,
    oldPrice: null,
    badge: "Enfant",
    badgeColor: "warning",
    mainImage: "assets/images/models/t5/main.jpg",
    images: [
      "assets/images/models/t5/main.jpg"
    ],
    colors: [
      { 
        name: "Blanc/Mint", 
        hex: "#98d8c8",
        images: [
          "assets/images/models/t5/main.jpg"
        ]
      },
      { 
        name: "Rose", 
        hex: "#ffb6c1",
        images: [
          "assets/images/models/t5/main.jpg"
        ]
      }
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

/* Helper functions */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
  return PRODUCTS.filter(p => p.category === category);
}

function getRelatedProducts(productId, limit = 3) {
  const product = getProductById(productId);
  if (!product) return [];
  return PRODUCTS
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}

function formatPrice(price) {
  return price.toLocaleString('fr-FR') + ' DA';
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, getProductById, getProductsByCategory, getRelatedProducts, formatPrice };
}
