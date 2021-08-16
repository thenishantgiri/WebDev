const express = require("express");
const expressSession = require("express-session");
const app = express();

app.set("view engine", "hbs");

app.use(
  expressSession({
    resave: true, // saves the cookie on each client <-> communication
    saveUninitialized: true, // save cookie even if nothing to track
    secret: "some long random string here", // used to encrypt the cookie

    // name: "aashish", // changing the default cookie name
  })
);

app.get("/", (req, res) => {
  if (!req.session.visits) req.session.visits = 1;
  else req.session.visits++;

  console.log(req.session);

  res.render("index", { count: req.session.visits });
});

app.listen(9876, () => {
  console.log("server listening on port http://localhost:9876");
});
