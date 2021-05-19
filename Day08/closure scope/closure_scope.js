// function print() {
//   var a = 10;
//   console.log(a);
// }

// // console.log(a); //error : because a was defined inside a function

// print();

// function count() {
//   var initial = 1;
//   function plus() {
//     console.log(++initial);
//   }
//   return plus;
// }

// var c = count();
// c();
// c();

function counter(initial) {
  var val = initial;
  function plus() {
    console.log(++val);
  }
  return plus;
}

var c = counter(10);
c();
c();

//creating a function counter
function createCounter(initVal, deltaVal) {
  return {
    up() {
      initVal += deltaVal;
      console.log(initVal);
    },
    down() {
      initVal -= deltaVal;
      console.log(initVal);
    },
  };
}

var c = createCounter(10, 2);
c.up();
c.up();
c.down();
