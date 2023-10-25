var mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 10, // Number of connections to be kept in the pool. Adjust based on your needs.
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'onepark'
});


module.exports = pool;