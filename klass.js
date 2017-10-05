'use strict';

class Person {

  constructor(name) {
    this.nameR = name;
    console.log('Nev:', name);
  }

  getName() {
    return this.nameR;
  }

}

let kati = new Person('Kati');
console.log(kati.nameR);

let pisti = new Person('Pisti');
console.log(pisti.nameR);