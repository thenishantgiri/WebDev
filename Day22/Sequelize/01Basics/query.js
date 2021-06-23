const { db, Student, Sequelize } = require("./model");
const Op = Sequelize.Op;

const task = async () => {
  try {
    await db.sync();

    const students = await Student.findAll({
      where: {
        age: {
          [Op.or]: {
            [Op.lt]: 14,
            [Op.gt]: 18
          }
        }
      }, // Op -> operator
      order: [
        ["age", "ASC"],
        ["name", "ASC"]
      ]
    });

    students.forEach((s) =>
      console.log(`age: ${s.dataValues.age} \t name: ${s.dataValues.name}`)
    );
  } catch (err) {
    console.error(err);
  }
};

task();
