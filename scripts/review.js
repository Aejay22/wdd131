const today = new Date();
let currYear = document.querySelector(".year");
let lastModified = document.querySelector(".lastModified");


currYear.textContent = today.getFullYear();
lastModified.textContent = document.lastModified;
