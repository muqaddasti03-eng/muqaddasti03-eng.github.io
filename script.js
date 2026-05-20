// ==================== CONFIGURATION ====================
// CHANGE THIS TO YOUR WHATSAPP NUMBER (e.g., 03001234567)
const myWhatsApp = "03238410656";

// CHANGE THIS TO YOUR JAZZCASH NUMBER (e.g., 03121234567)
const myJazzCash = "03238410656";
// ========================================================

function selectProduct(productName) {
    let choice = confirm(`
        Product: ${productName}
        
        Choose Payment:
        1. OK = JazzCash (Transfer now)
        2. Cancel = Cash on Delivery
        
        Click OK or Cancel
    `);
    
    if (choice === true) {
        // JazzCash
        let message = `Hi Lumina! I want to buy: ${productName}. I will pay via JazzCash to ${myJazzCash}. Please confirm.`;
        let url = `https://wa.me/${myWhatsApp}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    } else {
        // Cash on Delivery
        let message = `Hi Lumina! I want to buy: ${productName}. I want to pay on delivery. Please confirm.`;
        let url = `https://wa.me/${myWhatsApp}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
}