// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.
function firstEs(){
 var student = {
   'nome': 'Mirko',
   'cognome': 'Sbaglia',
   'eta': '19 anni'
 }

 for(var key in student){
   console.log(student[key]);
 }
}









function init(){
 firstEs();


}
$(document).ready(init);




// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all'utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell'ordine: nome, cognome e età.
