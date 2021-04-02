//OPZIONE
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri ("a" più piccolo di "b" e "b" grande al
// massimo quanto il numero di elementi dell'array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra "a" e "b"
function splitter(min, max, array) {
  var arrayFinale = [];
  //console.log(min , max, array);
  for (var i = 0; i < array.length; i++) {
     // console.log(array[i]);
     var singleNum = array[i];
     if (singleNum >= min && singleNum <= max) {
       arrayFinale.push(singleNum)
     }

  }

 console.log(arrayFinale);

}
function esArraySplitter() {
    var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    var indMin = arr[3];
    var indMax = arr[7];
    var splitted = splitter(indMin, indMax, arr);

    // [ 4, 5, 6, 7, 8 ]
}

$(document).ready(esArraySplitter);
