/* =============================================
   E-SCOOT v2.0 — Filtres & Grille Produits
   =============================================
   Utilisé uniquement sur : modeles.html
   Dépendances : products-data.js, main.js

   Fonctionnement :
   1. initFilters()   — attache les écouteurs d'événements
   2. applyFilters()  — filtre + trie le tableau PRODUCTS
   3. renderProductGrid(products) — génère le HTML des cartes
   4. updateResultsCount(count)   — met à jour le compteur
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.models-page')) {
    initFilters();
    applyFilters(); // Affiche tous les produits au chargement
  }
});


/* ===========================================
   INITIALISATION DES FILTRES
   =========================================== */

/**
 * Attache les écouteurs aux boutons catégorie, selects prix/tri,
 * et lit le paramètre URL ?category= pour pré-sélectionner un filtre.
 */
function initFilters() {
  const categoryTags = document.querySelectorAll('.filter-tag[data-category]');

  // Boutons de catégorie (Tous / Motos / Trottinettes)
  categoryTags.forEach(tag => {
    tag.addEventListener('click', () => {
      categoryTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      applyFilters();
    });
  });

  // Select tri (prix croissant/décroissant, A-Z)
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.addEventListener('change', applyFilters);

  // Select filtre de prix
  const priceSelect = document.getElementById('priceSelect');
  if (priceSelect) priceSelect.addEventListener('change', applyFilters);

  // Pré-sélection depuis l'URL (ex: modeles.html?category=electric-motorcycle)
  const urlCategory = getUrlParam('category');
  if (urlCategory) {
    categoryTags.forEach(tag => {
      if (tag.dataset.category === urlCategory) {
        categoryTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        // applyFilters() sera appelé automatiquement juste après initFilters()
      }
    });
  }
}


/* ===========================================
   APPLICATION DES FILTRES
   =========================================== */

/**
 * Lit l'état courant de tous les filtres, filtre le tableau
 * PRODUCTS, le trie, puis déclenche le rendu.
 */
function applyFilters() {
  let filtered = [...PRODUCTS];

  // 1. Filtre par catégorie
  const activeCategory = document.querySelector('.filter-tag[data-category].active');
  if (activeCategory) {
    const category = activeCategory.dataset.category;
    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }
  }

  // 2. Filtre par tranche de prix
  const priceSelect = document.getElementById('priceSelect');
  if (priceSelect && priceSelect.value) {
    const [min, max] = priceSelect.value.split('-').map(Number);
    filtered = filtered.filter(p =>
      max ? (p.price >= min && p.price <= max) : p.price >= min
    );
  }

  // 3. Tri
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    switch (sortSelect.value) {
      case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
      case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
  }

  renderProductGrid(filtered);
  updateResultsCount(filtered.length);
}


/* ===========================================
   RENDU DE LA GRILLE PRODUITS
   =========================================== */

/**
 * Génère et injecte les cartes produit dans #productsGrid.
 * Chaque carte est un lien vers produit.html?id={product.id}.
 * @param {object[]} products - Tableau de produits filtrés/triés
 */
function renderProductGrid(products) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  // État vide
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
          ${product.categoryLabel
      ? `<span class="badge badge-${product.badgeColor}">${product.categoryLabel}</span>`
      : ''}
          <img src="${product.mainImage}" alt="${product.name}" loading="lazy">
          ${product.colors && product.colors.length >= 1
      ? `<div style="position: absolute; bottom: var(--space-sm); right: var(--space-sm); display: flex; gap: 4px;">
                ${product.colors.slice(0, 3).map(c => `
                  <div style="width:16px;height:16px;border-radius:50%;background:${c.hex};border:2px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>
                `).join('')}
               </div>`
      : ''}
        </div>
        <div class="card-content">
          <h3 class="card-title">${product.name}</h3>
          <p class="card-subtitle">${product.subtitle}</p>

          <!-- Aperçu des 3 specs principales -->
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

          <!-- Prix + lien "Voir" -->
          <div class="flex items-center justify-between"
               style="margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border);">
            <div>
              <span style="font-size:1.25rem;font-weight:800;background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">
                ${formatPrice(product.price)}
              </span>
              ${product.oldPrice
      ? `<span style="text-decoration:line-through;color:var(--text-muted);margin-left:0.5rem;font-size:0.9rem;">${formatPrice(product.oldPrice)}</span>`
      : ''}
            </div>
            <span class="btn btn-sm btn-primary" style="pointer-events:none;">Voir →</span>
          </div>
        </div>
      </a>
    </div>
  `).join('');

  // Ré-initialise le scroll reveal sur les nouvelles cartes injectées
  if (typeof initScrollReveal === 'function') {
    setTimeout(initScrollReveal, 100);
  }
}


/* ===========================================
   COMPTEUR DE RÉSULTATS
   =========================================== */

/**
 * Met à jour le texte "N modèle(s)" affiché dans la barre de filtres.
 * @param {number} count
 */
function updateResultsCount(count) {
  const el = document.getElementById('resultsCount');
  if (el) el.textContent = `${count} modèle${count > 1 ? 's' : ''}`;
}