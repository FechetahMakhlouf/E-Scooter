/* =============================================
   E-SCOOT v2.0 — Gallery & Lightbox
   ============================================= */

let galleryImages = [];
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
  initGallery();
  initLightbox();
});

/* ---- Initialize gallery ---- */
function initGallery() {
  // Build gallery images array from all products
  PRODUCTS.forEach(product => {
    // Use the main images array which contains all images for the product
    const imagesToUse = product.images || (product.colors && product.colors[0] ? product.colors[0].images : []);
    imagesToUse.forEach(img => {
      galleryImages.push({
        src: img,
        alt: product.name,
        category: product.category
      });
    });
  });
  
  // Gallery tabs filtering
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  if (galleryTabs.length > 0) {
    galleryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        galleryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const category = tab.dataset.category;
        filterGallery(category);
      });
    });
  }
  
  // Initial render
  if (document.querySelector('.gallery-grid')) {
    renderGallery('all');
  }
}

/* ---- Filter gallery by category ---- */
function filterGallery(category) {
  renderGallery(category);
}

/* ---- Render gallery grid ---- */
function renderGallery(category) {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  
  const filtered = category === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === category);
  
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
    <div class="gallery-item reveal" onclick="openLightbox(${index})" data-category="${img.category}">
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
      <div class="gallery-item-overlay">
        <div class="zoom-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
        </div>
      </div>
    </div>
  `).join('');
  
  // Re-init scroll reveal
  if (typeof initScrollReveal === 'function') {
    setTimeout(initScrollReveal, 100);
  }
}

/* ---- Lightbox functions ---- */
function initLightbox() {
  // Close on backdrop click
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;
    
    switch(e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
      case 'ArrowRight':
        nextImage();
        break;
    }
  });
}

function openLightbox(index) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  
  // Get currently visible images (respecting filter)
  const category = document.querySelector('.gallery-tab.active')?.dataset.category || 'all';
  
  galleryImages = category === 'all' 
    ? Array.from(document.querySelectorAll('.gallery-item')).map(item => ({
        src: item.querySelector('img').src,
        alt: item.querySelector('img').alt
      }))
    : Array.from(document.querySelectorAll('.gallery-item'))
        .filter(item => item.dataset.category === category)
        .map(item => ({
          src: item.querySelector('img').src,
          alt: item.querySelector('img').alt
        }));
  
  currentImageIndex = Math.min(index, galleryImages.length - 1);
  updateLightboxImage();
  
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  updateLightboxImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  
  if (img && galleryImages[currentImageIndex]) {
    // Add fade transition
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = galleryImages[currentImageIndex].src;
      img.alt = galleryImages[currentImageIndex].alt;
      img.style.opacity = '1';
    }, 150);
  }
  
  if (counter) {
    counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
  }
}
