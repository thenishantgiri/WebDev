//Arrays

let arr = [1, 2, 3];
// console.log(arr.length);
// console.log(arr[1]);

let arr2 = [1, "hello", false, [2, 3]];
// console.log(typeof arr2[3]);

// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }

//for-of loop (of is used for accessing the items inside the loop)

// for (let val of arr2) {
//   console.log(val);
// }

//for-in loop (in is for index)
// for (let index in arr2) {
//   console.log(index);
// }

//Arrays - Part 2 - Add/Remove Items

let fruits = ["apple", "mango"];

//push and pop
// fruits.push("melon"); //adds element at last
// console.log(fruits);

// fruits.pop(); //removes last element
// console.log(fruits);

//shift and unshift
// fruits.shift(); //removes first element
// console.log(fruits);

// fruits.unshift("kiwi", "grapes"); //adds element at first index
// console.log(fruits);

//Arrays - Part 3 - Data Changing

// let notes = ["do", "re", "mi", "fa", "so", "la", "ti", "do"];

// console.log(notes);

// console.log(notes.slice(4));
// console.log(notes.slice(4, 6));

//splice - destructive in nature

// let omit = notes.splice(4);
// console.log(omit);
// console.log(notes);

// let omit = notes.splice(4, 2);
// console.log(omit);
// console.log(notes);

//splice - replacing data
// notes.splice(0, 3, "sa", "re", "ga");
// console.log(notes);

//concat - non destructive in nature

let notes = ["do", "re", "mi"];
console.log(notes.concat(["sa", "re", "ga"]));
console.log(notes);
