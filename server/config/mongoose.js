const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/musicreviewsocialDB')

module.exports = mongoose;
