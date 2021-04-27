var items = document.querySelectorAll('.menu-items');
var sideNav = document.querySelector('#sideNav');

document.querySelector('#hamburger').onclick = function() {
    sideNav.style.width = '200px'
    sideNav.style.backgroundColor = "red";
    for (var i = 0; i < items.length; i++) {
        items[i].style.height = '50px';
    }
}

document.querySelector('#closeNav img').onclick = function() {
    sideNav.style.width = '0px'
    sideNav.style.backgroundColor = "rgba(255, 0, 0, 0.411)";
    for (var i = 0; i < items.length; i++) {
        items[i].style.height = '0px';
    }
}