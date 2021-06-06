let wait = function (timeout) {
  console.log("waiting...");

  return new Promise((resolve, reject) => {
    if (isNaN(parseInt(timeout))) {
      reject(new Error("Timeout must be a number"));
    }
    setTimeout(resolve, timeout);
  });
};

document.getElementById("btnWait").onclick = function () {
  wait(document.getElementById("inp").value * 1000)
    .then(() => {
      console.log("waited", document.getElementById("inp").value, "sec");
    })
    .catch((err) => {
      console.error(err);
    });
};
