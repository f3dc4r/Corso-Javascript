/**
 * esercizio 3
 * 
 * - nel file html troviamo un div (rappresentato come un quadrato) e due button mostra e nascondi
 * - scrivi una funzione che nasconde il quadrato ed assegnala all'evento click del button con id="nascondi"  
 * - scrivi una funzione che mostra il quadrato ed assegnala all'evento click del button con id="mostra" 
 * 
 * suggerimenti: vi servirà manipolare il dom, il metodo/funzione che vi sarà più utile sarà document.getElementById 
 * 
 */

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('nascondi').onclick = function () {
        document.getElementById('quadrato').style.display = 'none';
    }

    document.getElementById('mostra').onclick = function () {
        document.getElementById('quadrato').style.display = 'block';
    }
});