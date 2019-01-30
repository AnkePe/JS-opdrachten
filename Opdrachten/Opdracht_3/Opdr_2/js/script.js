// In het meegeleverde HTML-bestand verschijnt een alertvenster met het bericht :
// Dank u voor uw deelname wanneer het invoerveld de focus verliest.

const handleBlurInvoerveld = () => alert (`Dank u voor uw deelname`)


document.querySelector(`#name`).addEventListener('blur', handleBlurInvoerveld)

