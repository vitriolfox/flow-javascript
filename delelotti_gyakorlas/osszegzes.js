'use strict';

const randomMinMax = require('./random');

//Határozzuk meg N darab szám átlagát!
let atlagSzamitosTomb = [];
let i;
let szamitosTombOsszeg = 0;
let atlag = 0;

function atlagSzamitas(){
    for (i = 0; i < 10; i++){
        atlagSzamitosTomb.push(randomMinMax(0, 100));
    }
    for (let j = 0; j < atlagSzamitosTomb.length; j++){
        szamitosTombOsszeg = atlagSzamitosTomb[j] + szamitosTombOsszeg;
    }
    atlag = szamitosTombOsszeg / atlagSzamitosTomb.length;
    return atlag;
}

//Határozzuk meg K darab egész szám négyzetének összegét, és szorzatát!
let alapTomb = [];
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

function negyzetOsszegSzorzat(){
    return 'Négyzetek összege: ' + osszeg + ', Négyzetek szorzata: ' + szorzat + '.';
}

module.exports = {
    atlagSzamitas: atlagSzamitas,
    negyzetOsszegSzorzat: negyzetOsszegSzorzat
};