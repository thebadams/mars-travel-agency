const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  flightNum: String,
  flightName: String,
  date: {
    type: Date,
    default: Date.now
  },
  totalSeats: Number,
  currentReservations: Number,
  departureLocation: String,
});

flightSchema.methods.setFlightNum = function() {
  this.flightNum = uuidv4();
}

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;


