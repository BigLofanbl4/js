"use strict";

let arr = new Array(1, 2, 3);
console.log(arr.__proto__);

class MyArray {
  constructor() {
    Object.defineProperty(this, "length", {
      value: arguments.length,
      writable: true
    });
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }
  pop() {
    let removedElem = this[this.length - 1];
    delete this[this.length - 1];
    this.length = this.length !== 0 ? this.length - 1 : this.length;
    return removedElem;
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length += 1;
    }
    return this.length;
  }
  includes(searchElem, fromIndex) {
    let index = isNaN(fromIndex) ? 0 : fromIndex;
    for (index; index < this.length; index++) {
      if (this[index] === searchElem) return true;
    }
    return false;
  }
  reduce(callBackFunc, initialVal) {
    let prev = initialVal !== undefined ? initialVal : this[0];
    let index = initialVal !== undefined ? 0 : 1;
    for (index; index < this.length; index++) {
      prev = callBackFunc(prev, this[index], index, this);
    }
    return prev;
  }
  map(callBackFunc, thisArg) {
    const resArr = new MyArray(...this);
    for (let i = 0; i < resArr.length; i++) {
      resArr[i] = callBackFunc.call(thisArg, resArr[i], i, resArr);
    }
    return resArr;
  }
}

class MyArrayIterator {
  constructor(array) {
    this.array = array;
    this.index = 0;
  }
  next() {
    if (this.array.hasOwnProperty(this.index)) {
      return {done: false, value: this.array[this.index++]};
    } else {
      return {done: true}
    }
  }
}

MyArray.prototype[Symbol.iterator] = function() {
  return new MyArrayIterator(this);
}

let myArr = new MyArray(1, 2, 3);
console.log(myArr);
for (let elem of myArr) {
  console.log(elem);
}
