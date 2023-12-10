const express = require('express');
const mongoose = require('mongoose');
const ParkingLot = require('./models/parkingLotModel'); // Update the model import
const fs = require('fs');

const app = express();

// Middleware for parsing JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

// Routes
const availabilityRoutes = require('./routes/availabilityRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');
const homeRoutes = require('./routes/homeRoutes.js');

// Other pages
app.use('/availability', availabilityRoutes);
app.use('/admin', adminRoutes);
// Sets homepage
app.use('/', homeRoutes);

app.set('view engine', 'ejs');

require('dotenv').config();
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('ByGOD we have connected to DB');

  // Call the function to insert data from lots.json
 // insertLotsData();
});

// Function to read lots.json and insert data into MongoDB
/** function insertLotsData() {
  fs.readFile('lots.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading lots.json:', err);
      return;
    }
    const lotsData = JSON.parse(data);
// Clear existing data in the collection before inserting new data

ParkingLot.deleteMany({})
  .then(() => {
    // Insert new data into MongoDB
    return ParkingLot.insertMany(lotsData);
  })

  .catch((error) => {
    console.error('Error deleting or inserting data into MongoDB:', error);
  });

  });
} */

app.listen(80, () => {
  console.log(`Server Welcomes you at ${80}`);
});
