const express = require("express");
const todoRoute = require("./routes/todos");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set is used to set certain data inside our application
// telling our server, we're using view engine and that of 'hbs'
// view engine is a library that helps render our files
// view engines : ejs, pug, jade, hbs, ...
app.set("view engine", "hbs");
// telling our application to look for views inside views
// we cam the name of views folder, then it will be like
// app.set("views", "changed_folder_name");
app.set("views", __dirname + "/views"); // if the views folder is inside the current directory (and the name of folder is also "views"), then there is no need for write this line explicitly

//routing to routes folder
app.use("/todos", todoRoute);

app.listen(3456, () => {
  console.log("server has started on http://localhost:3456");
});
