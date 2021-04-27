document.querySelector('select').addEventListener('change', function() {
    var url = document.forms['navigaSito'].elements.valoreSito.value;
    location.href = url;
})



