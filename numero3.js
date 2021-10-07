const prompt = require('prompt-sync')({sigint: true});

var a = parseInt(prompt("digite o primeiro número: "));
var b = parseInt(prompt("digite o segundo número: "));
var c = parseInt(prompt("digite o terceiro número: "));
var soma = a + b + c;

console.log(soma);
