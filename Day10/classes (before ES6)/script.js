function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("John Doe", 22);
console.log(p1);

console.log(new Person("Jane Doe", 21));
