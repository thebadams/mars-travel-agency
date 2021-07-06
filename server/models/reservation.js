const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  date: Date,
  numTickets: Number,
  partyNum: Number,
  refundable: Boolean,
  name: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
