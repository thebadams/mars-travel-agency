const express = require('express');
const path = require('path')
const session = require('express-session')
const passport = require('./config/passport');
const mongoose = require('./config/mongoose')
const MongoDBStore = require('connect-mongo')
const User = require('./models/user');
const Flight = require('./models/flight');
const Reservation = require('./models/reservation');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost/music-reviews',
// {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true})
// .then(() => console.log('Connected to MongoDb'))
// .catch(err => console.error('Error connecting to MongoDb!', err));


//body parser
app.use(express.json())
//if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,"../client/build")))
//}

// const routes = require("./controllers/flightsController");
// app.use(routes);



//set up session
const secret = "General"
const dbURL = 'mongodb://localhost:27017/marstravelDB'
const store =  MongoDBStore.create({
  mongoUrl: dbURL,
    secret,
    touchAfter: 24 * 60 * 60
})
app.use(session({
  store,
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))

//initialize passport
app.use(passport.initialize())
//tell passport to use session
app.use(passport.session())
// const localStrategy = require('passport-local').Strategy;
// // const User = require('../models/user')
app.use(routes);
// passport.use(new localStrategy(
// User.authenticate()

// ))

// passport.serializeUser(User.serializeUser());

// passport.deserializeUser(User.deserializeUser());
// app.use(passport.session());

app.post('/api/flight', async (req, res) => {
  const { totalSeats, currentReservations  } = req.body;
  //create a new flight
  const flight = new Flight({totalSeats, currentReservations});
  //set the flight num
  flight.setFlightNum();
  flight.setAbbreviation()
  //create the flight using the data in the flight object
  try {
    const flightData = await Flight.create(flight);
    res.json(flightData)
  } catch (error) {
    res.json(error)
  }
  
})

app.get('/api/flight', async (req, res) => {
// if a query comes through, it's stored in req.query
if(req.query){
  const flightData = await Flight.find(req.query)
  res.json(flightData)
} else {
  const allFlights = await Flight.find({});
  res.json(allFlights)
}
})

app.post('/api/reservation', async (req, res) => {
  const {numTickets, partyNum, name, flight } = req.body;
  //create the reservation
  const reservation = await Reservation.create({numTickets, partyNum, name, flight})
  //when we move into production with front end pass in req.session.user._id
  //find the user that's logged in, and push the newly created reservation to that item
    const updatedUser =  await User.findOneAndUpdate({}, {$push: {
      reservations: reservation._id
    }}, {new: true})
    console.log(updatedUser)
    //pass in flight._id
    //find the flight by _id, set the current reservations to the new number based on the new reservation
    const updatedFlight = await Flight.findOneAndUpdate({}, {$set:{
      currentReservations: 10
    }})

    console.log(updatedFlight);
  // const result = await reservation.save()
  res.json(reservation);
})

//create new user using the local strategy


//login with local strategy using the passport.authenticate middleware





//facebook authorization
//run the facebook authorization using the authenticate middleware, ask for email scope

//run call back, redirect if successful
//if(process.env.NODE_ENV === 'production'){
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})
//}

app.listen(PORT, ()=> {
  console.log(`Listening on ${PORT}`)
})