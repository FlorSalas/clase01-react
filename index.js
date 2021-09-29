const o= require("./src/obligatorio");  // el valor de o lo esta obteniendo desde obligatorio.js
const {num2, saludo, array, objeto1, funcion1}= require("./src/opcional");

console.log(num2);

console.log(objeto1.nombre);

console.log(funcion1());

console.log(o);

console.log(array);

console.log("hola node");