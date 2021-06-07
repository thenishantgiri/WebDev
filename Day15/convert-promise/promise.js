let inpP = document.getElementById("inpP");
let btnWaitP = document.getElementById("btnWaitP");
let btnCancelP = document.getElementById("btnCancelP");

let waitP = function (timeout) {
  console.log("waiting...");

  return new Promise((resolve, reject) => {
    if (isNaN(parseInt(timeout))) {
      reject(new Error("Timeout must be a number"));
    }
    setTimeout(resolve, timeout);
  });
};

btnWaitP.onclick = function () {
  waitP(inpP.value * 1000)
    .then(() => {
      console.log(`waited ${inpP.value} sec`);
    })
    .catch((err) => {
      console.error(err);
    });
};

btnCancelP.onclick = () => {};
