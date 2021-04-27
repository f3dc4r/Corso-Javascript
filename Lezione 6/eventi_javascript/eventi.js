// function cliccami() {
//     alert('mi hai cliccato')
// }

document.querySelector('button').addEventListener('click', function() {
    alert('mi hai cliccato')
})

document.addEventListener('DOMContentLoaded', function() {
    console.log('il dom è stato caricato')
})

window.addEventListener('load', function() {
    console.log('il dom e le risorse esterne sono state caricate')
})


document.querySelector('div').addEventListener('mouseover', function() {
    document.querySelector('div').style.backgroundColor = 'green'
})

document.querySelector('div').addEventListener('mouseleave', function() {
    document.querySelector('div').style.backgroundColor = 'blue'
})

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 500) {
        console.log('sono sotto i 500')
    }
})
// window.onscroll = function() {

// }
