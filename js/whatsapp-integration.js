/* =============================================
   E-SCOOT — WhatsApp Integration
   ============================================= */

const WHATSAPP_NUMBER = '0';

document.addEventListener('DOMContentLoaded', function () {
  initWhatsAppFloat();
  initWhatsAppProductButtons();
});

/* ---- Floating WhatsApp button ---- */
function initWhatsAppFloat() {
  const floatBtn = document.querySelector('.whatsapp-float');
  if (!floatBtn) return;

  floatBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour, je suis intéressé par vos véhicules électriques.')}`;
}

/* ---- Product page WhatsApp buttons ---- */
function initWhatsAppProductButtons() {
  document.querySelectorAll('[data-whatsapp-product]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productName = btn.dataset.whatsappProduct;
      const message = `Bonjour, je suis intéressé par la ${productName}. Pouvez-vous me donner plus d'informations ?`;
      openWhatsApp(message);
    });
  });
}

/* ---- Open WhatsApp with message ---- */
function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ---- Quick order function ---- */
function quickOrder(productName) {
  const message = `Bonjour, je souhaite commander la ${productName}. Merci de me confirmer la disponibilité et les délais de livraison.`;
  openWhatsApp(message);
}
