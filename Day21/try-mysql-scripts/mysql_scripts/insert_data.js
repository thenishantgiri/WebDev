const mysql = require('mysql2');

const insert = {
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4]
};

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'thenishantgiri',
    password: 'admin',
    database: 'mytestdb'
});

connection.query(
    // put the string value inside ' ' --> name, city i.e. '${insert.name}','${insert.city}'

    `INSERT INTO persons (name, age, city) VALUES 
    (
        '${insert.name}',
        ${insert.age},
        '${insert.city}'
    )`,

    function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.log(results);
            console.log("Inserted Successfully");
        }

        // always close the connection, else the terminal will not be free
        connection.end();
    }
);