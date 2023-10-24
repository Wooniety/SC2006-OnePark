const database = require('./database_config');

const config = require('../configuration.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

const users = {
  findAll: function(callback) {
    const findAllQuery = 
    ` 
      SELECT * FROM users;
    `;

    database.query(findAllQuery, (err, results) => {
      // Error querying database
      if (err) {
        callback (err, null);
        return;
      }

      // No error
      else {
        callback(null, results);
        return;
      }

    }); // End of database query
  }, // End of 'findAll' function

  insert: function(requestBody, callback) {
    insertQuery = 
    `
      INSERT INTO users
      (name, email, password, phone_num)
      VALUES (?, ?, ?, ?)
    `;

    // Hash the user's password
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(requestBody.password, salt, function (err, hash) {
        database.query(insertQuery, [requestBody.name, requestBody.email, hash, requestBody.phonenum], (err, results) => {
          // Error querying database
          if (err) {
            callback (err, null);
            return;
          }
    
          // No error
          else {
            callback (null, results.insertId);
            return;
          }
        }); // End of database query
      });
    });
  }, // End of 'insert' function

  findByID: function(ID, callback) {
    findByIDQuery =
    `
      SELECT * FROM users
      WHERE userid = ?
    `;

    database.query(findByIDQuery, ID, (err, result) => {
      // Error querying database
      if (err) {
        callback (err, null);
        return;
      }

      // No error
      else {
        callback(null, result);
        return;
      }; 
    }); // End of database query
  }, // End of 'findByID' function

  verify: function (username, password, callback) {
    const verifyQuery = `
      SELECT * FROM users
      WHERE email = ? LIMIT 1;
    `;

    database.query(verifyQuery, username, (err, result) => {
      // Error occurred querying the database
      if (err) {
        callback (err, null);
        return;
      }

      // No error querying the database
      else {
        // Determine whether the provided username exists
        if (result.length === 0) {
          callback(null, null);
          return;
        }

        // Store the user's details
        const user = result[0];

        // Compare the retrieved hash password from the database with the provided password
        bcrypt.compare(password, user.password, (err, comparedResult) => {
          // Error occurred comparing the provided and retrieved password
          if (err) {
            callback (err, null);
            return;
          }

          // No error 
          else {
            // Determine whether the two passwords are the same
            if (!comparedResult) {
              callback (null, null);
              return;
            }

            else {
              callback (null, user);
              return;
            };
          };
        }); // End of bcrypt.compare()

      };

    }); // End of database query
  } // End of verify function

  // TODO OTP

}; // End of 'users'

// Exporting 'users'
module.exports = users;