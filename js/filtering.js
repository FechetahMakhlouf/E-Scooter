/* =============================================
   E-SCOOT v3.0 — Filtres & Grille Produits
   =============================================
   Utilisé uniquement sur : modeles.html
   Dependances : products-data.js, main.js
   ============================================= */

/* Recherche globale */
var searchQuery = '';
var searchDebounceTimer = null;

function initFiltering() {
  var grid = document.getElementById('productsGrid');
  if (!grid) return;

  // Attendre que PRODUCTS soit charge
  if (typeof PRODUCTS === 'undefined') {
    setTimeout(initFiltering, 100);
    return;
  }

  initFilters();
  initSearch();
  applyFilters();

  // Re-render les cartes quand la langue change
  document.addEventListener('languageChanged', function () {
    updateSearchPlaceholder();
    applyFilters();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initFiltering, 200);
  });
} else {
  setTimeout(initFiltering, 200);
}

/* ===========================================
   INITIALISATION DE LA RECHERCHE
   =========================================== */

function initSearch() {
  var input = document.getElementById('searchInput');
  var clearBtn = document.getElementById('searchClear');
  var container = document.getElementById('searchBarContainer');
  var kbd = document.getElementById('searchKbd');
  if (!input) return;

  // Focus avec Ctrl+K / Cmd+K
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      input.focus();
      input.select();
    }
    if (e.key === 'Escape' && document.activeElement === input) {
      clearSearch();
      input.blur();
    }
  });

  // Saisie avec debounce
  input.addEventListener('input', function () {
    searchQuery = input.value.trim();
    clearBtn.style.display = searchQuery ? 'flex' : 'none';
    kbd.style.display = searchQuery ? 'none' : 'flex';

    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(function () {
      applyFilters();
    }, 250);
  });

  // Focus / blur
  input.addEventListener('focus', function () {
    container.classList.add('focused');
    kbd.style.display = 'none';
  });

  input.addEventListener('blur', function () {
    container.classList.remove('focused');
    if (!searchQuery) kbd.style.display = 'flex';
  });

  // Clear
  clearBtn.addEventListener('click', function () {
    clearSearch();
    input.focus();
  });
}

function clearSearch() {
  var input = document.getElementById('searchInput');
  var clearBtn = document.getElementById('searchClear');
  var kbd = document.getElementById('searchKbd');
  if (!input) return;
  input.value = '';
  searchQuery = '';
  clearBtn.style.display = 'none';
  if (kbd) kbd.style.display = 'flex';
  applyFilters();
}

function updateSearchPlaceholder() {
  var input = document.getElementById('searchInput');
  if (!input || typeof getTranslation !== 'function') return;
  var ph = getTranslation('models.search.placeholder');
  if (ph) input.placeholder = ph;
}



function initFilters() {
  var categoryTags = document.querySelectorAll('.filter-tag[data-category]');

  categoryTags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      categoryTags.forEach(function (t) { t.classList.remove('active'); });
      tag.classList.add('active');
      applyFilters();
    });
  });

  var sortSelect = document.getElementById('sortOrder');
  if (sortSelect) sortSelect.addEventListener('change', applyFilters);

  var priceSelect = document.getElementById('filterPrice');
  if (priceSelect) priceSelect.addEventListener('change', applyFilters);

  // Pre-selection depuis l'URL
  var urlCategory = getUrlParam('category');
  if (urlCategory) {
    categoryTags.forEach(function (tag) {
      if (tag.dataset.category === urlCategory) {
        categoryTags.forEach(function (t) { t.classList.remove('active'); });
        tag.classList.add('active');
      }
    });
  }
}

/* ===========================================
   APPLICATION DES FILTRES
   =========================================== */

function applyFilters() {
  if (typeof PRODUCTS === 'undefined') {
    console.error('PRODUCTS not loaded');
    return;
  }

  var filtered = PRODUCTS.slice();

  // 0. Filtre par recherche texte
  if (searchQuery) {
    var q = searchQuery.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    filtered = filtered.filter(function (p) {
      var haystack = [
        p.name,
        p.subtitle || '',
        p.subtitleEn || '',
        p.subtitleAr || '',
        p.category || '',
        p.categoryLabel || '',
        Object.values(p.specs || {}).join(' ')
      ].join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return haystack.indexOf(q) !== -1;
    });
  }

  // 1. Filtre par categorie
  var activeCategory = document.querySelector('.filter-tag[data-category].active');
  if (activeCategory) {
    var category = activeCategory.dataset.category;
    if (category !== 'all') {
      filtered = filtered.filter(function (p) { return p.category === category; });
    }
  }

  // 2. Filtre par tranche de prix
  var priceSelect = document.getElementById('filterPrice');
  if (priceSelect && priceSelect.value && priceSelect.value !== 'all') {
    var parts = priceSelect.value.split('-');
    var min = parseInt(parts[0], 10);
    var max = parts[1] ? parseInt(parts[1], 10) : null;
    filtered = filtered.filter(function (p) {
      if (max !== null && isNaN(max) === false) {
        return p.price >= min && p.price <= max;
      } else {
        return p.price >= min;
      }
    });
  }

  // 3. Tri
  var sortSelect = document.getElementById('sortOrder');
  if (sortSelect) {
    switch (sortSelect.value) {
      case 'price-asc':
        filtered.sort(function (a, b) { return a.price - b.price; });
        break;
      case 'price-desc':
        filtered.sort(function (a, b) { return b.price - a.price; });
        break;
      case 'name':
        filtered.sort(function (a, b) { return a.name.localeCompare(b.name); });
        break;
    }
  }

  renderProductGrid(filtered);
  updateResultsCount(filtered.length);
}

