/* =============================================
   E-SCOOT v2.0 — Page Produit Dynamique
   =============================================
   Utilisé uniquement sur : produit.html
   Dépendances : products-data.js, main.js, gallery.js

   Fonctionnement :
   1. Lit le paramètre ?id= depuis l'URL
   2. Charge le produit correspondant depuis PRODUCTS
   3. Injecte les données dans tous les blocs de la page :
      - Fil d'ariane, galerie, infos, onglets, produits similaires
   4. Initialise le sélecteur de couleur et les onglets
   ============================================= */


/* ===========================================
   ÉTAT GLOBAL DU MODULE
   =========================================== */

/** Produit actuellement affiché */
let currentProduct = null;

/** Index de la couleur sélectionnée dans product.colors */
let currentColorIndex = 0;

/** Index de l'image principale affichée dans la galerie produit */
let currentGalleryIndex = 0;


/* ===========================================
   INITIALISATION
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {
  const productId = getUrlParam('id'); // Lit ?id= depuis l'URL (main.js)

  if (!productId) {
    showProductError();
    return;
  }

  const product = getProductById(productId); // products-data.js
  if (!product) {
    showProductError();
    return;
  }

  currentProduct = product;
  loadProduct(product);
});


/* ===========================================
   CHARGEMENT PRINCIPAL
   =========================================== */

/**
 * Orchestre l'injection de toutes les données du produit dans la page.
 * @param {object} product - Objet produit depuis PRODUCTS
 */
function loadProduct(product) {
  document.title = `${product.name} — ${product.subtitle} | E-Scoot`;

  updateBreadcrumb(product);

  // Galerie initialisée avec les images de la première couleur
  const colorImages = product.colors && product.colors.length > 0
    ? product.colors[0].images
    : product.images;

  initProductGallery(colorImages, product.name);
  loadProductInfo(product);
  loadSpecsTab(product);
  loadFeaturesTab(product);
  loadDescriptionTab(product);
  loadRelatedProducts(product);
  initTabs();
  initColorSelector(product);
}

/**
 * Affiche un message d'erreur si le produit n'est pas trouvé.
 */
function showProductError() {
  const container = document.querySelector('.product-hero');
  if (container) {
    container.innerHTML = `
      <div class="container" style="text-align:center;padding:6rem 0;">
        <p style="font-size:4rem;margin-bottom:1rem;">😕</p>
        <h1>Produit non trouvé</h1>
        <p style="color:var(--text-secondary);margin:1rem 0 2rem;">
          Le modèle que vous recherchez n'existe pas ou a été retiré.
        </p>
        <a href="modeles.html" class="btn btn-primary">Voir tous les modèles</a>
      </div>
    `;
  }
}


/* ===========================================
   FIL D'ARIANE
   =========================================== */

/**
 * Met à jour le breadcrumb avec le nom du produit courant.
 * @param {object} product
 */
