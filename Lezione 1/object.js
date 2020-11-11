var persona = {
    nome: 'Federico',
    cognome: 'Caruso',
    eta: 36,
    sposato: false,
    anagrafica: {
        indirizzo: 'via roma',
        civico: 4
    }
};
// per accedere a una proprietà dell'oggetto usiamo il punto
console.log(persona.nome); // dot notation

/*
 per accedere a una proprietà usiamo le parentesi quadre
e dentro le parentesi quadre, scriviamo il nome della proprietà
come stringa
 */
 console.log(persona['cognome']);