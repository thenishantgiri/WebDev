function print() {
  var a = 10;
  console.log(a);
}

// console.log(a); //error : because a was defined inside a function

print();

function count() {
  var initial = 1;
  function plus() {
    console.log(++initial);
  }
  plus();
}

count();
