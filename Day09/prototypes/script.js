let str = "Nishant"; // proto : 3 level from null
let num = 786; // proto : 3 level from null
let bool = true; // proto : 3 level from null
let arr = [1, 2, 4, 8]; // proto : 3 level from null
let obj = { a: 7, b: "hello" }; // proto : 2 level from null
let fun = function () {
  // proto : 3 level from null
  console.log("yay!");
};

// if x and y are not primitive
// x == y : true <-- what does that mean ?
//this means they are reference to the same object in memory

console.log("typeof String: ", typeof String);
console.log("typeof Boolean: ", typeof Boolean);
console.log("typeof Number: ", typeof Number);
console.log("typeof Array: ", typeof Array);
console.log("typeof Object: ", typeof Object);
console.log("typeof Function: ", typeof Function);

console.log(str.__proto__.__proto__ == obj.__proto__);
console.log(num.__proto__.__proto__ == obj.__proto__);
console.log(bool.__proto__.__proto__ == obj.__proto__);
console.log(arr.__proto__.__proto__ == obj.__proto__);
console.log(fun.__proto__.__proto__ == obj.__proto__);

// Everything indirectly inherits from the same thing
// that obj is inherited  from
// i.e. in Javascript, everything is essentially an Object

console.log("======== PROTOTYPES ========");
console.log(obj.__proto__ == Object.prototype);
console.log(str.__proto__ == String.prototype);
console.log(num.__proto__ == Number.prototype);
console.log(bool.__proto__ == Boolean.prototype);
console.log(arr.__proto__ == Array.prototype);
console.log(fun.__proto__ == Function.prototype);

// String.prototype inherits from Object.prototype

console.log(bool.__proto__ == Boolean.prototype); //true
console.log(typeof Object.create(Boolean.prototype)); // : object

let x = Object.create(Boolean.prototype);
console.log(x.__proto__ == bool.__proto__); //true

//But
console.log(typeof x == typeof bool); //false

//conclusion: 2 items can have same proto but their typeof will not be same

// prototypes are the blueprits from which we create objects
// we achieve OOPs behaviour using prototypes, unlike in Java, we achieve this using "classes"

// __proto__ is a hidden pointer inside every object, which points to the blueprint/model from which it was created

console.log(str.charAt(4));
console.log(typeof str.charAt); //function
console.log(typeof str.charAt(4)); //string
let str2 = "dragon";
console.log(str.charAt == str2.charAt); //true

str.charAt = function () {
  //this won't override charAt function
  return "X";
};

String.prototype.charAt = function () {
  //this will override charAt function
  return "X";
};

console.log(str.charAt(1));

// String.prototype contains all the default string functions
// like charAt, indexOf, substring, slice etc

Array.prototype.joinOriginal = Array.prototype.join;

Array.prototype.join = function () {
  console.log("join called on", this);
  return this.joinOriginal(...arguments);
};
