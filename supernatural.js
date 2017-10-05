#! /usr/bin/env nodejs
'use strict';

/**
 * SUPERNATURAL GYAKORLÓFELADAT
 * 
 * Sam és Dean Winchester egy vámpírtanya kiírtására készülnek Missouri állambeli Green Ridge külvárosában.
 * Bobby információi szerint 12 vámpír tanyázik az elhagyott pajtában, ebből 3 nő, egy pedig alfa.
 * Egy hím vámpírt 4 ezüstgolyó terít le. A nőket fele ennyi. Az alfát viszont a háromszora a normálisnak.
 * Samnek 3 tára van táranként 8 golyóval, Dean felkészültebb, 4 darab 10 töltényes tárral érkezett hentelni.
 * A megbeszéltek szerint Castiel a segítségükre siet, ha kifogynak a munícióból. Castiel egy angyal,
 * szinte halhatatlan, de egy kis esélye, 3%-a minden általa elpusztított vámpír esetén van, hogy megsérül.
 */

/** 
 * A FELADAT
 * 
 * - Olvassátok el a segédletet. (a w3schools-osat mindenképp)
 * - Önálló munkában ismerkedjetek meg a ! (not) logikai operátort
 *   Ezt követően az osztás (/) és maradék képzés (%) aritmetikai operátorait próbáljátok ki.
 * - Vegyétek fel a számértékeket 1-1 beszédes nevű változóba.
 * - A kalkulálható számértékeket a változók felhasználásával
 *   és az alapvető aritmetikai operátorokkal (+,-,%,/) számoljátok ki és töltsétek újabb változókba.
 *   Aritmetikai műveleteket ahol csak lehet változókkal végezzetek!
 *   pl: let osszes tolteny = dean_toltenyei + sam_toltenyei
 * - A változók értékét szöveges formátumban írjátok ki console.log-gal.
 *   Több paraméter is megadható, amit egybefűz a log!
 * - A kérdésekre az IF statemant segítsével szövegesen válaszoljatok szintén a console.log felhasználásával.
 * - Azokat az ágakat is írjátok meg, amiről tudjátok, hogy nem fog lefutni.
 * - Használjatok egymásba ágyazott if-eket. Példa:
 **/

let x = true;
let y = false;
let allVampire = 12;
let fVampire = 3;
let alfaVampire = 1;
let mVampire = (allVampire - fVampire) - alfaVampire;
let mVampireBullets = 4;
let fVampireBullets = mVampireBullets / 2;
let alfaVampireBullets = mVampireBullets * 3;
let allVampireBullets = (fVampire * fVampireBullets) + (mVampire * mVampireBullets) + (alfaVampire * alfaVampireBullets);
let samMag = 3;
let samBulletsInMags = 8;
let samBullets = samMag * samBulletsInMags;
let deanMag = 4;
let deanBulletsInMags = 10;
let deanBullets = deanMag * deanBulletsInMags;
let samdeanAllBullets = samBullets + deanBullets;
let samBulletsAftermVampire = samBulletsInMags % mVampireBullets;
let deanBulletsAftermVampire = deanBulletsInMags % mVampireBullets;
let castielInjuryChanseOneVampire = 3;
let castielInjuryChanseAllVampire = castielInjuryChanseOneVampire * allVampire;
let deanWhiskeyHits = (deanBullets / 3) * 2;
let deanKills =  deanWhiskeyHits / 4;
let samKills =  samBullets / 4;
let allVampireBulletsOnlyMale = allVampire * 4;
let crowleyBullets = alfaVampireBullets * 5;
let episodesPerSeasons = 22;
let currentSeasonForTasi = 8;
let currentEpisodeForTasi = 18;
let dailyEpisodesForTasi = 5;
let weekendDailyEpisodesForTasi = 10;
let weeklyEpisodesForTasi = (dailyEpisodesForTasi * 5) + (weekendDailyEpisodesForTasi * 2);
let currentViewedEpisodesForTasi = (episodesPerSeasons * (currentSeasonForTasi - 1) + currentEpisodeForTasi);
let currentWeeksWachingSupernatural = currentViewedEpisodesForTasi / weeklyEpisodesForTasi;


