"use strict";

// let animal = {
//   eats: true
// };

// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true,
//     writable: true,
//     configurable: true
//   },

//   size: {
//     value: 14,
//     writable: true
//   }
// });

// console.log(rabbit.eats);
// console.log(rabbit);


// console.log(Object.getPrototypeOf(rabbit) === animal);
// Object.setPrototypeOf(rabbit, {});
// console.log(Object.getPrototypeOf(rabbit));

// let clone = Object.create({}, Object.getOwnPropertyDescriptors(rabbit));

// console.log(clone);

// let obj = Object.create(null);
// let obj = {};

// let key = prompt("Enter the key", "__proto__");
// obj[key] = null;

// console.log(obj[key]);
// obj[key] = 123;
// console.log(obj[key]);

// let dictionary = Object.create(null);

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// for (let key in dictionary) {
//   alert(key);
// }

// dictionary.toString = function() {
//   return Object.getOwnPropertyNames(this).join(",");
// }

// Object.defineProperty(dictionary, "toString", {
//   value: function() {
//     return Object.keys(this).join(",");
//   },
//   enumerable: false,
//   writable: true,
// });

// alert(dictionary);

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   console.log(this.name);
// }

// let rabbit = new Rabbit("Rabbit");

// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi(); // -> undefined
// rabbit.__proto__.sayHi();