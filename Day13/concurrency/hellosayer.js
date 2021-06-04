function helloSayer(times, name) {
  let count = 0;
  let loopId = setInterval(() => {
    count++;

    console.log("Hello", name);
    if (count === times) {
      clearInterval(loopId);
    }

    while (true) {} //infinite loop
  }, 100);
}

helloSayer(3, "Lucifer");
helloSayer(2, "BoJack");

module.exports = {
  helloSayer,
};
