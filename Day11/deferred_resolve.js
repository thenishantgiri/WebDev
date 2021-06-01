function downloadPromise() {
  return new Promise(function (resolve, reject) {
    console.log("Startint to download the file...");
    setTimeout(function () {
      console.log("Download is completed.");
      resolve();
    }, 3000);
  });
}

downloadPromise().then(function () {
  console.log("**After Download**");
});
