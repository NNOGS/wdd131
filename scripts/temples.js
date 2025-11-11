document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  // Toggle open/close on mobile
  hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    hamburger.textContent = isOpen ? "✖" : "☰";
  });

  // Close menu after clicking a nav link (optional usability)
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 700) {
        navMenu.classList.remove("open");
        hamburger.textContent = "☰";
      }
    });
  });

  // Footer dynamic info
  document.getElementById("lastModified").textContent = document.lastModified;
});