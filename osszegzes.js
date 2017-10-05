'use strict';

let t = [1,2,3,4,5,6,7,8,9,10];
let osszeg = 0;
let i;

for(i = 0; i<=t.length-1; i++) {
  osszeg += t[i];
}

console.log(osszeg);

