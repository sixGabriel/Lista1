const prompt = require('prompt-sync')({sigint: true});

var a = parseInt(prompt("digite um dos lados do quadrado: "));
var quad = a * a;

console.log(quad);
