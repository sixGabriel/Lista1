const prompt = require('prompt-sync')({ sigint: true });

var a = parseInt(prompt("digite os segundos: "));


var min = parseInt(a / 60)
var hr = parseInt(a / 3600)

if (a >= 60) {
    a = a - (min * 60)
}

if (min >= 60) {
    min = min - (hr * 60)

} if (min < 1) {
    min = 0

} if (hr < 1) {
    hr = 0
} if(hr < 10) {
    hr = '0' + hr 
} if (min < 10) {
    min = '0' + min
} if (a < 10) {
    a = '0' + a
}

console.log(parseInt(hr) + ":" + min + ":" + a)