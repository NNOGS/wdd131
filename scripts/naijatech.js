document.addEventListener("DOMContentLoaded", () => {

  // =====================
  // MOBILE MENU TOGGLE
  // =====================
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks  = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
      const open = navLinks.classList.contains("active");
      navToggle.textContent = open ? "✖" : "☰";
      navToggle.setAttribute("aria-expanded", open);
    });

    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("active");
        navToggle.textContent = "☰";
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", (e) => {
      if (!navLinks.classList.contains("active")) return;
      const inside = e.composedPath().includes(navLinks) || e.composedPath().includes(navToggle);
      if (!inside) {
        navLinks.classList.remove("active");
        navToggle.textContent = "☰";
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        navToggle.textContent = "☰";
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.focus();
      }
    });
  }

  // =====================
  // DEVICE GRID
  // =====================
  const devices = [
    { name: "Digital Camera", category: "cameras", img: "images/camera1.jpg" },
    { name: "Nikon D7500", category: "cameras", img: "images/nikon-d7500.jpg" },
    { name: "Canon 8K", category: "cameras", img: "images/canon8k.jpg" },
    { name: "Canon EOS", category: "cameras", img: "images/canoneos.jpg" },
    { name: "Canon Rebel", category: "cameras", img: "images/canonrebel.jpg" },
    { name: "Digital Cam 4K", category: "cameras", img: "images/digitalcam4k.jpg" },
    { name: "Tripod Stand", category: "cameras", img: "images/cameratripod.jpg" },

    { name: "Smart Bulb A", category: "accessories", img: "images/smart-bulb1.jpg" },
    { name: "Smart Bulb B", category: "accessories", img: "images/smart-bulb2.jpg" },
    { name: "Smart Remote", category: "accessories", img: "images/smart-bult-remote.jpg" },
    { name: "Smart Bulb C", category: "accessories", img: "images/smat-bulb3.jpg" },
    { name: "TP-Link Smart Light", category: "accessories", img: "images/tp-link-smartlight.jpg" }
  ];

 function renderDevices(filter = "all") {
  const grid = document.getElementById("deviceGrid");
  if (!grid) return;
  grid.innerHTML = "";

  // Ensure the container is a grid
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
  grid.style.gap = "20px";

  devices.forEach(device => {
    if (filter === "all" || filter === device.category) {
      const card = document.createElement("div");
      card.className = "device-card";
      card.style.border = "1px solid #ddd";
      card.style.borderRadius = "8px";
      card.style.padding = "10px";
      card.style.textAlign = "center";
      card.style.backgroundColor = "#fff";
      card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";

      const img = document.createElement("img");
      img.src = device.img;
      img.alt = device.name;
      img.style.width = "100%";
      img.style.maxHeight = "150px";
      img.style.objectFit = "contain"; // fits inside card without cropping
      img.style.marginBottom = "10px";

      const title = document.createElement("h3");
      title.textContent = device.name;
      title.style.fontSize = "1rem";
      title.style.marginBottom = "5px";

      const category = document.createElement("p");
      category.textContent = device.category;
      category.style.fontSize = "0.85rem";
      category.style.color = "#555";

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(category);
      grid.appendChild(card);
    }
  });
}


  const categorySelect = document.getElementById("category");
  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => renderDevices(e.target.value));
  }
  renderDevices(); // initial load

  // =====================
  // REFERENCE FORM PRODUCT POPULATION
  // =====================
  const products = [
    { id: "fc-1888", name: "Digital Camera" },
    { id: "fc-2050", name: "Nikon D7500" },
    { id: "fs-1987", name: "Canon 8K" },
    { id: "ac-2000", name: "Canon EOS" },
    { id: "jj-1969", name: "Canon Rebel" },
  ];

  const productSelect = document.querySelector("#productName");
  if (productSelect) {
    products.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = p.name;
      productSelect.appendChild(opt);
    });
  }

  const reviewForm = document.querySelector("form[action='refrence-review.html']");
  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      if (!productSelect.value) {
        e.preventDefault();
        alert("Please select a product before submitting.");
      }
    });
  }

  // =====================
  // FOOTER DATE
  // =====================
  const lastMod = document.getElementById("lastModified");
  if (lastMod) lastMod.textContent = document.lastModified;

});
