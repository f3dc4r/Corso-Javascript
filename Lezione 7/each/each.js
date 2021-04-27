$(function() {

    $('#clicca').on('click', function() {
        $('#riga1 td').each(function(i, el) {
            // console.log(this)
    
            if (i%2 == 0) {
                $(this).css('background-color', 'red')
            }
    
            console.log('i', i);
            console.log('el', el)
        })
    })
    


})