function downloadPromise() {
  return new Promise(function (resolve, reject) {
    console.log("Starting to download the file...");
    setTimeout(function () {
      console.log("Download is completed.");
      resolve();
    }, 3000);
  });
}

/**
 * 
 * downloadPromise().then(function () {
  console.log("**After Download**");
});
 *
 * If you want the promise result sometime later, follow below steps
 * 
 */

let downloadedFile = downloadPromise();

setTimeout(function () {
  downloadedFile.then(function () {
    console.log("**After Download**");
  });
}, 5000);
