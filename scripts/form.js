const today = new Date();
let currYear = document.querySelector(".year");
let lastModified = document.querySelector(".lastModified");
let select = document.querySelector(".select");
let reviewBtn = document.querySelector(".review");
let count = 0;
let form = document.querySelector("form");
let local;

currYear.textContent = today.getFullYear();
lastModified.textContent = document.lastModified;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

products.forEach(product=>{
    let option = document.createElement("option");
    option.id = product.id;
    option.name = product.name;
    option.textContent = product.name;
    select.appendChild(option);
});


reviewBtn.addEventListener("click", function(){
  
  let formData = new FormData(form);
  let producth = formData.get("product");
  let reviewth = formData.get("stars");
  let dateth = formData.get("date");
  let usefulth = formData.getAll("design");
  let writtenReviewth = formData.get("written");
  let nameth = formData.get("nam");
  
  let review = {
    product : producth,
    review : reviewth,
    date : dateth,
    useful : usefulth,
    writtenReview : writtenReviewth,
    name : nameth
  }
  Getreview(review);
}

);
const Getreview = (review)=>{
  let local = JSON.parse(localStorage.getItem("records")) || {};
  if ("count" in local){
    local.count += 1;
  }
  else{
    local.count = 1;
  }
  local.review = review;
  localStorage.setItem("records", JSON.stringify(local));
}