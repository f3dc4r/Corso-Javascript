var blocco = $('#mioBlocco')

// console.log(blocco)

$(function() {
    // console.log('dom e script caricati')
})


var elementi = $('.elemento')
// console.log(elementi)


var test = $('#mioBlocco, .elemento');

// console.log(test)

var mioBlocco = $(document.getElementById('mioBlocco')); 
// console.log(mioBlocco)

document.createElement('div'); // javascript nativo
$('</div>'); //jquery

var bloccoHtml = '<div><p><strong>ciao</strong</p></div>';

console.log($(bloccoHtml));