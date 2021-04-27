$('select').on('change', function() {
    var url = $('select').val();
    $(location).attr('href', url)
})

$(function() {

    $('select').before('<span>prima</span>') // .before appende l'elemento passatogli come parametro prima dell'elemento selezionato
    $('select').after('<span>dopo</span>') // .after appende l'elemento passatogli come parametro dopo dell'elemento selezionato


})