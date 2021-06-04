function helloSayer(times, name, doneSaying) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let loopId = setInterval(() => {
      count++;

      console.log("Hello", name);
      if (count === times) {
        clearInterval(loopId);
        resolve();
      }
    }, 100);
  });
}

//why promises ? : a promise of a better syntax over callbacks

/*
*
helloSayer(3, "Lucifer").then(() => {
  helloSayer(2, "BoJack").then(() => {
    helloSayer(3, "Valak").then(() => {});
  });
});
*
*/

//same stuff as above, just different syntax
//sequential
helloSayer(3, "Lucifer")
  .then(() => helloSayer(2, "BoJack"))
  .then(() => helloSayer(3, "Valak"));

//concurrently
helloSayer(3, "Lucifer")
  .then(helloSayer(2, "BoJack"))
  .then(helloSayer(3, "Valak"));

/*
*
helloSayer(3, "Lucifer")
  //way 1
  .then(function () {
    return helloSayer(2, "BoJack");
  })
  //way 2 : same thing as way 1, just simple syntax
  .then(() => helloSayer(3, "Valak"));
*
*/

/**
 *
 * .then(helloSayer(2, 'Bojack')) //will run program concurrently/parallelly
 *
 * .then(() => helloSayer(3, 'Valak')) //will remove the concurrency and run code after the above code has done its task #sequentialExecution
 *
 */

module.exports = {
  helloSayer,
};
