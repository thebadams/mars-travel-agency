const express = require('express');
const path = require('path')
const session = require('express-session')
const passport = require('./config/passport');

const mongoose = require('./config/mongoose')
const User = require('./models/user');
const Flight = require('./models/flight');
const app = express();
const PORT = 3001



app.use(express.json())
// app.use(express.static(app.use(express.static("client/build"))))


app.use(session({
  secret: "General",
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())
// const localStrategy = require('passport-local').Strategy;
// // const User = require('../models/user')
 
// passport.use(new localStrategy(
// User.authenticate()

// ))

// passport.serializeUser(User.serializeUser());

// passport.deserializeUser(User.deserializeUser());
// app.use(passport.session());

app.post('/api/flight', async (req, res) => {
  const { totalSeats, currentReservations  } = req.body;
  const flight = new Flight({totalSeats, currentReservations});
  flight.setFlightNum();
  try {
    const flightData = await Flight.create(flight);
    res.json(flightData)
  } catch (error) {
    res.json(error)
  }
  
})
app.post('/auth/local/register', async (req, res) => {
  console.log(req.body)
  const {email, username, password} = req.body;
  const user = new User({email, username});
  try {
      const registered = await User.register(user, password);
      res.json(registered)
  } catch (error) {
    res.json(error)
  }

})

app.post('/auth/local/login', passport.authenticate('local'), (req, res) => {
  res.json({message: "hello"})
})
app.get('/test', (req, res) => {
  console.log(req.body)
  res.json({message:"success"})
})

app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/failure'}), (req, res) => {
  res.redirect('/success')
})
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"))
// })

app.listen(PORT, ()=> {
  console.log(`Listening on ${PORT}`)
})