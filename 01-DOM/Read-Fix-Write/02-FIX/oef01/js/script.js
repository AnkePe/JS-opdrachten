// We willen alle schrijvers loggen in de console. 
// Er moet een cijfer bijkomen volgens het aantal keer dat ze voorkomen. 
// Check welke console. functie je hiervoor kan gebruiken

const writers = document.querySelectorAll(`.episode-writer`);   //.om class te selecteren

//console.log (writers.textContent())   kan niet want dan vraag je de tekst van de array

writers.forEach($writer =>  { 
    // console.log ($writer.textContent)
    console.count($writer.textContent)
}
    );
