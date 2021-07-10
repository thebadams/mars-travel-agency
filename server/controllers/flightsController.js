const db = require('../models');


module.exports = {
  findAll: function (req,res) {
    db.Flight
    .find(req.query)
    .sort({ name: 1})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  findById: function (req,res) {
    db.Flight
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  create: function (req,res) {
    db.Flight
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    db.Flight
    .findOneAndUpdate({ _id: req.params.id}, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    db.Flight
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  }
};