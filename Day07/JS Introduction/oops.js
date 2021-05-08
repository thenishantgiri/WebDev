//Object Oriented Programming in JavaScript

//allows to create object without defining the class

//one way of creatiing JavaScript (JSON) - JavaScript Object Notation

//Another Way
function fruit(taste, color) {
  this.color = color;
  this.taste = taste;
}

//new keyword
let mango = new fruit("sweet", "yellow");
let orange = new fruit("sour", "orange");

//One Way
var apple = {
  taste: "sweet",
  color: "red",
};

//Class Keyboard (ECMAScript 2015)

//Class Declaration (Not Hoisted)
class FruitClass {
  constructor(taste, color) {
    this.color = color;
    this.taste = taste;
  }
}

let kiwi = new FruitClass("sour", "green");

//Class Expression (Not Hoisted)
let FruitClassEx = class {
  constructor(taste, color) {
    this.taste = taste;
    this.color = color;
  }
};

let kiwiEx = new FruitClassEx("sour", "green");

/*

var bird = {
  x: 100,
  y: 20,
  color: "blue",
  eggs: ["one", "two", "three"],
  fly: function () {
    console.log("Bird is flying", this.x, this.y);
  },
};

//For Loop
for (let i = 0; i < bird.eggs.length; i++) {
  console.log(bird.eggs[i]);
}

//For Each Loop
bird.eggs.forEach(function (val, idx) {
  console.log(idx, val);
});

*/
