// SELECTORS
const cards = document.querySelector("#temple-cards");
const menu = document.querySelectorAll("#menu li");

// FUNCTION: CREATE TEMPLE CARDS
function renderTemples(list) {
  cards.innerHTML = "";

  list.forEach(t => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${t.templeName}</h2>
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Area:</strong> ${t.area} sq ft</p>
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
    `;

    cards.appendChild(card);
  });
}
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

});

createTempleCard();

function createTempleCard() {
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedication}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector("#temple-cards").appendChild(card);
    });
}

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

});

createTempleCard(temples);
const oldlink = document.querySelector("old");
oldlink = addEventListener("click", () -> {
    createTempleCard(temples.filter(templ -> !temple.dedication.includes("old")));
})
// FILTER HANDLER
function applyFilter(filter) {
    let filtered = temples;
    
    if (filter === "old") {
        filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
    }
    
    if (filter === "new") {
        filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
    }
    
    if (filter === "large") {
        filtered = temples.filter(t => t.area > 90000);
    }
    
    if (filter === "small") {
        filtered = temples.filter(t => t.area < 10000);
    }
    
    renderTemples(filtered);
}

// NAV CLICK EVENTS
menu.forEach(item => {
    item.addEventListener("click", () => {
        applyFilter(item.dataset.filter);
    });
});

// DEFAULT LOAD
renderTemples(temples);

// details of those that worked before

// ----------------------------------------------------
// CREATE CARDS WITH ANIMATION + LAZY LOAD
// ----------------------------------------------------
function createTempleCard(list) {
  const container = document.getElementById("temple-cards");

  // Smooth fade-out before updating
  container.classList.add("fade-out");

  setTimeout(() => {
    container.innerHTML = "";

    list.forEach(t => {
      const card = document.createElement("div");
      card.className = "card fade-in";

      card.innerHTML = `
        <img src="${t.image}" alt="${t.name}" loading="lazy">
        <div class="info">
          <h3>${t.name}</h3>
        </div>
      `;

      container.appendChild(card);
    });

    container.classList.remove("fade-out");
  }, 200);
}

// ----------------------------------------------------
// FILTERS
// ----------------------------------------------------
function applyFilter(filter) {
  let f = temples;

  if (filter === "old") f = temples.filter(t => t.dedicated < 1900);
  if (filter === "new") f = temples.filter(t => t.dedicated >= 2000);
  if (filter === "large") f = temples.filter(t => t.size > 20000);
  if (filter === "small") f = temples.filter(t => t.size < 20000);

  createTempleCard(f);
}


// NAV MENU LINKS
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    applyFilter(link.textContent.toLowerCase());
  });
});


// INITIAL LOAD
createTempleCard(temples);


// ----------------------------------------------------
// HAMBURGER MENU
// ----------------------------------------------------
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburger.classList.toggle("active");
});
