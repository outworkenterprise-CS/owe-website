const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(this);
  const whatsappNumber = "6738966171";

  const message = `Hi OWE, I would like to request a quotation.

Name: ${data.get("name")}
Company / Team: ${data.get("company") || "-"}
WhatsApp: ${data.get("phone")}
Quantity: ${data.get("quantity") || "-"}
Type: ${data.get("type")}
Required Date: ${data.get("date") || "-"}
Message: ${data.get("message") || "-"}`;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
});
