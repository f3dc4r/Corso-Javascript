window.onscroll = function () {
    // console.log('sto scorrendo la finestra');
    var scrollPosition = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;   
    // console.log(scrollPosition);

    if (scrollPosition >= 500) {
        console.log('sono in posizione maggiore uguale a 500');
        document.querySelector('#bottoneTornaSu').style.display = 'block';
    } else {
        document.querySelector('#bottoneTornaSu').style.display = 'none';
    }
}


function tornaSu() {
    window.scrollTo({
        top: 200,
        behavior: 'smooth'
    })
}