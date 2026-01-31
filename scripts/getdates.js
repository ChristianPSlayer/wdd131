
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

console.log("getdates.js file loaded successfully.");