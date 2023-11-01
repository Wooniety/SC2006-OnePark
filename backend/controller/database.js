var mysql = require('mysql');

const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME

const pool = mysql.createPool({
    connectionLimit : 10, // Number of connections to be kept in the pool. Adjust based on your needs.
    host: db_host,
    port: db_port,
    user: db_user,
    password: db_password,
    database: db_name
});


module.exports = pool;