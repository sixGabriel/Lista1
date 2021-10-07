const prompt = require('prompt-sync')({sigint: true});

var a = parseInt(prompt("digite a idade: "));

var dias = a * 365;

console.log(dias);
