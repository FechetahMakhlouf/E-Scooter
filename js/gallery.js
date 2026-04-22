/* =============================================
   E-SCOOT v2.0 — Galerie & Lightbox
   =============================================
   Utilisé sur : galerie.html  +  produit.html
   Dépendances : products-data.js, main.js

   TABLE DES MATIÈRES
   ------------------
   1. Variables d'état
   2. Initialisation galerie (page galerie.html)
   3. Filtrage par catégorie
   4. Rendu de la grille de photos
   5. Lightbox — ouverture / navigation / fermeture
   ============================================= */


/* ===========================================
   1. VARIABLES D'ÉTAT
   =========================================== */

/** Tableau d'images actuellement visibles (respecte le filtre actif) */
let galleryImages = [];

/** Index de l'image affichée dans la lightbox */
let currentImageIndex = 0;


/* ===========================================
   2. INITIALISATION GALERIE
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {
  initGallery();
  initLightbox();
});

/**
 * Construit `galleryImages` à partir de PRODUCTS, puis attache
 * les écouteurs sur les onglets de catégorie et rend la grille initiale.
 * Uniquement actif si #galleryGrid est présent dans la page.
 */
function initGallery() {
  // Construction du tableau d'images depuis les données produits
  PRODUCTS.forEach(product => {
    const imagesToUse = product.images
      || (product.colors && product.colors[0] ? product.colors[0].images : []);

    imagesToUse.forEach(img => {
      galleryImages.push({
        src: img,
        alt: product.name,
        category: product.category
      });
    });
  });

  // Onglets de filtre catégorie (Toutes / Motos / Trottinettes)
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  if (galleryTabs.length > 0) {
    galleryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        galleryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        filterGallery(tab.dataset.category);
      });
    });
  }

  // Rendu initial : toutes les photos
  if (document.querySelector('.gallery-grid')) {
    renderGallery('all');
  }
}


/* ===========================================
   3. FILTRAGE PAR CATÉGORIE
   =========================================== */

/**
 * Déclenche un nouveau rendu en filtrant par catégorie.
 * @param {string} category - 'all' | 'electric-motorcycle' | 'electric-scooter'
 */
function filterGallery(category) {
  renderGallery(category);
}


/* ===========================================
   4. RENDU DE LA GRILLE DE PHOTOS
   =========================================== */

/**
 * Génère les éléments de la grille galerie.
 * Chaque élément ouvre la lightbox au clic via openLightbox(index).
 * @param {string} category - Filtre à appliquer
 */
function renderGallery(category) {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const filtered = category === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === category);

  // État vide
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="text-center" style="grid-column: 1/-1; padding: 4rem 0;">
        <p style="font-size: 3rem; margin-bottom: 1rem;">📷</p>
        <h3>Aucune photo</h3>
        <p style="color: var(--text-secondary);">Aucune photo dans cette catégorie</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((img, index) => `
    <div class="gallery-item reveal"
         onclick="openLightbox(${index})"
         data-category="${img.category}">
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
      <div class="gallery-item-overlay">
        <div class="zoom-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
            <path d="M11 8v6M8 11h6"/>
          </svg>
        </div>
      </div>
    </div>
  `).join('');

  // Ré-initialise le scroll reveal sur les éléments injectés
  if (typeof initScrollReveal === 'function') {
    setTimeout(initScrollReveal, 100);
  }
}


/* ===========================================
   5. LIGHTBOX
   =========================================== */

/**
 * Initialise les interactions de la lightbox :
 * - Fermeture au clic sur le fond
 * - Navigation clavier (Échap, ←, →)
 */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  // Fermeture en cliquant sur le fond (pas sur l'image)
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Navigation clavier
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    switch (e.key) {
      case 'Escape': closeLightbox(); break;
      case 'ArrowLeft': prevImage(); break;
      case 'ArrowRight': nextImage(); break;
    }
  });
}

/**
 * Ouvre la lightbox sur l'image cliquée.
 * Reconstruit `galleryImages` depuis le DOM pour respecter
 * le filtre de catégorie actif au moment du clic.
 * @param {number} index - Index de l'image dans la grille visible
 */
function openLightbox(index) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  // Lit les images actuellement visibles depuis le DOM
  const visibleItems = Array.from(document.querySelectorAll('.gallery-item'));
  galleryImages = visibleItems.map(item => ({
    src: item.querySelector('img').src,
    alt: item.querySelector('img').alt
  }));

  currentImageIndex = Math.min(index, galleryImages.length - 1);
  updateLightboxImage();

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden'; // Bloque le scroll de la page
}

/** Ferme la lightbox et rétablit le scroll */
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/** Passe à l'image suivante (boucle) */
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  updateLightboxImage();
}

/** Revient à l'image précédente (boucle) */
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightboxImage();
}

/**
 * Met à jour l'image affichée dans la lightbox avec un fondu.
 * Met aussi à jour le compteur "N / Total".
 */
function updateLightboxImage() {
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');

  if (img && galleryImages[currentImageIndex]) {
    // Fondu de transition
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = galleryImages[currentImageIndex].src;
      img.alt = galleryImages[currentImageIndex].alt;
      img.style.opacity = '1';
      img.style.transition = 'opacity 0.15s ease';
    }, 150);
  }

  if (counter) {
    counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
  }
}