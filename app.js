// Copy Referral Link Function
function copyRefLink() {
  const linkInput = document.getElementById("refLink");
  if (linkInput) {
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(linkInput.value);
    alert("✅ रेफरल लिंक सफलतापूर्वक कॉपी हो गया!");
  }
}

// Auto load user dynamic data if available
window.addEventListener('DOMContentLoaded', () => {
  console.log("GlobalTech VIP Dashboard Loaded Successfully.");
});
