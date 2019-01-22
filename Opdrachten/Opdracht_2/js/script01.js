//breedte en lengte vragen
//geef opp weer
const surfaceRectagle = () => {
    let breedte = Number(prompt (`Geef de breedte van de rechthoek in cm`));
    let lengte = Number(prompt (`Geef de lengte van de rechthoek in cm`));
    alert (`De oppervlakte van de rechthoek is ${breedte * lengte} cm²`);
};

//breedte en lengte vragen
//geef de omtrek weer
const perimeterRectangle = () => {
    let breedte = Number(prompt (`Geef de breedte van de rechthoek in cm`));
    let lengte = Number(prompt (`Geef de lengte van de rechthoek in cm`));
    alert (`De omtrek van de rechthoek is ${(breedte + lengte)*2} cm`);
};
