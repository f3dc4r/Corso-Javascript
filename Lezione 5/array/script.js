var settimana = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];

console.log(settimana[3])

for (var i = 0; i < settimana.length; i++) {
    var td = document.createElement('td');
    td.textContent = settimana[i];
    document.querySelector('#giorniSett').appendChild(td);
}