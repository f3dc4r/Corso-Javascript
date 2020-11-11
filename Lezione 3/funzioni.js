var acceso = false;

document.addEventListener('DOMContentLoaded', function(){
    var lamp = document.getElementById('lampadina');
    var int = document.getElementById('interruttore');

    int.onclick = function () {
        if (!acceso) {
            lamp.style.backgroundColor = 'yellow';
            acceso = true;
        } else {
            lamp.style.backgroundColor = 'black';
            acceso = false;
        }
        
if (int.textContent === 'accendi'){
    int.textContent = 'spegni';
} else {
    int.textContent = 'accendi';
}
        
    }
})