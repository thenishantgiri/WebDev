const express = require("express");

const app = express();

//http : req <-- input
//http : res --> output
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Middleware Functions or Handler Functions : a function which is triggered by a req (request) and a Function which will result in respose being sent
function middleware1(req, res, next) {
  console.log(req.url);

  next();
}

function middleware2(req, res, next) {
  console.log(req.hostname);

  res.send("Fuchhey");
}

//if we get a request of get type on url : "/x", then middleware() will be called
app.get("/x", middleware1, middleware2);
//if we don't call next(), our webpage will be stuck, as it hasn't received the res (resolve) request (which is inside the second middleware, which is called after middleware1, by calling the next() )
// we can sent only one res (response) to a single req (request)

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
