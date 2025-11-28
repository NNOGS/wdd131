// Hamburger toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('show');
});

// Example device data
const devices = [
    { name: "Smart Bulb A", category: "bulbs", price: 3500, img: "images/bulb1.jpg" },
    { name: "Smart Plug B", category: "plugs", price: 4500, img: "images/plug1.jpg" },
    { name: "Camera C", category: "cameras", price: 12000, img: "images/camera1.jpg" },
    { name: "Speaker D", category: "speakers", price: 9000, img: "images/speaker1.jpg" }
];

// Render devices dynamically
function renderDevices(filter = "all") {
    const grid = document.getElementById("deviceGrid");
    if (!grid) return;

    grid.innerHTML = "";
    devices.filter(d => filter === "all" || d.category === filter)
           .forEach(device => {
               grid.innerHTML += `
               <div class="device-card">
                   <img src="${device.img}" alt="${device.name}" loading="lazy">
                   <h3>${device.name}</h3>
                   <p>Price: ₦${device.price}</p>
               </div>
               `;
           });
}

// Filter event
const categorySelect = document.getElementById("category");
categorySelect?.addEventListener("change", (e) => {
    renderDevices(e.target.value);
});

// Initial render
renderDevices();

// LocalStorage example
// Store last visited category
categorySelect?.addEventListener("change", (e) => {
    localStorage.setItem("lastCategory", e.target.value);
});

// Load last visited category
const lastCategory = localStorage.getItem("lastCategory");
if (lastCategory) {
    categorySelect.value = lastCategory;
    renderDevices(lastCategory);
}
