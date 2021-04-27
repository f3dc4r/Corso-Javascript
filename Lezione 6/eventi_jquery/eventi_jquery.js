$('#cliccami').on('click', function() {
    $('<div>ciao<div>').appendTo('body')
})

var links = $("#blocco a");
// console.log(links)


var lista = $('ul#ulPadre > li')

// console.log(lista);


var input = $('input');

console.log(input)

/* 
questo blocco di codice, 
- seleziona l'elemento html con id='abilita'

- con il metodo .on gestisce in questo caso l'evento click, 

- specificatogli come primo parametro nel metodo on, 

- come secondo parametro abbiamo la funzione che verrà 
  eseguita al click dell'elemento con id='abilita'

  - $(":disabled").removeAttr("disabled"); seleziona tutti 
  i tag html che hanno l'attributo disabled e glielo rimuove

*/
$('#abilita').on('click', function() {
    $(":disabled").removeAttr("disabled");
})