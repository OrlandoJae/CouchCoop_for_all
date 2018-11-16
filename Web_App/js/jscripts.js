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
/*Arrays, die als Parameter für Shuffle dienen*/
var zutatennogos;
var unvertraeglichkeitennogos;
var gewohnheitennogos;
var gerichte;

function saveNogos(a, b, c) {
  zutatennogos = a;
  unvertraeglichkeitennogos = b;
  gewohnheitennogos = c;
  var checkboxen = document.getElementsByTagName('input');
  var j = k = l = 0; /*Index für die einzelnen Arrays*/
  for (var i=0; i < checkboxen.length; i++) {
    if (checkboxen[i].getAttribute('type')=='checkbox'){
      if (checkboxen[i].checked == true) {
        if (checkboxen[i].parentNode.parentNode == document.getElementById('essgewohnheiten-dropdown') || checkboxen[i].parentNode.parentNode == document.getElementById('essgewohnheiten-dropdownD')){
          gewohnheitennogos[j] = checkboxen[i].previousSibling.previousElementSibling.innerHTML.toUpperCase();
          j++;
        }
        if (checkboxen[i].parentNode.parentNode == document.getElementById('zutaten-dropdown') || checkboxen[i].parentNode.parentNode == document.getElementById('zutaten-dropdownD')){
          zutatennogos[k] = checkboxen[i].previousSibling.previousElementSibling.innerHTML.toUpperCase();
          k++;
        }
        if (checkboxen[i].parentNode.parentNode == document.getElementById('allergien-dropdown') || checkboxen[i].parentNode.parentNode == document.getElementById('allergien-dropdownD')){
          unvertraeglichkeitennogos[l] = checkboxen[i].previousSibling.previousElementSibling.innerHTML.toUpperCase();
          l++;
        }
      }
    }
  }
}

var gerichteMoeglich;
var wahlGericht;

function shuffle(input) {
  var moeglich = true;
  var gerichte = input;
  gerichteMoeglich = new Array();
  for (var i = 0; i < gerichte.length; i++) {
    /*Zutatenfilter*/
    for (var k = 0; k < zutatennogos.length; k++) {
      for (var j = 0; j < gerichte[i].zutaten.length; j++) {
        if (zutatennogos[k] == gerichte[i].zutaten[j].bezeichnung) {
          moeglich = false;
        }
      }
    }
    /*Essgewohnheitenfilter*/
    for (var k = 0; k < gewohnheitennogos.length; k++) {
      for (var j = 0; j < gerichte[i].essgewohnheiten.length; j++) {
        if (gewohnheitennogos[k] == gerichte[i].essgewohnheiten[j]) {
          moeglich = false;
        }
      }
    }
    /*Unverträglichkeiten Filter*/
    for (var k = 0; k < unvertraeglichkeitennogos.length; k++) {
      for (var j = 0; j < gerichte[i].unvertraeglichkeiten.length; j++) {
        if (unvertraeglichkeitennogos[k] == gerichte[i].unvertraeglichkeiten) {
          moeglich = false;
        }
      }
    }
    /*Füllen des Arrays möglicher Gerichte*/
    if (moeglich) {
      gerichteMoeglich.push(gerichte[i]);
    }
  }
  /*Zufallswahl aus möglichen Gerichten*/
  var idGericht = Math.floor(Math.random() * gerichteMoeglich.length);
  for (var i = 0; i < gerichte; i++) {
    if (gerichte[i].nummer == idGericht) {
      wahlGericht = gerichte[i];
    }
  }
}

function gerichtToString() {
  
}
