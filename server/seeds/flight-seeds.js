
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
      aircraftType: "Falcon-9",
      seatingClass: "Economy",
      flightTime: 300,
      boardingTime: 1500,
      seatNumber: "14A",
      currentReservations: 9,
      departure:  "Kennedy Space Center - Cape Canaveral, Florida",
      arrival: "Mars",
      captain: "Sarah",
    },
    {
      aircraftType: "Inspiration4",
      seatingClass: "First",
      flightTime: 300,
      boardingTime: 1700,
      seatNumber: "5A",
      currentReservations: 2,
      departure:  "Johnson Space Center - Houston, Texas",
      arrival: "Mars",
      captain: "Lucy",
    },
    {
      aircraftType: "Falcon-9",
      seatingClass: "Economy",
      flightTime: 300,
      boardingTime: 2000,
      seatNumber: "15A",
      currentReservations: 4,
      departure:  "Vandenberg Space Launch Complex 4 - Vandenberg Space Force Base, California",
      arrival: "Mars",
      captain: "Roger",
    },
    {
      aircraftType: "Falcon-9",
      seatingClass: "Economy",
      flightTime: 300,
      boardingTime: 0900,
      seatNumber: "30A",
      currentReservations: 6,
      departure:  "Kennedy Space Center - Cape Canaveral, Florida",
      arrival: "Mars",
      captain: "Bill",
    },
    {
      aircraftType: "Inspiration4",
      seatingClass: "First",
      flightTime: 300,
      boardingTime: 1200,
      seatNumber: "1A",
      currentReservations: 1,
      departure:  "Johnson Space Center - Houston, Texas",
      arrival: "Mars",
      captain: "Michael",
    },
    
  ])
  return seedData;
};

seedDb();
