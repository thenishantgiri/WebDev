const express = require("express");

const app = express();

app.use("/", express.static(__dirname + "/public"));

function decryptQueryParams(req, res, next) {
  let decryptedData = "";

  for (let q in req.query.code) {
    let raw = req.query.code[q];

    if (raw == raw.toLowerCase()) {
      decryptedData = decryptedData + raw.toUpperCase();
    } else {
      decryptedData = decryptedData + raw.toLowerCase();
    }
  }

  req.query.code = decryptedData;

  next();
}

function decodeQueryBase64(req, res, next) {
  for (let q in req.query) {
    let data = req.query[q];
    data = new Buffer.from(data, "base64").toString("ascii");
    req.query[q] = data;
  }
  next();
}

app.get("/eval", decryptQueryParams, decodeQueryBase64, (req, res) => {
  console.log(req.query);
  res.send(req.query.code);
});

app.listen(4545, () => {
  console.log("server started on http://localhost:4545");
});
