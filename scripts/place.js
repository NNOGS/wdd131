// ----------------------
// FOOTER INFORMATION
// ----------------------

// Display current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display "Last Modified" date
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;


// ----------------------
// WEATHER VALUES (STATIC FOR NOW)
// ----------------------
const temperature = 30; // °C
const windSpeed = 12;   // km/h

document.getElementById("temp").textContent = temperature;
document.getElementById("wind").textContent = windSpeed;


// ----------------------
// WINDCHILL CALCULATION
// ----------------------

// Function that returns windchill in °C (one-line return)
function calculateWindChill(t, s) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 
           0.3965 * t * Math.pow(s, 0.16);
}


// ----------------------
// CHECK CONDITIONS BEFORE CALCULATING
// ----------------------
let windChillValue;

if (temperature <= 10 && windSpeed > 4.8) {
    // Conditions valid → calculate windchill
    windChillValue = calculateWindChill(temperature, windSpeed).toFixed(1);
} else {
    // Conditions NOT valid → windchill is not applicable
    windChillValue = "N/A";
}

// Display in HTML
document.getElementById("windchill").textContent = windChillValue;