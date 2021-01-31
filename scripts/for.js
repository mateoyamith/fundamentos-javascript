var mateo = {
    nombre: 'Mateo',
    apellido: 'Sanchez',
    edad: 24,
    peso: 77
}

console.log(`Al inicio del año ${mateo.nombre} pesa ${mateo.peso}kg`);

const INCREMENTO_PESO = 0.2;
const aumentarPeso = (persona) => persona.peso += INCREMENTO_PESO;
const disminuirPeso = (persona) => persona.peso -= INCREMENTO_PESO;

for (let index = 1; index <= 365; index++) {
    var random = Math.random();
    if (random < 0.25) {
        aumentarPeso(mateo)
    } else if (random < 0.50) {
        disminuirPeso(mateo)
    }
}

console.log(`Al final del año ${mateo.nombre} pesa ${mateo.peso.toFixed(2)}kg`);