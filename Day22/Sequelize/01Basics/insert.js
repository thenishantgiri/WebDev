const { db, Student } = require("./model");

const task = async () => {
  try {
    await db.sync({ alter: true });

    // Insert a student
    await Student.create({
      name: [
        "Tom",
        "Dick",
        "Shalini",
        "Harry",
        "Ram",
        "Shyam",
        "Nancy",
        "Sally",
        "Neha",
        "Thomas"
      ][parseInt(Math.random() * 10)],
      age: 10 + parseInt(Math.random() * 10)
    });
  } catch (err) {
    console.error(err);
  }
};

for (let index = 0; index < 9; index++) {
  task();
}
