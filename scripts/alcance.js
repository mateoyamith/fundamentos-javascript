var nombre2 = 'Mafe';

var mateo = {
    nombre: 'Mateo',
    apellido: 'Sanchez',
    edad: 25
}

var mafe = {
    nombre: 'Mafe',
    apellido: 'Gallego',
    edad: 20
}

function imprimirNombreMayusculas({ nombre }) {
    console.log(nombre.toUpperCase());
}

/*Desestructurar objetos*/
function imprimirNombreMayusculas2(persona) {
    var { nombre } = persona;
    console.log(nombre.toLowerCase());
}

imprimirNombreMayusculas(mateo);
imprimirNombreMayusculas2(mafe);
imprimirNombreMayusculas({ nombre: 'Pepito' });

function imprimirNombreYedad(persona) {
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYedad(mateo);
imprimirNombreYedad(mafe);

function cumpleannios(persona) {
    return {
        ...persona,
        edad: persona.edad + 1,
        modelo: 2021 - persona.edad
    }
}