const prompt = require('prompt-sync')({sigint: true});

var a = parseFloat(prompt("digite o valor fixo do produto: "));

var desconto = a * 0.9;

console.log(desconto);
