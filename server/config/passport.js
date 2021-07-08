//require passport
const passport = require('passport')
//require strategies
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy
//import user
const User = require('../models/user')
const dotenv = require('dotenv')
const axios = require('axios')
//sets up local strategy
passport.use(
  //shortcut to set up local strategy with local passport mongoose
User.createStrategy()
)
//set up Facebook Strategy
passport.use(new FacebookStrategy({
  //set up options
  clientID: '1929218793918754',
  clientSecret: 'ad7aa9235f311b6e7c3bfd7291afcadd',
  callbackURL: 'http://localhost:3001/auth/facebook/callback'
},
//setup facebook authenticate middleware
function(accessToken, refreshToken, profile, done){
  console.log(accessToken);
  console.log(refreshToken);  
  console.log(profile)
  //find user by facebook id
  User.findOne({facebookId: profile.id}, (err, user) => {
    if(err) {
      return done(err, false, {message: err});
    } else {
      console.log(user)
      if (user !== '' && user !== null) {
        //if user exists, return authenticated
        return done(null, user, {message: user})
    } else {
      //if user does not exist get their email
      const email = axios.get(`https://graph.facebook.com/v11.0/me?fields=id%2Cname%2Cemail&access_token=${accessToken}`).then(response=>{

      console.log(response.data)
      return response.data.email
    }).then(email => {
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
    })
 
    }
    } 
  })
}))

//set up serializing method
passport.serializeUser(User.serializeUser());
//set up deserializing method
passport.deserializeUser(User.deserializeUser());

module.exports = passport