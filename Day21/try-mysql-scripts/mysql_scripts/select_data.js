const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'thenishantgiri',
    password: 'admin',
    database: 'mytestdb'
});

connection.query(

    `SELECT * FROM persons`,

    // when we use 'select' query, we get
    // results --> rows
    // we get one more parameter i.e. fields --> columns
    function (err, rows, cols) {
        if (err) {
            console.error(err);
        } else {
            console.log(results);
            console.log(cols);
        }

        // always close the connection, else the terminal will not be free
        connection.end();
    }
);