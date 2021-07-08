const router = require('express').Router();
const Comment = require('../models/Comment');

router.get('/api/comments', async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/api/comments/:id', async (req, res) => {
  try {} catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post('/api/comments', async (req, res) => {
  try {} catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.put('/api/comments/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, {
      author: req.body.author,
      comment: req.body.comment,
      comment_body: req.body.comment_body,
      comment_date: req.body.comment_date
    }, { new: true });

    if(!comment) res.status(404).json({ message: 'Your customer error message goes here'});

    res.status(200).json(comment);

  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.delete('/api/comments/:id', async (req, res) => {
  try {} catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});