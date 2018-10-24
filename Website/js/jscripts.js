/*Dropdown Funktionen für No-Go-Seite*/
/*Allergien*/
function showAllergien() {
  document.getElementById('allergien-dropdown').classList.toggle("show");
  document.getElementById('essgewohnheiten').classList.toggle("hide");
};
/*Essgewohnheiten*/
function showEssgewohnheiten() {
  document.getElementById('essgewohnheiten-dropdown').classList.toggle("show");
  document.getElementById('allergien').classList.toggle("hide");
};
