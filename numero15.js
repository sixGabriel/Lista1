const prompt = require('prompt-sync')({sigint: true});

var a = parseFloat(prompt("digite a altura da lata: "));
var b = parseFloat(prompt("digite o raio: "));


var volume = 3.14259 * b * b * a
console.log(volume);