function updateBreadcrumb(product) {
  const breadcrumb = document.getElementById('productBreadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Accueil</a>
      <span class="separator">/</span>
      <a href="modeles.html">Modèles</a>
      <span class="separator">/</span>
      <span class="current">${product.name}</span>
    `;
  }
}


/* ===========================================
   INFORMATIONS PRODUIT
   =========================================== */

/**
 * Injecte le bloc d'informations complet :
 * badges, titre, prix, description, actions, méta-données.
 * @param {object} product
 */
function loadProductInfo(product) {
  const info = document.getElementById('productInfo');
  if (!info) return;

  // Calcul du pourcentage de réduction
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  info.innerHTML = `
    <!-- Badges catégorie -->
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;">
      <span class="badge badge-${product.badgeColor}">${product.badge}</span>
      <span class="badge badge-ghost">${product.categoryLabel}</span>
    </div>

    <h1>${product.name}</h1>
    <p class="product-subtitle">${product.subtitle}</p>

    <!-- Prix -->
    <div class="product-price-row">
      <span class="product-price">${formatPrice(product.price)}</span>
      ${product.oldPrice ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
      ${discount > 0 ? `<span class="badge badge-danger" style="font-size:0.75rem;">-${discount}%</span>` : ''}
      <span class="product-price-note">Prix TTC, livraison incluse</span>
    </div>

    <p class="product-short-desc">${product.description}</p>

    <!-- Sélecteur de couleur (si plusieurs couleurs) -->
    ${product.colors.length > 0 ? `
      <div class="color-selector">
        <label>Couleur : <span id="selectedColor">${product.colors[0].name}</span></label>
        <div class="color-options" id="colorOptions"></div>
      </div>
    ` : ''}

    <!-- Boutons d'action -->
    <div class="product-actions">
      <a href="https://wa.me/213540000000?text=${encodeURIComponent(`Bonjour, je suis intéressé par la ${product.name} en couleur ${product.colors[0]?.name || ''}. Pouvez-vous me donner plus d'informations ?`)}"
         class="btn btn-primary btn-lg"
         target="_blank" rel="noopener"
         id="whatsappOrderBtn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
        Commander sur WhatsApp
      </a>
      <a href="contact.html" class="btn btn-secondary btn-lg">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Nous appeler
      </a>
    </div>

    <!-- Méta-données rapides (moteur, batterie, vitesse, autonomie) -->
    <div class="product-meta-grid">
      <div class="product-meta-item">
        <span class="icon">⚡</span>
        <span>${product.specs.Moteur || product.specs["Moteur"]}</span>
      </div>
      <div class="product-meta-item">
        <span class="icon">🔋</span>
        <span>${product.specs.Batterie || product.specs["Batterie"]}</span>
      </div>
      <div class="product-meta-item">
        <span class="icon">🚀</span>
        <span>${product.specs["Vitesse Max"] || product.specs.Vitesse}</span>
      </div>
      <div class="product-meta-item">
        <span class="icon">📏</span>
        <span>${product.specs.Autonomie}</span>
      </div>
    </div>
  `;
}


/* ===========================================
   SÉLECTEUR DE COULEUR
   =========================================== */

/**
 * Rend les pastilles de couleur et gère la sélection :
 * - Met à jour le label de couleur affiché
 * - Recharge la galerie avec les images de la couleur choisie
 * - Met à jour le lien WhatsApp avec la couleur sélectionnée
 * @param {object} product
 */
function initColorSelector(product) {
  const container = document.getElementById('colorOptions');
  const label = document.getElementById('selectedColor');
  if (!container || !product.colors) return;

  container.innerHTML = product.colors.map((color, index) => `
    <div class="color-option ${index === 0 ? 'active' : ''}"
         data-color-index="${index}"
         data-color-name="${color.name}"
         title="${color.name}">
      <div class="color-option-swatch" style="background:${color.hex}"></div>
      <span class="color-option-name">${color.name}</span>
    </div>
  `).join('');

  container.querySelectorAll('.color-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const colorIndex = parseInt(opt.dataset.colorIndex);
      const colorName = opt.dataset.colorName;

      // Mise à jour de l'état actif
      container.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      if (label) label.textContent = colorName;

      // Rechargement de la galerie avec les images de la couleur
      const color = product.colors[colorIndex];
      if (color && color.images) {
        initProductGallery(color.images, product.name);
      }

      // Mise à jour du lien WhatsApp
      const whatsappBtn = document.getElementById('whatsappOrderBtn');
      if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/213540000000?text=${encodeURIComponent(
          `Bonjour, je suis intéressé par la ${product.name} en couleur ${colorName}. Pouvez-vous me donner plus d'informations ?`
        )}`;
      }

      currentColorIndex = colorIndex;
    });
  });
}


/* ===========================================
   GALERIE PRODUIT
   =========================================== */

/**
 * Initialise ou réinitialise la galerie produit avec un tableau d'images.
 * Gère les miniatures et les flèches de navigation.
 * @param {string[]} images      - Tableau de chemins d'images
 * @param {string}   productName - Nom du produit (pour l'attribut alt)
 */
function initProductGallery(images, productName) {
  const mainImg = document.getElementById('galleryMainImg');
  const thumbsContainer = document.getElementById('galleryThumbs');
  if (!mainImg || !thumbsContainer || !images || images.length === 0) return;

  currentGalleryIndex = 0;
  mainImg.src = images[0];
  mainImg.alt = productName;

  // Rendu des miniatures
  thumbsContainer.innerHTML = images.map((img, index) => `
    <div class="gallery-thumb ${index === 0 ? 'active' : ''}" data-index="${index}">
      <img src="${img}" alt="${productName} - Vue ${index + 1}" loading="lazy">
    </div>
  `).join('');

  // Clic sur une miniature
  thumbsContainer.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      currentGalleryIndex = parseInt(thumb.dataset.index);
      updateMainImage(currentGalleryIndex, images);
    });
  });

  // Flèches de navigation — on clone pour supprimer les anciens écouteurs
  const prevBtn = document.querySelector('.gallery-main .nav-arrow.prev');
  const nextBtn = document.querySelector('.gallery-main .nav-arrow.next');

  if (prevBtn) {
    const newPrev = prevBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrev, prevBtn);
    newPrev.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex - 1 + images.length) % images.length;
      updateMainImage(currentGalleryIndex, images);
    });
  }

  if (nextBtn) {
    const newNext = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newNext, nextBtn);
    newNext.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex + 1) % images.length;
      updateMainImage(currentGalleryIndex, images);
    });
  }
}

/**
 * Met à jour l'image principale avec un fondu et synchronise la miniature active.
 * @param {number}   index  - Index de l'image à afficher
 * @param {string[]} images - Tableau d'images courant
 */
function updateMainImage(index, images) {
  const mainImg = document.getElementById('galleryMainImg');
  const thumbsContainer = document.getElementById('galleryThumbs');

  if (mainImg && images && images[index]) {
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = images[index];
      mainImg.style.opacity = '1';
      mainImg.style.transition = 'opacity 0.15s ease';
    }, 150);
  }

  if (thumbsContainer) {
    thumbsContainer.querySelectorAll('.gallery-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }
}


/* ===========================================
   ONGLETS
   =========================================== */

/**
 * Attache les écouteurs sur les boutons d'onglets (.tab-btn)
 * et gère l'affichage du panel correspondant (.tab-panel).
 */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });
}


/* ===========================================
   ONGLET : FICHE TECHNIQUE
   =========================================== */

/**
 * Génère le tableau HTML des spécifications dans #tabSpecs.
 * @param {object} product
 */
function loadSpecsTab(product) {
  const container = document.getElementById('tabSpecs');
  if (!container) return;

  const specsHtml = Object.entries(product.specs).map(([key, value]) => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <div class="spec-icon">${getSpecIcon(key)}</div>
          ${key}
        </div>
      </td>
      <td>${value}</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div class="specs-table-wrapper">
      <table class="specs-table">
        <tbody>${specsHtml}</tbody>
      </table>
    </div>
  `;
}

