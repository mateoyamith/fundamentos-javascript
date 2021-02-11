class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
        if (fn) {
            fn(this.nombre, this.apellido, false);
        }
    }

    soyAlto() {
            console.log(`Soy ${this.altura >= 170 ? `alto`: `bajo`}`);
    }
}
     
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura);
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
        if (fn) {
            fn(this.nombre, this.apellido, true);
        }
    }
}


function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev){
        console.log(`Ah no sabia que eres desarrollador/a`);
    }
}

var mateo = new Persona('Mateo', 'Sanchez', 170);
var mafe = new Desarrollador('Mafe', 'Gallego', 158);
mateo.saludar(responderSaludo);
// mateo.soyAlto();
 mafe.saludar(responderSaludo);
// mafe.soyAlto();
// var mafe = new Desarrollador('Mafe', 'Gallego', 158);