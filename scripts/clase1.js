 var nombre = 'Mateo';
 var apellido = 'Sanchez Agudelo';

 // console.log('Hola ' + nombre + ' ' + apellido);

 var nombreMayusculas = nombre.toUpperCase();
 console.log(nombreMayusculas);
 var apellidoMinusculas = apellido.toLocaleLowerCase();
 console.log(apellidoMinusculas);
 var primeraLetraDelNombre = nombre.charAt(0);
 console.log(primeraLetraDelNombre);
 var cantidadLongitudNombre = nombre.length;
 console.log(cantidadLongitudNombre);

 var nombreCompleto = nombre + ' ' + apellido;
 console.log(nombreCompleto);

 /*Interpolación de texto para concatenar caracteres*/
 var nombreInterpolado = `${nombre} ${apellido.toUpperCase()}`
 console.log(nombreInterpolado);

 var str = nombre.charAt(1) + nombre.charAt(2);
 console.log(str);
 var strSub = nombre.substr(1, 2);
 console.log(strSub);

 var ultimaLetra = nombre.charAt(nombre.length - 1);
 console.log(ultimaLetra);