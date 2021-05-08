//Strings

// let p = "arnav";
// let str = `this is ${p}'s string`;
// let longstr = "this is \
// a very long \n \
// string";
// console.log(longstr.length);

//Searching

let s = "this has some data here";
let key = "has";

console.log(s.indexOf(key));

// let str = "this is a easy job";
// console.log(str.indexOf("is"));
// console.log(str.indexOf("is", 4));

let str = "ab aab abbcd aab";
console.log(str.indexOf("ab"));
console.log(str.lastIndexOf("ab", 16));

//String Methods

let mainStr = "this-is-a-long-string";

// let smallStr = mainStr.slice(2, 3);

// let smallStr = mainStr.substring(2, 10);

// let smallStr = mainStr.slice(-6, -4);

let smallStr = mainStr.substr(-6, 4);

console.log(smallStr);
