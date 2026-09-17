var yearSpan = document.getElementById("currentyear");
var modifiedSpan = document.getElementById("lastModified");

var today = new Date();
var currentYear = today.getFullYear();

yearSpan.textContent = currentYear;

var lastModifiedDate = document.lastModified;

modifiedSpan.textContent = "Last Modification: " + lastModifiedDate;


let windChill = document.querySelector(".windChil");
let speed = document.querySelector(".speed");
let temp = document.querySelector(".temp");
let tempValue = parseFloat(temp.textContent);
let speedValue = parseFloat(speed.textContent);

function getWindChill(temp, speed){
    let windChill = 13.12 + (0.6215 * temp) - (11.37 *(speed ** 0.16)) + (0.3965 * temp * (speed ** 0.16));
    return windChill;
}
windChill.textContent = getWindChill(tempValue, speedValue).toFixed(1);
