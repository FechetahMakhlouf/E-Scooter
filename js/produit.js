/* =============================================
   E-SCOOT v2.0 — Page Produit Dynamique (Refonte Moderne)
   =============================================
   Utilisé uniquement sur : produit.html (version modernisée)
   Dépendances : products-data.js, main.js, gallery.js

   Fonctionnement :
   1. Lit le paramètre ?id= depuis l'URL
   2. Charge le produit correspondant depuis PRODUCTS
   3. Injecte les données dans tous les blocs de la page :
      - Fil d'ariane, galerie swipeable, infos, onglets, produits similaires
   4. Initialise le sélecteur de couleur et les onglets animés
   ============================================= */


/* ===========================================
   ÉTAT GLOBAL DU MODULE
   =========================================== */

/** Produit actuellement affiché */
let currentProduct = null;

/** Index de la couleur sélectionnée dans product.colors */
let currentColorIndex = 0;

/** Tableau d'images actuellement affichées dans la galerie */
let currentGalleryImages = [];


/* ===========================================
   INITIALISATION
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {
  const productId = getUrlParam('id');

  if (!productId) {
    showProductError();
    return;
  }

  const product = getProductById(productId);
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

  currentGalleryImages = [...colorImages];

  initGalleryV2(colorImages, product.name);
  loadProductInfo(product);
  loadSpecsTab(product);
  loadFeaturesTab(product);
  loadDescriptionTab(product);
  loadRelatedProducts(product);
  initTabsV2();
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

function updateBreadcrumb(product) {
  const breadcrumb = document.getElementById('productBreadcrumb');
  if (!breadcrumb) return;

  breadcrumb.innerHTML = `
    <a href="index.html">Accueil</a>
    <span class="separator">/</span>
    <a href="modeles.html">Modèles</a>
    <span class="separator">/</span>
    <span class="current">${product.name}</span>
  `;
  breadcrumb.classList.remove('skeleton-loading');
}


/* ===========================================
   GALERIE V2 — Swipe, Dots, Zoom
   =========================================== */

/**
 * Initialise la galerie moderne avec swipe mobile, dots, compteur et zoom.
 * Remplace les anciennes fonctions initProductGallery / updateMainImage.
 * @param {string[]} images      - Tableau de chemins d'images
 * @param {string}   productName - Nom du produit (pour alt)
 */
