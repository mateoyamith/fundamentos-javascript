class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }

    soyAlto() {
            console.log(`Soy ${this.altura >= 170 ? `alto`: `bajo`}`);
    }
}
     
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura);
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
    }
}

// var mateo = new Persona('Mateo', 'Sanchez', 170);
// var mafe = new Persona('Mafe', 'Gallego', 158);
// mateo.saludar();
// mateo.soyAlto();
// mafe.saludar();
// mafe.soyAlto();
// var mafe = new Desarrollador('Mafe', 'Gallego', 158);