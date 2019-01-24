// * De huidige aflevering (deze die in de header staat) 
// Moet meer opvallen in de lijst met afleverigen. 
// Geef de titel in de lijst de class 'highlight'
// * We willen dat, indien er een andere aflevering in de header staat, 
// automatisch de andere aflevering in de lijst de highlight krijgt.

const episodes = document.querySelectorAll(`.episode-title`);
console.log(episodes);  // het gaat hier over de titels in de lijst
const $currentEpisode = document.querySelector(`.subtitle`);
console.log($currentEpisode); // het gaat hier over de titel in de header

// we zoeken het el waarbij tekst van episode-title overeenkomt met tekst van subtitle
const currentTitle = $currentEpisode.textContent;

episodes.forEach($episode => {
  if ($episode.textContent === currentTitle) {
    $episode.classList.add (`highlight`);
  }
});
