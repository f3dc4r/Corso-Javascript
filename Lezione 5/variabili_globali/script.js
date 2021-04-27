var x = "sono una variabile globale";

function esempio() {
    console.log('sono dentro la funzione ' + x);
    var z = 'sono una variabile locale'

}

esempio();

console.log('sono fuori dalla funzione' + x);

console.log(z);


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('body').onclick = function () {
        
    }


})