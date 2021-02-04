var mateo = {
    nombre: 'Mateo',
    apellido: 'Sanchez',
    edad: 24,
    peso: 77
}

console.log(`Al inicio del año ${mateo.nombre} pesa ${mateo.peso}kg`);

const INCREMENTO_PESO = 0.3;
const aumentarPeso = (persona) => persona.peso += INCREMENTO_PESO;
const disminuirPeso = (persona) => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = mateo.peso - 3;
var dias = 0;

while (mateo.peso > META) {
    if (comeMucho()) {
        aumentarPeso(mateo);
    }
    if (realizaDeporte()) {
        disminuirPeso(mateo);
    }
    dias++;
}

console.log(`Pasaron ${dias} días hasta que ${mateo.nombre} adelgazo 3kg`);


for (let index = 1; index <= 365; index++) {
    var random = Math.random();
    if (random < 0.25) {
        aumentarPeso(mateo)
    } else if (random < 0.50) {
        disminuirPeso(mateo)
    }
}

console.log(`Al final del año ${mateo.nombre} pesa ${mateo.peso.toFixed(2)}kg`);