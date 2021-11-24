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
  gateNumber: String,
  currentReservations: Number,
  departure: String,
  abbreviation: String,
  arrival: String,
  captain: String,
  src: String,
  style: Object,
  label: String,
});

flightSchema.methods.setFlightNum = function() {
  this.flightNum = uuidv4();
}

flightSchema.methods.setAbbreviation = function() {
  this.abbreviation = this.departure.split('-')[0].trim().split(' ').map(el=>el.charAt(0)).join('')
}

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;


