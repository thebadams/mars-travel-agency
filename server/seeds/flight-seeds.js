
const Flight = require('../models/flight');
// const db = "mongodb://localhost/music-reviews";
const db = 'mongodb://localhost:27017/marstravelDB';
const mongoose = require("../config/mongoose");

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error Connecting to MongoDb', err));





const seedDb = async () => {
  const seedData = await Flight.insertMany([
    {
      flightName: "Falcon-9",
      totalSeats: 10,
      currentReservations: 4,
      departureLocation: "Kennedy Space Center - Cape Canaveral, Florida"
    },
    {
      flightName: "Starlink-30",
      totalSeats: 10,
      currentReservations: 6,
      departureLocation: "Kennedy Space Center - Cape Canaveral, Florida"
    },
    {
      flightName: "Inspiration4",
      totalSeats: 10,
      currentReservations: 4,
      departureLocation: "Kennedy Space Center - Cape Canaveral, Florida"
    },
    {
      flightName: "Starlink-29",
      totalSeats: 10,
      currentReservations: 3,
      departureLocation: "Kennedy Space Center - Cape Canaveral, Florida"
    },
    {
      flightName: "Falcon-9",
      totalSeats: 12,
      currentReservations: 8,
      departureLocation: "Kennedy Space Center - Cape Canaveral, Florida"
    },
  ])
  return seedData;
};

seedDb();
