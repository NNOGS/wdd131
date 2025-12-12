const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate select
const productSelect = document.querySelector("#productName");

if (productSelect) {
  products.forEach(product => {
    const opt = document.createElement("option");
    opt.value = product.id;
    opt.textContent = product.name;
    productSelect.appendChild(opt);
  });
}

// Review counter only on review.html
const reviewCounterElement = document.getElementById("reviewCount");

if (reviewCounterElement) {
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  reviewCounterElement.textContent = count;
}

// Footer dynamic info
const lastMod = document.getElementById("lastModified");
if (lastMod) {
  lastMod.textContent = document.lastModified;
}
