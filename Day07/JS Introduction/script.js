let a = 10;
console.log(a);

let b = [1, 2, 3, 4, 5];
console.log(b);

console.log("Hello World");

//JavaScript
//Variables, Arrays, Functions, Loops, Objects

c = 20; //Global Variable
var d = 30; //Function Scope
let e = 50; //Block Scope

let arr = ["Apple", "Mango", "Guava"];
console.log(arr);

for (let i = 0; i < 5; i++) {
  console.log(arr[i]);
}

arr.push("Banana"); //Insert at back
arr.pop(); //Remove from back
arr.shift(); //Remove from front
arr.unshift("Kiwi"); //Insert at front
arr.indexOf("Kiwi"); //Finds the index of the element

if (arr[0] == "Apple") {
  console.log("Apple");
} else {
  console.log("No it is", arr[0]);
}

/*
//Function Declaration
function fun() {
  let a = 5;
  if (a == 5) {
    f = 10; //let has block scope, var has a function scope
    console.log("Inside", f);
  }
  console.log("Outside", f);
}

fun();
console.log("Global", f);

function square_root(n) {
  console.log("In First Sqrt Fn");
  //   return Math.sqrt(n);
  return;
}

//Function Hoisting
//Function Expression
square_root(10);
sqrt_n(10);

var sqrt_n = function () {
  console.log("In Second Sqrt Fn");
  return;
};

*/
