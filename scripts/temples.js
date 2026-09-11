const nav = document.querySelector(".navigation");
const menu = document.querySelector("#menu");

function show(){
    nav.classList.toggle("show");
    menu.classList.toggle("show");
}

menu.addEventListener("click", show);