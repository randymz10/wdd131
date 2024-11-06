const currentYearHTML = document.querySelector('#currentyear');
const currentYear = new Date().getFullYear();
currentYearHTML.innerHTML = currentYear;

const lastModifiedHTML = document.querySelector('#lastModified');
lastModifiedHTML.innerHTML = `Last Modified: ${document.lastModified}`;


