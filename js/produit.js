/* =============================================
   E-SCOOT v3.0 — Page Produit Dynamique
   =============================================
   Utilisé uniquement sur : produit.html
   Dépendances : products-data.js, main.js
   ============================================= */

/* ===========================================
   ÉTAT GLOBAL
   =========================================== */
let currentProduct = null;
let currentColorIndex = 0;
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
function loadProduct(product) {
  const content = document.getElementById('productContent');
  const error = document.getElementById('productError');

  if (content) content.style.display = '';
  if (error) error.style.display = 'none';

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

/* ===========================================
   ERREUR PRODUIT
   =========================================== */
function showProductError() {
  const content = document.getElementById('productContent');
  const error = document.getElementById('productError');

  if (content) content.style.display = 'none';
  if (error) error.style.display = '';
}

/* ===========================================
   INFORMATIONS PRODUIT
   =========================================== */
function loadProductInfo(product) {
  const badge = document.getElementById('productBadge');
  const name = document.getElementById('productName');
  const subtitle = document.getElementById('productSubtitle');
  const priceCurrent = document.getElementById('productPrice');
  const priceOld = document.getElementById('productOldPrice');
  const priceDiscount = document.getElementById('productDiscount');
  const shortDesc = document.getElementById('productShortDesc');
  const ctaBtn = document.getElementById('productCtaBtn');
  const colorSelector = document.getElementById('colorSelector');
  const activeColorName = document.getElementById('activeColorName');
  const breadcrumb = document.getElementById('breadcrumbProduct');

  var lang = typeof currentLang !== 'undefined' ? currentLang : 'fr';
  var badgeKey = product.category === 'electric-motorcycle' ? 'badge.moto' : 'badge.trot';
  var badgeLabel = typeof getTranslation === 'function' ? getTranslation(badgeKey) : product.categoryLabel;

  if (badge) {
    badge.className = 'badge badge-' + (product.badgeColor || 'primary') + ' mb-sm';
    badge.textContent = badgeLabel || '';
  }

  if (name) name.textContent = product.name;
  if (subtitle) subtitle.textContent = (typeof getProductText === 'function' ? getProductText(product, 'subtitle', lang) : product.subtitle) || '';
  if (breadcrumb) breadcrumb.textContent = product.name;

  if (priceCurrent) {
    priceCurrent.textContent = formatPrice(product.price);
  }

  if (priceOld) {
    if (product.oldPrice) {
      priceOld.textContent = formatPrice(product.oldPrice);
      priceOld.style.display = '';
    } else {
      priceOld.style.display = 'none';
    }
  }

  if (priceDiscount) {
    if (product.oldPrice) {
      const discount = Math.round((1 - product.price / product.oldPrice) * 100);
      priceDiscount.textContent = '-' + discount + '%';
      priceDiscount.style.display = '';
    } else {
      priceDiscount.style.display = 'none';
    }
  }

  var shortDescTxt = typeof getProductText === 'function' ? getProductText(product, 'shortDesc', lang) : (product.shortDesc || '');
  if (shortDesc) shortDesc.textContent = shortDescTxt || product.description || '';

  if (ctaBtn) {
    var colorName = (product.colors && product.colors[0]) ? product.colors[0].name : '';
    var waTemplate = typeof getTranslation === 'function' ? getTranslation('product.whatsapp') : 'Bonjour, je suis interesse par la {product}{color}.';
    if (!waTemplate || waTemplate.indexOf('{product}') === -1) {
      waTemplate = 'Bonjour, je suis interesse par la {product}{color}.';
    }
    var waText = waTemplate
      .replace('{product}', product.name)
      .replace('{color}', colorName ? (' en couleur ' + colorName) : '');
    ctaBtn.href = 'https://wa.me/213770286269?text=' + encodeURIComponent(waText);
  }

  if (colorSelector && activeColorName) {
    if (product.colors && product.colors.length > 0) {
      colorSelector.style.display = '';
      activeColorName.textContent = product.colors[0].name;
    } else {
      colorSelector.style.display = 'none';
    }
  }

  var moteurLabel = typeof getTranslation === 'function' ? (getTranslation('spec.Moteur') || 'Moteur') : 'Moteur';
  var batterieLabel = typeof getTranslation === 'function' ? (getTranslation('spec.Batterie') || 'Batterie') : 'Batterie';
  var vitesseLabel = typeof getTranslation === 'function' ? (getTranslation('spec.Vitesse Max') || 'Vitesse') : 'Vitesse';
  var autonomieLabel = typeof getTranslation === 'function' ? (getTranslation('spec.Autonomie') || 'Autonomie') : 'Autonomie';
  const metaContainer = document.getElementById('productMeta');
  if (metaContainer) {
    metaContainer.innerHTML =
      '<div class="product-meta-item"><span>\u2696\uFE0F</span> <strong>' + moteurLabel + ':</strong> ' + (product.specs['Moteur'] || '-') + '</div>' +
      '<div class="product-meta-item"><span>\uD83D\uDD0B</span> <strong>' + batterieLabel + ':</strong> ' + (product.specs['Batterie'] || '-') + '</div>' +
      '<div class="product-meta-item"><span>\uD83D\uDE80</span> <strong>' + vitesseLabel + ':</strong> ' + (product.specs['Vitesse Max'] || product.specs['Vitesse'] || '-') + '</div>' +
      '<div class="product-meta-item"><span>\uD83D\uDCCF</span> <strong>' + autonomieLabel + ':</strong> ' + (product.specs['Autonomie'] || '-') + '</div>';
  }

  document.title = product.name + ' \u2014 E-Scoot';
}

/* ===========================================
   GALERIE V2
   =========================================== */
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

  slidesContainer.innerHTML = '';
  dotsContainer.innerHTML = '';
  if (thumbsContainer) thumbsContainer.innerHTML = '';

  // Slides
  images.forEach(function(src, i) {
    const div = document.createElement('div');
    div.className = 'gallery-slide';
    const img = document.createElement('img');
    img.src = src;
    img.alt = productName + ' - Vue ' + (i + 1);
    img.loading = i === 0 ? 'eager' : 'lazy';
    div.appendChild(img);
    slidesContainer.appendChild(div);
  });

  // Dots
  images.forEach(function(_, i) {
    const dot = document.createElement('button');
    dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    dot.dataset.index = i;
    dot.setAttribute('aria-label', 'Image ' + (i + 1));
    dotsContainer.appendChild(dot);
  });

  // Thumbs
  if (thumbsContainer) {
    images.forEach(function(src, i) {
      const thumb = document.createElement('div');
      thumb.className = 'gallery-thumb' + (i === 0 ? ' active' : '');
      thumb.dataset.index = i;
      const img = document.createElement('img');
      img.src = src;
      img.alt = productName + ' - Miniature ' + (i + 1);
      img.loading = 'lazy';
      thumb.appendChild(img);
      thumb.addEventListener('click', function() {
        updateGalleryPosition(parseInt(thumb.dataset.index));
      });
      thumbsContainer.appendChild(thumb);
    });
  }

  function updateCounter() {
    if (counter) {
      counter.textContent = (currentIndex + 1) + ' / ' + images.length;
    }
  }
  updateCounter();

  function updateArrows() {
    if (prevBtn) {
      prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
      prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
    }
    if (nextBtn) {
      nextBtn.style.opacity = currentIndex === images.length - 1 ? '0.4' : '1';
      nextBtn.style.pointerEvents = currentIndex === images.length - 1 ? 'none' : 'auto';
    }
  }

  function updateThumbnails() {
    if (!thumbsContainer) return;
    const thumbs = thumbsContainer.querySelectorAll('.gallery-thumb');
    thumbs.forEach(function(thumb, i) {
      thumb.classList.toggle('active', i === currentIndex);
    });
    const activeThumb = thumbs[currentIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  function updateGalleryPosition(index) {
    if (index < 0 || index >= images.length) return;
    currentIndex = index;
    translateX = -index * 100;
    slidesContainer.style.transform = 'translateX(' + translateX + '%)';

    const dots = dotsContainer.querySelectorAll('.gallery-dot');
    dots.forEach(function(dot, i) {
      dot.classList.toggle('active', i === index);
    });

    updateThumbnails();
    updateArrows();
    updateCounter();
  }

  // Flèches
  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (currentIndex > 0) updateGalleryPosition(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (currentIndex < images.length - 1) updateGalleryPosition(currentIndex + 1);
    });
  }

  // Touch
  slidesContainer.addEventListener('touchstart', function(e) {
    onStart(e.touches[0].clientX);
  }, { passive: true });

  slidesContainer.addEventListener('touchmove', function(e) {
    onMove(e.touches[0].clientX);
  }, { passive: true });

  slidesContainer.addEventListener('touchend', onEnd);

  function onStart(clientX) {
    isDragging = true;
    startX = clientX - translateX * (slidesContainer.offsetWidth / 100);
    slidesContainer.style.transition = 'none';
    cancelAnimationFrame(animationFrame);
  }

  function onMove(clientX) {
    if (!isDragging) return;
    const diffX = clientX - startX;
    const percent = (diffX / slidesContainer.offsetWidth) * 100;
    const bounded = Math.max(-currentIndex * 100 - 20, Math.min(-currentIndex * 100 + 20, percent + translateX));
    animationFrame = requestAnimationFrame(function() {
      slidesContainer.style.transform = 'translateX(' + bounded + '%)';
    });
  }

  function onEnd() {
    if (!isDragging) return;
    isDragging = false;
    slidesContainer.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1.2)';

    const style = slidesContainer.style.transform;
    const match = style.match(/translateX\(([^%]+)%\)/);
    const currentPercent = match ? parseFloat(match[1]) : -currentIndex * 100;
    const diffFromCurrent = currentPercent - (-currentIndex * 100);

    if (diffFromCurrent > 15 && currentIndex > 0) {
      updateGalleryPosition(currentIndex - 1);
    } else if (diffFromCurrent < -15 && currentIndex < images.length - 1) {
      updateGalleryPosition(currentIndex + 1);
    } else {
      updateGalleryPosition(currentIndex);
    }
  }

  // Dots
  dotsContainer.addEventListener('click', function(e) {
    const dot = e.target.closest('.gallery-dot');
    if (dot) {
      updateGalleryPosition(parseInt(dot.dataset.index));
    }
  });

  // Zoom
  if (zoomBtn) {
    zoomBtn.addEventListener('click', function() {
      if (typeof openLightbox === 'function') {
        openLightbox(currentIndex);
      }
    });
  }

  updateArrows();
  window.getCurrentGalleryIndex = function() { return currentIndex; };
}

