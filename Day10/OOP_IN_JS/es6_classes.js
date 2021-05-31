class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//extending class
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

let p = new Person("Harry Potter", 15);
console.log(Person.prototype.isPrototypeOf(p)); //true
console.log(typeof Person); //function --> as internally it's using Prototype

let s1 = new Student("Harry Potter", 17, 5);
let s2 = new Student("Hermoine Granger", 16, 6);

console.log(s1.__proto__ == Student.prototype);
console.log(s1.__proto__.__proto__ == Person.prototype);
console.log(s1.__proto__.__proto__ == Object.prototype);

// Inheritance chain
// Object.prototype --> Person.prototype --> Student.prototype

// NO inheritance between the classes (actually they are functions)
// Object -x--> Person -x--> Student
