const express = require('express');
const router = express.Router();
const ParkingLot = require('../models/parkingLotModel.js');

// Render the admin page with data from the database
router.get('/', async (req, res) => {
  try {
    const parkingLots = await ParkingLot.find();
    res.render('admin', { parkingLots });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Handle form submission to add or update a parking lot entry
// Handle form submission to add or update a parking lot entry
router.post('/manage', async (req, res) => {
  try {
    const { Weekday, lotName, lotCode, am7, am11, pm1, pm4 } = req.body;

    if (!Weekday || !lotName || !lotCode || !am7 || !am11 || !pm1 || !pm4) {
      throw new Error('All fields are required for adding or updating a parking lot entry.');
    }

    // Check if the entry already exists
    const existingLot = await ParkingLot.findOne({ Weekday, 'Lot Name': lotName, 'Lot Code': lotCode });

    if (existingLot) {
      // Update the data for the specified times
      existingLot['7:00 AM'] = am7;
      existingLot['11:00 AM'] = am11;
      existingLot['1PM / 2PM'] = pm1;
      existingLot['4:00 PM'] = pm4;

      await existingLot.save();
    } else {
      // If the entry doesn't exist, create a new one
      const newParkingLot = new ParkingLot({
        Weekday,
        'Lot Name': lotName,
        'Lot Code': lotCode,
        '7:00 AM': am7,
        '11:00 AM': am11,
        '1PM / 2PM': pm1,
        '4:00 PM': pm4,
      });

      await newParkingLot.save();
    }

    res.redirect('/admin');
  } catch (error) {
    console.error('Error managing parking lot:', error);
    res.status(500).send('Failed to manage parking lot. Please try again later.');
  }
});


//// Handle form submission to delete a parking lot entry by Weekday, Lot Name, and Lot Code
router.post('/delete', async (req, res) => {
  try {
    const { Weekday, lotName, lotCode } = req.body;

    if (!Weekday || !lotName || !lotCode) {
      throw new Error('Weekday, Lot Name, and Lot Code are required for deletion.');
    }

    await ParkingLot.findOneAndDelete({ Weekday, 'Lot Name': lotName, 'Lot Code': lotCode });

    res.redirect('/admin');
  } catch (error) {
    console.error('Error deleting parking lot:', error);
    res.status(500).send('Failed to delete parking lot. Please try again later.');
  }
});


module.exports = router;
