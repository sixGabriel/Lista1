const prompt = require('prompt-sync')({sigint: true});

var a = parseInt(prompt("digite o peso em Kg: "));

var g = a * 1000;

console.log(g);
