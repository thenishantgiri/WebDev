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

//Promise.all
(async () => {
  //a Promise.all takes an array as argument
  await Promise.all([
    helloSayer(3, "Lucifer"),
    helloSayer(2, "BoJack"),
    helloSayer(3, "Valak"),
  ]);

  console.log("----- first batch over -----");

  await Promise.all([
    await helloSayer(3, "Constatine"),
    await helloSayer(2, "Klaus"),
    await helloSayer(3, "Damon"),
  ]);
})();

module.exports = {
  helloSayer,
};
