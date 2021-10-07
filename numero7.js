const prompt = require('prompt-sync')({sigint: true});

var a = parseFloat(prompt("digite o valor da polegada: "));
var cm = a * 2.54;

console.log(cm);
