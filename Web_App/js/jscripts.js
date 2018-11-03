/*Dropdown Funktionen für No-Go-Seite*/

/*Allergien*/
function showAllergien() {
  /*Mobil*/
  document.getElementById('allergien-dropdown').classList.toggle("show");
  document.getElementById('essgewohnheiten').classList.toggle("hide");
  document.getElementById('einzelneZutaten').classList.toggle("hide");
  /*Desktop*/
  document.getElementById('allergien-dropdownD').classList.toggle("show");
};

/*Essgewohnheiten*/
function showEssgewohnheiten() {
  /*Mobil*/
  document.getElementById('essgewohnheiten-dropdown').classList.toggle("show");
  document.getElementById('allergien').classList.toggle("hide");
  document.getElementById('einzelneZutaten').classList.toggle("hide");
  /*Desktop*/
  document.getElementById('essgewohnheiten-dropdownD').classList.toggle("show");
};

/*Einzelne Zutaten*/
function showZutaten() {
  /*Mobil*/
  document.getElementById('zutaten-dropdown').classList.toggle("show");
  document.getElementById('allergien').classList.toggle("hide");
  document.getElementById('essgewohnheiten').classList.toggle("hide");
  /*Desktop*/
  document.getElementById('zutaten-dropdownD').classList.toggle("show");
};
function suchFunktion() {
  var input, index, zutaten, dropdownInhalt, i;
  input = document.getElementById('zutatenSuche');
  index = input.value.toUpperCase();
  /*dropdownInhalt = document.getElementById('zutaten-dropdown');*/
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

function suchFunktionD() {
  var input, index, zutaten, dropdownInhalt, i;
  input = document.getElementById('zutatenSucheD');
  index = input.value.toUpperCase();
  /*dropdownInhalt = document.getElementById('zutaten-dropdown');*/
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
