var express = require('express');
var axios = require('axios')
var router = express.Router();
const fs = require('fs');
var bodyParser = require('body-parser');
const pool = require('../database');
//const pool = require('../../model/database_config')


const ACCESS_KEY = '23a62fc2-4b29-489f-943a-d65dd12ec64e'
const TOKEN = 'ePe4sCf4499HNg4kJG4P6TeJeZ4cBX-E8eF9WHW2YVV1Y2d4226Y33GrDu2QGBHb6dus61vqdq2fd45297nXfjGTabej-axMcr79'

/* GET carpark details */
router.get('/fetch-carpark-details', async function(req, res) {
    const url = 'https://www.ura.gov.sg/uraDataService/invokeUraDS?service=Car_Park_Details';
    
    try {
        const response = await axios.get(url, {
            headers: {
                'AccessKey': ACCESS_KEY,
                'Token': TOKEN
            }
        });

        // Remove the 'remarks' column from each item in the array
        const modifiedData = response.data.Result.map(item => {
            const { remarks, ...rest } = item;
            return rest;
        });

        // Save the data received
        saveDataToFile(modifiedData, 'data.json');
        // Send the data received from the external API to the client
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Failed to fetch car park details.');
    }
});

/* POST carpark defects */
router.post('/defects', function(req, res) {
    var reporterName = req.body.reporterName;
    var ppName = req.body.ppName;
    var ppCode = req.body.ppCode;
    var defect = req.body.defect;
    // Assuming you send the image as a base64 encoded string
    var defectImage = req.body.defectImage;
    // Construct SQL query
    var sql = "INSERT INTO defects (reporterName, ppName, ppCode, defect, defectImage, status) VALUES (?, ?, ?, ?, ?, ?)";
    var values = [reporterName, ppName, ppCode, defect, defectImage, "Pending"];

    // Execute SQL query using the pool
    pool.getConnection(function(err, connection) {
        if (err) {
            console.error("Error getting connection from pool:", err);
            res.status(500).send('Failed to get a connection from the pool.');
            return;
        }

        connection.query(sql, values, function (err, result) {
            // Release the connection after you're done
            connection.release();

            if (err) {
                console.error("Error inserting data:", err);
                res.status(500).send('Failed to insert defect.');
                return;
            }
            res.send('Fault successfully sent');
        });
    
    
    
    /* IF NEEDED TO SAVE THE BASE64 DEFECTIMAGE DATA AS AN ACTUAL IMAGE FIRST
    // Assuming base64Data is your base64 string
    const base64Data = "YOUR_BASE64_ENCODED_STRING_HERE";

    // Remove the prefix if it exists (e.g., "data:image/png;base64,")
    const base64Image = base64Data.replace(/^data:image\/\w+;base64,/, "");

    fs.writeFileSync('outputImage.png', base64Image, {encoding: 'base64'}); 
    */
    });
  });

/* GET carpark defects */
router.get('/defects/:ppCode?', function(req, res) {
    const ppCode = req.params.ppCode;
    
    let sql = "SELECT * FROM defects";
    let values = [];

    // If a specific carpark ID is specified (ppCode) then adjust the SQL query
    if (ppCode) {
        sql += " WHERE ppCode = ?";
        values.push(ppCode);
    }

    pool.query(sql, values, function(err, results) {
        if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send('Failed to fetch defects.');
            return;
        }
        
        res.json(results);
    });
});

/* GET carpark availability */
router.get('/carpark-availability/:ppCode', async function(req, res) {
    const url = 'https://www.ura.gov.sg/uraDataService/invokeUraDS?service=Car_Park_Availability';
    const ppCode = req.params.ppCode;
    
    try {
        /*
        const response = await axios.get(url, {
            headers: {
                'AccessKey': ACCESS_KEY,
                'Token': TOKEN
            }
        });

        // Get all entries relared to the carpark
        const relatedCarparks = response.data.Result.filter(park => park.carparkNo === ppCode);

        // Extract lotsAvailable for carparks and motorcycles
        const carLots = relatedCarparks.find(park => park.lotType === 'C')?.lotsAvailable || "0";
        const motorcycleLots = relatedCarparks.find(park => park.lotType === 'M')?.lotsAvailable || "0";
        */

        // Get carpark details from database
        pool.query("SELECT * FROM carpark_details WHERE ppCode = ?", [ppCode], function (err, results) {
            if (err) {
                console.error("Error fetching data from database:", err);
                res.status(500).send('Failed to fetch car park details.');
                return;
            }

            // Combine the carpark details with carLots and motorcycleLots
            if (results.length > 0) {
                const carparkDetails = results[0];
                carparkDetails.carLotsAvailable = carLots;
                carparkDetails.motorcycleLotsAvailable = motorcycleLots;
                res.json(carparkDetails);
            } else {
                res.status(404).send('Car park not found in the database.');
            }
        });

    } catch (error) {
        res.status(500).send('Failed to fetch car park details.');
    }

});



function saveDataToFile(data, filename) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 4)); // 4 spaces for indentation
}

module.exports = router;