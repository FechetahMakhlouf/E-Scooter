/* =============================================
   E-SCOOT v2.0 — JavaScript Principal
   =============================================
   Fonctions globales partagées par toutes les pages.
   Chargé en premier, avant les scripts de page.

   TABLE DES MATIÈRES
   ------------------
   1.  Initialisation au chargement du DOM
   2.  Navbar — effet glassmorphique au scroll
   3.  Menu mobile — hamburger toggle
   4.  Scroll Reveal — animation d'entrée
   5.  Bouton "Retour en haut"
   6.  Bascule de thème (clair / sombre)
   7.  Smooth Scroll — ancres internes
   8.  Parallaxe — image hero au scroll
   9.  Animation de compteurs (statistiques hero)
   10. Toast Notifications
   11. Utilitaires (getUrlParam, copyToClipboard)
   ============================================= */


/* ===========================================
   1. INITIALISATION
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initBackToTop();
  initThemeToggle();
  initSmoothScroll();
  initParallax();
  initCounterAnimation();
});


/* ===========================================
   2. NAVBAR — EFFET GLASSMORPHIQUE AU SCROLL
   =========================================== */

/**
 * Ajoute la classe `.scrolled` à la navbar dès que l'utilisateur
 * descend de plus de 50px, déclenchant l'effet glassmorphisme CSS.
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // État initial si la page est déjà scrollée
}


/* ===========================================
   3. MENU MOBILE
   =========================================== */

/**
 * Gère l'ouverture/fermeture du menu mobile (hamburger).
 * Ferme automatiquement le menu quand un lien est cliqué.
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  let scrollY = 0;
  const body = document.body;

  const openMenu = () => {
    scrollY = window.scrollY;                     // mémorise la position actuelle
    body.style.position = 'fixed';                // fige le body
    body.style.top = `-${scrollY}px`;             // compense le décalage vers le haut
    body.style.width = '100%';                    // évite un rétrécissement
    body.style.overflowY = 'scroll';              // garde l'espace de la scrollbar
    navLinks.classList.add('active');
    toggle.classList.add('active');
  };

  const closeMenu = () => {
    // Restaure les styles initiaux
    body.style.position = '';
    body.style.top = '';
    body.style.width = '';
    body.style.overflowY = '';
    // Replace la page exactement là où on l'avait laissée
    window.scrollTo(0, scrollY);
    navLinks.classList.remove('active');
    toggle.classList.remove('active');
  };

  toggle.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Fermeture automatique au clic sur un lien
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}


/* ===========================================
   4. SCROLL REVEAL
   =========================================== */

/**
 * Observe les éléments portant la classe `.reveal`.
 * Ajoute `.revealed` quand ils entrent dans le viewport,
 * déclenchant la transition CSS d'apparition.
 * Appelée aussi depuis filtering.js et gallery.js après
 * rendu dynamique de la grille.
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Déclenche une seule fois
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  reveals.forEach(el => observer.observe(el));
}


/* ===========================================
   5. BOUTON "RETOUR EN HAUT"
   =========================================== */

/**
 * Affiche le bouton `.back-to-top` après 500px de scroll
 * et remonte en douceur au clic.
 */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ===========================================
   6. BASCULE DE THÈME (CLAIR / SOMBRE)
   =========================================== */

/**
 * Lit et enregistre le thème en localStorage.
 * Met à jour l'icône SVG du bouton (#themeToggle).
 */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

/**
 * Injecte l'icône SVG appropriée dans le bouton de thème.
 * @param {string} theme - 'dark' | 'light'
 */
function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  if (theme === 'dark') {
    // Icône soleil (pour passer en mode clair)
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>`;
  } else {
    // Icône lune (pour passer en mode sombre)
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>`;
  }
}


/* ===========================================
   7. SMOOTH SCROLL — ANCRES INTERNES
   =========================================== */

/**
 * Intercepte les clics sur les liens `href="#..."` et fait
 * défiler jusqu'à la cible en douceur.
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}


/* ===========================================
   8. PARALLAXE — IMAGE HERO
   =========================================== */

/**
 * Décale légèrement l'image de fond du hero en fonction
 * du scroll pour créer un effet parallaxe subtil.
 * Uniquement sur la page d'accueil.
 */
function initParallax() {
  const heroBg = document.querySelector('.hero-bg img');
  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  }, { passive: true });
}


/* ===========================================
   9. ANIMATION DE COMPTEURS
   =========================================== */

/**
 * Anime les chiffres des statistiques hero (ex: "0 → 120 km")
 * dès qu'ils entrent dans le viewport.
 */
function initCounterAnimation() {
  const statValues = document.querySelectorAll('.hero-stat-value');
  if (statValues.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statValues.forEach(el => observer.observe(el));
}

/**
 * Anime un élément depuis 0 jusqu'à sa valeur numérique initiale.
 * Conserve le suffixe textuel (ex: "+", "km").
 * @param {HTMLElement} element
 */
function animateCounter(element) {
  const text = element.textContent;
  const numericMatch = text.match(/[\d,.]+/);
  if (!numericMatch) return;

  const numericPart = numericMatch[0];
  const suffix = text.replace(numericPart, '');
  const targetValue = parseFloat(numericPart.replace(/,/g, ''));
  if (isNaN(targetValue)) return;

  const duration = 1500;
  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // Ease-out cubique
    const current = Math.round(targetValue * eased);

    element.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
}


/* ===========================================
   10. TOAST NOTIFICATIONS
   =========================================== */

/**
 * Affiche une notification temporaire en haut à droite.
 * Utilisée par contact.js après envoi du formulaire.
 * @param {string} message - Texte de la notification
 * @param {'success'|'error'} type - Type de notification
 */
function showToast(message, type = 'success') {
  // Crée le conteneur s'il n'existe pas encore
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Disparition après 3 secondes
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}


/* ===========================================
   11. UTILITAIRES
   =========================================== */

/**
 * Lit un paramètre depuis l'URL (ex: ?id=q11-max → 'q11-max').
 * Utilisée par produit.js et filtering.js.
 * @param {string} param - Nom du paramètre
 * @returns {string|null}
 */
function getUrlParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

/**
 * Copie du texte dans le presse-papiers avec fallback.
 * @param {string} text
 */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => showToast('Copié dans le presse-papiers !'))
    .catch(() => {
      // Fallback pour navigateurs anciens
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast('Copié dans le presse-papiers !');
    });
}