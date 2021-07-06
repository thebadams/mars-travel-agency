const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/marstravelDB')

module.exports = mongoose;
