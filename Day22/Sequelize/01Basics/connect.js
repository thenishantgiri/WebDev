const Sequelize = require("sequelize");

const db = new Sequelize("mytestdb", "thenishantgiri", "admin", {
  host: "localhost",
  dialect: "mysql",
});

db.authenticate()
  .then(() => console.log("connection successful"))
  .catch((err) => console.error(err));
