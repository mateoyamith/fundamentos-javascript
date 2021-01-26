var edad = 24;
edad++;
edad += 1;

var peso = 75;
peso -= 2;

var sanduche = 1;

peso += sanduche;

var precioDeVino = 200.3;
var total = Math.round(precioDeVino * 100 * 3) / 100;
var totalStr = total.toFixed(2);
var total2 = parseFloat(totalStr);

var pizza = 8;
var persona = 2;
var cantidadDePorcionesPorPersona = pizza / persona;