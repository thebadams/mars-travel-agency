const router = require('express').Router();
const Review = require('../models/Review');
const Comment = require('../models/Comment');

router.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort('name');
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/api/reviews/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) return res.status(404).json({ message: 'Temporary error message goes here'});

    res.status(200).json(review);

  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post('/api/reviews', async (req, res) => {
  try {
    let review = new Review(req.body);

    const result = await review.save();
    console.log(result);

    res.status(200).json(review);


  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.put('/api/reviews', async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, {
      author: req.body.author,
      comment: req.body.comment,
      comment_body: req.body.comment_body,
      comment_date: req.body.comment_date
    }, { new: true });

    if(!review) res.status(404).json({ message: 'Your customer error message goes here'});

    res.status(200).json(review);

  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.delete('/api/reviews/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndRemove(req.params.id);

    if(!review) res.status(404).json({ message: 'Your customer error message goes here'});

    res.status(200).json(review);

  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});