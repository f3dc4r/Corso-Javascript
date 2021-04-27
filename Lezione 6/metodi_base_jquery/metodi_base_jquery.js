var liste = $("#menu li").get(1).innerHTML; 

console.log(liste)


/*
.html è un metodo di jQuery che ci permette di accedere al
contento del tag selezionato
*/
var jquery = $('#menu li').eq(3).html()

/* 
innerHTML proprietà di un tag 
html che ci permette di accedere al contenuto di esso
*/
var javascript = $('#menu li').get(3).innerHTML

// console.log('jquery', jquery)
// console.log('javascript', javascript)