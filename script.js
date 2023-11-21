"use strict";

// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`${this.type} rabbit says: "${line}"`);
//   }
// }

// Rabbit.prototype.toString = function() {
//   console.log(`${this.type} rabbit`);
// }

// let blackRabbit = new Rabbit("Black");
// console.log(String(blackRabbit));

// let sym = Symbol("name");
// console.log(sym == Symbol("name"));
// Rabbit.prototype[sym] = 55;
// console.log();

// const toStringSym = Symbol("toString");
// Array.prototype[toStringSym] = function() {
//   return `${this.length} cm`;
// }

// console.log([1, 2].toString());
// console.log([1, 2][toStringSym]());

// let stringObject = {
//   [Symbol.for("toString")]() {
//     return "Lofanbl4 the best";
//   }
// };

// console.log(stringObject[Symbol.for("toString")]());

// let okIterator = "OK"[Symbol.iterator]();
// console.log(okIterator.next());
// // console.log(okIterator.next());
// // console.log(okIterator.next());

// for (let char of okIterator) {
//   console.log(char);
// }

// class Matrix {
//   constructor(width, height, element = (x, y) => undefined) {
//     this.width = width;
//     this.height = height;
//     this.content = [];

//     for (let y = 0; y < height; y++) {
//       for (let x = 0; x < width; x++) {
//         this.content[y * width + x] = element(x, y);
//       }
//     }
//   }
//   get(x, y) {
//     return this.content[y * this.width + x];
//   }
//   set(x, y, value) {
//     this.content[y * this.width + x] = value;
//   }
//   [Symbol.iterator]() {
//     return new MatrixIterator(this);
//   }
// }

// class MatrixIterator {
//   constructor(matrix) {
//     this.x = 0;
//     this.y = 0;
//     this.matrix = matrix;
//   }
//   next() {
//     if (this.y == this.matrix.height) return {done: true};

//     let value = {
//       x: this.x,
//       y: this.y,
//       value: this.matrix.get(this.x, this.y)
//     };

//     this.x += 1;
//     if (this.x == this.matrix.width) {
//       this.y += 1;
//       this.x = 0;
//     }
//     return {value, done: false};
//   }
// }

// // Matrix.prototype[Symbol.iterator] = function() {
// //   return new MatrixIterator(this);
// // }

// let matrix = new Matrix(2, 2, (x, y) => `value of ${x},${y}`);
// for (let {x, y, value} of matrix) {
//   console.log(x, y, value);
// }

// let varyingSize = {
//   get size() {
//     return Math.floor(Math.random() * 100);
//   }
// };

// console.log(varyingSize.size);

// class Temperature {
//   constructor(celsius) {
//     this.celsius = celsius;
//   }
//   get fahrenheit() {
//     return this.celsius * 1.8 + 32;
//   }
//   set fahrenheit(value) {
//     this.celsius = (value - 32) / 1.8;
//   }
//   static fromFarenheit(value) {
//     return new Temperature((value - 32) / 1.8);
//   }
// }

// let temp = new Temperature(30);
// console.log(temp);
// console.log(temp.fahrenheit);
// temp.fahrenheit = 100;
// console.log(temp.fahrenheit);

// let temp = Temperature.fromFarenheit(100);
// console.log(temp);

// class Matrix {
//   constructor(width, height, element = (x, y) => undefined) {
//     this.width = width;
//     this.height = height;
//     this.content = [];

//     for (let y = 0; y < height; y++) {
//       for (let x = 0; x < width; x++) {
//         this.content[y * width + x] = element(x, y);
//       }
//     }
//   }
//   get(x, y) {
//     return this.content[y * this.width + x];
//   }
//   set(x, y, value) {
//     this.content[y * this.width + x] = value;
//   }
//   [Symbol.iterator]() {
//     return new MatrixIterator(this);
//   }
// }

// class MatrixIterator {
//   constructor(matrix) {
//     this.x = 0;
//     this.y = 0;
//     this.matrix = matrix;
//   }
//   next() {
//     if (this.y == this.matrix.height) return {done: true};

//     let value = {
//       x: this.x,
//       y: this.y,
//       value: this.matrix.get(this.x, this.y)
//     };

//     this.x += 1;
//     if (this.x == this.matrix.width) {
//       this.y += 1;
//       this.x = 0;
//     }
//     return {value, done: false};
//   }
// }

// class SymmetricMatrix extends Matrix {
//   constructor(size, element = (x, y) => undefined) {
//     super(size, size, (x, y) => {
//       if (x < y) return element(y, x);
//       else return element(x, y);
//     });
//   }

//   set(x, y, value) {
//     super.set(x, y, value);
//     if (x != y) {
//       super.set(y, x, value);
//     }
//   }
// }

// let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
// // console.log(Object.getPrototypeOf(matrix));

// console.log(matrix instanceof SymmetricMatrix);
// console.log(matrix instanceof Matrix);
// console.log(SymmetricMatrix instanceof Matrix);