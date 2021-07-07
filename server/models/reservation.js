const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  numTickets: Number,
  partyNum: Number,
  refundable: {
    type: Boolean,
    default: true
  },
  name: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  flight: {
    type: Schema.Types.ObjectId,
    ref: "Flight"
  }
})

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
