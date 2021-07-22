const { v4: uuidv4 } = require('uuid');
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
      flightNum: uuidv4(),
      aircraftType: "Falcon-9",
      seatingClass: "Economy",
      flightTime: 300,
      boardingTime: 1500,
      seatNumber: "14A",
      gateNumber: "10B",
      currentReservations: 9,
      departure:  "Kennedy Space Center - Cape Canaveral, Florida",
      abbreviation: "KSC",
      arrival: "Mars",
      captain: "Sarah",
      src: "https://res.cloudinary.com/teepublic/image/private/s--D9DM0A_l--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1559158431/production/designs/4953822_0.jpg",
      style: {
        height: "51px",
        margin: "22px 12px"
        },
      label: "rgb(13, 28, 83)",
    },
    {
      flightNum: uuidv4(),
      aircraftType: "Inspiration4",
      seatingClass: "First",
      flightTime: 300,
      boardingTime: 1700,
      seatNumber: "5A",
      gateNumber: "2A",
      currentReservations: 2,
      departure:  "Vandenberg Air Force Base - AFB, California",
      abbreviation: "VAFB",
      arrival: "Mars",
      captain: "Lucy",
      src: "https://militarybase.net/wp-content/uploads/2019/02/Vandenberg-Air-Force-Base-California.png",
      style: {
        height: "46px",
        margin: "34px 16px"
        },
      label: "rgb(90, 5, 49)"
    },
    {
      flightNum: uuidv4(),
      aircraftType: "Falcon-9",
      seatingClass: "Economy",
      flightTime: 300,
      boardingTime: 2000,
      seatNumber: "15A",
      gateNumber: "21D",
      currentReservations: 4,
      departure:  "SpaceX South Texas - Cameron County, Texas",
      abbreviation: "SX",
      arrival: "Mars",
      captain: "Roger",
      src: "https://p.kindpng.com/picc/s/474-4746211_spacex-falcon-9-spacex-logo-hd-png-download.png",
      style: {
        height: "43px",
        margin: "31px 22px"
        },
      label: "rgb(230, 26, 56)"
    },
    {
      flightNum: uuidv4(),
      aircraftType: "Space Shuttle U.S.",
      seatingClass: "Economy",
      flightTime: 300,
      boardingTime: 0900,
      seatNumber: "30A",
      gateNumber: "7C",
      currentReservations: 6,
      departure:  "Wallops Flight Facility - Wallops Island, VA",
      abbreviation: "WFF",
      arrival: "Mars",
      captain: "Bill",
      src: "https://www.wallopsisland.org/wp-content/uploads/2016/06/747px-Nasa_Wallops_Flight_Facility_Insignia.svg.png",
      style: {
        height: "46px",
        margin: "22px 20px"
        },
        label: "rgb(252, 178, 50)"
    },
    {
      flightNum: uuidv4(),
      aircraftType: "Electron",
      seatingClass: "First",
      flightTime: 300,
      boardingTime: 1200,
      seatNumber: "1A",
      gateNumber: "14D",
      currentReservations: 1,
      departure:  "Launch Complex 1 - Mahia, New Zealand",
      abbreviation: "LC1",
      arrival: "Mars",
      captain: "Michael",
      src: "https://spaceexplored.com/wp-content/uploads/sites/10/2021/03/Screen-Shot-2021-03-22-at-2.03.28-PM.png",
      style: {
        height: "51px",
        margin: "22px 12px"
        },
      label: "rgb(13, 28, 83)"
    },
    
  ])
  return seedData;
};

seedDb();
