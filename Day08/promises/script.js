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

//Promise: Resolve Parameter
function fakeDownloadPromise() {
  return new Promise(function (resolve, reject) {
    //return a Promise object
    setTimeout(function () {
      let downloadedData = "Some data from the Internet";
      resolve(downloadedData);
    }, 1000);
  });
}

fakeDownloadPromise().then(function (data) {
  //this is a promise object, on which we can use "then" call, to write our resolve function

  console.log("The data that we downloaded is -->");
  console.log(data);
});
