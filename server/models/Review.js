const mongoose = require('mongoose');
const { commentSchema } = require('./Comment');

const reviewSchema = new mongoose.Schema({
  title:{
    type: String,
    trim: true
  },
  reviewedItem: {
    type: String,
    trim: true,
    minlength: 50,
  },
  rating: {
    type: Number,
  },
  comments: {
    type: [ commentSchema ],
  },
  date_created: {
    type: Date,
    defauklt: Date.now
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;