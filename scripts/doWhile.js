var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while (!llueve());

var veces = contador > 1 ? `veces` : `vez`;
console.log(`Fui a ver si llovía ${contador} ` + veces);