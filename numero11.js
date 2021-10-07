const prompt = require('prompt-sync')({sigint: true});

var a = parseFloat(prompt("digite o preço da gasolina: "));
var b = parseFloat(prompt("digite quantos reais você deseja colocar: "));
var litros = b / a;

console.log(litros);
