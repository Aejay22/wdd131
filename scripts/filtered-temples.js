let menu = document.querySelector("#menu");
let nav = document.querySelector(".navigation");



let main = document.querySelector("main");
let old = document.querySelector("#old");
let New = document.querySelector("#new");
let large = document.querySelector("#large");
let small = document.querySelector("#small");
let home = document.querySelector("#home");

menu.addEventListener("click", ()=>{
  menu.classList.toggle("show");
  nav.classList.toggle("show");
  
});
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
    "https://s3-media0.fl.yelpcdn.com/bphoto/XdTi-itiO7dasJnsJw_ggw/o.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Dallas Texas",
    location: "Dallas Texas, United States",
    dedicated: "1984, October, 19",
    area: 44207,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/c853d3386e74f389bb61d29d08feb2243aedde77/full/500%2C/0/default"
},
{
  templeName: "Brasilia Brazil",
  location: "Brasilia, Brazil",
  dedicated: "2023, September, 17",
  area: 25000,
  imageUrl:
  "https://www.churchofjesuschrist.org/imgs/95f3f3abdd4811ed920ceeeeac1e15db91037802/full/500%2C/0/default"

},
{
  templeName: "Burley Idaho",
  location: "Burley, Idaho, United States",
  dedicated: "2026, January, 11",
  area: 45300,
  imageUrl:
  "https://churchofjesuschristtemples.org/assets/img/temples/burley-idaho-temple/burley-idaho-temple-65243-main.jpg"

}
];


function createTemple(temples){
  let bigDiv = "";
  temples.forEach(function (temple){
    let aboutTemple = `<figure class="templeBlock">
      <figcaption>
        <h1>${temple.templeName}</h1>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Size: ${temple.area} sq ft</p>
      </figcaption>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading ="lazy">
    </figure>`
    bigDiv = bigDiv + aboutTemple;
    
  });
  main.innerHTML = bigDiv;
}

let filteredOld = temples.filter((temple)=>{
  let year = Number(temple.dedicated.split(",")[0]);
  return year < 1990;
  }
);

let filteredNew = temples.filter(
  temple =>{
    let year = Number(temple.dedicated.split(",")[0]);
    return year > 2000
  }
);

let filteredLarge = temples.filter(temple =>{
  return temple.area > 90000;
});

let filteredSmall = temples.filter(temple =>{
  return temple.area < 10000;
});



createTemple(temples);
old.addEventListener("click", ()=>createTemple(filteredOld));
New.addEventListener("click", ()=>createTemple(filteredNew));
small.addEventListener("click", ()=>createTemple(filteredSmall));
large.addEventListener("click", ()=>createTemple(filteredLarge));
home.addEventListener("click", ()=>createTemple(temples));
console.log(filteredOld);


