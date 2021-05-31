class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isAdult() {
    return this.age >= 18;
  }
}

let p1 = new Person("John Doe", 24);
let p2 = new Person("Jane Doe", 17);

console.log(typeof Person); //function : there is NO datatype called 'class'
console.log(p1.__proto__ == Person.prototype); //true
console.log(p1.__proto__.__proto__ == Object.prototype); //true

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

let s1 = new Student("Harry Potter", 17, 5);
let s2 = new Student("Hermoine Granger", 16, 6);

console.log(s1.__proto__ == Student.prototype);
console.log(s1.__proto__.__proto__ == Person.prototype);
console.log(s1.__proto__.__proto__ == Object.prototype);

// Inheritance chain
// Object.prototype --> Person.prototype --> Student.prototype

// NO inheritance between the classes (actually they are functions)
// Object -x--> Person -x--> Student
