$(function() {

    $('div').css({
        'width': '200px',
        'height': '200px',
        'background-color': 'green'
    })

    $('button').click(function(){
        $('div')
            .animate({width:'50%'}, {queue:true, duration:2500})
            .animate({fontSize:'40px'})
        });

})