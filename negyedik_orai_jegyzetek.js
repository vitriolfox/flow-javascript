'use strict';
/* let tomb = [1, 2, 3, 'w', 2.3];
console.log(tomb);

let egyszeruHash = { number: 'szám', apple: 'alma' };
console.log(egyszeruHash);

let hess = {
  kulcs: 'ertek',
  kulcs2: {
    kulcs3: 'ertek3',
    kulcsVagyokMegpedigSzamErtekkelBirok: 4
  }
};

let bonyolultTomb = [{kulcs: 'ertek'}, 2, 3.4, 'sztring', true];

let matrix = [[1,2,3], [4,5,6], [7,8,9]];
console.log('matrix', matrix);


console.log('itt nyertuk vissza a hess erteket', hess['kulcs2']['kulcsVagyokMegpedigSzamErtekkelBirok']);

console.log('itt nyertuk vissza a hess erteket esztetikusabbbbbbbb', hess.kulcs2.kulcsVagyokMegpedigSzamErtekkelBirok);



console.log(bonyolultTomb);
console.log(hess);







let egyszeruTomb = ['alma', 'korte', 'cseresznye', 'kaktusz'];
egyszeruTomb.push('szilva');
egyszeruTomb.splice(egyszeruTomb.length-1, 1, 'uborka');
console.log(egyszeruTomb.length);
console.log(egyszeruTomb);

console.log('===============');
let i = 0;
while(i <= 10) {
  console.log(i);
  i = i + 1;
}
console.log('===============');

i = 0;
do {
  console.log(i);
  i + 1;
} while(i <= 10);
console.log('===============');
for(i=0; i<=10; i=i+2) {
  console.log(i);
}

let tomb = ['alma', 'korte', 'barack'];
let i;

for(i = 0; i<=tomb.length-1; i++) {
  console.log(i);  
  console.log(tomb[i]);
  console.log('----');
}

function ezEgyFuggveny() {
  let a = 3;
  let b = 4;
  console.log(a, b);
  return a+b;
}
console.log(ezEgyFuggveny());

function osszeadas(a, b) {
  return a + b;
}


function ezEgyMetodus() {
  console.log('ez tortenik a metodusban');
}

ezEgyMetodus();
console.log(ezEgyMetodus());
*/

let osszeadas = (a, b) => {
  return a+b;
};

console.log(osszeadas(5,6));
