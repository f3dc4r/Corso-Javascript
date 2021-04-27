document.querySelector('#siti').addEventListener('change', function() {
    var valore = document.querySelector('#siti').value;
    window.location.href = valore
})

document.querySelector('#testo').addEventListener('keyup', function() {
    console.log(document.querySelector('#testo').value)
})