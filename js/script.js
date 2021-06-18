// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// Es: 
// a[2,11,6,77,3,4,9];
// a = 1;
// b = 3;
// mi restituisce a [11,6,77]

const arrayLet = [1,2,3,4,5,6,7];

let a = parseInt(prompt('Inserisci un numero da 1 a 6'));
let b = parseInt(prompt('Inserisci un numero più grande del primo e max 6'));


const nuovo = arrayLet.filter((element) => {
    
    return element >= a && b >= element;
  
});
console.log(nuovo);