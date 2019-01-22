//wiskundige operatoren
//b is altijd geïnitialiseerd met de waarde 2
let b = 2
//geef voor elke bewerking:
//de formule, de waarde van a na de bewerking en de waarde van b na de bewerking
a = b++    // de ++ komen erachter dus beïnvloeden a niet
                // enkel de waarde van b wordt verhoogd
console.log (`a=b++`, `geeft: a wordt ${a} en b wordt ${b}`);
//Vanaf nu uw b gewoon telkens opnieuw de waarde 2 geven
b = 2      // ipv let b = 
a = ++b    // de ++ komen ervoor dus worden gelezen door a voor b wordt gelezen
                // de waarde van beiden wordt met 1 verhoogd
console.log (`a=++b`, `geeft: a wordt ${a} en b wordt ${b}`);

b = 2
a = b--    // de -- komen erachter dus hebben geen invloed op a
console.log (`a=b--`, `geeft: a wordt ${a} en b wordt ${b}`);

b = 2       
a = --b     // de -- komen ervoor dus worden gelezen door a voor b wordt gelezen
console.log (`a=--b`, `geeft: a wordt ${a} en b wordt ${b}`);

b = 2
a+=b++      //a krijgt eerst de waarde van b (voor de ++) en telt er 1 bij,
            //b krijgt er 1 bij
console.log (`a+=b++`, `geeft: a wordt ${a} en b wordt ${b}`);

b = 2
a = 1
a+=++b      //a leest b nadat die al 1 verhoogd is, en verhoogt ook nog eens zelf met 1
console.log (`a+=++b`, `geeft: a wordt ${a} en b wordt ${b}`);

b = 2
a = 1
a-=b++      // a -= b betekent a = 1 - b (waarde 2 op moment van kijken)   -= is shorthand operator
console.log (`a-=b++`, `geeft: a wordt ${a} en b wordt ${b}`);

b = 2
a = 1
a-=++b      // a = 1 - b (waarde 3 op moment van kijken)                
console.log (`a-=++b`, `geeft: a wordt ${a} en b wordt ${b}`);

b = 2
a = 1
a+=b--      // a = a (waarde 1) + b (waarde 2 op moment van kijken)     += shorthand operator
console.log (`a+=b--`, `geeft: a wordt ${a} en b wordt ${b}`);

b = 2
a = 1
a+=--b      // a = a (waarde 1) + b (waarde 1 op moment van kijken)
console.log (`a+=--b`, `geeft: a wordt ${a} en b wordt ${b}`);




