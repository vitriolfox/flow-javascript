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
  
console.log(eredmenyTomb);

// JO MEGOLDAS
let kiindulo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cel = [];
let i = 0;
let j = 0;

for(i; i < kiindulo.length; i++) {
  if (kiindulo[i] % 2 === 0) {
    cel[j] = kiindulo[i];
    j++;
  }
}

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
 */

// eldontes
/* let tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;  
let keresett = 5;
let talalt = false;

// WHILE MEGOLDAS
while(tomb[i] != keresett && i <= tomb.length-1) {
  i++;
} 

 if (i < tomb.length) {
  console.log('van ilyen');
} else {
  console.log('nincs ilyen');
} 

// FOR MEGOLDAS

for(i; i < tomb.length; i++) {
  if (tomb[i] === keresett) {
    talalt = true;
    break;
  }
}

console.log(i);
console.log(talalt); 

// kivalasztas
let tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;  
let keresett = 5;

while(i < tomb.length && tomb[i] != keresett) {
  i++;
}

if (i < tomb.length) {
  console.log('van ilyen, az ' + i + '. elem');
} else {
  console.log('nincs ilyen');
}
*/
// masolas
let kiindulo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cel = [];
let i;
let j = 0;

for(i = 0; i < kiindulo.length; i++) {
  if (kiindulo[i] % 2 === 0) {
    cel[j] = kiindulo[i];

    j++;
  }
}

console.log(kiindulo);
console.log(cel);
