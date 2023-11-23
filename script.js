"use strict";

// let user = {
//   name: "John",
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// console.log(descriptor);
// console.log(JSON.stringify(descriptor, null, 2));

// let user = {
  // name: "Lofanbl4"
// };
// Object.defineProperty(user, "name", {
//   value: "lofanbl4",
// });
// Object.defineProperty(user, "name", {
//   value: "Lofanlb4",
//   enumerable: true,
//   configurable: true
// });

// console.log(Object.getOwnPropertyDescriptor(user, "name"));

// user.name = "Pete";

// let user = {
//   name: "lofanbl4",
//   toString() {
//     return this.name;
//   }
// };

// Object.defineProperty(user, "toString", {
//   enumerable: false
// })

// for (let key in user) console.log(key);
// console.log(Object.keys(user));
// Object.defineProperty(user, "name", {
//   value: "Lofanbl4",
//   writable: true,
// });

// console.log(Object.getOwnPropertyDescriptor(user, "name"));

// Object.defineProperty(user, "name", {
//   writable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(user, "name"))
// console.log(user);

// let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// let user = {};
// Object.defineProperties(user, {
//   name: {value: "Lofanbl4", writable: false, enumerable: true},
//   age: {value: 18, writable: true, enumerable: true}
// });

// console.log(user);
// console.log(Object.getOwnPropertyDescriptors(user));

// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
// console.log(Object.getOwnPropertyDescriptors(clone));

// let assignClone = Object.assign({}, user);
// console.log(Object.getOwnPropertyDescriptors(assignClone));

