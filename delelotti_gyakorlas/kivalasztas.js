'use strict';

const randomMinMax = require('./random');

/* Hölgyek és urak számára párkereső estet szerveznek. Ismerjük a meghívottak névsorát, és nemét,
érkezési idő szerint rendezve. Állapítsuk meg, melyik hölgy érkezett elsőként.*/

let meghivottNevsor = [
    {név: 'Géza', nem: 'férfi'}, 
    {név: 'Kunigunda', nem: 'nő'} , 
    {név: 'Kálmán', nem: 'férfi'}, 
    {név: 'Brünnhilda', nem: 'nő'}
];
let i = 0;
function elsoNo(){
    while(i < meghivottNevsor.length && meghivottNevsor[i].nem !== 'nő') {
        i++;
    }
    if (i < meghivottNevsor.length){
        return 'Elsőként ' + meghivottNevsor[i].név + ' érkezett.';
    } else {
        return 'Nem érkezett hölgy, ez egy érdekes este lesz.';
    }
}

let vizsgaPontok = [10, 2, 3, 10, 7, 7, 5];
let egyezes = 'x';
function vizsgaPontosFeladat(){
    for( i = 0; i < vizsgaPontok.length; i++){
        if (vizsgaPontok[i-1] === vizsgaPontok[i]){
            egyezes = i-1 + '.' + ' és ' + i + '. sorszámú vizsgázók pontszáma egyezik'; 
            break;
        } else {
            egyezes = 'Nincs egyezés a szomszédos pontszámok között.';
        }
    }
    return egyezes;
}


module.exports = {
    elsoNo: elsoNo,
    vizsgaPontosFeladat: vizsgaPontosFeladat
}
