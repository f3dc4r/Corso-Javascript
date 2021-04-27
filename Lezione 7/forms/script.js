$(function() {

    $('#login').on('submit', function(event) {
        event.preventDefault();
        var username = $('#username').val(); // .val() seleziona il valore dell'input con id username
        var password = $('#password').val(); // .val() seleziona il valore dell'input con id password

        if (username == '' || username == undefined) {
            $('<span>attenzione non non hai compilato lo username</span>') // creo l'elemento span
                .css({
                    'color': 'red',
                    'background-color': 'rgba(231, 76, 60, 1)',
                    'border': 'solid 1px red',
                    'border-radius': '15px',
                }) // .css attribuisco dello stile css allo span creat
                .appendTo('#username-container') // .appendTo ci appende l'elemento span appena creato al div con id username-container
                .fadeOut(5000) // ci fa scomparire con un'animazione l'elemento span
        }

        if (password == '' || password == undefined) {
            // alert('attenzione non non hai compilato lo username');
            $('<span>attenzione non non hai compilato la password</span>')
            .css({
                'color': 'red',
                'background-color': 'rgba(231, 76, 60, 1)',
                'border': 'solid 1px red',
                'border-radius': '15px',
            })
            .appendTo('#password-container').fadeOut(5000)
        }


        if (username != '' && password != '') {
            $('<div> hai effettuato il login con successo</div>')
            .css(
                {
                    'background-color': 'rgba(60, 179, 113, 0.5)',
                    'color': 'green',
                    'border': 'solid 1px green',
                    'width': '300px',
                    'border-radius': '15px',
                    'text-align': 'center'
                }
            ).appendTo('#button-container')
            .fadeOut(5000);
        }

    })
   
})