function initGalleryV2(images, productName) {
  const slidesContainer = document.getElementById('gallerySlides');
  const dotsContainer = document.getElementById('galleryDots');
  const counter = document.getElementById('galleryCounter');
  const zoomBtn = document.getElementById('galleryZoomBtn');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  const thumbsContainer = document.getElementById('galleryThumbs');

  if (!slidesContainer) return;

  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;
  let translateX = 0;
  let animationFrame = null;

  // Nettoyage
  slidesContainer.innerHTML = '';
  dotsContainer.innerHTML = '';
  if (thumbsContainer) thumbsContainer.innerHTML = '';

  // Rendu des slides
  images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${productName} - Vue ${i + 1}`;
    img.loading = i === 0 ? 'eager' : 'lazy';
    slidesContainer.appendChild(img);
  });

  // Rendu des dots
  images.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `gallery-dot ${i === 0 ? 'active' : ''}`;
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  });

  // Rendu des miniatures
  if (thumbsContainer) {
    images.forEach((src, i) => {
      const thumb = document.createElement('div');
      thumb.className = `gallery-thumb ${i === 0 ? 'active' : ''}`;
      thumb.dataset.index = i;
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${productName} - Miniature ${i + 1}`;
      img.loading = 'lazy';
      thumb.appendChild(img);

      // Clic sur une miniature → aller à cette image
      thumb.addEventListener('click', () => {
        updateGalleryPosition(parseInt(thumb.dataset.index));
      });

      thumbsContainer.appendChild(thumb);
    });
  }

  // Mise à jour du compteur
  const updateCounter = () => {
    if (counter) {
      counter.textContent = `${currentIndex + 1} / ${images.length}`;
    }
  };
  updateCounter();

  // Masquer/afficher les flèches selon la position
  const updateArrows = () => {
    // On garde les flèches toujours visibles (boucle infinie via le swipe)
    // mais on peut choisir de les désactiver visuellement aux extrémités
    if (prevBtn) {
      prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
      prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
    }
    if (nextBtn) {
      nextBtn.style.opacity = currentIndex === images.length - 1 ? '0.4' : '1';
      nextBtn.style.pointerEvents = currentIndex === images.length - 1 ? 'none' : 'auto';
    }
  };

  // Synchroniser les miniatures
  const updateThumbnails = () => {
    if (!thumbsContainer) return;
    const thumbs = thumbsContainer.querySelectorAll('.gallery-thumb');
    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === currentIndex);
    });

    // Faire défiler le conteneur de miniatures pour rendre la miniature active visible
    const activeThumb = thumbs[currentIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  // Fonction de mise à jour de la position
  const updateGalleryPosition = (index) => {
    if (index < 0 || index >= images.length) return;
    currentIndex = index;
    translateX = -index * 100;
    slidesContainer.style.transform = `translateX(${translateX}%)`;

    // Mise à jour des dots
    const dots = dotsContainer.querySelectorAll('.gallery-dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));

    // Mise à jour des miniatures et flèches
    updateThumbnails();
    updateArrows();
    updateCounter();
  };

  // --- Gestion des flèches de navigation ---
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentIndex > 0) {
        updateGalleryPosition(currentIndex - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentIndex < images.length - 1) {
        updateGalleryPosition(currentIndex + 1);
      }
    });
  }

  // --- Gestion des événements tactiles / souris ---
  const onStart = (clientX) => {
    isDragging = true;
    startX = clientX - translateX * (slidesContainer.offsetWidth / 100);
    slidesContainer.style.transition = 'none';
    cancelAnimationFrame(animationFrame);
  };

  const onMove = (clientX) => {
    if (!isDragging) return;
    const diffX = clientX - startX;
    const percent = (diffX / slidesContainer.offsetWidth) * 100;
    const bounded = Math.max(-currentIndex * 100 - 20, Math.min(-currentIndex * 100 + 20, percent));
    animationFrame = requestAnimationFrame(() => {
      slidesContainer.style.transform = `translateX(${bounded}%)`;
    });
  };

  const onEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    slidesContainer.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1.2)';

    const currentPercent = parseFloat(slidesContainer.style.transform.replace('translateX(', '').replace('%)', '')) || 0;
    const diffFromCurrent = currentPercent - (-currentIndex * 100);

    if (diffFromCurrent > 15 && currentIndex > 0) {
      updateGalleryPosition(currentIndex - 1);
    } else if (diffFromCurrent < -15 && currentIndex < images.length - 1) {
      updateGalleryPosition(currentIndex + 1);
    } else {
      updateGalleryPosition(currentIndex);
    }
  };

  // Touch events
  slidesContainer.addEventListener('touchstart', (e) => {
    onStart(e.touches[0].clientX);
  }, { passive: true });

  slidesContainer.addEventListener('touchmove', (e) => {
    onMove(e.touches[0].clientX);
  }, { passive: true });

  slidesContainer.addEventListener('touchend', onEnd);

  // Mouse events (pour desktop)
  slidesContainer.addEventListener('mousedown', (e) => {
    e.preventDefault();
    onStart(e.clientX);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });

  const onMouseMove = (e) => onMove(e.clientX);
  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    onEnd();
  };

  // Clic sur les dots
  dotsContainer.addEventListener('click', (e) => {
    const dot = e.target.closest('.gallery-dot');
    if (dot) {
      const index = parseInt(dot.dataset.index);
      updateGalleryPosition(index);
    }
  });

  // Bouton zoom
  if (zoomBtn) {
    zoomBtn.addEventListener('click', () => {
      if (typeof openLightbox === 'function') {
        galleryImages = images.map(src => ({ src, alt: productName }));
        currentImageIndex = currentIndex;
        openLightbox(currentIndex);
      }
    });
  }

  // Initialisation de l'état des flèches
  updateArrows();

  // Stocke l'index courant pour synchronisation externe
  window.getCurrentGalleryIndex = () => currentIndex;
}


/* ===========================================
   INFORMATIONS PRODUIT (V2)
   =========================================== */

