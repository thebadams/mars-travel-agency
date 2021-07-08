const express = require('express');
const mongoose = require('mongoose');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(reviewRoutes);



mongoose.connect('mongodb://localhost/music-reviews',
{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true})
.then(() => console.log('Connected to MongoDb'))
.catch(err => console.error('Error connecting to MongoDb!', err));

app.listen(PORT, ()=> {
  console.log(`Listening on ${PORT}`)
})