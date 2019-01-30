
// Geef in het meegeleverde HTML-bestand een alertvenster 
// met de veldwaarde weer zodra het toetsenbord wordt ingedrukt.
// use keydown en.key

const handleKeydownToetsenbord = () => alert(`${event.key}`)

document.addEventListener("keydown", handleKeydownToetsenbord)

