const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'thenishantgiri',
    password: 'admin',
    database: 'mytestdb'
});

connection.query(

    `CREATE TABLE IF NOT EXISTS persons (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL,
        city VARCHAR(30)
    )`,

    // 'select * from test1;',

    function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.log("Table created successfully");
            // console.log(results);
        }
        connection.end();
    } 
);