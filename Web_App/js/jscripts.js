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
    if (zutaten[i].innerHTML.toUpperCase().indexOf(index) > -1 && zutaten[i].parentNode == document.getElementById('zutaten-dropdown')) {
      zutaten[i].style.display = "";
    }
    else if (zutaten[i].parentNode == document.getElementById('zutaten-dropdown')){
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
    if (zutaten[i].innerHTML.toUpperCase().indexOf(index) > -1 && zutaten[i].parentNode == document.getElementById('zutaten-dropdownD')) {
      zutaten[i].style.display = "";
    }
    else if (zutaten[i].parentNode == document.getElementById('zutaten-dropdownD')) {
      zutaten[i].style.display = "none";
    }
  }
}

function saveNogos() {
  zutatennogos = new Array(idzutat.length-1);
  gewohnheitennogos = new Array (idessensgewohnheiten.length);
  unvertraeglichkeitennogos = new Array (idunvertraeglichkeiten);
  var checkboxen = document.getElementsbyTagName('input');
  var j = k = l = 0;
  for (var i=0; i < checkboxen.length; i++) {
    if (checkboxen[i].getAttribute('type')=='checkbox'){
      if (checkboxen[i].parentNode.parentNode == document.getElementById('essgewohnheiten-dropdown') || checkboxen[i].parentNode.parentNode == document.getElementById('essgewohnheiten-dropdownD')){
        gewohnheitennogos[j] = checkboxen[i].innerHTML.toUpperCase();
        j++;
      }
      if (checkboxen[i].parentNode.parentNode == document.getElementById('zutaten-dropdown') || checkboxen[i].parentNode.parentNode == document.getElementById('zutaten-dropdownD')){
        zutatennogos[k] = checkboxen[i].innerHTML.toUpperCase();
        k++;
      }
      if (checkboxen[i].parentNode.parentNode == document.getElementById('allergien-dropdown') || checkboxen[i].parentNode.parentNode == document.getElementById('allergien-dropdownD')){
        unvertraeglichkeitennogos[l] = checkboxen[i].innerHTML.toUpperCase();
        l++;
      }
    }
  }
}
