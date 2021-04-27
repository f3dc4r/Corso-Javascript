var imgArray = ['./img/cane1.jpg', './img/cane2.jpg', './img/cane3.jpg']
var posizione = 0;

function avanti() {
    for (var i = 0; i < imgArray.length; i++) {
        if (posizione === i) {
            if (imgArray[i+1] !== undefined) {
                document.getElementById('immagine').src = imgArray[i+1];
                posizione++;
            } else {
                document.getElementById('immagine').src = imgArray[0];
                posizione = 0;
            }
            return
        } 
    }
}

function indietro() {
    for (var i = (imgArray.length - 1); i >= 0; i--)  {
        if (posizione === i) {
            if (imgArray[i-1] !== undefined) {
                document.getElementById('immagine').src = imgArray[i-1];
                posizione--
            } else {
                document.getElementById('immagine').src = imgArray[imgArray.length-1];
                posizione = imgArray.length-1
            }
            return
        } 
    }
}


// document.addEventListener('DOMContentLoaded', function() {
//     var id = setInterval(avanti, 3000);

//     setTimeout(function() {
//         clearInterval(id)
//     },9000)
// })


// document.querySelector('html').addEventListener('click', function () {
//     alert('bau')
// })