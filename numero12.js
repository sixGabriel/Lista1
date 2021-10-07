const prompt = require('prompt-sync')({sigint: true});

var a = parseFloat(prompt("digite o dia: "));
var b = parseFloat(prompt("digite o mês: "));
var dias = (a - 1) * 30 + a;

console.log(dias);