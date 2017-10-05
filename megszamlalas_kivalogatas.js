'use strict';
// megszamlalas
/* let t = [1,2,3,4,5,6,7,8,9,10];
let szamlalo = 0;
let i;


for(i = 0; i<=t.length-1; i++) {
  if(t[i] < 5) {
    szamlalo++;
  }
}
console.log(szamlalo);
*/  

// kivalogatas

/* let t = [1,2,3,4,5,6,7,8,9,10];
let eredmenyTomb = [];
let i;

for(i = 0; i<=t.length-1; i++) {
  if(t[i] < 5) {
    eredmenyTomb.push(t[i]);
  }
}
  
console.log(eredmenyTomb); */


// szetvalogatas

let t = [1,2,3,4,5,6,7,8,9,10];
let eredmenyTomb = [];
let eredmenyTomb2 = [];
let i;

for(i = 0; i<=t.length-1; i++) {
  if(t[i] < 5) {
    eredmenyTomb.push(t[i]);
  } else {
    eredmenyTomb2.push(t[i]);    
  }
}
  
console.log(eredmenyTomb, eredmenyTomb2);