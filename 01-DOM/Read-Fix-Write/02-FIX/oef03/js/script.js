// We willen in de lijst met afleveringen
//  enkel deze van Freddy Lamarr overhouden;

const episodes = document.querySelectorAll(`.episode-item`);
console.log(episodes)

// zoek de episode-writer: zit in episode-meta, 
// het laatste kind van episodes
// en is daarvan het 1e el, dus index [0]
// teveel werk, laat die zelf lijst samenstellen!!!
const writers = document.querySelectorAll(`.episode-writer`);
console.log(writers)
writers.forEach($writer => {  
  if ($writer.textContent !== `Freddy Lamarr`) {
    $writer.parentNode.parentNode.remove(); //verwijder de ouderknoop van de ouderknoop
  }
});
