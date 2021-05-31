let a = { p: 10, q: "Hello", r: false };

let b = Object.create(a);
let c = Object.create(b);

console.log(b.__proto__ == a); //true
console.log(c.__proto__ == a); //false
console.log(c.__proto__ == b); //true
console.log((c.__proto__.__proto__ = a)); //true

console.log(a.isPrototypeOf(b)); //true
console.log(a.isPrototypeOf(c)); //true

let d = { k: 10 };
console.log(a.isPrototypeOf(d)); //false

console.log(b.__proto__.p++); //the value of p inside a is 11

let x = "TATA";
console.log(x.__proto__); //String class/prototype

console.log(x.__proto__ == String.prototype); //true
console.log(true.__proto__ == Boolean.prototype); //true
console.log((10).__proto__ == Number.prototype); //true

console.log(d.__proto__); //Object

console.log(Object.prototype.isPrototypeOf(String.prototype)); //true
console.log(Object.prototype.isPrototypeOf(Number.prototype)); //true
console.log(Object.prototype.isPrototypeOf(Boolean.prototype)); //true
console.log(Object.prototype.isPrototypeOf(Function.prototype)); //true

console.log(Object.prototype.isPrototypeOf(undefined)); //false

//apart from 'undefined', everything else in Javascript inherits from Object Prototype
