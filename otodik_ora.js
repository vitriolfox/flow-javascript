'use strict';

function valami() {
  return 2;
}

console.log(valami());
console.log(valami);


let prefixVariable = 0;
let prefixConstant = 2;
let variablePostfix = 1;

function test(x) {
  return x === 5 ? 'OK' : 'KO';
}
console.log(test(7));



let matrix = [[1,2,3], [2,4,5], {key1: 23, key2: 87}];

console.log(matrix[2].key1);
console.log(matrix[2]['key1']);


let a = 1;
let b = 2;

function tokom(a, b) {
  a = 60;
  b = 70;
  console.log(a, b);
}

tokom();

