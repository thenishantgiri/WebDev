/**
 *
 * Lambda Functions
 *
 * Pure functions or Lambda functions are those that are :
 * 1. stateless
 * 2. output depends only on the input and nothing else
 * 3. for same input, output will always be the same
 *
 *
 * y = f(x) = 2x + 3
 *
 */

//lambda function
//way 1
// let a = 10;
// function f1(x) {
//   return 2 * x + 3;
// }

//way 2 ; where x is an argument
let f1 = (x) => 2 * x + 3;

//way 3 ; implementing different syntax to 'way 2'
let f3 = (argument) => {
  return 7;
};

// f1(10); --> 23
// it will be always 23, whatever the case

//not a lambda function
let count = 0;
function f2() {
  count++;
  return count;
}
