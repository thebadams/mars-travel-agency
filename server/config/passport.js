//require passport
const passport = require('passport')
//require strategies
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//import user
const User = require('../models/user')
const dotenv = require('dotenv').config()
const axios = require('axios')
//sets up local strategy
passport.use(
  //shortcut to set up local strategy with local passport mongoose
User.createStrategy()
)
//set up Facebook Strategy
passport.use(new FacebookStrategy({
  //set up options
  clientID: process.env.FACEBOOK_TEST_ID,
  clientSecret: process.env.FACEBOOK_TEST_SECRET,
  callbackURL: 'http://localhost:3001/auth/facebook/callback'
},
//setup facebook authenticate middleware
function(accessToken, refreshToken, profile, done){
  console.log(accessToken);
  console.log(refreshToken);  
  console.log(profile)

 const email = axios.get(`https://graph.facebook.com/v11.0/me?fields=id%2Cname%2Cemail&picture& access_token=${accessToken}`).then(response=> {
   console.log(response.data)
   return response.data.email}).then(email=>{
    User.findOneAndUpdate({email: email}, {$set:{facebookId: profile.id}}, (err, user) => {
    if(err) {
      return done(err, false, {message: err});
    } else {
      console.log(user)
      if (user !== '' && user !== null) {
        //if user exists, return authenticated
        return done(null, user, {message: user})
    } else {
      //if user does not exist get their email
      //set up new user using the information parsed from the facebook data
      //set the password: will set up email to user.
      let password = 'password1234'
      let userData = new User({
        firstName: profile.displayName.split(' ')[0],
        lastName: profile.displayName.split(' ')[1],
        email: email,
        facebookId: profile.id
      })
      //register the data
      User.register(userData, password)
    }
    }
  })
   })

  //find user by facebook id
  
}))

// passport.use( new GoogleStrategy({
//   clientID: '618143945163-cheu1834f1dvfh2r5e860qgj7je481no.apps.googleusercontent.com',
//   clientSecret: 'ds2xVwWuIQIrrLpotq2TvX-Q',
//   callbackURL: 'http://localhost:3001/auth/google/callback'
// },
// function (accessToken, refreshToken, profile, done) {
//   User.findOneAndUpdate({email: profile.email}, (err, user) => {
//     if(err) {
//       return done(err, false, {message: err});
//     } else {
//       if(user!== '' && suer !== null) {
//         return done(null, user, {message: user})
//       } else {
//         let password = 'password1234';
//         let userData = new User({
//           firstName: 
//         })
//       }
//     }
//   })
// }
// ))

//set up serializing method
passport.serializeUser(User.serializeUser());
//set up deserializing method
passport.deserializeUser(User.deserializeUser());

module.exports = passport