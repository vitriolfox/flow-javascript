'use strict';

let a = 5;
let b = 8;
let c = 10;

let x1 = ((a+b)>c) && ((c-a)==b);
let x2 = ((a-b)-(c/c*365)>c) === (((c+a)*2)==b);
let x3 = ((b-a)==c) < ((c/a)<b);
let x4 = ((b-a)>c) <= (((c*3-b)/15)<1000);
let x5 = ((c*2)==(a*4)) == (((c-a)*(b/4))==c);
let x6 = ((c)>c) || ((c-a)&&b);
let x7 = ((a+b+b+b+b/c)==c) != (c-a*a+b)>b;
let x8 = ((c+c)==c) === ('Károly');
let x9 = (!(a+b+c)>c) !== ((c-a)<=b);
let x10 = ((b+b)>!c) > ((a+b)-c)>b;
let x11 = ((a+b)&&c) || ((!c-a)>=b);

/* x1 */
console.log(x1);

let eredmeny;

if (x1) {
    eredmeny = 'x1 igaz';
} else {
    eredmeny = 'x1 hamis';
}
console.log('Eredmeny: ', eredmeny);

/* x2 */
console.log(x2);

if (x2) {
    eredmeny = 'x2 igaz';
} else {
    eredmeny = 'x2 hamis';
}

console.log('Eredmeny: ', eredmeny);


/* x3 */
console.log(x3);


if (x3) {
    eredmeny = 'x3 igaz';
} else {
    eredmeny = 'x3 hamis';
}

console.log('Eredmeny: ', eredmeny);


/* x4 */
console.log(x4);


if (x4) {
    eredmeny = 'x4 igaz';
} else {
    eredmeny = 'x4 hamis';
}

console.log('Eredmeny: ', eredmeny);


/* x5 */
console.log(x5);


if (x5) {
    eredmeny = 'x5 igaz';
} else {
    eredmeny = 'x5 hamis';
}

console.log('Eredmeny: ', eredmeny);


/* x6 */
console.log(x6);


if (x6) {
    eredmeny = 'x6 igaz';
} else {
    eredmeny = 'x6 hamis';
}

console.log('Eredmeny: ', eredmeny);


/* x7 */
console.log(x7);


if (x7) {
    eredmeny = 'x7 igaz';
} else {
    eredmeny = 'x7 hamis';
}

console.log('Eredmeny: ', eredmeny);


/* x8 */
console.log(x8);


if (x8) {
    eredmeny = 'x8 igaz';
} else {
    eredmeny = 'x8 hamis';
}

console.log('Eredmeny: ', eredmeny);


/* x9 */
console.log(x9);


if (x9) {
    eredmeny = 'x9 igaz';
} else {
    eredmeny = 'x9 hamis';
}

console.log('Eredmeny: ', eredmeny);


/* x10 */
console.log(x10);


if (x10) {
    eredmeny = 'x10 igaz';
} else {
    eredmeny = 'x10 hamis';
}

console.log('Eredmeny: ', eredmeny);

/* x11 */
console.log(x11);

if (x11) {
    eredmeny = 'x11 igaz';
} else {
    eredmeny = 'x11 hamis';
}

console.log('Eredmeny: ', eredmeny);