const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username:{
    type: String,
    required: [true, "Please Enter a username"]
  }
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema)