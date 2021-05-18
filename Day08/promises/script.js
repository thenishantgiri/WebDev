// function fakeDownload(done) {
//   setTimeout(function () {
//     let downloadedData = "Some data we ripped of the interwebs";
//     done(downloadedData);
//   }, 2000);
// }

// fakeDownload(function (data) {
//   console.log("We downloaded a file, which had this data -->");
//   console.log(data);
// });

//Promise: Resolve & Reject Parameter
function fakeDownloadPromise(correct) {
  return new Promise(function (resolve, reject) {
    //return a Promise object
    setTimeout(function () {
      let downloadedData = "some data from the Internet";
      if (correct) {
        resolve(downloadedData);
      } else {
        reject(new Error("couldn't download file"));
      }
    }, 1000);
  });
}

fakeDownloadPromise(false)
  .then(function (data) {
    //this is a promise object, on which we can use "then" call, to write our resolve function
    //When we call reject, catch function gets executed

    console.log("The data that we downloaded is -->");
    console.log(data);
  })
  .catch(function (err) {
    //When we call reject, catch function gets executed
    console.log(err);
  });
