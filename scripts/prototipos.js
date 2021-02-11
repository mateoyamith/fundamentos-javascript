function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

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

function Desarrollador(nombre, apellido){
this.nombre = nombre;
this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}



// var mateo = new Persona('Mateo', 'Sanchez', 170);
// var mafe = new Persona('Mafe', 'Gallego', 158);
// mateo.saludar();
// mateo.soyAlto();
// mafe.saludar();
// mafe.soyAlto();
// var mafe = new Desarrollador('Mafe', 'Gallego', 158);