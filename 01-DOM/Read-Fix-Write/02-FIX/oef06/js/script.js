// Toon in de console alle titels van de afleveringen, maar wel alfabetisch gesorteerd.

const episodes = Array.from(document.querySelectorAll(`.episode-title`)); // maakt een array van de nodelist
// console.log (episodes);
const episodesText = episodes.map($ep => $ep.textContent);
// console.log (episodesText)
episodesText.sort()
episodesText.forEach($ep => console.log($ep));





// const sortEpisodeByTitle = ($a, $b) => {
//   const titleA = ;
//   const titleB = ;
//   if(titleA < titleB){
//     return -1;
//   }
//   if(titleA > titleB){
//     return 1;
//   }
//   return 0;
// };

// episodes.sort(sortEpisodeByTitle);

// episodes.forEach($ep => console.log($ep.querySelector(`.episode-title`).textContent.toLowerCase().slice(1)));