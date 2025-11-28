const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Apia Samoa",
    location: "Apia, Samoa",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl: "../images/apia-samoa-t.jpg"
    
  },
  {
    templeName: "Lisbon Portugal",
    location: "Lisbon, Portugal",
    dedicated: "2019, September, 15",
    area: 24000,
    imageUrl: "../images/lisbon-portugal-t.jpg"
      
  },
  {
    templeName: "Oakland Califonia",
    location: "Oakland Califonia, United States",
    dedicated: "1964, November, 17",
    area: 95000,
    imageUrl: "../images/oakland-california-t.jpg"
      
  }
];

/* small inline SVG placeholder (encoded) */
const placeholderDataUrl =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'>
       <rect width='100%' height='100%' fill='#eeeeee'/>
       <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='28' fill='#666'>Image not available</text>
     </svg>`
  );

/* --- Create cards robustly --- */
function createTempleCard(list) {
  const container = document.getElementById("temple-cards");
  if (!container) {
    console.error("Can't find #temple-cards container in the DOM.");
    return;
  }

  // gentle fade-out class (CSS already defines .fade-out)
  container.classList.add("fade-out");

  setTimeout(() => {
    container.innerHTML = "";

    list.forEach(t => {
      const card = document.createElement("div");
      card.className = "card fade-in";

      // image element created programmatically (safer than innerHTML)
      const img = document.createElement("img");
      // prefer imageUrl, but allow older keys if present
      img.src = t.imageUrl || t.image || "";
      img.alt = `${t.templeName || "Temple image"}`;
      img.loading = "lazy";

      // onerror fallback + console logging
      img.onerror = function () {
        console.warn("Image failed to load:", img.src, "— using placeholder.");
        img.src = placeholderDataUrl;
      };

      // ensure image is visible even if empty string
      if (!img.src) img.src = placeholderDataUrl;

      // build info block
      const info = document.createElement("div");
      info.className = "info";
      const h3 = document.createElement("h3");
      h3.textContent = t.templeName || "Unnamed Temple";
      const pLoc = document.createElement("p");
      pLoc.textContent = t.location || "";
      const pDed = document.createElement("p");
      pDed.textContent = "Dedicated: " + (t.dedicated || "—");
      const pArea = document.createElement("p");
      pArea.textContent = "Area: " + (t.area ? `${t.area} sq ft` : "—");

      info.appendChild(h3);
      if (pLoc.textContent) info.appendChild(pLoc);
      info.appendChild(pDed);
      info.appendChild(pArea);

      card.appendChild(img);
      card.appendChild(info);

      container.appendChild(card);
    });

    container.classList.remove("fade-out");
  }, 180); // keep small delay for UX
}

/* --- Filters (defensive and correct) --- */
function applyFilter(option) {
  let filtered = temples.slice();

  switch ((option || "").toLowerCase()) {
    case "old":
      filtered = temples.filter(t => {
        const y = parseInt(t.dedicated, 10);
        return !Number.isNaN(y) && y < 1900;
      });
      break;
    case "new":
      filtered = temples.filter(t => {
        const y = parseInt(t.dedicated, 10);
        return !Number.isNaN(y) && y >= 2000;
      });
      break;
    case "large":
      filtered = temples.filter(t => Number(t.area) > 90000);
      break;
    case "small":
      filtered = temples.filter(t => Number(t.area) < 10000);
      break;
    default:
      filtered = temples.slice();
  }

  createTempleCard(filtered);
}

/* --- Hook nav links --- */
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    applyFilter(link.textContent.trim().toLowerCase());
  });
});

/* --- Hamburger --- */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburger.classList.toggle("active");
  });
}

// Footer dynamic info
document.getElementById("lastModified").textContent = document.lastModified;

/* --- Initial render --- */
document.addEventListener("DOMContentLoaded", () => {
  createTempleCard(temples);
});