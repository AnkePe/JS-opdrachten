// maak een knop, bij onclick start de functie 'weekday()'
// maak gebruik van switch

//er bestaat een date object en een dateObj.getDay() functie


const weekday = () => {
    let vandaag = new Date()    //opvragen dag vandaag = bestaande ftir
    console.log (vandaag)
    let weekdag = vandaag.getDay()  //opvragen welke dag van de week in nrs van 0 tot 6 = bestaande functie
    console.log (weekdag)
    switch (weekdag) {
        case 0: alert(`het is zondag`);            
            break;
        case 1: alert(`het is maandag`);
            break;
        case 2: alert(`het is dinsdag`);
            break;
        case 3: alert(`het is woensdag`);            
            break;
        case 4: alert(`het is donderdag`);
            break;
        case 5: alert(`het is vrijdag`);
            break;    
        default: alert(`het is zaterdag`)
            break;
    }

}