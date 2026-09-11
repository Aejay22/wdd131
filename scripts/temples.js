const nav = document.querySelector(".navigation");
const menu = document.querySelector("#menu");

function show(){
    nav.classList.toggle("show");
    menu.classList.toggle("show");
}

menu.addEventListener("click", show);

var yearSpan = document.getElementById("currentyear");
var modifiedSpan = document.getElementById("lastModified");

var today = new Date();
var currentYear = today.getFullYear();

yearSpan.textContent = currentYear;

var lastModifiedDate = document.lastModified;

modifiedSpan.textContent = "Last Modification: " + lastModifiedDate;


