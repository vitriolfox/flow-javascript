'use strict';
/**
 * almostPerfectLabyrinth
 */

/**
 * Adott a switchLabyrinth megoldása
 * 
 * 01. Ábrázold a lépéseidet egy steps nevű tömbben.
 */
let steps = ['right','down','right','down','down','down','down','up','up','up','left'];

/* let steps = 'down'; */

/**
 * 02. Definiálj egy x és egy y változót 0 értékkel.
 **/
let x = 0;
let y = 0;
/* console.log('initial coordinate: x-',x,', y-',y);
console.log('--------------------------------------------------------------------------declaring coordinates'); */
/**
 * 03. Hozz létre egy hash-t possibleResults néven, aminek a kulcsai a számok, 
 *     az értéke pedig egy újabb hash, melynek két kulcsa van, 
 *     "en" és "hu", értékeik pedig a számok angolul és magyarul szövegesen. 
 */
let possibleResults = {
    0:  {hu:'nulla',        en:'zero'},
    1:  {hu:'egy',          en:'one'},
    2:  {hu:'kettő',        en:'two'},
    3:  {hu:'három',        en:'three'},
    4:  {hu:'négy',         en:'four'},
    5:  {hu:'öt',           en:'five'},
    6:  {hu:'hat',          en:'six'},
    7:  {hu:'hét',          en:'nyolc'},
    9:  {hu:'kilenc',       en:'nine'},
    10: {hu:'tíz',          en:'ten'},
    11: {hu:'tizenegy',     en:'eleven'},
    12: {hu:'tizenkettő',   en:'twelve'},
    13: {hu:'tizenhárom',   en:'thirteen'},
    14: {hu:'tizennégy',    en:'fourteen'},
    15: {hu:'tizenöt',      en:'fifteen'}
}
/**
 * 04. Definiálj egy result és egy formattedResult változót érték nélkül.
 */
let result;
let formattedResult;
/**
 * 05. Hozz létre egy matrixot matrix néven, mely a következőt ábrázolja:
 * 
 * | 0| 1| 2| 3|
 * | 4| 5| 6| 7|
 * | 8| 9|10|11|
 * |12|13|14|15|
 * 
 * A zérus a bal felső sarok legyen, az a 0,0 -s koordináta.
 * Ügyelj rá, először az X-et, majd az Y-t hívjuk: matrix[x][y].
 **/
 
let matrix = [[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]];
/*
console.log('value of result: ', result);
console.log('----------------------------------------------------------------------------initiating matrix'); */

/**

 * 06. Hozz létre egy függvényt, getResult néven.
 *     A függvény visszatérési értéke az adott koorinátán lévő szám kell hogy legyen.
 *     Figyelem! Ha érvénytelen X koordinátát adsz meg, undefined lesz az eredménye!
 *     Ezért kell egy IF, ami megállapítja, object-e a típusa a matrix[x] -nek.
 *     Ha nem, akkor a visszatérési értéknek "X" -nek kell lennie.
 *     Ha az Y-on van undefined, szintén "X" legyen a visszatérési érték.
 **/

function getResult() {
    if ((typeof matrix[x]) !== 'object'){
        return result = 'X';
    } else if ((typeof matrix[y]) !== 'object'){
        return result = 'X';
    } else {
        return result = matrix[x][y];
    }
}
/* 
getResult();
console.log('coordinates after object inspection: x-', x, ', y-', y);
console.log('coordinates pointing to matrix field:', matrix[x][y]);
console.log('value of result: ', result);
console.log('-----------------------------------------------------------inspecting object, result=matrixxy'); */

/**
 * 07. Írj metódust processStep néven, ami megváltoztatja a koordinátákat a lépés szerint.
 *     Bemeneti argumentuma a step, ami egy konkrét lépést kap majd értéknek.
 *     Ehhez kiváló egy switch, ami a step értéke alapján
 *     ad hozzá vagy vesz el az x vagy az y értékéből.
 */


function processStep(steps){
    switch (steps){
        case 'up':   
            x;
            y--;
        break;
        case 'down':
           x;
           y++;
        break;
        case 'left':
           x--;
           y;
        break;
        case 'right':
           x++;
           y;
    }
}
/* processStep();
console.log('coordinates after Step modification: x-', x, ', y-', y);
console.log('coordinates pointing to matrix field:', matrix[x][y]);
console.log('value of result: ', result);
console.log('------------------------------------------------------------------------modifying coordinates'); */
/**
 * 08. Definiálj egy resultFormatter metódust,
 *     ami abban az esetben, ha a result X akkor X-et ír ki,
 *     máskülönben a possibleResults hash-ből kinyerve a következő formát, pl:
 *     1-egy-one
 */

function resultFormatter() {
    if ( result == 'X'){
        return 'X';
    } else {
        console.log(result+'-'+possibleResults[result]['hu']+'-'+possibleResults[result]['en']);
    }
}
/* resultFormatter();
console.log('coordinates after Step modification: x-', x, ', y-', y);
console.log('coordinates pointing to matrix field:', matrix[x][y]);
console.log('value of result: ', result);
console.log('resultFormatter: ', resultFormatter());
console.log('----------------------------------------------------------formatting result from possibleResults'); */
/**
 * 09. Definiálj egy processSteps metódust, ami végigmegy a steps tömbön
 *     egy FOR ciklus segítségével. A ciklusmagban a steps i. elemével
 *     hívd meg a processStep() -et, majd a result-ba töltsd be a getResult()
 *     eredményét, ez után pedig a formattedResult-ba a resultFormatter eredményét.
 *     Végül console.log-old ki a formattedResult -ot.
 */

function processSteps(){
    let i = 0;
    for (i = 0; i <= steps.length-1; i ++){
        processStep(steps[i]);
    }
    result = getResult();
    return (resultFormatter());
}
processSteps();
/**
 * 10. Hívd meg a processSteps függvényt.
 * 
 * Jó munkát!
 * 
 * u.i.: rajzoljatok mint az ősember a barlang falára!
 */