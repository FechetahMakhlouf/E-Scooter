/* =============================================
   E-SCOOT — Formulaire de Contact (v2)
   =============================================
   Utilisé uniquement sur : contact.html
   Dépendances : main.js (showToast)

   Nouveautés :
   - Validation des boutons radio pour le sujet
   - Récupération de la valeur sélectionnée
   ============================================= */

// Initialiser EmailJS avec ta clé publique
(function () {
  emailjs.init("7eA7HBNQM_PDzUSrK");
})();

document.addEventListener('DOMContentLoaded', function () {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;

    // Validation des champs
    if (!validateForm(form)) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Envoi en cours...';

    // Récupération des données
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // S'assurer que le sujet est bien pris (devrait l'être via formData)
    // Pour les radios non cochés, ils n'apparaissent pas dans formData.
    // Si aucun n'est coché, data.subject sera undefined → déjà bloqué par la validation.

    try {
      // Envoi via EmailJS
      await emailjs.send("service_czsie9j", "template_qm8j1dm", data);
      showToast('Message envoyé avec succès !', 'success');
      form.reset();
      // Réinitialiser aussi la sélection visuelle des boutons radio
      clearRadioGroup(form.querySelector('.subject-selector'));
    } catch (error) {
      console.error('Erreur EmailJS :', error);
      showToast('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHTML;
  });

  // Validation en temps réel pour les champs classiques
  form.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearFieldError(input));
  });

  // Validation visuelle pour les radios (pas de blur, on écoute le change)
  const radios = form.querySelectorAll('input[type="radio"][name="subject"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      // Efface l'erreur du groupe quand une sélection est faite
      clearRadioGroupError(form.querySelector('.subject-selector'));
    });
  });
}

/* ===========================================
   VALIDATION
   =========================================== */

function validateForm(form) {
  let isValid = true;

  // Champs requis classiques
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

  // Format téléphone (optionnel)
  const phoneField = form.querySelector('input[name="phone"]');
  if (phoneField && phoneField.value) {
    const phoneRegex = /^[0-9+\s]{9,15}$/;
    if (!phoneRegex.test(phoneField.value.replace(/\s/g, ''))) {
      showFieldError(phoneField, 'Veuillez entrer un numéro de téléphone valide');
      isValid = false;
    }
  }

  // Validation du groupe radio "subject"
  const subjectContainer = form.querySelector('.subject-selector');
  const checkedRadio = form.querySelector('input[name="subject"]:checked');
  if (!checkedRadio) {
    showRadioGroupError(subjectContainer, 'Veuillez choisir un sujet');
    isValid = false;
  }

  return isValid;
}

function validateField(field) {
  if (!field.required && !field.value) return true;
  if (!field.value.trim()) {
    showFieldError(field, 'Ce champ est requis');
    return false;
  }
  return true;
}

/* ===========================================
   GESTION DES ERREURS
   =========================================== */

function showFieldError(field, message) {
  clearFieldError(field);
  field.style.borderColor = 'var(--danger)';
  const error = document.createElement('span');
  error.className = 'field-error';
  error.textContent = message;
  error.style.cssText = 'color: var(--danger); font-size: 0.8rem; margin-top: 0.25rem; display: block;';
  field.parentNode.appendChild(error);
}

function clearFieldError(field) {
  field.style.borderColor = '';
  const error = field.parentNode.querySelector('.field-error');
  if (error) error.remove();
}

/* Gestion d'erreur pour le groupe de radio */
function showRadioGroupError(container, message) {
  clearRadioGroupError(container);
  const error = document.createElement('span');
  error.className = 'field-error';
  error.textContent = message;
  error.style.cssText = 'color: var(--danger); font-size: 0.8rem; margin-top: 0.5rem; display: block;';
  container.appendChild(error);
}

function clearRadioGroupError(container) {
  const error = container.querySelector('.field-error');
  if (error) error.remove();
}

/* Réinitialiser l'état visuel des radios après reset du formulaire */
function clearRadioGroup(container) {
  if (!container) return;
  const radios = container.querySelectorAll('input[type="radio"]');
  radios.forEach(r => r.checked = false);
  clearRadioGroupError(container);
}

/* ===========================================
   ENVOI (SIMULÉ)
   =========================================== */

function simulateSend(data) {
  return new Promise(resolve => {
    console.log('[Contact] Données à envoyer :', data);
    setTimeout(resolve, 1500);
  });
}