function download(url) {
  return new Promise(function (resolve, reject) {
    if (!url.startsWith("http")) {
      reject(new Error("URL doesn't start with http"));
    } else {
      console.log("Start download : " + url);
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
      console.log("Start resize : " + fileName);
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

function upload(resizeFileName) {
  return new Promise(function (resolve, reject) {
    console.log("Start upload : " + resizeFileName);
    setTimeout(function () {
      //fake 3 second upload
      let uploadedUrl = "http://imgur.com/" + resizeFileName;
      resolve(uploadedUrl);
    }, 3000);
  });
}

/*

//version 2.0
download("http://google.com/logo.png")
  .then(resize)
  .then(upload)
  .then(function (uploadedUrl) {
    console.log("File was uploaded to : " + uploadedUrl);
  })
  .catch(function (error) {
    //to catch the error thrown by Promise
    console.error(error);
  });

*/

//version 3.0
Promise.all([
  // if any one of the promises 'reject' , call goes to 'catch' instead of 'then'
  download("http://google.com/logo.png"),
  download("http://google.com/banner.png"),
  download("http://google.com/promo.png"),
])
  .then(function (downloadedValues) {
    // console.log(values);

    // return values.map(function (item) {
    //   return resize(item);
    // });

    return Promise.all(downloadedValues.map(resize));
  })
  .then(function (resizedValues) {
    return Promise.all(resizedValues.map(upload));
  })
  .then(function (uploadValues) {
    console.log(uploadValues);
  })
  .catch(function (error) {
    console.error(error);
  });
