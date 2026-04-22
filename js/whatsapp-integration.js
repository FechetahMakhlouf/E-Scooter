/* =============================================
   E-SCOOT — Intégration WhatsApp
   =============================================
   Chargé sur toutes les pages (en dernier script).
   Dépendances : aucune

   Fonctions exposées globalement :
   - openWhatsApp(message)   — ouvre WA avec message
   - quickOrder(productName) — raccourci commande rapide

   Configuration :
   Mettre à jour WHATSAPP_NUMBER avec le vrai numéro
   au format international sans "+" (ex: "213540000000").
   ============================================= */


/* ===========================================
   CONFIGURATION
   =========================================== */

/**
 * Numéro WhatsApp au format international (sans le "+").
 * Ex : Algérie 213 + 9 chiffres = "213540000000"
 */
const WHATSAPP_NUMBER = '0'; // ← Mettre à jour avec le vrai numéro


/* ===========================================
   INITIALISATION
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {
  initWhatsAppFloat();
  initWhatsAppProductButtons();
});


/* ===========================================
   BOUTON FLOTTANT WHATSAPP
   =========================================== */

/**
 * Met à jour le href du bouton flottant `.whatsapp-float`
 * avec le numéro configuré et un message d'accueil par défaut.
 */
function initWhatsAppFloat() {
  const floatBtn = document.querySelector('.whatsapp-float');
  if (!floatBtn) return;

  floatBtn.href = buildWhatsAppUrl('Bonjour, je suis intéressé par vos véhicules électriques.');
}


/* ===========================================
   BOUTONS PRODUIT WHATSAPP (via data-attribut)
   =========================================== */

/**
 * Attache un handler aux éléments portant `data-whatsapp-product`.
 * Le nom du produit est extrait de l'attribut et injecté dans le message.
 * Utilisé pour des boutons génériques hors page produit.
 */
function initWhatsAppProductButtons() {
  document.querySelectorAll('[data-whatsapp-product]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productName = btn.dataset.whatsappProduct;
      openWhatsApp(`Bonjour, je suis intéressé par la ${productName}. Pouvez-vous me donner plus d'informations ?`);
    });
  });
}


/* ===========================================
   FONCTIONS UTILITAIRES
   =========================================== */

/**
 * Construit l'URL WhatsApp avec le numéro et le message encodé.
 * @param {string} message - Texte du message pré-rempli
 * @returns {string} URL complète wa.me
 */
function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Ouvre WhatsApp dans un nouvel onglet avec un message personnalisé.
 * @param {string} message
 */
function openWhatsApp(message) {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}

/**
 * Raccourci pour commander rapidement un produit.
 * Appelée depuis les pages produit ou la page modèles.
 * @param {string} productName - Nom du produit à commander
 */
function quickOrder(productName) {
  const message = `Bonjour, je souhaite commander la ${productName}. Merci de me confirmer la disponibilité et les délais de livraison.`;
  openWhatsApp(message);
}