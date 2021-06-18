// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// Es: 
// a[2,11,6,77,3,4,9];
// a = 1;
// b = 3;
// mi restituisce a [11,6,77]

const arrayLet = ['a','b','c','d','e','f','g'];

let a = parseInt(prompt('Inserisci un numero da 1 a 7'));
let b = parseInt(prompt('Inserisci un numero più grande del primo e max 7'));


const nuovo = arrayLet.filter((element,index) => {
    
    return index >= a && b >= index;
  
});
console.log(nuovo);