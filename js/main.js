//JAVASCRIPT

/**
 * ESERCIZIO
 * Un alert espone 5 numeri casuali diversi.
   Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
   Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
 */


var arrayNumeri = [];

//Nr Random

var arrayNumeri = [];
while(arrayNumeri.length < 5){
  var number = getRandomIntInclusive(1, 100);
  if(arrayNumeri.includes(number) == false) {
    arrayNumeri.push(number);
  }
}
alert(arrayNumeri);
console.log(arrayNumeri);

//Inserisco setTimeout
/**
 * Sintassi
 * setTimeout(nomeFunzione,TempoDaAspettare);
 * 
 */

setTimeout(promptResult, 1000);



//Functions
/**
 * Math.ceil - Funzione per arrotondare al nr succ./integer più grande
 * 
 */

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function promptResult (){
  var arrayResult = [];
  var listaNumeri = [];
  var i = 1;
  while(i < 6){
    var result = parseInt(prompt('Inserisci il ' + i + ' numero'));
    if (arrayResult.includes(result) == false) {
      arrayResult.push(result);
    }
    i++;
  }


var j = 0;
  while(j < arrayNumeri.length){
      if(arrayResult[j] == arrayNumeri[j]){
        listaNumeri.push(arrayResult[j]);
      }
      j++;
    }
  alert('Hai indovinato ' + listaNumeri.length + ' numeri');
  alert('I numeri indovinati sono ' + listaNumeri);

}