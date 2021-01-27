var nombre2 = 'Mafe';

var mateo = {
    nombre: 'Mateo',
    apellido: 'Sanchez',
    edad: 28
}

var mafe = {
    nombre: 'Mafe',
    apellido: 'Gallego',
    edad: 20
}

function imprimirNombreMayusculas({ nombre }) {
    console.log(nombre.toUpperCase());
}

imprimirNombreMayusculas(mateo);
imprimirNombreMayusculas(mafe);
imprimirNombreMayusculas({ nombre: 'Pepito' });