/* ===========================================
   SÉLECTEUR DE COULEUR
   =========================================== */
function initColorSelector(product) {
  const container = document.getElementById('colorOptions');
  const label = document.getElementById('activeColorName');
  if (!container || !product.colors) return;

  container.innerHTML = product.colors.map(function(color, index) {
    return '<div class="color-option' + (index === 0 ? ' selected' : '') + '" data-color-index="' + index + '" data-color-name="' + color.name + '">' +
      '<div class="color-swatch" style="background:' + color.hex + '"></div>' +
      '<span class="color-name">' + color.name + '</span>' +
      '</div>';
  }).join('');

  container.querySelectorAll('.color-option').forEach(function(opt) {
    opt.addEventListener('click', function() {
      const colorIndex = parseInt(opt.dataset.colorIndex);
      const colorName = opt.dataset.colorName;

      container.querySelectorAll('.color-option').forEach(function(o) {
        o.classList.remove('selected');
      });
      opt.classList.add('selected');
      if (label) label.textContent = colorName;

      const color = product.colors[colorIndex];
      if (color && color.images) {
        currentGalleryImages = [...color.images];
        initGalleryV2(color.images, product.name);
      }

      const whatsappBtn = document.getElementById('productCtaBtn');
      if (whatsappBtn) {
        whatsappBtn.href = 'https://wa.me/213770286269?text=' + encodeURIComponent(
          'Bonjour, je suis interesse par la ' + product.name + (colorName ? ' en couleur ' + colorName : '') + '.'
        );
      }

      currentColorIndex = colorIndex;
    });
  });
}

