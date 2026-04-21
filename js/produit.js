/* =============================================
   E-SCOOT v2.0 — Product Page Dynamic Loader
   with Functional Color Selector
   ============================================= */

let currentProduct = null;
let currentColorIndex = 0;
let currentGalleryIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
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

function showProductError() {
  const container = document.querySelector('.product-hero');
  if (container) {
    container.innerHTML = `
      <div class="container" style="text-align: center; padding: 6rem 0;">
        <p style="font-size: 4rem; margin-bottom: 1rem;">😕</p>
        <h1>Produit non trouvé</h1>
        <p style="color: var(--text-secondary); margin: 1rem 0 2rem;">Le modèle que vous recherchez n'existe pas ou a été retiré.</p>
        <a href="modeles.html" class="btn btn-primary">Voir tous les modèles</a>
      </div>
    `;
  }
}

function loadProduct(product) {
  // Update page title
  document.title = `${product.name} — ${product.subtitle} | E-Scoot`;
  
  // Update breadcrumb
  updateBreadcrumb(product);
  
  // Load gallery with first color images
  const colorImages = product.colors && product.colors.length > 0 
    ? product.colors[0].images 
    : product.images;
  initProductGallery(colorImages, product.name);
  
  // Load product info
  loadProductInfo(product);
  
  // Load specs tab
  loadSpecsTab(product);
  
  // Load features tab
  loadFeaturesTab(product);
  
  // Load description tab
  loadDescriptionTab(product);
  
  // Load related products
  loadRelatedProducts(product);
  
  // Init tabs
  initTabs();
  
  // Init color selector
  initColorSelector(product);
}

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

function loadProductInfo(product) {
  const info = document.getElementById('productInfo');
  if (!info) return;
  
  const discount = product.oldPrice 
    ? Math.round((1 - product.price / product.oldPrice) * 100) 
    : 0;
  
  info.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
      <span class="badge badge-${product.badgeColor}">${product.badge}</span>
      <span class="badge badge-ghost">${product.categoryLabel}</span>
    </div>
    <h1>${product.name}</h1>
    <p class="product-subtitle">${product.subtitle}</p>
    <div class="product-price-row">
      <span class="product-price">${formatPrice(product.price)}</span>
      ${product.oldPrice ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
      ${discount > 0 ? `<span class="badge badge-danger" style="font-size: 0.75rem;">-${discount}%</span>` : ''}
      <span class="product-price-note">Prix TTC, livraison incluse</span>
    </div>
    <p class="product-short-desc">${product.description}</p>
    
    ${product.colors.length > 0 ? `
      <div class="color-selector">
        <label>Couleur : <span id="selectedColor">${product.colors[0].name}</span></label>
        <div class="color-options" id="colorOptions"></div>
      </div>
    ` : ''}
    
    <div class="product-actions">
      <a href="https://wa.me/213540000000?text=Bonjour,%20je%20suis%20intéressé%20par%20la%20${encodeURIComponent(product.name)}%20en%20couleur%20${encodeURIComponent(product.colors[0]?.name || '')}.%20Pouvez-vous%20me%20donner%20plus%20d'informations%20?" 
         class="btn btn-primary btn-lg" target="_blank" rel="noopener" id="whatsappOrderBtn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        Commander sur WhatsApp
      </a>
      <a href="contact.html" class="btn btn-secondary btn-lg">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Nous appeler
      </a>
    </div>
    
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

function initColorSelector(product) {
  const container = document.getElementById('colorOptions');
  const label = document.getElementById('selectedColor');
  if (!container || !product.colors) return;
  
  container.innerHTML = product.colors.map((color, index) => `
    <div class="color-option ${index === 0 ? 'active' : ''}" 
         data-color-index="${index}"
         data-color-name="${color.name}"
         title="${color.name}">
      <div class="color-option-swatch" style="background: ${color.hex}"></div>
      <span class="color-option-name">${color.name}</span>
    </div>
  `).join('');
  
  container.querySelectorAll('.color-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const colorIndex = parseInt(opt.dataset.colorIndex);
      const colorName = opt.dataset.colorName;
      
      // Update active state
      container.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      
      // Update label
      if (label) label.textContent = colorName;
      
      // Update gallery with color-specific images
      const color = product.colors[colorIndex];
      if (color && color.images) {
        initProductGallery(color.images, product.name);
      }
      
      // Update WhatsApp link with selected color
      const whatsappBtn = document.getElementById('whatsappOrderBtn');
      if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/213540000000?text=Bonjour,%20je%20suis%20intéressé%20par%20la%20${encodeURIComponent(product.name)}%20en%20couleur%20${encodeURIComponent(colorName)}.%20Pouvez-vous%20me%20donner%20plus%20d'informations%20?`;
      }
      
      currentColorIndex = colorIndex;
    });
  });
}

