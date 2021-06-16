const express = require("express");

const app = express();

//http : req <-- input
//http : res --> output
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4444, () => {
  console.log("server started on http://localhost:4444");
});

//server based application has "Network Interface"

/**
 *
 * Types of HTTP requests
 *
 * get : to fetch data
 * post : (standard/normal) send data
 * put : creating new entity and send that data
 * patch : modify some existing entity and send that data
 *
 */
