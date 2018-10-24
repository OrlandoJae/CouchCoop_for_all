/*Dropdown Funktionen für No-Go-Seite*/

/*Allergien*/
function showAllergien() {
  document.getElementById('allergien-dropdown').classList.toggle("show");
  document.getElementById('essgewohnheiten').classList.toggle("hide");
  document.getElementById('einzelneZutaten').classList.toggle("hide");
};

/*Essgewohnheiten*/
function showEssgewohnheiten() {
  document.getElementById('essgewohnheiten-dropdown').classList.toggle("show");
  document.getElementById('allergien').classList.toggle("hide");
  document.getElementById('einzelneZutaten').classList.toggle("hide");
};

/*Einzelne Zutaten*/
function showZutaten() {
  document.getElementById('zutaten-dropdown').classList.toggle("show");
  document.getElementById('allergien').classList.toggle("hide");
  document.getElementById('essgewohnheiten').classList.toggle("hide");
};
function suchFunktion() {
  var input, index, zutaten, dropdownInhalt, i;
  input = document.getElementById('zutatenSuche');
  index = input.value.toUpperCase();
  dropdownInhalt = document.getElementById('zutaten-dropdown');
  zutaten = document.getElementsByTagName('label');
  for (i = 0; i < zutaten.length; i++) {
    if (zutaten[i].innerHTML.toUpperCase().indexOf(index) > -1) {
      zutaten[i].style.display = "";
    }
    else {
      zutaten[i].style.display = "none";
    }
  }
}
