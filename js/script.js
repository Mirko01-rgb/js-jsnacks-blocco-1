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

  // for( var key in arr){
  //   console.log(arr[key]['nome'] + ' ' + arr[key]['cognome']);
  // }

  for (var i = 0; i < arr.length; i++) {

    console.log('Nome: ' , arr[i]['nome']);
    console.log('cognome: ' , arr[i]['cognome']);
    console.log('');
  }

}



// - Dare la possibilità all'utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell'ordine: nome, cognome e età.

function thirdEx() {

  var students = [
    {
      'nome': 'Mirko',
      'cognome': 'Sbaglia',
      'eta': '19'
    },
    {
      'nome': 'Tommy',
      'cognome': 'Gerard',
      'eta': '36'
    },
    {
      'nome': 'Gabry',
      'cognome': 'Alessi',
      'eta': '31'
    }
  ]

  var nome = prompt('Inserisci il tuo nome: ');
  var cognome = prompt('Inserisci il tuo cognome: ');
  var eta = prompt('Inserisci la tua età: ');

  var newstudent = {
    'nome': nome,
    'cognome': cognome,
    'eta': eta
  }

  students.push(newstudent);

  console.log('Third exercise');
  console.log(students);



  // console.log(students[0]['cognome'] );     se voglio stampare solo l'indice 0 , cognome

  for (var i = 0; i < students.length; i++) {
    console.log(students[i]['cognome']);

  }
}



function init(){
 firstEx();
 secondEx();
 thirdEx();

}
$(document).ready(init);
