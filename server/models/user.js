const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "Please Enter a First Name"]
    },
    lastName: {
        type: String,
        required: [true, "Please Enter a Last Name"]
    },
    email: {
        type: String,
        required: [true, "please enter an email"]
    },
    facebookId: {
        type: String
    },
    reservations: [{
        type: Schema.Types.ObjectId,
        ref: "Reservation"
    }],
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