"use strict";

class MyMap {
  constructor() {
    this._entries = {};
    this[Symbol.iterator] = function() {
      return {
        _index: 0,
        _entries: this._entries,
        [Symbol.iterator]() {
          return this
        },
        next() {
          let entry = this._entries[this._index];
          if (entry !== undefined) {
            this[this._index] = entry;
            this._index += 1;
            return {done: false, value: [entry.key, entry.value]};
          } else {
            return {done: true};
          }
        }
      }
    }
    this.size = 0;
  }
  set(key, value) {
    this._entries[this.size] = {key, value};
    this.size += 1;
  }
  get(key) {
    for(let i = 0; i < this.size; i++) {
      let entry = this._entries[i];
      if (entry.key === key) {
        return entry.value;
      }
    }
    return undefined;
  }
  has(key) {
    if (this.get(key) !== undefined) {
      return true;
    } else {
      return false;
    }
  }
  delete(key) {
    for (let i = 0; i < this.size; i++) {
      let entry = this._entries[i];
      if (entry.key === key) {
        delete this._entries[i];
      } else {
        this._entries[i - 1] = this._entries[i];
      }
    }
    this.size -= 1;
    delete this._entries[this.size];
  }
  clear() {
    this.entries = {};
    this.size = 0;
  }
  entries() {
    return this[Symbol.iterator]();
  }
  values() {
    const res = {
      [Symbol.iterator]() {
        return {
          _index: 0,
          next() {
            let value = res[this._index];
            if (value !== undefined) {
              this._index += 1;
              return {done: false, value};
            } else {
              return {done: true};
            }
          }
        }
      }
    };
    for (let i = 0; i < this.size; i++) {
      res[i] = this._entries[i].value;
    }
    return res;
  }
  keys() {
    const res = {
      [Symbol.iterator]() {
        return {
          _index: 0,
          next() {
            let key = res[this._index];
            if (key !== undefined) {
              this._index += 1;
              return {done: false, value: key};
            } else {
              return {done: true};
            }
          }
        }
      }
    };
    for (let i = 0; i < this.size; i++) {
      res[i] = this._entries[i].key;
    }
    return res;
  }
  forEach(callBackFunc, thisArg) {
    for (let i = 0; i < this.size; i++) {
      callBackFunc.call(thisArg, this._entries[i], i, this._entries);
    }
  }
}