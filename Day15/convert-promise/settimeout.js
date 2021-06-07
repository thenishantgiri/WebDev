let inpS = document.getElementById("inpS");
let btnWaitS = document.getElementById("btnWaitS");
let btnCancelS = document.getElementById("btnCancelS");

let waitS = function (timeout, done) {
  console.log("waiting...");

  if (isNaN(parseInt(timeout))) {
    return done(new Error("Timeout must be a number"));
  }

  setTimeout(() => {
    done(null);
  }, timeout);
};

btnWaitS.onclick = () => {
  waitS(inpS.value * 1000, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`waited ${inpS.value} sec`);
    }
  });
};

btnCancelS.onclick = () => {};
