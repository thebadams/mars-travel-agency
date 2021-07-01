const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: {
    type: String
    },
    comment: {
      type: [ String ],
    },
    comment_body: {
      type: String,
      trim: true,
      minlength: 10,
      maxlength: 500
    },
    comment_date: {
      type: Date,
      default: Date.now
    }
});

const Comment = mongoose.model('Comment', commentSchema);

exports.Comment = Comment;
exports.commentSchema = commentSchema;