const db = require('sqlite3');

const connection = new db.Database('./database/auth.db', (err) => {
    
    if (err) {
        console.error('Error connecting to the database:', err.message);
    }    else {
        console.log('Connected to the SQLite database.');   
    }
})

//user table
const createUserTable = () => {
    connection.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fn TEXT NOT NULL,
            sn TEXT NOT NULL,
            password TEXT NOT NULL,
            email TEXT NOT NULL,
            userType TEXT NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('User table created successfully.');
        }
    })
}

createUserTable();
module.exports = connection;


