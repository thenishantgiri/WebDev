//way01
var intervalID;
var runCount = 0;

function sayHello() {
  runCount++;
  if (runCount > 5) {
    clearInterval(intervalID);
  }
  console.log("Hello !");
}

console.log("And the wait starts...");
// setTimeout(sayHello, 1000);
// setTimeout(sayHello, 1000);

intervalID = setInterval(sayHello, 1000); //it keeps doing the task again and again after the interval

//way02
// setInterval(function () {
//   console.log("This run after 1 sec");
// }, 1000);

//way03
var myfun = function () {
  console.log("This runs after every 2 secs");
};

setInterval(myfun, 2000);
