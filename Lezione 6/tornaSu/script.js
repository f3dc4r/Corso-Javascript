$(function() {
    $('#rosso').css({
        'background-color': 'red',
        'height': '2000px'
    })

    $('#blu').css({
        'background-color': 'blue',
        'height': '2000px'
    })

    $('#tornaSu').css({
        'background-color': 'white',
        'height': '50px',
        'width': '50px',
        'position': 'fixed',
        'bottom': '30px',
        'left': '20px',
        'border-radius': '15px',
        'display': 'none'
    })


    $(window).on('scroll', function () {

        console.log(window.pageYOffset)
        if (window.pageYOffset > 500) {
            $('#tornaSu').css('display', 'block');
        } else {
            $('#tornaSu').css('display', 'none');
        }

    })

    $('#tornaSu').on('click', function() {
        $('html').animate({
            scrollTop: $('html').offset().top
        }, 2000)
    })
})