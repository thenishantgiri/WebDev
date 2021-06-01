function download(url) {
  return new Promise(function (resolve, reject) {
    if (!url.startsWith("http")) {
      reject(new Error("URL doesn't start with http"));
    } else {
      setTimeout(function () {
        //fake 3 second download task
        let fileName = url.split("/").pop();
        resolve(fileName);
      }, 3000);
    }
  });
}

function resize(fileName) {
  return new Promise(function (resolve, reject) {
    if (!fileName.endsWith(".png")) {
      reject(new Error("file is not png"));
    } else {
      setTimeout(function () {
        //fake 3 second resize task
        //change x.png --> x-resized.png
        let resizedFile = fileName.split(".")[0] + "-resized.png";
        resolve(resizedFile);
      }, 3000);
    }
  });
}

/*

//version 1.0
download("http://google.com/logo.png").then(function (fileName) {
  resize(fileName).then(function (resizedFile) {
    console.log("Resized file is at: " + resizedFile);
  });
});

*/

//version 2.0
download("http://google.com/logo.png")
  .then(resize)
  .then(function (resizedFile) {
    console.log("Resized file is at : " + resizedFile);
  })
  .catch(function (error) {
    //to catch the error thrown by Promise
    console.error(error);
  });
