const lib1 = require("./lib1");

// console.log("Hello World");

// if (typeof window != "undefined") {
//   console.log("running in browser");
// } else {
//   console.log("running in node");
// }

// console.log(typeof window);

console.log(lib1);

lib1.sayHello("John Doe");

setTimeout(() => {
  console.log(lib1);
}, 2000);
