const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models/user')
const dotenv = require('dotenv')
 
passport.use(
User.createStrategy()
)

passport.use(new FacebookStrategy({
  clientID: '1929218793918754',
  clientSecret: 'ad7aa9235f311b6e7c3bfd7291afcadd',
  callbackURL: 'http://localhost:3001/auth/facebook/callback'
},
function(accessToken, refreshToken, profile, done){
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile)
  User.findOne({facebookId: profile.id}, (err, user) => {
    if(err) {
      return done(err, false, {message: err});
    } else {
      if (user !== '' && user !== null) {
        return done(null, user, {message: user})
    } else {
      console.log(profile)
      let password = 'password1234'
      let userData = new User({
        username: profile.displayName,
        email: "test_email@gmail.com",
        facebookId: profile.id
      })

      User.register(userData, password)
    }
    } 
  })
}))
passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

module.exports = passport