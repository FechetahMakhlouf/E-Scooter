/* =============================================
   E-SCOOT — Formulaire de Contact
   =============================================
   Utilisé uniquement sur : contact.html
   Dépendances : main.js (showToast)

   Fonctionnement :
   1. Écoute la soumission du formulaire #contactForm
   2. Valide les champs requis, l'email et le téléphone
   3. Simule l'envoi (remplacer simulateSend par un vrai appel API)
   4. Affiche un toast de succès et réinitialise le formulaire
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {
  initContactForm();
});


/* ===========================================
   INITIALISATION
   =========================================== */

/**
 * Attache l'écouteur de soumission et la validation
 * en temps réel sur tous les champs du formulaire.
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Soumission du formulaire
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;

    // Validation complète avant envoi
    if (!validateForm(form)) return;

    // État de chargement
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Envoi en cours...';

    // Collecte des données du formulaire
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Envoi (simulé — remplacer par fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) }))
    await simulateSend(data);

    // Succès
    showToast('Message envoyé avec succès ! Nous vous répondrons bientôt.', 'success');
    form.reset();

    // Restauration du bouton
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHTML;
  });

  // Validation en temps réel sur chaque champ
  form.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearFieldError(input));
  });
}


/* ===========================================
   VALIDATION
   =========================================== */

/**
 * Valide l'ensemble du formulaire.
 * Vérifie les champs requis, le format email et le téléphone.
 * @param {HTMLFormElement} form
 * @returns {boolean} true si le formulaire est valide
 */
function validateForm(form) {
  let isValid = true;

  // Champs requis
  form.querySelectorAll('.form-control[required]').forEach(field => {
    if (!validateField(field)) isValid = false;
  });

  // Format email
  const emailField = form.querySelector('input[type="email"]');
  if (emailField && emailField.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      showFieldError(emailField, 'Veuillez entrer une adresse email valide');
      isValid = false;
    }
  }

  // Format téléphone (optionnel, validé seulement si rempli)
  const phoneField = form.querySelector('input[name="phone"]');
  if (phoneField && phoneField.value) {
    const phoneRegex = /^[0-9+\s]{9,15}$/;
    if (!phoneRegex.test(phoneField.value.replace(/\s/g, ''))) {
      showFieldError(phoneField, 'Veuillez entrer un numéro de téléphone valide');
      isValid = false;
    }
  }

  return isValid;
}

/**
 * Valide un champ unique : vérifie qu'il n'est pas vide si requis.
 * @param {HTMLElement} field
 * @returns {boolean}
 */
function validateField(field) {
  // Champ optionnel vide → valide
  if (!field.required && !field.value) return true;

  if (!field.value.trim()) {
    showFieldError(field, 'Ce champ est requis');
    return false;
  }

  return true;
}


/* ===========================================
   GESTION DES ERREURS DE CHAMP
   =========================================== */

/**
 * Affiche un message d'erreur sous un champ et le colore en rouge.
 * @param {HTMLElement} field
 * @param {string}      message
 */
function showFieldError(field, message) {
  clearFieldError(field); // Évite les doublons

  field.style.borderColor = 'var(--danger)';

  const error = document.createElement('span');
  error.className = 'field-error';
  error.textContent = message;
  error.style.cssText = 'color: var(--danger); font-size: 0.8rem; margin-top: 0.25rem; display: block;';

  field.parentNode.appendChild(error);
}

/**
 * Supprime l'erreur affichée sur un champ et réinitialise sa bordure.
 * @param {HTMLElement} field
 */
function clearFieldError(field) {
  field.style.borderColor = '';
  const error = field.parentNode.querySelector('.field-error');
  if (error) error.remove();
}


/* ===========================================
   ENVOI (SIMULÉ)
   =========================================== */

/**
 * Simule un délai d'envoi réseau de 1,5 seconde.
 * Remplacer par un vrai appel fetch en production.
 * @param {object} data - Données du formulaire
 * @returns {Promise<void>}
 */
function simulateSend(data) {
  return new Promise(resolve => {
    console.log('[Contact] Données à envoyer :', data);
    setTimeout(resolve, 1500);
  });
}