

/*
la funzione di handler dell'evento load viene eseguita, quando tutto il DOM è stato caricato
e anche le risorse esterna (file css, file js, immagini, ecc...) sono stati caricati
*/
window.addEventListener('load', function() {})

/*
la funzione di handler del DOMContentLoaded viene eseguita, quando il DOM è stato caricato,
ma non aspetta che le risorse esterne siano state caricate
*/
window.addEventListener('DOMContentLoaded', function() {})


$(function() {

    // selezione l'oggetto window e con .on() gestisco l'evento scroll

    // resize è l'evento che viene triggerato quando facciamo un resize della finestra del browser
    $(window).on('scroll resize', function() {

        // alla variabile scrollPosition assegno il valore della posizione dello scroll verticale
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;


        // in questo if controllo se la scrollPosition è maggiore uguale di 700px
        if (scrollPosition >= 700) {

            // $('div#tornaSu').css('display', 'block')

            // con fadeIn faccio apparire il div con id tornaSu con un'animazione
            $('div#tornaSu').fadeIn();
        } else {
            // $('div#tornaSu').css('display', 'none')

            // con fadeIn faccio scomparire il div con id tornaSu con un'animazione
            $('div#tornaSu').fadeOut();
        }

        /* 
        - selezioniamo tutti i tag a dentro alla gerarchia header ul li
        - utilizziamo il metodo each per iterare su di essi
        - la funzione passata come parametro all'each, viene eseguita ad ogni iterazione
        - la funzione riceve come parametri, il primo valore corrisponde all'indice dell'elemento iterato
        - come secondo parametro abbiamo l'elemento stesso
        */
        $('header ul li a').each(function(i, el) {
            /*
            - andiamo a controllare se la scrollPosition è maggiore uguale alla distanza 
            tra l'elemento selezionato e il top della pagina
            - accediamo alla distanza tra il bordo superiore dell'elemento selezionato con $() e il top della pagina
              con il metodo offset() accedendo alla prorpietà top
            */
            if (scrollPosition >= $(el.hash).offset().top) {
                // risettiamo tutti i border-bottom con il valore solid 10px red
                $('header ul li a').css('border-bottom', 'solid 10px red')
                // settiamo il border-bottom della voce di menu corrispondente alla sezione in cui siamo
                $(el).css('border-bottom', 'solid 10px blue')
            }
        })
    })


    // abbiamo selezionato il div con id tornaSu e con il metodo on() abbiamo gestito l'evento click
    $('#tornaSu').on('click', function() {
        // console.log(this)
        // abbiamo selezionato html e body e con il metodo animate abbiamo generato l'animazione di scroll verso il top della pagina
        // come primo parametro gli abbiamo passato un oggetto con proprietà scrollTop
        // come secondo parametro un valore numerico, espresso in millisecondi che corrisponde alla durata dell'animazione
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })

    // abbiamo seleziato tutti i tag a all'interno dell'header e all'interno della lista
    // abbiamo gestito l'evento click con .on()
    $('header ul li a').on('click', function(event) {
        // con event.preventDefault abbiamo prevenuto il comportamento di default del tag a
        event.preventDefault();
    
        console.log(this.hash)
        // abbiamo selezionato i tag html e body e con il metodo animate abbiamo creato l'animazione di scroll
        // verso le coordinate ottenute tramite il metodo offset(), applicato sull'elemento selezionato
        $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1000);

        // $('header ul li a').css('border-bottom', 'solid 10px red')
        // $(this).css('border-bottom', 'solid 10px blue')

    })

    /* 
    abbiamo dichiarato un array con i due path delle immagini e lo abbiamo assegnato
    alla variabile imgs
    */
    var imgs = ['./img/terra.gif', './img/dubai.png', './img/new-york.jpg'];

    /*
    - abbiamo selezionato tramite $() gli elementi section con id=about e id=contacts
    - con il metodo each, siamo andati ad iterare su di essi
    - ad ogni giro dell'iterazione è stata eseguita la funzione passata come parametro
    - alla funzione abbiamo passato come parametri i(indice) ed el(l'elemento iterato) 
    */
    $('#home, #about, #contacts').each(function(i, el) {
        /*
        - abbiamo seleziona con $(el) l'elemento nell'iterazione
        - tramite il metodo .parallax() abbiamo applicato l'effetto parallax all'immagine
        attribuita come backgroud all'elemento selezionato, passandolo come informazione all'oggetto
        alla proprietà imageSrc
        - ad ogni giro dell'iterazione, abbiamo acceduto al singolo valore contenuto nell'array imgs
        tramite l'indice, passato come parametro alla funzione di handler del metodo each
        */
        $(el).parallax({imageSrc: imgs[i]})
    })

    /* 
    con il metodo .parallax(), messo a disposizione dal plugin di jQuery 
    chiamato parallax.js(https://pixelcog.github.io/parallax.js/)
    possiamo andare a generare il cosidetto effetto parallax sulle immagini 
    di background, che in questo caso abbiamo applicato sui tag section
    */
    // $('#home').parallax({imageSrc: './img/terra.gif'})
    // $('#contacts').parallax({imageSrc: './img/new-york.jpg'})

})