function initProductGallery(images, productName) {
  const mainImg = document.getElementById('galleryMainImg');
  const thumbsContainer = document.getElementById('galleryThumbs');
  
  if (!mainImg || !thumbsContainer || !images || images.length === 0) return;
  
  currentGalleryIndex = 0;
  
  // Update main image
  mainImg.src = images[0];
  mainImg.alt = productName;
  
  // Render thumbnails
  thumbsContainer.innerHTML = images.map((img, index) => `
    <div class="gallery-thumb ${index === 0 ? 'active' : ''}" data-index="${index}">
      <img src="${img}" alt="${productName} - Vue ${index + 1}" loading="lazy">
    </div>
  `).join('');
  
  // Thumbnail click
  thumbsContainer.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const index = parseInt(thumb.dataset.index);
      currentGalleryIndex = index;
      updateMainImage(index, images);
    });
  });
  
  // Navigation arrows
  const prevBtn = document.querySelector('.gallery-main .nav-arrow.prev');
  const nextBtn = document.querySelector('.gallery-main .nav-arrow.next');
  
  // Remove old listeners by cloning
  if (prevBtn) {
    const newPrevBtn = prevBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    newPrevBtn.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex - 1 + images.length) % images.length;
      updateMainImage(currentGalleryIndex, images);
    });
  }
  
  if (nextBtn) {
    const newNextBtn = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    newNextBtn.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex + 1) % images.length;
      updateMainImage(currentGalleryIndex, images);
    });
  }
}

function updateMainImage(index, images) {
  const mainImg = document.getElementById('galleryMainImg');
  const thumbsContainer = document.getElementById('galleryThumbs');
  
  if (mainImg && images && images[index]) {
    // Add fade transition
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = images[index];
      mainImg.style.opacity = '1';
    }, 150);
  }
  
  if (thumbsContainer) {
    thumbsContainer.querySelectorAll('.gallery-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }
}

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

function loadSpecsTab(product) {
  const container = document.getElementById('tabSpecs');
  if (!container) return;
  
  const specsHtml = Object.entries(product.specs).map(([key, value]) => `
    <tr>
      <td>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
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

function loadDescriptionTab(product) {
  const container = document.getElementById('tabDescription');
  if (!container) return;
  
  container.innerHTML = `
    <div style="max-width: 800px;">
      <p style="line-height: 1.9; color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 1.05rem;">${product.description}</p>
      <div style="background: var(--bg-card); border-radius: var(--radius-lg); padding: var(--space-lg); border: 1px solid var(--border); margin-top: var(--space-xl);">
        <h4 style="margin-bottom: var(--space-md); color: var(--primary);">✓ Garantie & Service</h4>
        <p style="line-height: 1.8; color: var(--text-secondary);">
          Tous nos véhicules électriques sont livrés avec une garantie constructeur de <strong style="color: var(--text-primary);">2 ans sur le cadre</strong> 
          et <strong style="color: var(--text-primary);">1 an sur la batterie et le moteur</strong>. Nous assurons le service après-vente et proposons 
          des forfaits de maintenance adaptés à vos besoins. Livraison gratuite partout en Algérie.
        </p>
      </div>
    </div>
  `;
}

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
    <div class="grid grid-3" style="gap: 1.5rem;">
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
              <span style="font-size: 1.15rem; font-weight: 700; color: var(--primary);">${formatPrice(p.price)}</span>
            </div>
          </a>
        </div>
      `).join('')}
    </div>
  `;
  
  // Re-init scroll reveal
  if (typeof initScrollReveal === 'function') {
    setTimeout(initScrollReveal, 100);
  }
}
