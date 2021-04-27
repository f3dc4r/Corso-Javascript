function invia() {
    var msg = document.getElementById('messaggio').value;
    var p = document.createElement('p'); //<p></p>
    p.textContent = msg; //<p>messaggio</p>
    document.getElementById('contenitore').appendChild(p);
    document.getElementById('messaggio').value = '';
};