function loadProductInfo(product) {
  const info = document.getElementById('productInfoV2');
  if (!info) return;

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  info.innerHTML = `
    <span class="badge badge-${product.badgeColor}">${product.categoryLabel}</span>
    <h1 class="product-name-v2">${product.name}</h1>
    <p class="product-subtitle-v2">${product.subtitle}</p>

    <div class="price-block">
      <span class="price-current">${formatPrice(product.price)}</span>
      ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
      ${discount > 0 ? `<span class="price-discount">-${discount}%</span>` : ''}
      <span style="font-size:0.8rem;color:var(--text-muted);">Prix</span>
    </div>

    <p style="color:var(--text-secondary);line-height:1.7;margin-bottom:1.5rem;">
      ${product.shortDesc || product.description}
    </p>

    ${product.colors.length > 0 ? `
      <div class="color-selector">
        <label>Couleur : <span id="selectedColor">${product.colors[0].name}</span></label>
        <div class="color-options" id="colorOptions"></div>
      </div>
    ` : ''}

    <div class="product-actions-sticky">
      <a href="https://wa.me/213770286269?text=${encodeURIComponent(`Bonjour, je suis intéressé par la ${product.name} en couleur ${product.colors[0]?.name || ''}.`)}"
         class="btn btn-primary btn-lg"
         target="_blank" rel="noopener"
         id="whatsappOrderBtn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        Commander sur WhatsApp
      </a>
    </div>

    <div class="product-meta-grid">
      <div class="product-meta-item"><span class="icon">⚡</span>${product.specs['Moteur'] || product.specs['Moteur'] || '-'}</div>
      <div class="product-meta-item"><span class="icon">🔋</span>${product.specs['Batterie'] || product.specs['Batterie'] || '-'}</div>
      <div class="product-meta-item"><span class="icon">🚀</span>${product.specs['Vitesse Max'] || product.specs['Vitesse'] || '-'}</div>
      <div class="product-meta-item"><span class="icon">📏</span>${product.specs['Autonomie'] || '-'}</div>
    </div>
  `;
}


/* ===========================================
   SÉLECTEUR DE COULEUR (conservé avec adaptation)
   =========================================== */

function initColorSelector(product) {
  const container = document.getElementById('colorOptions');
  const label = document.getElementById('selectedColor');
  if (!container || !product.colors) return;

  container.innerHTML = product.colors.map((color, index) => `
    <div class="color-option ${index === 0 ? 'active' : ''}"
         data-color-index="${index}"
         data-color-name="${color.name}">
      <div class="color-option-swatch" style="background:${color.hex}"></div>
      <span class="color-option-name">${color.name}</span>
    </div>
  `).join('');

  container.querySelectorAll('.color-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const colorIndex = parseInt(opt.dataset.colorIndex);
      const colorName = opt.dataset.colorName;

      container.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      if (label) label.textContent = colorName;

      const color = product.colors[colorIndex];
      if (color && color.images) {
        currentGalleryImages = [...color.images];
        initGalleryV2(color.images, product.name);
      }

      const whatsappBtn = document.getElementById('whatsappOrderBtn');
      if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/213770286269?text=${encodeURIComponent(
          `Bonjour, je suis intéressé par la ${product.name} en couleur ${colorName}.`
        )}`;
      }

      currentColorIndex = colorIndex;
    });
  });
}


/* ===========================================
   ONGLETS V2 — avec transition fluide et compteurs
   =========================================== */

function initTabsV2() {
  const tabBtns = document.querySelectorAll('.tab-btn-v2');
  const tabPanels = document.querySelectorAll('.tab-panel-v2');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
}


/* ===========================================
   ONGLET : FICHE TECHNIQUE (avec compteur)
   =========================================== */

function loadSpecsTab(product) {
  const container = document.getElementById('tabSpecs');
  if (!container) return;

  const specsEntries = Object.entries(product.specs);
  const specsHtml = specsEntries.map(([key, value]) => `
    <tr>
      <td>
        <div class="spec-icon">${getSpecIcon(key)}</div>
        ${key}
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

  // Mise à jour du compteur dans l'onglet
  const countEl = document.getElementById('specsCount');
  if (countEl) countEl.textContent = specsEntries.length;
}

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
   ONGLET : CARACTÉRISTIQUES (avec compteur)
   =========================================== */

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

  const countEl = document.getElementById('featuresCount');
  if (countEl) countEl.textContent = product.features.length;
}


/* ===========================================
   ONGLET : DESCRIPTION
   =========================================== */

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
          Tous nos véhicules électriques sont livrés avec une garantie constructeur
          <strong style="color:var(--text-primary);">sur le cadre</strong> et
          <strong style="color:var(--text-primary);">sur la batterie et le moteur</strong>.
          Nous assurons le service après-vente et proposons des forfaits de maintenance adaptés.
          Livraison partout en Algérie.
        </p>
      </div>
    </div>
  `;
}


/* ===========================================
   PRODUITS SIMILAIRES
   =========================================== */

function loadRelatedProducts(product) {
  const container = document.getElementById('relatedProducts');
  if (!container) return;

  const related = getRelatedProducts(product.id, 3);
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

  if (typeof initScrollReveal === 'function') {
    setTimeout(initScrollReveal, 100);
  }
}