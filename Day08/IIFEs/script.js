//IIFE --> Immediately Invoked Function Expression
/* 
Benefits: --> Local Scope / Block Scope
 

*/

//encapsulated the function, and executed it immediately without giving it any call
//Block Scope

(function () {
  var a = 10;
  var b = a / 5;
  console.log(a + b);
})();

// console.log(a); //a is not accessible, as IIFEs have block scope
