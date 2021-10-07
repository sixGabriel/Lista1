const prompt = require('prompt-sync')({sigint: true});

var a = parseFloat(prompt("digite a nota do primeiro aluno: "));
var b = parseFloat(prompt("digite a nota do segundo aluno: "));
var c = parseFloat(prompt("digite a nota do terceiro aluno: "));
var d = parseFloat(prompt("digite a nota do quarto aluno: "));

media = (a + b + c + d) / 4;
console.log(media);