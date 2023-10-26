const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const users = require('../model/users.js');
var usersRouter = require('./routes/users');
var carparksRouter = require('./routes/carparks');

// Attaching bodyParser middleware to parse request.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.options('*', cors());
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/carparks', carparksRouter)

// User login
app.post('/login/', (request, response, next) => {
	var email = request.body.email;
	var password = request.body.password;

	users.verify(email, password, (err, result) => {
		// Error returned
		if (err) {
			console.log(err);
			response.status(400).send("Error occurred");
			return;
		}

		// No error returned
		else {
			// No user found / incorrect password
			if (result === null) {
				response.status(401).send({success: false});
				return;
			}

			else {
				const payload = {
					user_id: result.USERS_ID
				}

				// Remove the 'password' attribute from the user details
				delete result['PASSWORD'];

				// Return a response
				response.status(200).send({
					// For the benefit of the front-end login page
					success: true,
					userData: result,
					status: "Successful login",

					user_id: result.USERS_ID
				});
						
				return;
			};
		};

	});
});

// Get all users in the database
app.get('/users/', (request, response, next) => { 
	users.findAll((err, results) => {
		// Errors
		if (err) {
			console.log(err);
			response.status(500).send("Internal Server Error");
			return;
		}

		// No error
		else {
			response.status(200).send(results);
			return;
		}
	});
}); // End of endpoint 1

// Add a new user to the 'users' table
app.post('/users/', (request, response, next) => { 
	const requestBody = request.body;
	//console.log(requestBody)

	users.insert(requestBody, (err, results) => {
		// Errors
		if (err) {
			if (err.errno == 1062){
				response.status(422).send({success: false});
			} else{
				console.log(err);
				response.status(500).send("Internal Server Error");
				return;
			}
		}

		// No errors
		else {
			response.status(201).send({
				success: true,
				userID: results
			});
			return;
		};
	});
});

// Retrieve a single user by their userid
app.get('/users/:userID', (request, response, next) => { 
	let userID = request.params.userID;
	
	users.findByID(userID, (err, results) => {
		// Errors
		if (err) {
			console.log(err);
			response.status(500).send("Internal Server Error");
			return;
		}

		// No errors
		else {
			response.status(200).send(results[0]);
			return;
		};
	});
}); 

// Return user details based on email
app.get('/verify/email', (request, response, next) => { 
	let email = request.body.email;
	
	users.findByEmail(email, (err, results) => {
		// Errors
		if (err) {
			console.log(err);
			response.status(500).send("Internal Server Error");
			return;
		}

		// No errors
		else {
			if (results.length > 0){
				response.status(200).send({
					success: true,
					userDetails: results
				});
				return;
			} else{
				response.status(401).send({success: false});
			}
		};
	});
}); 

// Update user email
app.put('/users/:userID', (request, response, next) => {
	const userID = request.params.userID;
	const requestBody = request.body;

	users.edit(userID, requestBody, (err) => {
		// Errors
		if (err) {
			// Duplicate email
			if (err.code == 'ER_DUP_ENTRY') {
				console.log(err);
				response.status(422).send("The email already exists");
				return;
			}

			// Other errors
			else {
				console.log(err);
				response.status(500).send("Internal Server Error");
				return;
			};
		}

		// No errors
		else {
			response.status(200).send();
			return;
		};
	});
}); 

app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;