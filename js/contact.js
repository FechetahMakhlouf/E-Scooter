/* =============================================
   E-SCOOT v3.0 — Formulaire de Contact
   =============================================
   Utilisé uniquement sur : contact.html
   Dépendances : main.js (showToast)
   ============================================= */

(function () {
  emailjs.init("7eA7HBNQM_PDzUSrK");
})();

document.addEventListener('DOMContentLoaded', function () {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Validation en temps réel
  const inputs = form.querySelectorAll('.form-group input, .form-group textarea');
  inputs.forEach(function(input) {
    input.addEventListener('blur', function() { validateField(input); });
    input.addEventListener('input', function() { clearFieldError(input); });
  });

  // Radios
  const radios = form.querySelectorAll('input[type="radio"][name="subject"]');
  radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      clearRadioGroupError(form.querySelector('.subject-selector'));
    });
  });

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;

    if (!validateForm(form)) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>\u23F3</span> <span>Envoi en cours...</span>';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      await emailjs.send("service_czsie9j", "template_qm8j1dm", data);
      showToast('Message envoye avec succes !', 'success');
      form.reset();
      clearRadioGroup(form.querySelector('.subject-selector'));
    } catch (error) {
      console.error('Erreur EmailJS :', error);
      showToast('Erreur lors de l\'envoi. Veuillez reessayer.', 'error');
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHTML;
  });
}

/* ===========================================
   VALIDATION
   =========================================== */

function validateForm(form) {
  let isValid = true;

  // Champs requis
  const requiredInputs = form.querySelectorAll('.form-group input[required], .form-group textarea[required]');
  requiredInputs.forEach(function(field) {
    if (!validateField(field)) isValid = false;
  });

  // Email
  const emailField = form.querySelector('input[type="email"]');
  if (emailField && emailField.value) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      showFieldError(emailField, 'Veuillez entrer une adresse email valide');
      isValid = false;
    }
  }

  // Telephone (optionnel)
  const phoneField = form.querySelector('input[name="phone"]');
  if (phoneField && phoneField.value) {
    var phoneRegex = /^[0-9+\s]{9,15}$/;
    if (!phoneRegex.test(phoneField.value.replace(/\s/g, ''))) {
      showFieldError(phoneField, 'Veuillez entrer un numero de telephone valide');
      isValid = false;
    }
  }

  // Sujet radio
  const checkedRadio = form.querySelector('input[name="subject"]:checked');
  if (!checkedRadio) {
    showRadioGroupError(form.querySelector('.subject-selector'), 'Veuillez choisir un sujet');
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
   ERREURS
   =========================================== */

function showFieldError(field, message) {
  clearFieldError(field);
  field.classList.add('error');
  var error = document.createElement('span');
  error.className = 'error-message visible';
  error.textContent = message;
  field.parentNode.appendChild(error);
}

function clearFieldError(field) {
  field.classList.remove('error');
  var error = field.parentNode.querySelector('.error-message');
  if (error) error.remove();
}

function showRadioGroupError(container, message) {
  clearRadioGroupError(container);
  var error = document.createElement('span');
  error.className = 'error-message visible';
  error.textContent = message;
  container.appendChild(error);
}

function clearRadioGroupError(container) {
  if (!container) return;
  var error = container.querySelector('.error-message');
  if (error) error.remove();
}

function clearRadioGroup(container) {
  if (!container) return;
  var radios = container.querySelectorAll('input[type="radio"]');
  radios.forEach(function(r) { r.checked = false; });
  clearRadioGroupError(container);
}
