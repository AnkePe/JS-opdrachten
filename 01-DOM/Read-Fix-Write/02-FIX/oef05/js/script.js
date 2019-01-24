// * We willen bij elke een link 'watch now' plaatsen ipv de metadata
// * De link verwijst naar een videobestand 'episode#.mp4'
// * De afleveringen die nog niet uitgezonden zijn, 
//   kunnen nog niet bekeken worden uiteraard.
// * Make it happen!

const episodes = document.querySelectorAll(`.episode-item`);

episodes.forEach($episode => {
 
  const viewers = $episode.querySelector(`.episode-viewers`).textContent; //niet document.query!!
  const $meta = $episode.querySelector(`.episode-meta`);  //niet document.query!!
  console.log ($meta);
  if (viewers !== `TB`) {
  $meta.innerHTML = `<a href="episode{$number}.mp4">Watch now</a>`;
  } else {
  $meta.innerHTML = `Coming Soon`;
  }

});
