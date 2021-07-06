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
      console.log(user)
      if (user !== '' && user !== null) {
        return done(null, user, {message: user})
    } else {
      const email = axios.get(`https://graph.facebook.com/v11.0/me?fields=id%2Cname%2Cemail&access_token=${accessToken}`).then(response=>{

      console.log(response.data)
      return response.data.email
    }).then(email => {
      let password = 'password1234'
      let userData = new User({
        username: profile.displayName,
        email: email,
        facebookId: profile.id
      })
      User.register(userData, password)
    })
 
    }
    } 
  })
}))
passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

module.exports = passport