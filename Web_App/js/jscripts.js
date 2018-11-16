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


var zutatennogos;
var unvertraeglichkeitennogos;
var gewohnheitennogos;
var gerichte;
var gerichteMoeglich;
var wahlGericht;



function saveNogos() {
  zutatennogos = new Array();
  unvertraeglichkeitennogos = new Array();
  gewohnheitennogos = new Array();
  var checkboxen = document.getElementsByTagName('input');
  for (var i=0; i < checkboxen.length; i++) {
    if (checkboxen[i].getAttribute('type')=='checkbox'){
      if (checkboxen[i].checked == true) {
        if (checkboxen[i].parentNode.parentNode == document.getElementById('essgewohnheiten-dropdown') || checkboxen[i].parentNode.parentNode == document.getElementById('essgewohnheiten-dropdownD')){
          gewohnheitennogos.push(checkboxen[i].previousSibling.previousElementSibling.innerHTML.toUpperCase());
        }
        if (checkboxen[i].parentNode.parentNode == document.getElementById('zutaten-dropdown') || checkboxen[i].parentNode.parentNode == document.getElementById('zutaten-dropdownD')){
          zutatennogos.push(checkboxen[i].previousSibling.previousElementSibling.innerHTML.toUpperCase());
        }
        if (checkboxen[i].parentNode.parentNode == document.getElementById('allergien-dropdown') || checkboxen[i].parentNode.parentNode == document.getElementById('allergien-dropdownD')){
          unvertraeglichkeitennogos.push(checkboxen[i].previousSibling.previousElementSibling.innerHTML.toUpperCase());
        }
      }
    }
  }
  sessionStorage.setItem('zutatennogos', JSON.stringify(zutatennogos));
  sessionStorage.setItem('gewohnheitennogos', JSON.stringify(gewohnheitennogos));
  sessionStorage.setItem('unvertraeglichkeitennogos', JSON.stringify(unvertraeglichkeitennogos));
}


function shuffle(input) {
  var zutatennogos = JSON.parse(sessionStorage.getItem('zutatennogos'));
  var gewohnheitennogos = JSON.parse(sessionStorage.getItem('gewohnheitennogos'));
  var unvertraeglichkeitennogos = JSON.parse(sessionStorage.getItem('unvertraeglichkeitennogos'));
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
  console.log(gerichteMoeglich.length);
  /*Zufallswahl aus möglichen Gerichten*/
  var idGericht = Math.floor(Math.random() * gerichteMoeglich.length);
  /*console.log(idGericht);*/
  for (var i = 0; i < gerichte.length; i++) {
    if (gerichte[i].nummer == idGericht) {
      wahlGericht = gerichte[i];
    }
  }
  sessionStorage.setItem('wahlGericht', JSON.stringify(wahlGericht));
}

function gerichtToString() {
  var wahlGericht = JSON.parse(sessionStorage.getItem('wahlGericht'));
  document.getElementById('gerichttitel').innerHTML = wahlGericht.bezeichnung;
  var zutatenliste;
  zutatenliste = new String("Zutaten: \r\n")
  for (var i = 0; i < wahlGericht.zutaten.length; i++) {
    zutatenliste = zutatenliste + wahlGericht.zutaten[i].menge + " " + wahlGericht.zutaten[i].mengenangabe + " " + wahlGericht.zutaten[i].bezeichnung + "\n";
  }
  document.getElementById('zutatenliste').innerHTML = zutatenliste;
  document.getElementById('zubereitung').innerHTML = wahlGericht.zubereitung;
}
