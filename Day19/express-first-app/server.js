const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.send(`<h1 style="color : lightcoral">Hello World</h1>`);
});

//we have mounted the public folder on xyz root
app.use("/xyz", express.static(__dirname + "/public"));

app.listen(4321, () => {
  console.log("server has started on http://localhost:4321");
});
