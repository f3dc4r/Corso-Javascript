var eta = 14;
var patente = false;

if (eta >=18 && patente){
    document.write('<h1>Puoi noleggiare una Ferrari</h1>');
} else if (eta >=18 && !patente){
    document.write('<h1>Niente Ferrari prima la patente</h1>');
} else {
    document.write('<h1>Ne riparleremo tra ', 18-eta, ' anni</h1>');
};