/* ===========================================
   ONGLETS
   =========================================== */
function initTabsV2() {
  const tabBtns = document.querySelectorAll('.tab-btn-v2');
  const tabPanels = document.querySelectorAll('.tab-panel-v2');

  tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const target = btn.dataset.tab;
      tabBtns.forEach(function(b) { b.classList.remove('active'); });
      tabPanels.forEach(function(p) { p.classList.remove('active'); });
      btn.classList.add('active');
      const panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ===========================================
   ONGLET : FICHE TECHNIQUE
   =========================================== */
function loadSpecsTab(product) {
  const container = document.getElementById('tab-specs');
  if (!container) return;

  const table = container.querySelector('.specs-table');
  if (!table) return;

  const specsEntries = Object.entries(product.specs);
  const specsHtml = specsEntries.map(function(entry) {
    const key = entry[0];
    const value = entry[1];
    var translatedKey = typeof getTranslation === 'function' ? getTranslation('spec.' + key) : null;
    var displayKey = translatedKey || key;
    return '<div class="spec-row">' +
      '<div class="spec-key">' +
        '<span class="spec-icon">' + getSpecIcon(key) + '</span>' + displayKey +
      '</div>' +
      '<div class="spec-value">' + value + '</div>' +
    '</div>';
  }).join('');

  table.innerHTML = specsHtml;

  const countEl = document.getElementById('specsCount');
  if (countEl) countEl.textContent = specsEntries.length;
}

function getSpecIcon(key) {
  const icons = {
    'Vitesse Max': '\u26A1',
    'Vitesse': '\u26A1',
    'Autonomie': '\uD83D\uDD0B',
    'Moteur': '\uD83D\uDD27',
    'Batterie': '\uD83D\uDD0B',
    'Pneus': '\uD83D\uDE08',
    'Freins': '\uD83D\uDED1',
    'Suspension': '\u26FD',
    'Charge Max': '\uD83D\uDCAA',
    'Poids': '\u2696\uFE0F',
    'Temps de charge': '\u23F1\uFE0F'
  };
  return icons[key] || '\uD83D\uDCCB';
}

/* ===========================================
   ONGLET : CARACTÉRISTIQUES
   =========================================== */
function getFeatureIcon(iconCode) {
  var iconMap = {
    'zap': '\u26A1',
    'batr': '\uD83D\uDD0B',
    'shield': '\uD83D\uDEE1\uFE0F',
    'blth': '\uD83D\uDD0A',
    'sun': '\uD83D\uDCA1',
    'tool': '\uD83D\uDD27',
    'mountain': '\u26F0\uFE0F',
    'droplets': '\uD83D\uDCA7',
    'plt': '\uD83C\uDFA8',
    'scale': '\u2696\uFE0F',
    'fold': '\uD83D\uDCE6',
    'fold-horizontal': '\uD83D\uDCE6',
    'arrow-left-right': '\uD83D\uDD04',
    'baby': '\uD83D\uDC76',
    'shield-check': '\u2705',
    'gauge': '\uD83D\uDCCA',
    'star': '\u2B50'
  };
  return iconMap[iconCode] || '\uD83D\uDCCC';
}

function loadFeaturesTab(product) {
  const container = document.getElementById('tab-features');
  if (!container) return;

  const grid = container.querySelector('.features-grid-2');
  if (!grid) return;

  var lang = typeof currentLang !== 'undefined' ? currentLang : 'fr';
  var features = typeof getProductFeatures === 'function' ? getProductFeatures(product, lang) : (product.features || []);

  if (!features || features.length === 0) {
    var emptyText = typeof getTranslation === 'function' ? (getTranslation('features.empty') || 'Aucune caracteristique disponible.') : 'Aucune caracteristique disponible.';
    grid.innerHTML = '<p style="color:var(--text-secondary);text-align:center;">' + emptyText + '</p>';
    return;
  }

  grid.innerHTML = features.map(function(f) {
    var icon = getFeatureIcon(f.icon || 'zap');
    return '<div class="feature-card-small">' +
      '<div class="feature-icon-round">' + icon + '</div>' +
      '<div>' +
        '<h4>' + f.title + '</h4>' +
        '<p>' + f.desc + '</p>' +
      '</div>' +
    '</div>';
  }).join('');

  const countEl = document.getElementById('featuresCount');
  if (countEl) countEl.textContent = features.length;
}

/* ===========================================
   ONGLET : DESCRIPTION
   =========================================== */
function loadDescriptionTab(product) {
  const container = document.getElementById('tab-description');
  if (!container) return;

  var lang = typeof currentLang !== 'undefined' ? currentLang : 'fr';
  var descText = typeof getProductText === 'function' ? getProductText(product, 'description', lang) : (product.description || '');

  const descContent = container.querySelector('.description-content');
  if (descContent) {
    descContent.innerHTML = '<p>' + (descText || '') + '</p>';
  }
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

  var lang = typeof currentLang !== 'undefined' ? currentLang : 'fr';
  var vitesseLabel = typeof getTranslation === 'function' ? (getTranslation('spec.Vitesse Max') || 'Vitesse') : 'Vitesse';
  var autonomieLabel = typeof getTranslation === 'function' ? (getTranslation('spec.Autonomie') || 'Autonomie') : 'Autonomie';
  var moteurLabel = typeof getTranslation === 'function' ? (getTranslation('spec.Moteur') || 'Moteur') : 'Moteur';
  var btnLabel = typeof getTranslation === 'function' ? getTranslation('btn.view') : 'Voir \u2192';

  container.style.display = '';
  container.innerHTML = related.map(function(p, index) {
    var pSubtitle = typeof getProductText === 'function' ? getProductText(p, 'subtitle', lang) : (p.subtitle || '');
    var pBadgeKey = p.category === 'electric-motorcycle' ? 'badge.moto' : 'badge.trot';
    var pBadgeLabel = typeof getTranslation === 'function' ? getTranslation(pBadgeKey) : p.categoryLabel;
    return '<div class="card product-card">' +
      '<div class="badge">' + (pBadgeLabel || '') + '</div>' +
      '<div class="card-image">' +
        '<a href="produit.html?id=' + p.id + '">' +
          '<img src="' + p.mainImage + '" alt="' + p.name + '" loading="lazy">' +
        '</a>' +
      '</div>' +
      '<div class="card-content">' +
        '<h3 class="card-title">' + p.name + '</h3>' +
        '<p class="card-subtitle">' + (pSubtitle || '') + '</p>' +
        '<div class="specs-preview">' +
          '<div class="spec-item"><span class="spec-label">' + vitesseLabel + '</span><span class="spec-value">' + (p.specs['Vitesse Max'] || p.specs['Vitesse'] || '-') + '</span></div>' +
          '<div class="spec-item"><span class="spec-label">' + autonomieLabel + '</span><span class="spec-value">' + (p.specs['Autonomie'] || '-') + '</span></div>' +
          '<div class="spec-item"><span class="spec-label">' + moteurLabel + '</span><span class="spec-value">' + (p.specs['Moteur'] ? p.specs['Moteur'].split(' ')[0] : '-') + '</span></div>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.5rem;">' +
          '<span style="font-size:1.1rem;font-weight:800;background:var(--gradient-primary);-webkit-background-clip:text;background-clip:text;color:transparent;">' + formatPrice(p.price) + '</span>' +
          '<span style="color:var(--primary);font-size:0.85rem;font-weight:600;">' + btnLabel + '</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}
