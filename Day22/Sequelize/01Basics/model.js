const { Sequelize } = require("sequelize");

const DataTypes = Sequelize.DataTypes;

const db = new Sequelize("mytestdb", "thenishantgiri", "admin", {
  host: "localhost",
  dialect: "mysql"
});

const Student = db.define("student", {
  name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER(2),
    allowNull: false,
    defaultValue: -1
  }
});

module.exports = {
  db,
  Student,
  Sequelize
};

/**
 *
 * // This whole block has been replaced by async-await in task function (inside insert.js file)
 *
 *  db.sync({ alter: true }) // { force : true } --> this will drop the existing table and create a new table
 *     .then(() => console.log("Database Synchronised"))
 *     .catch((err) => console.error(err));
 *
 */
