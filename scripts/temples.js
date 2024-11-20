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