/**
 * Retourne l'émoji correspondant à une clé de spécification.
 * @param {string} key - Clé de spécification (ex: "Vitesse Max")
 * @returns {string} Émoji
 */
function getSpecIcon(key) {
  const icons = {
    'Vitesse Max': '⚡',
    'Vitesse': '⚡',
    'Autonomie': '🔋',
    'Moteur': '🔧',
    'Batterie': '🔋',
    'Pneus': '🛞',
    'Freins': '🛑',
    'Suspension': '⛽',
    'Charge Max': '💪',
    'Poids': '⚖️',
    'Temps de charge': '⏱️'
  };
  return icons[key] || '📋';
}


/* ===========================================
   ONGLET : CARACTÉRISTIQUES
   =========================================== */

/**
 * Génère la liste des features (points forts) dans #tabFeatures.
 * @param {object} product
 */
function loadFeaturesTab(product) {
  const container = document.getElementById('tabFeatures');
  if (!container) return;

  container.innerHTML = `
    <div class="features-list">
      ${product.features.map(f => `
        <div class="feature-item">
          <div class="icon">${f.icon}</div>
          <div>
            <h4>${f.title}</h4>
            <p>${f.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}


/* ===========================================
   ONGLET : DESCRIPTION
   =========================================== */

/**
 * Génère le texte de description et le bloc garantie dans #tabDescription.
 * @param {object} product
 */
function loadDescriptionTab(product) {
  const container = document.getElementById('tabDescription');
  if (!container) return;

  container.innerHTML = `
    <div style="max-width:800px;">
      <p style="line-height:1.9;color:var(--text-secondary);margin-bottom:1.5rem;font-size:1.05rem;">
        ${product.description}
      </p>
      <div style="background:var(--bg-card);border-radius:var(--radius-lg);padding:var(--space-lg);border:1px solid var(--border);margin-top:var(--space-xl);">
        <h4 style="margin-bottom:var(--space-md);color:var(--primary);">✓ Garantie & Service</h4>
        <p style="line-height:1.8;color:var(--text-secondary);">
          Tous nos véhicules électriques sont livrés avec une garantie constructeur de
          <strong style="color:var(--text-primary);">2 ans sur le cadre</strong> et
          <strong style="color:var(--text-primary);">1 an sur la batterie et le moteur</strong>.
          Nous assurons le service après-vente et proposons des forfaits de maintenance adaptés.
          Livraison gratuite partout en Algérie.
        </p>
      </div>
    </div>
  `;
}


/* ===========================================
   PRODUITS SIMILAIRES
   =========================================== */

/**
 * Charge et affiche jusqu'à 3 produits de la même catégorie
 * dans la section #relatedProducts.
 * @param {object} product - Produit courant (à exclure des suggestions)
 */
function loadRelatedProducts(product) {
  const container = document.getElementById('relatedProducts');
  if (!container) return;

  const related = getRelatedProducts(product.id, 3); // products-data.js

  if (related.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.innerHTML = `
    <div class="section-header reveal">
      <h2>Modèles <span class="text-gradient">similaires</span></h2>
      <p>Découvrez d'autres modèles de la même catégorie</p>
    </div>
    <div class="grid grid-3" style="gap:1.5rem;">
      ${related.map(p => `
        <div class="card product-card reveal">
          <a href="produit.html?id=${p.id}">
            <div class="card-image">
              ${p.badge ? `<span class="badge badge-${p.badgeColor}">${p.badge}</span>` : ''}
              <img src="${p.mainImage}" alt="${p.name}" loading="lazy">
            </div>
            <div class="card-content">
              <h3 class="card-title">${p.name}</h3>
              <p class="card-subtitle">${p.subtitle}</p>
              <span style="font-size:1.15rem;font-weight:700;color:var(--primary);">${formatPrice(p.price)}</span>
            </div>
          </a>
        </div>
      `).join('')}
    </div>
  `;

  // Ré-initialise le scroll reveal sur les cartes injectées
  if (typeof initScrollReveal === 'function') {
    setTimeout(initScrollReveal, 100);
  }
}