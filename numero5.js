const prompt = require('prompt-sync')({sigint: true});

var a = parseInt(prompt("digite o número: "));
var quad = a * a;

console.log(quad);
