$(function() {

    $('#aggiungi').on('click', function() {
        $('div').addClass('sfondoRosso')
    })

    $('#togli').on('click', function() {
        $('div').removeClass('sfondoRosso')
    })

    $('#colorami').hover(
        function(){
            $('#colorami').css('background-color', 'blue')
            console.log('sono dentro')
        }, function() {
            $('#colorami').css('background-color', 'green')
            console.log('sono fuori')
        }
    )

})