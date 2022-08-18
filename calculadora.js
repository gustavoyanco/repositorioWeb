
let suma = require ('./sumar');
let resta = require ('./restar');
let producto = require ('./multiplicar');
let division = require ('./dividir');


console.log('La suma da como resultado '+suma(8,4), 'la resta es '+resta(7,4));

console.log(producto(7,3));

console.log(producto(7,0));

console.log(division(10,2));

console.log(division(10,0));

