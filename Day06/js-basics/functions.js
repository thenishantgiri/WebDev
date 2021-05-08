console.log(beta());

function alpha() {
  return "A";
}

function beta() {
  return "B";
}

// console.log(gamma())

let gamma = function () {
  return "C";
};

console.log(beta());

function area(height, width) {
  if (!width) {
    return Math.PI * height * height;
  }

  return height * width;
}

console.log("area 3,4", area(3, 4));
console.log("area 4", area(4));
