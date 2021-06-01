function someAsyncTask(callback) {
  console.log("Hi");

  setTimeout(function () {
    console.log("Alpha");
    callback();
    console.log("Beta");
  }, 5000);

  console.log("Bye");
}

/**
 * 
 * someAsyncTask(function () {
  console.log("We did some task");
}); 
 * 
 */

//Promise
let someTaskPromise = function () {
  return new Promise(function (resolve, reject) {
    someAsyncTask(resolve);
  });
};

//If you want to do something after the task has ended, we use "then"
someTaskPromise().then(function () {
  console.log("After task has completed.");
});
