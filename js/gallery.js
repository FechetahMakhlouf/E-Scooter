/* =============================================
   E-SCOOT v2.0 — Lightbox
   =============================================
   Utilisé uniquement sur : produit.html
   Dépendances : main.js

   Fonctions exposées :
   - openLightbox(index)
   - closeLightbox()
   - nextImage()
   - prevImage()
   ============================================= */


/* ===========================================
   VARIABLES D'ÉTAT
   =========================================== */

/** Tableau d'images actuellement visibles dans la lightbox */
let galleryImages = [];

/** Index de l'image affichée dans la lightbox */
let currentImageIndex = 0;


/* ===========================================
   INITIALISATION
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {
  initLightbox();
});


/* ===========================================
   LIGHTBOX
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
 * Reconstruit `galleryImages` depuis le DOM.
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
  document.body.style.overflow = 'hidden';
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