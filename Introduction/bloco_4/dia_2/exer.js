const { Collection } = require("mongoose");

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let a, soma=0;

for (a=0; a<numbers.length; a++){
    console.log(numbers[a]);
    soma+=numbers[a];
}

console.log(soma);