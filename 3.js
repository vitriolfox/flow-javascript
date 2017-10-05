'use strict';

/**
 * almostPerfectLabyrinth
 */

/**
 * Adott a switchLabyrinth megoldása
 * 
 * 01. Ábrázold a lépéseidet egy steps nevű tömbben.
 */

let steps = ['right', 'down'];

/**
 * 02. Definiálj egy x és egy y változót 0 értékkel.
 */

let x = 0;
let y = 0;

/**
 * 03. Hozz létre egy hash-t possibleResults néven, aminek a kulcsai a számok, 
 *     az értéke pedig egy újabb hash, melynek két kulcsa van, 
 *     "en" és "hu", értékeik pedig a számok angolul és magyarul szövegesen. 
 */

let possibleResults = {
  0:  { en: 'zero',     hu: 'nulla' },
  1:  { en: 'one',      hu: 'egy' },
  2:  { en: 'two',      hu: 'kettő' },
  3:  { en: 'three',    hu: 'három'},  
  4:  { en: 'four',     hu: 'négy' },
  5:  { en: 'five',     hu: 'öt' },  
  6:  { en: 'six',      hu: 'hat' },
  7:  { en: 'seven',    hu: 'hét' },
  8:  { en: 'eight',    hu: 'nyolc' },
  9:  { en: 'nine',     hu: 'kilenc'},
  10: { en: 'ten',      hu: 'tíz' },
  11: { en: 'eleven',   hu: 'tizenegy' },
  12: { en: 'twelve',   hu: 'tizenkettő' },
  13: { en: 'thirteen', hu: 'tizenhárom' },
  14: { en: 'fourteen', hu: 'tizennégy' },
  15: { en: 'fifteen',  hu: 'tizenöt' },
  hello: function () {
    console.log('hello')
    return 'hello'
  }
};

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
 */

let matrix = [[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15]];

/**

 * 06. Hozz létre egy függvényt, getResult néven.
 *     A függvény visszatérési értéke az adott koorinátán lévő szám kell hogy legyen.
 *     Figyelem! Ha érvénytelen X koordinátát adsz meg, undefined lesz az eredménye!
 *     Ezért kell egy IF, ami megállapítja, object-e a típusa a matrix[x] -nek.
 *     Ha nem, akkor a visszatérési értéknek "X" -nek kell lennie.
 *     Ha az Y-on van undefined, szintén "X" legyen a visszatérési érték.
 */

function getResult() {
  if(!(typeof matrix[x] == 'object')) return 'X';
  return matrix[x][y] || 'X';
}

/**
 * 07. Írj fuggvenyt processStep néven, ami megváltoztatja a koordinátákat a lépés szerint.
 *     Bemeneti parametere a step, ami egy konkrét lépést kap majd értéknek.
 *     Ehhez kiváló egy switch, ami a step értéke alapján
 *     ad hozzá vagy vesz el az x vagy az y értékéből.
 */

function processStep(step) {
  switch(step) {
  case 'up':
    x--;
    break;
  case 'down':
    x++;
    break;
  case 'left':
    y--;
    break;
  case 'right':
    y++;
    break;
  }
}

/**
 * 08. Definiálj egy resultFormatter fuggvenyt,
 *     ami abban az esetben, ha a result X akkor X-et ír ki,
 *     máskülönben a possibleResults hash-ből kinyerve a következő formát, pl:
 *     1-egy-one
 */
function resultFormatter() {
  if(result == 'X') return result;

  let textural = possibleResults[result];
  
  return result + '-' + textural.hu + '-' + textural.en;
}

/**
 * 09. Definiálj egy processSteps metódust, ami végigmegy a steps tömbön
 *     egy FOR ciklus segítségével. A ciklusmagban a steps i. elemével
 *     hívd meg a processStep() -et, majd a result-ba töltsd be a getResult()
 *     eredményét, ez után pedig a formattedResult-ba a resultFormatter eredményét.
 *     Végül console.log-old ki a formattedResult -ot.
 */
function processSteps() {
  for(let i = 0; i<steps.length; i++) {
    processStep(steps[i]);
  }      

  result = getResult();
  formattedResult = resultFormatter();        
  console.log(formattedResult);
} 
/**
 * 10. Hívd meg a processSteps függvényt.
 * 
 * Jó munkát!
 * 
 * u.i.: rajzoljatok mint az ősember a barlang falára!
 */
processSteps();
