$(function() {
    // $('div').css('height', '100px')
    // $('div').css('width', '100px')
    // $('div').css('background-color', 'red')
    // $('div').css('margin-top', '20px')


    $('div').css({
        'height': '100px',
        'width': '100px',
        'background-color': 'red',
        'margin-top': '20px'
    })

    $('#verde').on('click', function() {
        $('div').css('background-color', 'green');
    })

    $('#blue').on('click', function() {
        var divs = document.querySelectorAll('div');
        for(var i = 0; i < divs.length; i++) {
            divs[i].style.color = 'green'
        }
    })

    var divs = document.querySelectorAll('div');
    for(var i = 0; i < divs.length; i++) {
        divs[i].style.color = 'green'
    }


})