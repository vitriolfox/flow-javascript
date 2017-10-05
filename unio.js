'use strict';

let i = 0;
let j = 0;
let k = 0;
let forrasTomb1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 0];
let forrasTomb2 = [1, 2, 3, 5, 6, 8, 9, 12, 13];
let unioTomb = [];

for(i; i < forrasTomb1.length; i++) {
   unioTomb[i] = forrasTomb1[i];
}

k = forrasTomb1.length;

for(j; j < forrasTomb2.length; j++) {
   i = 0;
   while(i < forrasTomb1.length && forrasTomb2[j] != forrasTomb1[i]) {
       i += 1;       
   }
   if(i>=j) {
       unioTomb[k] = forrasTomb2[j];     
       k +=1;
   }
}

console.log(unioTomb)