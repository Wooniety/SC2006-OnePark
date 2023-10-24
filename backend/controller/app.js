const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const validator = require('validator');

const users = require('../model/users.js');

// Attaching bodyParser middleware to parse request.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.options('*', cors());
app.use(cors());

// User login
app.post('/login/', (request, response, next) => {
  var username = request.body.username;
  var password = request.body.password;

  users.verify(username, password, (err, result) => {
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
        response.status(401).send("Please check your provided details");
        return;
      }

      else {
        const payload = {
          user_id: result.USERS_ID
        }

        jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256' }, (err, token) => {
          // Error occurred
          if (err) {
            console.log(err);
            response.status(400).send("Error occurred");
            return;
          }

          // NO error occurred
          else if (!err) {
            // Remove the 'password' attribute from the user details
            delete result['PASSWORD'];

            // Return a response
            response.status(200).send({
              // For the benefit of the front-end login page
              success: true,
              userData: JSON.stringify(result),
              status: "Successful login",

              user_id: result.USERS_ID
            });
            
            return;
          };
        }); // End of jwt.sign()
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
      console.log(err);
      response.status(500).send("Internal Server Error");
      return;
    }

    // No errors
    else {
      response.status(201).send(`{\n"userID": ${results}\n}`);
      return;
    };
  });
});

// Retrieve a single user by their userid
app.get('/users/:userID', (request, response, next) => { 
  const userID = request.params.userID;
  
  users.findByID(userID, (err, results) => {
    // Errors
    if (err) {
      console.log(err);
      response.status(500).send("Internal Server Error");
      return;
    }

    // No errors
    else {
      response.status(200).send(results);
      return;
    };
  });
}); 


// Update a single user
app.put('/users/:userID', isLoggedin, (request, response, next) => {
  const userID = request.params.userID;
  const requestBody = request.body;

  // Validation
  if (!(
    typeof requestBody.username === 'string' &&
    typeof requestBody.profile_pic_url === 'string' &&

    Number.isInteger(userID) &&
  
    validator.isAlphanumeric(requestBody.username)
  )) {
    response.status(400).send("Invalid details");
    return;
  }

  users.edit(userID, requestBody, (err) => {
    // Errors
    if (err) {
      // Duplicate username
      if (err.code == 'ER_DUP_ENTRY') {
        console.log(err);
        response.status(422).send("The new username already exists");
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

module.exports = app;