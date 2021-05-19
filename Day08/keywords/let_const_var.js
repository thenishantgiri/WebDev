//var
var a = 10;
a++;
console.log(a);

//let
let b = 20;
b++;
console.log(b);

//const
// const c = 30;
// c++; //const doesn't allow us to reassign any value to that variable
// console.log(c);

//Object
const obj = {
  k1: "asd",
  k2: 10,
  k3: false,
};

obj.k4 = 123;
console.log(obj.k4);

delete obj.k1;
console.log(obj.k1);

const arr = [1, 2, 3];

arr.push(5);
console.log(arr);

//Scope
/*
    var --> has a scope of a function
    let --> has a scope of a block
    const --> has a block scope
*/

//var
// var myVar = 10;

// function alpha() {
//   var myVar = 11;
//   if (true) {
//     var myVar = 21;
//     console.log(myVar);
//   }
//   console.log(myVar);
// }

// alpha();

//let
// let myVar = 10;

// function alpha() {
//   let myVar = 11;
//   if (true) {
//     let myVar = 21;
//     console.log(myVar);
//   }
//   console.log(myVar);
// }

// alpha();

//const
const myVar = 10;

function alpha() {
  const myVar = 11;
  if (true) {
    const myVar = 21;
    if (true) {
      const myVar = 33;
      console.log(myVar);
    }
    console.log(myVar);
  }
  console.log(myVar);
}

alpha();
