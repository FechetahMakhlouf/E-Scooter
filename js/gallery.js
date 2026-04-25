/* =============================================
   E-SCOOT v3.0 — Lightbox
   =============================================
   Utilisé sur : produit.html
   ============================================= */

let galleryImages = [];
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', function () {
  initLightbox();
});

function initLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  if (!overlay) return;

  // Fermeture clic sur fond
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });

  // Boutons
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', function (e) { e.stopPropagation(); prevImage(); });
  if (nextBtn) nextBtn.addEventListener('click', function (e) { e.stopPropagation(); nextImage(); });

  // Clavier
  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('active')) return;
    switch (e.key) {
      case 'Escape': closeLightbox(); break;
      case 'ArrowLeft': prevImage(); break;
      case 'ArrowRight': nextImage(); break;
    }
  });
}

function openLightbox(index) {
  const overlay = document.getElementById('lightboxOverlay');
  if (!overlay) return;

  // Récupère les images depuis les slides de la galerie
  const slides = document.querySelectorAll('.gallery-slide img');
  galleryImages = Array.from(slides).map(function (img) {
    return { src: img.src, alt: img.alt };
  });

  if (galleryImages.length === 0) return;

  currentImageIndex = Math.min(index || 0, galleryImages.length - 1);
  updateLightboxImage();
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function nextImage() {
  if (galleryImages.length === 0) return;
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  updateLightboxImage();
}

function prevImage() {
  if (galleryImages.length === 0) return;
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');

  if (img && galleryImages[currentImageIndex]) {
    img.src = galleryImages[currentImageIndex].src;
    img.alt = galleryImages[currentImageIndex].alt;
  }

  if (counter && galleryImages.length > 0) {
    counter.textContent = (currentImageIndex + 1) + ' / ' + galleryImages.length;
  }
}
