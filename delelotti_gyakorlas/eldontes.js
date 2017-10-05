'use strict';
//Írjunk programot, amely egy szabászat személyi nyilvántartása (személyiszámok) alapján eldönti, hogy dolgozik-e férfi ezen a munkahelyen!

const randomMinMax = require('./random');
let i;
let ertekTombSzemelyiSzam = [];

function dolgozikEFerfi(){    
    for (i = 0; i <= 10; i++){
        ertekTombSzemelyiSzam.push(randomMinMax(1,100));
    }
    let eredmenySzemelyiszam = 'x';
    for (i = 0; i <= ertekTombSzemelyiSzam.length-1; i++){
        if(ertekTombSzemelyiSzam[i] >= 20){
            return eredmenySzemelyiszam = 'Nem dolgozik férfi a szabászaton';
        }   else {
            return eredmenySzemelyiszam = 'Dolgozik férfi a szabászaton';
        }
    }
}
//szigoruan novekvo-e a sorozat

function szigoruanNovekvoE(){
    let ertekTomb2 = [];
    for (i = 0; i <= 10; i++){
        ertekTomb2.push(randomMinMax(1,100));
    }
    let eredmeny = 'x';
    for (i = 0; i <= ertekTomb2.length-1; i++){
        if(ertekTomb2[i] >= ertekTomb2[i+1]){
            return eredmeny = 'Nem növekszik szigorúan';
        }   else {
            eredmeny = 'Szigorúan növekszik';
        }
    }
}

//Hany mondat ez a Lorem Ipsum szoveg?
function mondatSzam(){
    let szoveg = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua! Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur? Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    let mondatSzamlalo = 0;
    for(i = 0; i<=szoveg.length-1; i++) {
        if(szoveg[i] == '?' || szoveg[i] == '.' || szoveg[i] == '!') {
            mondatSzamlalo++;
        }
    }
    if (mondatSzamlalo > 1) {
        return 'Több mondat';
    } else {
        return 'Egy mondat';
    }
}




//Van-e szabad hely a vonaton?
let vonatHelyek = 100;
let megvettJegyek = randomMinMax(1,100);
let uresHelyek = 0;

function vanEHely(){
    if (vonatHelyek > megvettJegyek) {
        uresHelyek = vonatHelyek - megvettJegyek;
        return 'Van még hely a Savaria expressen';
    } else {
        return 'Minden hely elkelt a Savaria expressre';
    }
}



module.exports = {
    dolgozikEFerfi: dolgozikEFerfi,
    szigoruanNovekvoE: szigoruanNovekvoE,
    mondatSzam: mondatSzam,
    vanEHely: vanEHely
}
