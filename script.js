"use strict";

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`${this.type} rabbit says: "${line}"`);
  }
}

Rabbit.prototype.toString = function() {
  console.log(`${this.type} rabbit`);
}

let blackRabbit = new Rabbit("Black");
console.log(String(blackRabbit));