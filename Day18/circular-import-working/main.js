const lib1 = require("./lib1");
const lib2 = require("./lib2");

console.log(lib1);
console.log(lib2);

console.log(lib1.lib2);
console.log(lib2.lib1);

lib1.lib2.lib1.fun();

//In this working circular export-require scenario,we are just adding data to the existing "module.export object";
//unlike in non - working circular export -require scenario, where we're creating a new object and assigning it to "module.exports"
