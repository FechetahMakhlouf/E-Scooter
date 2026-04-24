/* =============================================
   E-SCOOT v3.0 — Script Principal
   =============================================
   Gère : navbar, theme, langue, scroll reveal,
   animations, compteurs, parallaxe, mobile menu
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ============================
     NAVBAR SCROLL
     ============================ */
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  function updateNavbar() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* ============================
     THEME TOGGLE
     ============================ */
  const themeToggle = document.getElementById('themeToggle');
  const htmlEl = document.documentElement;

  // Charger le theme sauvegarde
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    htmlEl.setAttribute('data-theme', 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      if (newTheme === 'light') {
        htmlEl.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        htmlEl.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      }

      // Mettre a jour l'image hero
      const heroImage = document.getElementById('heroImage');
      if (heroImage) {
        const isLight = newTheme === 'light';
        const currentSrc = heroImage.src;
        if (isLight) {
          heroImage.src = 'assets/images/hero-main-2.jpg';
        } else {
          heroImage.src = 'assets/images/hero-main-1.jpg';
        }
      }
    });
  }

  /* ============================
     LANGUAGE SWITCHER
     ============================ */
  const langSwitcher = document.getElementById('langSwitcher');

  if (langSwitcher) {
    langSwitcher.addEventListener('click', function (e) {
      const btn = e.target.closest('.lang-btn');
      if (!btn) return;

      const lang = btn.getAttribute('data-lang');
      if (lang && typeof setLanguage === 'function') {
        setLanguage(lang);
      }
    });
  }

  /* ============================
     MOBILE MENU
     ============================ */
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function () {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      const isExpanded = this.classList.contains('active');
      this.setAttribute('aria-expanded', isExpanded);
    });

    // Fermer au clic sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ============================
     BACK TO TOP
     ============================ */
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================
     SCROLL REVEAL (IntersectionObserver)
     ============================ */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ============================
     COUNTER ANIMATION
     ============================ */
  const counters = document.querySelectorAll('[data-count]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 1500;
    const start = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      el.textContent = current + (target >= 1000 ? '+' : '+');

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + '+';
      }
    }

    requestAnimationFrame(update);
  }

  /* ============================
     PARALLAX HERO
     ============================ */
  const heroImage = document.getElementById('heroImage');
  const heroSection = document.querySelector('.hero');

  if (heroImage && heroSection) {
    window.addEventListener('scroll', function () {
      const scrolled = window.scrollY;
      const vh = window.innerHeight;

      if (scrolled < vh) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    }, { passive: true });
  }

  /* ============================
     SMOOTH SCROLL ANCHORS
     ============================ */
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

}); // End DOMContentLoaded

/* ============================
   URL PARAM HELPER (global)
   ============================ */
function getUrlParam(param) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/* ============================
   TOAST HELPER (global)
   ============================ */
function showToast(message, type) {
  type = type || 'success';
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hiding');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}

/* ============================
   LAZY LOAD IMAGES
   ============================ */
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });

  lazyImages.forEach(img => imageObserver.observe(img));
}
