//IIFE --> Immediately Invoked Function Expression
/* 
Benefits: --> Local Scope / Block Scope
          --> Minification
          --> For Loops

*/

//encapsulated the function, and executed it immediately without giving it any call

//Block Scope
(function () {
  var a = 10;
  var b = a / 5;
  console.log(a + b);
})();

// console.log(a); //a is not accessible, as IIFEs have block scope

//Minification
function doMath() {
  console.log("3^4 = " + Math.pow(3, 4));
  console.log("4^3 = " + Math.pow(4, 3));
  console.log("root(2) = " + Math.sqrt(2));
  console.log("sin(10) = " + Math.sin(10));
}

// doMath();

//Turning the "doMath" function into an IIFE
(function (l, p, r, s) {
  l("3^4 = " + p(3, 4));
  l("4^3 = " + p(4, 3));
  l("root(2) = " + r(2));
  l("sin(10) = " + s(10));
})(console.log, Math.pow, Math.sqrt, Math.sin);

//For Loops

//this For Loop prints "10"x10 times, instead of printing 0-9
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

//fixing For Loop using IIFEs
for (var i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 100);
  })(i);
}

//fixing For Loop using "let" ; let creates internal closure inside every iteration
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

//fixing For Loop (if not using ES6 : ecmascript 6 and want to use var instead of let )
//Using signature of "setTimeout()", which has a "callback() function", a delay, an array of arguments which are passed to callback() function
for (var i = 0; i < 10; i++) {
  setTimeout(console.log, 100, i); //copy of "i" is passed, because it's "pass by value"
}
