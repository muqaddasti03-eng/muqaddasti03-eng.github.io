// ==================== CONFIGURATION ====================
// CHANGE THIS TO YOUR WHATSAPP NUMBER
const myWhatsApp = "03238410656";

// CHANGE THIS TO YOUR JAZZCASH NUMBER
const myJazzCash = "03238410656";
// ========================================================

function selectProduct(productName) {
    let choice = confirm(`
        Product: ${productName}
        
        Choose Payment:
        1. OK = JazzCash
        2. Cancel = Cash on Delivery
    `);
    
    if (choice === true) {
        let message = `Hi RWAAN! I want to buy: ${productName}. I will pay via JazzCash to ${myJazzCash}. Please confirm.`;
        let url = `https://wa.me/${myWhatsApp}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    } else {
        let message = `Hi RWAAN! I want to buy: ${productName}. I want to pay on delivery. Please confirm.`;
        let url = `https://wa.me/${myWhatsApp}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
}