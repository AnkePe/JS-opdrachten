//vraag de straal van een cirkel
//bereken de opp van de cirkel
const surfaceCircle = () => {
    let r = Number(prompt(`Geef de straal van de cirkel in cm`));
    alert(`De oppervlakte van een cirkel met een straal van ${r}cm is ${Math.round(Math.PI * r * r * 100)/100} cm²`);
}