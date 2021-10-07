const prompt = require('prompt-sync')({sigint: true});

var a = parseFloat(prompt("digite a base: "));
var b = parseFloat(prompt("digite a altura: "));
var area = a * b;

console.log(area);