if (x) {
  if(y) {
    console.log('x.1 ág');
  } else {
    console.log('x.2 ág');
  }
} else {
  console.log('y ág');
}
/**
 * KÉRDÉSEK
 * 
 * - Hány tölténye volt Deannek?
 * - Hány tölténye volt Samnek?
 * - Hány töltényük volt összesen?
 * - Hány töltény kell egy női vámpír kivégzéséhez?
 * - Hány töltény kell az alfához?
 * - Kinek volt több tölténye?
 * - Hány töltény szükséges az összes vámpír kivégzéséhez?
 * - Ha minden golyó betalál, Samnek hány tölténye marad az egy tárral maximálisan lelőhető vámpírok után?
 * - A kérdés ugyanez, csak Dean esetén
 * - Szükséges volt-e Castiel közbelépése?
 * - Mekkora esélye (%) volt Castielnek arra, hogy baja essen?
 * - Sam vagy Dean lőtt le több vámpírt, ha Deannek minden harmadik lövése félrement a sok wiskeytől?
 * - Ha Dean küldött a purgatóriumba több vámpírt, elérte-e a többlet a 10%-ot Dean-éhez képest?
 * - Ha megjelenik a csetepaté végén Crowley, a keresztúti démon, marad-e elég golyó a számára?
 *   5x annyi kell neki mint az alfának.
 * - Hány hete néz folyamatosan Supernatural-t Tasi, ha most tart az S8E18-nál
 *   és napi átlag 5 rész lecsúszik, de hétvégén 10 is.
 */

/**
 * SEGÉDLET
 * 
 * Operátorok: https://www.w3schools.com/js/js_operators.asp
 * Aritmetikai műveletek: https://www.w3schools.com/js/js_arithmetic.asp
 * If statement: https://www.w3schools.com/js/js_if_else.asp
 * Supernatural: http://www.imdb.com/title/tt0460681/
 */ 

 console.log('Dean bullets: ', deanBullets);
 console.log('Sam bullets: ', samBullets);
 console.log('All bullets: ', samdeanAllBullets);
 console.log('Killing a female vampire:', fVampireBullets, 'bullets');
 console.log('Killing an alfa vampire:', alfaVampireBullets, 'bullets');

 if (deanBullets > samBullets) {
  console.log('Dean has more bullets');
} else {
  console.log('Sam has more bullets');
}

console.log('Killing all vampires: ', allVampireBullets, 'bullets');
console.log('If only male vampires ', allVampireBulletsOnlyMale, 'bullets needed to kill all')
console.log('Bullets remaining by Sam: ', samBulletsAftermVampire, 'bullets');
console.log('Bullets remaining by Dean: ', deanBulletsAftermVampire, 'bullets');

if (samdeanAllBullets >= allVampireBulletsOnlyMale) {
  console.log('No need for Castiel');
} else {
  console.log('Castiel must help');
}

console.log('Castiels chance for injury: ', castielInjuryChanseAllVampire, '%');

if (deanKills > samKills) {
  if((deanKills % samKills) >= (samKills * 0.1) ) {
    console.log('Dean kills more than Sam at least with 10%');
  } else {
    console.log('Dean kills more than Sam, but not with at least 10%');
  }
} else {
  console.log('Sam kills more vampires');
}

if (samdeanAllBullets >= (allVampireBullets + crowleyBullets)) {
    console.log('Enough bullets for Crowley too.');
 } else {
    console.log('Call Castiel! No bullets to kill Crowley!');
  }

console.log('Tasi is watching Supernatural since', currentWeeksWachingSupernatural, 'weeks');





