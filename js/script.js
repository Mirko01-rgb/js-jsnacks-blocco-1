// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.
function firstEx(){
 var student = {
   'nome': 'Mirko',
   'cognome': 'Sbaglia',
   'eta': '19 anni'
 }
 console.log('First exercise');
 for(var key in student){
   console.log( key , ':', student[key]);
 }
}



// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
function secondEx() {

  var arr =
  [
    {
      'nome': 'Mirko',
      'cognome': 'Sbaglia',
    },

    {
      'nome': 'Manuel',
      'cognome': 'Bocci',
    },

    {
      'nome': 'Simone',
      'cognome': 'Terzino',
    },
  ];

  console.log('');
  console.log('Second exercise');
  for( var key in arr){
    // console.log(key, arr[key]);
  }

  for (var i = 0; i < arr.length; i++) {

    console.log('Nome: ' , arr[i]['nome']);
    console.log('cognome: ' , arr[i]['cognome']);
    console.log('');
  }

}







function init(){
 firstEx();
 secondEx();


}
$(document).ready(init);




// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all'utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell'ordine: nome, cognome e età.
