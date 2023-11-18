"use strict";

// // function func(arr) {
// //   let sum = 0;
// //   let connected = new Set();
// //   for (let i = 0; i < arr.length; i++) {
// //     let dist = Infinity;
// //     let toBeConnected = null;
// //     connected.add(arr[i]);
// //     for (let j = 0; j < arr.length; j++) {
// //       if (j == i) continue;
// //       if (dist > Math.abs(arr[i] - arr[j])) {
// //         dist = Math.abs(arr[i] - arr[j]);
// //         toBeConnected = arr[j];
// //       }
// //     }
// //     if (!connected.has(toBeConnected)) {
// //       sum += dist;
// //     }
// //   }
// //   return sum;
// // }
// // console.log(func([3, 13, 12, 4, 14, 6]));
// // [3, 13, 12, 4, 14, 6] => [3, 4, 6, 12, 13, 14]

// // function moveZeros(arr) {
// //   // let arrCopy = arr.slice();
// //   // let length = arrCopy.length;
// //   // for (let i = 0; i < length; i++) {
// //   //   if (arrCopy[i] === 0) {
// //   //     arrCopy.splice(i, 1);
// //   //     arrCopy.push(0);
// //   //     i--;
// //   //     length--;
// //   //   }
// //   // }
// //   // return arrCopy;
// //   return arr.filter((elem) => elem !== 0).concat(arr.filter(elem => elem === 0));
// // }

// // console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));

// // [1,2,0,1,0,1,0,3,0,1] => [1,2,1,1,3,1,0,0,0,0]

// function order(words) {
//   // words = words.split(" ");
//   // let res = [];
//   // for (let i = 1; i < words.length + 1; i++) {
//   //   res.push(words.find(word => {
//   //     for (let char of word) {
//   //       if (char == i) return true;
//   //     }
//   //     return false;
//   //   }))
//   // }
//   // return res.join(" ");

// }

// console.log(order("is2 Thi1s T4est 3a"));