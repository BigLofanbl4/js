"use strict";

// function arrayToList(arr) {
//   let list = {};
//   let arrCopy = arr.slice();
//   for (let elem of arrCopy) {
//     list.val = elem;
//     arrCopy.shift();
//     if (arrCopy.length == 0) {
//       list.next = null;
//       return list;
//     } else {
//       list.next = {};
//       list.next = arrayToList(arrCopy);
//       return list;
//     }
//   }
//   return list;
// }

// function arrayToList(arr) {
//   let list = null;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     list = {val: arr[i], next: list};
//   }
//   return list;
// }

// let list = arrayToList([1, 6, 3]);
// console.log(list);

//Recursion
// function listToArray(list) {
//   const array = [];
//   function readList(list) {
//     if (list) {
//       array.push(list.val);
//       readList(list.next);
//     }
//   }
//   readList(list);
//   return array;
// }

// Cycle
// function listToArray(list) {
//   let tmp = list;
//   const array = [];
//   while (tmp) {
//     array.push(tmp.val);
//     tmp = tmp.next;
//   }
//   return array;
// }

// console.log(listToArray(list));

// function prepend(list, elem) {
//   return {val: elem, next: list};
// }

// list = prepend(list, 0);
// console.log(list);


// // Cycle
// function nth(list, elem) {
//   let pos = 0;
//   let tmp = list;
//   while (tmp) {
//     if (elem == tmp.val) {
//       return pos;
//     } else {
//       pos++;
//       tmp = tmp.next;
//     }
//   }
// }

// Recursion
// function nth(list, elem) {
//   if (list == null) return;
//   let pos = 0;
//   if (list && list.val == elem) {
//     return pos;
//   } else {
//     pos++;
//     let a = nth(list.next, elem);
//     if (a) {
//       pos += a;
//     } else {
//       return;
//     }
//   }
//   return pos;
// }

// console.log(nth(list, 2));

// function deepEqual(obj1, obj2) {
  
//   if (obj1 === obj2) {
//     return true;
//   } 

//   if (obj1 === null || obj2 === null) {
//     return false;
//   }

//   if (typeof(obj1) == "object" && typeof(obj2) == "object") {
//     for (let prop in obj1) {
//       if (typeof obj1[prop] == "object" && typeof obj2[prop] == "object") {
//         return deepEqual(obj1[prop], obj2[prop])
//       } else if (obj1[prop] != obj2[prop]) {
//         return false;
//       }
//     }

//     for (let prop in obj2) {
//       if (typeof obj1[prop] == "object" && typeof obj2[prop] == "object") {
//         return deepEqual(obj1[prop], obj2[prop])
//       } else if (obj1[prop] != obj2[prop]) {
//         return false;
//       }
//     }
//   } 

//   return true;
// }

// function deepEqual(a, b) {
//   if (a === b) return true;

//   if (a === null || typeof a != "object" ||
//       b === null || typeof b != "object") return false;
  
//   let keyA = Object.keys(a), keyB = Object.keys(b);

//   if (keyA.length != keyB.length) return false;

//   for (let key of keyA) {
//     if (!keyB.includes(key) || !deepEqual(a[key], b[key])) return false;
//   }

//   return true;
// }

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
repeat(10, (i) => {
  labels.push(`Block ${i + 1}`);
});
console.log(labels);