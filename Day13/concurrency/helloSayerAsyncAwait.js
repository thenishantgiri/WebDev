function helloSayer(times, name) {
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

/**
 *
 * A-sync function definition
 *
 * async function task () {
 *   //some line of code
 * }
 *
 * A-sync function call
 *
 * task ();
 *
 *  => to metigate this, try the below syntax
 *
 */

//A-sync IIFEs
(async () => {
  //if something is a promise object, we can #await a promise object
  helloSayer(3, "Lucifer"); //this line of code will run concurrently/parallelly with the following codes
  await helloSayer(2, "BoJack");
  await helloSayer(3, "Valak");
})();

module.exports = {
  helloSayer,
};
