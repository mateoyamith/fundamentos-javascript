var sacha = {
    nombre: 'Sacha',
    apellido: 'Sanchez',
    edad: 24,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`);
    if (persona.ingeniero === true) {
        console.log('Ingeniero');
    }
    if (persona.cocinero === true) {
        console.log('cocinero');
    }
    if (persona.cantante === true) {
        console.log('cantante');
    }
    if (persona.dj === true) {
        console.log('dj');
    }
    if (persona.guitarrista === true) {
        console.log('guitarrista');
    }
    if (persona.drone === true) {
        console.log('drone');
    }
}

imprimirProfesiones(sacha);

function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es:`)
    console.log(persona.edad >= 18 ? 'Mayor de edad' : 'Menor de edad');
}

imprimirSiEsMayorDeEdad(sacha);