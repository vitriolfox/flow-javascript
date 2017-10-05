'use strict';
/**
 * Adott a következő táblázat:
 * 
 * |0|1|2|
 * |3|4|5|
 * |6|7|8|
 * 
 * Írjatok programot, ami a '4' pontról 2 lépést tesz és megmondja, melyik számon áll.
 * Írja ki számmal és betűvel is.
 * Egy lépés értékkészlete a következő lehet: up, down, left, right.
 * Ha olyan pontot érünk, ami a táblázaton kívül esik, írjon ki a program X-et.
 * A feladatot a switch statement segítségével oldjátok meg.
 * Ha tudnátok se használjatok máshol tanult megoldásokat.
 * Javaslom, hogy előbb rajzoljatok papíron. Pont mint az ősember.
 * Továbbá egy tipp: Kommentben írhattok a switch-ek fölé megjegyzést magatoknak.
 * Jó munkát!
 */

let step01 = 'right';
let step02 = 'up';
let number0 = 0;
let number1 = 1;
let number2 = 2;
let number3 = 3;
let number4 = 4;
let number5 = 5;
let number6 = 6;
let number7 = 7;
let number8 = 8;


let texturalNumber0 = 'ez a nullás mező';
let texturalNumber1 = 'ez az egyes mező';
let texturalNumber2 = 'ez a kettes mező';
let texturalNumber3 = 'ez a hármas mező';
let texturalNumber4 = 'ez a négyes mező';
let texturalNumber5 = 'ez az ötös mező';
let texturalNumber6 = 'ez a hatos mező';
let texturalNumber7 = 'ez a hetes mező';
let texturalNumber8 = 'ez a nyolcas mező';
let texturalNumberX = 'X';

// MAGIC HELYE

switch(step01) {
    case 'up':
        switch (step02){
            case 'up':
                console.log(texturalNumberX);
            break;
            case 'down':
                console.log(number4, texturalNumber4);
            break;
            case 'left':
                console.log(number0, texturalNumber0);
            break;
            case 'right':
            console.log(number2, texturalNumber2);
            break;
        }
        break;
    case 'down':
        switch (step02){
            case 'up':
                console.log(number4, texturalNumber4);
            break;
            case 'down':
                console.log(texturalNumberX);
            break;
            case 'left':
                console.log(number6, texturalNumber6);
            break;
            case 'right':
            console.log(number8, texturalNumber8);
            break;
        }
        break;
        case 'left':
        switch (step02){
            case 'up':
                console.log(number0, texturalNumber0);
            break;
            case 'down':
                console.log(number6, texturalNumber6);
            break;
            case 'left':
                console.log(texturalNumberX);
            break;
            case 'right':
            console.log(number4, texturalNumber4);
            break;
        }
        break;
        case 'right':
        switch (step02){
            case 'up':
                console.log(number2, texturalNumber2);
            break;
            case 'down':
                console.log(number8, texturalNumber8);
            break;
            case 'left':
                console.log(number4, texturalNumber4);
            break;
            case 'right':
            console.log(texturalNumberX);
            break;
        }
}

