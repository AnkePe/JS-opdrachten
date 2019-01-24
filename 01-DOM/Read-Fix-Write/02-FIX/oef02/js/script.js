//  De titel (H1 tag) moet veranderen naar The Crawling Dead


const titles = document.getElementsByTagName(`h1`); //geeft een array
console.log (titles);
const content = `BeCode The Beacon`;    //staat hier voor niks

titles[0].innerText = `The Crawling Dead`;

//  Voeg ook via javascript de classe 'shake' toe
titles[0].classList.add (`shake`);
console.log (titles[0].classList);

