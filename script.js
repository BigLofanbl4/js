"use strict";

let arr = new Array(1, 2, 3);
console.log(arr.__proto__);

class MyArray {
  constructor() {
    this.length = arguments.length;
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    this[Symbol.iterator] = function() {
      return {
        self: this,
        index: 0,
        next() {
          if (this.self.hasOwnProperty(this.index)) {
            return {done: false, value: this.self[this.index++]};
          } else {
            return {done: true};
          }
        }
      }
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

let myArr = new MyArray(1, 2, 3);
