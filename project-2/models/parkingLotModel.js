const mongoose = require('mongoose');
const { Schema } = mongoose;

const parkingLotSchema = new Schema({
  Weekday: {
    type: String,
    required: true,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  'Lot Name': {
    type: String,
    required: true,
  },
  'Lot Code': {
    type: String,
    required: true,
  },
  '7:00 AM': {
    type: String,
    required: true,
  },
  '11:00 AM': {
    type: String,
    required: true,
  },
  '1PM / 2PM': {
    type: String,
    required: true,
  },
  '4:00 PM': {
    type: String,
    required: true,
  },
});

const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);

module.exports = ParkingLot;

