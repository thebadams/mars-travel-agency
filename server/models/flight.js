const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  flightNum: String,
  aircraftType: String,
  date: {
    type: Date,
    default: Date.now
  },
  seatingClass: String,
  flightTime: Number,
  boardingTime: Number,
  seatNumber: String,
  currentReservations: Number,
  departure: String,
  arrival: String,
  captain: String
});

flightSchema.methods.setFlightNum = function() {
  this.flightNum = uuidv4();
}

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;


