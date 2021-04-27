var imgArray = ['/img/cane01.jpg','/img/cane02.jpg','/img/cane03.jpg'];

function avanti() {
    for (var i = 0; i < imgArray.length; i++){
        var src = document.getElementById('immagine').src;
        if (src === ("http://127.0.0.1:5500/carosello" + imgArray[i])) {
            if (imgArray[i+1] !== undefined){
                document.getElementById('immagine').src = "." + imgArray[i+1];
            } else {
            document.getElementById('immagine').src = "." + imgArray[0];
            
            }
            return;
        }
    }
};

function indietro() {
    for (var i = (imgArray.length - 1); i >= 0; i--){
        var src = document.getElementById('immagine').src;
        if (src === ("http://127.0.0.1:5500/carosello" + imgArray[i])) {
            if (imgArray[i-1] !== undefined){
                document.getElementById('immagine').src = "." + imgArray[i-1];
            } else {
            document.getElementById('immagine').src = "." + imgArray[imgArray.length-1];
            
            }
            return;
        } 
    }
}