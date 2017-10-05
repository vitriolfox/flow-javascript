'use strict'


//Random szám min és max között
function randomMinMax(min, max){
    return Math.floor((Math.random()) * (max-min+1) + min);
}
randomMinMax();

//Személyi számok alapján
/* let ertekTombSzemelyiSzam = [];
let i;
for (i = 0; i <= 10; i++){
    ertekTombSzemelyiSzam.push(randomMinMax());
}

console.log(ertekTombSzemelyiSzam);
let eredmenySzemelyiszam = 'x';

function dolgozikEFerfi(){
    let i;
    for (i = 0; i <= ertekTombSzemelyiSzam.length-1; i++){
        if(ertekTombSzemelyiSzam[i] >= 20){
            eredmenySzemelyiszam = 'Nem dolgozik férfi';
        }   else {
            return eredmenySzemelyiszam = 'Dolgozik férfi';
        }
    }
}
dolgozikEFerfi();
console.log(eredmenySzemelyiszam);
 */

//szigoruan novekvo-e a sorozat
/* let ertekTomb2 = [];
let i;
for (i = 0; i <= 10; i++){
    ertekTomb2.push(randomMinMax());
}

console.log(ertekTomb2);
let eredmeny = 'x';

function szigoruanNovekvoE(){
    for (i = 0; i <= ertekTomb2.length-1; i++){
        if(ertekTomb2[i] >= ertekTomb2[i+1]){
           return eredmeny = 'nem novekszik szigoruan';
        }   else {
            eredmeny = 'szigoruan novekszik';
        }
    }
}
szigoruanNovekvoE();
console.log(eredmeny); */

//Hany mondat ez a Lorem Ipsum szoveg?
/* let szoveg = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua! Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur? Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let mondatSzamlalo = 0;
let i;
for(i = 0; i<=szoveg.length-1; i++) {
    if(szoveg[i] == '?' || szoveg[i] == '.' || szoveg[i] == '!') {
      mondatSzamlalo++;
    }
  }
console.log(mondatSzamlalo);
 */


//Van-e szabad hely a vonaton?
/* let vonatHelyek = 100;
let megvettJegyek = randomMinMax();
let uresHelyek = 0;

console.log(vonatHelyek);
console.log(megvettJegyek);

function vanEHely(){
    if (vonatHelyek > megvettJegyek) {
        uresHelyek = vonatHelyek - megvettJegyek;
        return 'van még hely';
    } else {
        return 'minden hely elkelt';
    }
}
vanEHely();
console.log(uresHelyek, vanEHely());
 */
//Társkeresős feladat
/* let meghivottNevsor = [
    {név: 'Géza', nem: 'férfi'}, 
    {név: 'Kunigunda', nem: 'nő'} , 
    {név: 'Kálmán', nem: 'férfi'}, 
    {név: 'Brünnhilda', nem: 'nő'}
];

let i = 0;
while(i < meghivottNevsor.length && meghivottNevsor[i].nem !== 'nő') {
    i++;
}
if (i < meghivottNevsor.length){
    console.log('van', meghivottNevsor[i].név);
} else {
    console.log('nincs');
}
 */
//Nyelvvizsga puskázók

let vizsgaPontok = [10, 2, 3, 10, 7, 7, 5];
let i;
for( i = 0; i < vizsgaPontok.length; i++){
    if (vizsgaPontok[i-1] === vizsgaPontok[i]){
        console.log(i, i+1); 
    }
}

/* 


while (i < vizsgaPontok.lenght && vizsgaPontok[i] !== vizsgaPontok[i+1]){
    i++;
}
console.log(i);
if (i < vizsgaPontok.length){
    console.log('van', i);
} else {
    console.log('nincs');
} */
