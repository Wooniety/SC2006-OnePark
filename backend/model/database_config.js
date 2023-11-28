const sql = require('mysql');

const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME

//console.log(process.env)

const connection = sql.createConnection({
  host: db_host,
  port: db_port,
  user: db_user,
  password: db_password,
  database: db_name
});

connection.connect(function (err) {
  if (err) {
    console.log("Error connecting " + err.stack);
    return;
  }

  else {
    console.log("Connected as id " + connection.threadId);
    return;
  };
});

module.exports = connection;