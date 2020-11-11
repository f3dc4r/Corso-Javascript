document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('somma').onclick = function(){
        var add1 = document.getElementById('addendo1').value;
        var add2 = document.getElementById('addendo2').value;

        document.write("<h1> La somma dell'addendo 1 e dell'addendo 2 è " + (parseInt(add1)+parseInt(add2)));
    }
})