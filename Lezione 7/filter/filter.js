$(function() {
    var pFiltrati = $('p') // qui selezioniamo tutti i p
    .filter( /* filter ci permette passandogli una funzione, di prendere solo gli elementi che 
        rispettano gli standard/caratteristiche che gli speficichiamo all'interno della funzione*/
        function() { // ad ogni giro dell'iterazione del filter, verrà eseguita questa funzione
            var elemento = $(this); // assegniamo alla variabile elemento, il tag p wrappato dall'oggetto jQuery
            if (elemento.hasClass('vuoto') && elemento.attr('id') != 'testo') {
                return true
            } else {
                return false
            }
        }
    )


    pFiltrati.css('font-size', '40px')
    console.log(pFiltrati)

})