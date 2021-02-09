function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function() {
        console.log(`Soy ${this.altura >= 170 ? `alto`: `bajo`}`);
}

var mateo = new Persona('Mateo', 'Sanchez', 170);
var mafe = new Persona('Mafe', 'Gallego', 158);
mateo.saludar();
mateo.soyAlto();
mafe.saludar();
mafe.soyAlto();