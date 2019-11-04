// En javascript TODO termina siendo un Object. Veamos...

var numero = 123;
var texto = "texto";
var booleano = true;
var array = [1,2,3,4];
var objeto = {};
var funcion = function () {};

// Que devuelve hacer Object.getPrototypeOf(variable); sobre cada variable?
console.log(Object.getPrototypeOf(numero));
console.log(Object.getPrototypeOf(texto));
console.log(Object.getPrototypeOf(booleano));
console.log(Object.getPrototypeOf(array));
console.log(Object.getPrototypeOf(objeto));
console.log(Object.getPrototypeOf(funcion));

// Confirmemos si los prototipos de cada variable coinciden con los prototipos de cada tipo de dato

console.log(Object.getPrototypeOf(numero) === Number.prototype);
console.log(Object.getPrototypeOf(texto) === String.prototype);
console.log(Object.getPrototypeOf(booleano) === Boolean.prototype);
console.log(Object.getPrototypeOf(array) === Array.prototype);
console.log(Object.getPrototypeOf(objeto) === Object.prototype);
console.log(Object.getPrototypeOf(funcion) === Function.prototype);

// Usando el mismo criterio, que devuelve hacer Object.getPrototypeOf(tipoDeDato); sobre cada tipo de dato?

console.log(Object.getPrototypeOf(Number.prototype));
console.log(Object.getPrototypeOf(String.prototype));
console.log(Object.getPrototypeOf(Boolean.prototype));
console.log(Object.getPrototypeOf(Array.prototype));
console.log(Object.getPrototypeOf(Function.prototype));

// Y que pasa si lo hacemos sobre el tipo de dato Objeto?

console.log(Object.getPrototypeOf(Object.prototype));
