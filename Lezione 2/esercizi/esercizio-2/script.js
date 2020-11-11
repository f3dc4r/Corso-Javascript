/**
 * esercizio 2
 * 
 * - utilizzare un ciclo for per stampare a console i valori del seguente array var array = [1, 2, 3, 4, 5, 6, 7, 8]
 * 
 * - scrivere un altro ciclo for che stampi solo i numeri pari (piccolo suggerimento vi servirà l'operatore modulo %)
 * 
 */

var array = [1, 2, 3, 4, 5, 6, 7, 8]; 

// STAMPA I VALORI
for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
};

// STAMPA VALORI PARI
for (var i = 0; i < array.length; i++) {
    if ((array[i] % 2) === 0){
        console.log(array[i]);
    }
};