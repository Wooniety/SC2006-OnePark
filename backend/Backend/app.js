var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql');
var bodyParser = require('body-parser');

/*
// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'onepark'
});



connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});
*/

/*
const pool = mysql.createPool({
    connectionLimit : 10, // Number of connections to be kept in the pool. Adjust based on your needs.
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'onepark'
});*/


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carparksRouter = require('./routes/carparks');
const { Code } = require('jade/lib/nodes');

var app = express();
const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/carparks', carparksRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, ()=> {
  console.log(`Backend app listening on port ${port}`)
})

process.on('exit', (Code) => {
  connection.end();
})

module.exports = app;
