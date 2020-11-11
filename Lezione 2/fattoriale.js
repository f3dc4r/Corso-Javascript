document.write("<h1>fattoriali</h1>");
document.write("questa pagina calcolerà il fattoriale dei numeri fino a 10 utilizzando il ciclo FOR<br>");

var fattoriale=1;
for (x=0; x<=10; x++){
    if (x==0) {
        fattoriale=1;
    }
    else {
        fattoriale=fattoriale * x;
        document.write("<h4>");
    document.write("il fattoriale di " + x +" è uguale a " + fattoriale +"</h4>");
    }
};