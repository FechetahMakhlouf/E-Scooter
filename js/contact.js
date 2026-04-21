/* =============================================
   E-SCOOT — Contact Form
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Validate form
    if (!validateForm(form)) return;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Envoi en cours...';
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate sending (replace with actual API call)
    await simulateSend(data);
    
    // Show success
    showToast('Message envoy\u00e9 avec succ\u00e8s ! Nous vous r\u00e9pondrons bient\u00f4t.', 'success');
    form.reset();
    
    // Restore button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  });
  
  // Real-time validation
  form.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearFieldError(input));
  });
}

function validateForm(form) {
  let isValid = true;
  
  form.querySelectorAll('.form-control[required]').forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  
  // Email validation
  const emailField = form.querySelector('input[type="email"]');
  if (emailField && emailField.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      showFieldError(emailField, 'Veuillez entrer une adresse email valide');
      isValid = false;
    }
  }
  
  // Phone validation
  const phoneField = form.querySelector('input[name="phone"]');
  if (phoneField && phoneField.value) {
    const phoneRegex = /^[0-9+\s]{9,15}$/;
    if (!phoneRegex.test(phoneField.value.replace(/\s/g, ''))) {
      showFieldError(phoneField, 'Veuillez entrer un num\u00e9ro de t\u00e9l\u00e9phone valide');
      isValid = false;
    }
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

function simulateSend(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Form data:', data);
      resolve();
    }, 1500);
  });
}
