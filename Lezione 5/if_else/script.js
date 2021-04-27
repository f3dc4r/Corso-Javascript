var x = 4;

if (x > 5) {
    creaP('la variabile x è maggiore di 5')
} else {
    creaP('la variabile x è minore di 5');
}


function creaP(testo) {
    var p = document.createElement('p');
    p.textContent = testo;
    document.querySelector('body').appendChild(p)
}