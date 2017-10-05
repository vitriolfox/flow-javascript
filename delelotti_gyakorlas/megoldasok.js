'use strict';
console.log('=================Random szám min(1) és max(100) között====================');
const randomMinMax = require('./random');
console.log(randomMinMax(1,100));
console.log('=========================Eldöntés tétele==================================');
const eldontes = require('./eldontes');
console.log(eldontes.dolgozikEFerfi());
console.log(eldontes.szigoruanNovekvoE());
console.log(eldontes.mondatSzam());
console.log(eldontes.vanEHely());
console.log('========================Kiválasztás tétele================================');
const kivalasztas = require('./kivalasztas');
console.log(kivalasztas.elsoNo());
console.log(kivalasztas.vizsgaPontosFeladat());
console.log('=========================Összegzés tétele=================================');
const osszegzes = require('./osszegzes');
console.log(osszegzes.atlagSzamitas());
console.log(osszegzes.negyzetOsszegSzorzat());


