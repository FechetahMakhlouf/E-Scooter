/* =============================================
   E-SCOOT v2.0 — Filtering & Product Grid
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.models-page')) {
    initFilters();
    applyFilters();  // ← au lieu de renderProductGrid(PRODUCTS)
  }
});

/* ---- Initialize filters ---- */
function initFilters() {
  // Category filter tags
  const categoryTags = document.querySelectorAll('.filter-tag[data-category]');
  categoryTags.forEach(tag => {
    tag.addEventListener('click', () => {
      categoryTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      applyFilters();
    });
  });

  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', applyFilters);
  }

  // Price range
  const priceSelect = document.getElementById('priceSelect');
  if (priceSelect) {
    priceSelect.addEventListener('change', applyFilters);
  }

  // Check URL params for category
  const urlCategory = getUrlParam('category');
  if (urlCategory) {
    categoryTags.forEach(tag => {
      if (tag.dataset.category === urlCategory) {
        categoryTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        // Ne plus appeler applyFilters() ici, l'appel global le fera
      }
    });
  }
}

/* ---- Apply all filters ---- */
function applyFilters() {
  let filtered = [...PRODUCTS];

  // Category filter
  const activeCategory = document.querySelector('.filter-tag[data-category].active');
  if (activeCategory) {
    const category = activeCategory.dataset.category;
    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }
  }

  // Price filter
  const priceSelect = document.getElementById('priceSelect');
  if (priceSelect) {
    const priceRange = priceSelect.value;
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }
  }

  // Sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    const sort = sortSelect.value;
    switch (sort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
  }

  renderProductGrid(filtered);
  updateResultsCount(filtered.length);
}

/* ---- Render product grid ---- */
function renderProductGrid(products) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="text-center" style="grid-column: 1/-1; padding: 4rem 0;">
        <p style="font-size: 3rem; margin-bottom: 1rem;">🔍</p>
        <h3>Aucun modèle trouvé</h3>
        <p style="color: var(--text-secondary);">Essayez d'autres critères de recherche</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map((product, index) => `
    <div class="card product-card reveal" style="animation-delay: ${index * 0.05}s">
      <a href="produit.html?id=${product.id}">
        <div class="card-image">
          ${product.badge ? `<span class="badge badge-${product.badgeColor}">${product.badge}</span>` : ''}
          <img src="${product.mainImage}" alt="${product.name}" loading="lazy">
          ${product.colors && product.colors.length > 1 ? `
            <div style="position: absolute; bottom: var(--space-sm); right: var(--space-sm); display: flex; gap: 4px;">
              ${product.colors.slice(0, 3).map(c => `
                <div style="width: 16px; height: 16px; border-radius: 50%; background: ${c.hex}; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>
              `).join('')}
            </div>
          ` : ''}
        </div>
        <div class="card-content">
          <span class="badge badge-ghost" style="margin-bottom: 0.5rem; font-size: 0.7rem;">${product.categoryLabel}</span>
          <h3 class="card-title">${product.name}</h3>
          <p class="card-subtitle">${product.subtitle}</p>
          <div class="specs-preview">
            <div class="spec-item">
              <span class="spec-label">Vitesse</span>
              <span class="spec-value">${product.specs['Vitesse Max'] || product.specs.Vitesse}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Autonomie</span>
              <span class="spec-value">${product.specs.Autonomie}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Moteur</span>
              <span class="spec-value">${product.specs.Moteur.split(' ')[0]}</span>
            </div>
          </div>
          <div class="flex items-center justify-between" style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
            <div>
              <span style="font-size: 1.25rem; font-weight: 800; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${formatPrice(product.price)}</span>
              ${product.oldPrice ? `<span style="text-decoration: line-through; color: var(--text-muted); margin-left: 0.5rem; font-size: 0.9rem;">${formatPrice(product.oldPrice)}</span>` : ''}
            </div>
            <span class="btn btn-sm btn-primary" style="pointer-events: none;">Voir →</span>
          </div>
        </div>
      </a>
    </div>
  `).join('');

  // Re-init scroll reveal for new elements
  if (typeof initScrollReveal === 'function') {
    setTimeout(initScrollReveal, 100);
  }
}

/* ---- Update results count ---- */
function updateResultsCount(count) {
  const el = document.getElementById('resultsCount');
  if (el) {
    el.textContent = `${count} modèle${count > 1 ? 's' : ''}`;
  }
}

/* ---- Format price ---- */
function formatPrice(price) {
  return price.toLocaleString('fr-FR') + ' DA';
}
