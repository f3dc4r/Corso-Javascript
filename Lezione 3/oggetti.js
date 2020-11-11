var obj = {
    nome: 'Ryan',
    eta: 24,
    sposato: false,
    anagrafica: {
        indirizzo: 'via roma',
        citta: 'Roma'
    },
    
    skills: ['java', 'javascript'],

    // metodi
    saluta: function () {
        console.log("ciao, sono un metodo dell'oggetto");
    }
}

obj.saluta();