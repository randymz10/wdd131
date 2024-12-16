const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Caracas Venezuela",
    location: "Caracas, Venezuela",
    dedicated: "1999, January, 10",
    area: 0.5,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/caracas-venezuela-temple/caracas-venezuela-temple-55702.jpg",
  },
  // Add more temple objects here...
];

const currentYearHTML = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
currentYearHTML.innerHTML = currentYear;

const lastModifiedHTML = document.querySelector("#lastModified");
lastModifiedHTML.innerHTML = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", function () {
  navigation.classList.toggle("open");
  hamButton.classList("open");
});

const templesHTML = document.querySelector("#temples");

function createTempleCards(filteredTemples) {
  templesHTML.innerHTML = "";
  filteredTemples.forEach((temple) => {
    temple.dedicated;
    const templeHTML = document.createElement("article");
    templeHTML.className = "card";
    templeHTML.innerHTML = `
    <h3 class="card-title">${temple.templeName}</h3>
    <div class="card-body">
    <p><span class="card-subtitle">LOCATION:</span> ${temple.location}</p>
    <p><span class="card-subtitle">DEDICATED:</span> ${temple.dedicated}</p>
    <p><span class="card-subtitle">SIZE:</span> ${temple.area}sq ft</p>
    </div>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" class="img-thumbnail" loading="lazy">
    `;
    templesHTML.appendChild(templeHTML);
  });
}

createTempleCards(temples);

const home = document.querySelector("#home");
const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");

home.addEventListener("click", () => {
  createTempleCards(temples);
});

oldTemples.addEventListener("click", () => {
  const filteredTemples = temples.filter(
    (temple) => parseInt(temple.dedicated.split(",")[0]) < 1900
  );
  createTempleCards(filteredTemples);
});

newTemples.addEventListener("click", () => {
  const filteredTemples = temples.filter(
    (temple) => parseInt(temple.dedicated.split(",")[0]) > 2000
  );
  createTempleCards(filteredTemples);
});

largeTemples.addEventListener("click", () => {
  const filteredTemples = temples.filter((temple) => temple.area > 90000);
  createTempleCards(filteredTemples);
});

smallTemples.addEventListener("click", () => {
  const filteredTemples = temples.filter((temple) => temple.area < 10000);
  createTempleCards(filteredTemples);
});
