const prompt = require('prompt-sync')({sigint: true});

var a = parseInt(prompt("digite o primeiro número: "));
var b = parseInt(prompt("digite o segundo número: "));
var multiplica = a * b;

console.log(multiplica);
