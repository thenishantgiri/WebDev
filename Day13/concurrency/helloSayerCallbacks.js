function helloSayer(times, name, doneSaying) {
  let count = 0;
  let loopId = setInterval(() => {
    count++;

    console.log("Hello", name);
    if (count === times) {
      clearInterval(loopId);
      doneSaying();
    }
  }, 100);
}

//why callbacks ? : to remove concurrency we use callback functions
helloSayer(3, "Lucifer", () => {
  helloSayer(2, "BoJack", () => {
    helloSayer(3, "Valak", () => {});
  });
});

module.exports = {
  helloSayer,
};
