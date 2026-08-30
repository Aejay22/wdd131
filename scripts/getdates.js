var yearSpan = document.getElementById("currentyear");
var modifiedSpan = document.getElementById("lastModified");

var today = new Date();
var currentYear = today.getFullYear();

yearSpan.textContent = currentYear;

var lastModifiedDate = document.lastModified;

modifiedSpan.textContent = "Last Modification: " + lastModifiedDate;


