// Mobile nav menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  const isHidden = mobileMenu.classList.toggle("hidden");
  mobileMenuBtn.setAttribute("aria-expanded", isHidden ? "false" : "true");
});

// Fixed chat widget: simple open/close acknowledgement.
// (No backend here — this just gives the button something to do.)
const chatWidget = document.getElementById("chatWidget");

chatWidget.addEventListener("click", () => {
  alert("Chat support is not connected in this demo, but the widget is fixed to the bottom-right corner as required.");
});
