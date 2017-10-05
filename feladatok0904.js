'use strict';

//Határozzuk meg N darab szám átlagát!
function randomMinMax(min, max){
    return Math.floor((Math.random()) * (max-min+1) + min);
}
/*
let atlagSzamitosTomb = [];
let i;
let szamitosTombOsszeg = 0;
let atlag = 0;

for (i = 0; i < 10; i++){
    atlagSzamitosTomb.push(randomMinMax(0, 100));
}

for (let j = 0; j < atlagSzamitosTomb.length; j++){
    szamitosTombOsszeg = atlagSzamitosTomb[j] + szamitosTombOsszeg;
}

atlag = szamitosTombOsszeg / atlagSzamitosTomb.length;

console.log(atlagSzamitosTomb);
console.log(szamitosTombOsszeg);
console.log(atlag); */

//Határozzuk meg K darab egész szám négyzetének összegét, és szorzatát!
/* let alapTomb = [];
let i;
let negyzetTomb = [];
let osszeg = 0;
let szorzat = 1;

for (i = 0; i < 10; i++){
    alapTomb.push(randomMinMax(0, 10));
}

for (let j = 0; j < alapTomb.length; j++){
    negyzetTomb.push(alapTomb[j]*alapTomb[j]);
}

for (let h = 0; h < negyzetTomb.length; h++){
    osszeg += negyzetTomb[h];
    szorzat = negyzetTomb[h] * szorzat;

}

console.log('alap', alapTomb);
console.log('negyzet', negyzetTomb);
console.log('osszeg', osszeg);
console.log('szorzat', szorzat); */

//Írjunk programot, amely egy osztály nyilvántartásából megállapítja, hogy van-e évvesztes az osztályban!

let nyilvantartas = {
    { Pistike: '1992-02-10'},
    { Marika: '1992-08-19'},
    { Gézuka: '1992-05-28'}
}

