// availabilityRoutes.js
const express = require('express');
const router = express.Router();
const ParkingLot = require('../models/parkingLotModel');

router.get('/', async (req, res) => {
  try {
    // Get unique days and times for dropdowns
    const uniqueDays = await ParkingLot.distinct('Weekday');
    const uniqueLots = await ParkingLot.distinct('Lot Name');

    res.render('availability', { parkingLots: [], days: uniqueDays, lots: uniqueLots, selectedDay: undefined, selectedLot: undefined });
  } catch (error) {
    console.error('Error loading data:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/search', async (req, res) => {
  const { day, lotName } = req.body;

  try {
    // Get unique days and times for dropdowns
    const uniqueDays = await ParkingLot.distinct('Weekday');
    const uniqueLots = await ParkingLot.distinct('Lot Name');

    // Search for parking lots based on lotName and day
    const result = await ParkingLot.find({
      'Lot Name': lotName,
      Weekday: day,
    }).lean();

    // Pass parkingLots in the rendering function
    res.render('availability', { parkingLots: result, days: uniqueDays, lots: uniqueLots, selectedDay: day, selectedLot: lotName });
  } catch (error) {
    console.error('Error searching for parking lots:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
