function Person(name, age) {
  this.name = name;
  this.age = age;
  this.isAdult = function () {
    return this.age >= 18;
  };
}
Person.prototype.city = "Delhi"; // this type of declaration will not take extra space in the memory

let p1 = new Person("Harry Potter", 17);
let p2 = new Person("John Doe", 24);

console.log(p1.isAdult()); //false
console.log(p2.isAdult()); //true

console.log(p1.isAdult == p2.isAdult); //false : explanation below
/**
 *
 * false : isAdult function has been written inside both the objects seperately,
 * so it's going to occupy different memory addresses, that's why they're not same
 *
 */

/**
 * If we create isAdult function outside the Person function,
 * then "p1.isAdult == p2.isAdult" --> True
 *
 * Person.prototype.isAdult = funtion () { return this.age >= 18 }
 */
