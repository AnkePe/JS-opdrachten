// ex 1

// - selecteer de body 
// - neem de "bg-aqua"-klasse weg
// - de klasse "bg-olive" toevoegen
const bodyTags = document.getElementsByTagName(`body`);
console.log (bodyTags)
bodyTags[0].classList.remove("bg-aqua");
bodyTags[0].classList.add("bg-olive");

// - eerste alinea kiezen
// - de klassen "bg-lime" en "gray" te verwijderen
// - de "aqua"-klasse eraan toe te voegen
const $alinea01 = document.getElementById(`first-paragraph`);
console.log ($alinea01)
$alinea01.classList.remove("bg-lime","gray");
$alinea01.classList.add("aqua");

// - selecteer alle elementen die de klasse 'bg-silver' hebben.
// - pas alle elementen aan door de klasse "bg-teal" aan de elementen toe te voegen
// - Pas het element aan door "bg-silver"-klasse ervan te verwijderen
const bgSilverClass = document.getElementsByClassName(`bg-silver`);
console.log(bgSilverClass);
bgSilverClass[0].classList.add("bg-teal");
console.log(bgSilverClass);
bgSilverClass[0].classList.remove("bg-silver");
console.log(bgSilverClass); // er is geen bg-silver meer dus vindt geen elementen meer


// - selecteer alle blokquote-elementen
// - Pas al elementen aan door de klasse "bg-white" an de elementen toe te voegen
const blockquoteTags = Array.from(document.getElementsByTagName(`blockquote`));
console.log(blockquoteTags);
blockquoteTags.forEach($el => $el.classList.add(`bg-white`));

// ex 2 CSS selectoren

// - Met `querySelector` selecteert u het element `my-table`
// - De klasse "bg-purple" toevoegen
const $myTable = document.getElementById(`my-table`);
console.log($myTable);
$myTable.classList.add(`bg-purple`);
console.log($myTable);

// - met `querySelectorAll` selecteert u alle paragrafen in "container".
// - wijzig alle elementen door het toevoegen van de `shadow`-klasse
const containerPs = container.getElementsByTagName(`p`);
console.log(containerPs)

// ex 3

// - Selecteer alle elementen van het type `pre`.
// - met de eigenschap `style` wijzigt u de tekstkleur.
// - met de `style` eigenschap verandert de achtergrondkleur dankzij `backgroundColor`.

// - met de `style` eigenschap voeg een `border-top` van `3px solid red`  toe 
//      (vergeet niet dat je op deze manier toegang hebt tot de eigenschappen 
//      van een object: ["prop-name"]).
// - met de `style` eigenschap voeg een `border-bottom` van `3px solid red` toe.

// - Selecteer het eerste element van het type `h3`.
// - vervang de HTML inhoud door `<em>Italic title ! yeah !</em>`.

// - Selecteer het eerste element van het type `h2`
// - vervang de HTML inhoud door `<strong>HTML doesn't work !</strong>`


// ex   4 elementen aanmaken

// - Selecteer de eerste `ul`.
// - creëer een `li` element
// - voeg deze tekst toe `My best friend is <a href='http://www.google.com'>Google</a>` in de `li`
// - voeg deze `li` toe in de `ul`

// - selecteer de eerste link in de eerder aangemaakte `li`
// - met de eigenschap `style` wijzigt u de tekstkleur van de link


// ex 5     meerdere elementen maken en verwijderen

// - selecteer het eerste 'ol' element
// - lus over alle kinderen van de laatste dankzij de `children` eigendom
// - verwijder elk kind van ol dankzij `removeChild()`

// - Geef in een array de volgende waarden op: ["Silent Teacher","Code Monkey", "CodeCombat"]
// - lus alle kinderen in de eerder gecreëerde tafel
// - creëer voor elke waarde van de array een `li` element met behulp van 
        // `document.createElement()` 
// - voeg vervolgens elke `link` toe aan het eerder geselecteerde `a` element 
        // met als naam de waarde van de array.