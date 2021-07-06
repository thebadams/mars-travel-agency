const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  flightNum: String,
  date: Date,
  totalSeats: Number,
  currentReservations: Number
});

flightSchema.methods.setFlightNum = function() {
  this.flightNum = uuidv4();
}

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;


