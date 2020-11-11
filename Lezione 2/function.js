// function test() {
//     console.log('Hello World');
//     console.log('Hello World 1');
//     console.log('Hello World 2');
//     console.log('Hello World 3');
//     console.log('Hello World 4');
//     console.log('Hello World 5');
// };

// test();
document.addEventListener('DOMContentLoaded', function(){
    // document.getElementById('quadrato').style.backgroundColor = 'white';


    document.getElementById('blue').onclick = function(){
        document.getElementById('quadrato').style.backgroundColor = 'blue';
        document.getElementById('quadrato').style.height = '200px';
        document.getElementById('quadrato').style.width = '200px';
    }

    document.getElementById('green').onclick = function(){
        document.getElementById('quadrato').style.backgroundColor = 'green';
    }

    document.getElementById('red').onclick = function(){
        document.getElementById('quadrato').style.backgroundColor = 'red';
    }

    document.getElementById('reset').onclick = function(){
        document.getElementById('quadrato').style.backgroundColor = 'white';
        document.getElementById('quadrato').style.height = '100px';
        document.getElementById('quadrato').style.width = '100px';
    }
});

