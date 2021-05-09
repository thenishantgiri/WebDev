//Answer in the context of Java/C++
//What does the keyword "this" mean, what does it refer to ?
//In which places in code can we NOT use "this" ?

function checkThis() {
  console.log(this);
}

//object creation
let obj = {
  a: 10,
  b: "asdf",
  c: true,
  d: function () {
    console.log(this);
  },
  10: "boi", // to access 10: obj["10"] ; as key can only be a string
  true: 1, // to access true: obj["true"] ; as key can only be a string
  e: {
    l: 123,
    m: "hi",
    n: function () {
      console.log(this);
    },
  },
};
