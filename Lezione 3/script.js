var globale = 'io sono una variabile globale';

function test(){
    console.log(globale);
};

function saluta(){
    var privata = 'ciao, io non sono una variabile globale';
};

console.log(privata);