/* ===========================================
   HIGHLIGHT TEXTE RECHERCHÉ
   =========================================== */

function highlightText(text, query) {
  if (!query || !text) return text;
  var q = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  var regex = new RegExp('(' + q + ')', 'gi');
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

/* ===========================================
   RENDU DE LA GRILLE PRODUITS
   =========================================== */

function renderProductGrid(products) {
  var grid = document.getElementById('productsGrid');
  if (!grid) return;

  if (products.length === 0) {
    var emptyTitle = typeof getTranslation === 'function' ? (getTranslation('models.empty.title') || 'Aucun modèle trouvé') : 'Aucun modèle trouvé';
    var emptyDesc = typeof getTranslation === 'function' ? (getTranslation('models.empty.desc') || 'Essayez d\'autres critères de recherche') : 'Essayez d\'autres critères de recherche';
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:4rem 0;"><p style="font-size:3rem;margin-bottom:1rem;">&#128269;</p><h3>' + emptyTitle + '</h3><p style="color:var(--text-secondary);">' + emptyDesc + '</p></div>';
    return;
  }

  var html = '';
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var delay = i * 0.05;

    // Color dots
    var colorDots = '';
    if (product.colors && product.colors.length > 0) {
      colorDots = '<div class="color-dots">';
      var maxColors = Math.min(product.colors.length, 3);
      for (var c = 0; c < maxColors; c++) {
        colorDots += '<div class="color-dot-card" style="background:' + product.colors[c].hex + ';"></div>';
      }
      colorDots += '</div>';
    }

    // Specs
    var vitesse = product.specs['Vitesse Max'] || product.specs['Vitesse'] || '-';
    var autonomie = product.specs['Autonomie'] || '-';
    var moteur = product.specs['Moteur'] ? product.specs['Moteur'].split(' ')[0] : '-';

    // Old price
    var oldPriceHtml = '';
    if (product.oldPrice) {
      oldPriceHtml = '<span style="text-decoration:line-through;color:var(--text-muted);margin-left:0.5rem;font-size:0.9rem;">' + formatPrice(product.oldPrice) + '</span>';
    }

    // Badge
    var badgeHtml = '';
    if (product.categoryLabel) {
      badgeHtml = '<span class="badge badge-' + (product.badgeColor || 'primary') + '">' + product.categoryLabel + '</span>';
    }

    var lang = typeof currentLang !== 'undefined' ? currentLang : 'fr';
    var subtitleTxt = typeof getProductText === 'function' ? getProductText(product, 'subtitle', lang) : product.subtitle;
    var hl = searchQuery;
    var nameHl = highlightText(product.name, hl);
    var subtitleHl = highlightText(subtitleTxt || '', hl);
    var badgeKey = product.category === 'electric-motorcycle' ? 'badge.moto' : 'badge.trot';
    var badgeLabel = typeof getTranslation === 'function' ? getTranslation(badgeKey) : product.categoryLabel;
    var vitesseLabel = typeof getTranslation === 'function' ? (getTranslation('spec.Vitesse Max') || 'Vitesse') : 'Vitesse';
    var autonomieLabel = typeof getTranslation === 'function' ? (getTranslation('spec.Autonomie') || 'Autonomie') : 'Autonomie';
    var moteurLabel = typeof getTranslation === 'function' ? (getTranslation('spec.Moteur') || 'Moteur') : 'Moteur';
    var btnLabel = typeof getTranslation === 'function' ? getTranslation('btn.view') : 'Voir →';

    html += '<div class="card product-card" style="animation-delay:' + delay + 's">' +
      '<a href="produit.html?id=' + product.id + '">' +
      '<div class="card-image">' +
      '<span class="badge badge-' + (product.badgeColor || 'primary') + '">' + badgeLabel + '</span>' +
      '<img src="' + product.mainImage + '" alt="' + product.name + '" loading="lazy">' +
      colorDots +
      '</div>' +
      '<div class="card-content">' +
      '<h3 class="card-title">' + nameHl + '</h3>' +
      '<p class="card-subtitle">' + subtitleHl + '</p>' +
      '<div class="specs-preview">' +
      '<div class="spec-item"><span class="spec-label">' + vitesseLabel + '</span><span class="spec-value">' + vitesse + '</span></div>' +
      '<div class="spec-item"><span class="spec-label">' + autonomieLabel + '</span><span class="spec-value">' + autonomie + '</span></div>' +
      '<div class="spec-item"><span class="spec-label">' + moteurLabel + '</span><span class="spec-value">' + moteur + '</span></div>' +
      '</div>' +
      '<div style="margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">' +
      '<span style="font-size:1.25rem;font-weight:800;background:var(--gradient-primary);-webkit-background-clip:text;background-clip:text;color:transparent;">' + formatPrice(product.price) + '</span>' +
      oldPriceHtml +
      '<span style="color:var(--primary);font-size:0.85rem;font-weight:600;">' + btnLabel + '</span>' +
      '</div>' +
      '</div>' +
      '</a>' +
      '</div>';
  }

  grid.innerHTML = html;
}

/* ===========================================
   COMPTEUR DE RESULTATS
   =========================================== */

function updateResultsCount(count) {
  var el = document.getElementById('resultCount');
  if (el) {
    var tpl = typeof getTranslation === 'function' ? getTranslation('models.count') : '{count} modèle(s)';
    // Supporte le placeholder {count} dans la traduction
    if (tpl && tpl.indexOf('{count}') !== -1) {
      el.textContent = tpl.replace('{count}', count);
    } else {
      var suffix = count > 1 ? 's' : '';
      el.textContent = count + ' modèle' + suffix;
    }
  }
}