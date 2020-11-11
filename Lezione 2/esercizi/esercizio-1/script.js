/**
 * esercizio 1
 * 
 * rappresentare il diagramma di flusso rappresentato in diagramma_flusso.png, 
 * 
 * con le istruzioni condizionali if, else if, else (valutare quali sono necessarie)
 *  
 */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcola').onclick = function() {
        var numero1 = document.getElementById('num1').value;
        var numero2 = document.getElementById('num2').value;

        if (parseInt(numero1) > parseInt(numero2)){
            document.write("<h1> Il numero " + numero1 + " è maggiore di B");
        }else if (parseInt(numero1)==parseInt(numero2)){
            document.write("<h1> Il numero " + numero1 + " è uguale a B");
        }else{
            document.write("<h1> Il numero " + numero1 + " è minore di B");
        }
    }
});

