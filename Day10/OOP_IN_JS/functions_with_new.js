function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("Harry Potter", 18);
let p2 = new Person("John Doe", 24);

console.log("P = " + JSON.stringify(p1));
console.log(p2);
