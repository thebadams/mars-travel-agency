const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username:{
    type: String,
    required: [true, "Please Enter a username"]
  },
  email: {
    type: String,
    required: [true, "please enter an email"]
  },
  // password: {
  //   type: String,
  //   required: [true, "please enter a password"]
  // }
})

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});

const User = mongoose.model('User', userSchema)

module.exports = User;