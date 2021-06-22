const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'thenishantgiri',
    password: 'admin',
    database: 'mytestdb'
});

function getAllPersons() {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM persons`,
            (err,rows,cols) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

function addNewPerson(name, age, city) {
    return new Promise((resolve, reject) => {
        connection.query(
            // to prevent sql injection attack
            // the "?, ?, ?" will take the values from second arguments i.e. the array [name, age, city], and put them one-by-one
            `INSERT INTO persons (name, age, city) VALUES (?, ?, ?)`,
            [name, age, city],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            }
        );
    });
}

module.exports = { getAllPersons,addNewPerson };

// we are not closing the connection at anymoment