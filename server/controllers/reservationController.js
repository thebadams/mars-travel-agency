const { Reservation } = require('../models');
const ExpressError = require('../utils/expressError');

module.exports = {
  findAll: async function (req, res) {
    try {
      const reservations = await Reservation.find(req.query)
      if(!reservations) {
        throw new ExpressError(404, "No Reservation Found")
      } else {
        res.status(200).json(reservations)
      }
    } catch (error) {
      res.json({
        status: error.statusCode,
        message: error.message
      })
    }
  },
  findById: async function (req, res) {
    try {
      const reservations = await Reservation.findById(req.params.id)
      if(!reservations) {
        throw new ExpressError(404, "No Reservation Found")
      } else {
        res.status(200).json(reservations)
      }
    } catch (error) {
      res.json({
        status: error.statusCode,
        message: error.message
      })
    }
  },
  create: async function (req, res) {
    try {
     const reservation = await Reservation.create(req.body)
     res.status(200).json(reservation);
    } catch (error) {
      res.json({
        status: error.statusCode,
        message: error.message
      })
    }
  },
  update: async function (req, res) {
    try {
      const reservations = await Reservation.findOneAndUpdate({_id: req.params.id}, req.body)
      if(!reservations) {
        throw new ExpressError(404, "No Reservation Found")
      } else {
        res.status(200).json(reservations)
      }
    } catch (error) {
      res.json({
        status: error.statusCode,
        message: error.message
      })
    }
  },
  remove: async function (req, res) {
    try {
      const reservations = await Reservation.findById({_id: req.params.id})
      if(!reservations) {
        throw new ExpressError(404, "No Reservation Found")
      } else {
        res.status(200).json(reservations)
      }
      const removedReservation = await Reservation.remove();
      res.status(200).json(removedReservation);
    } catch (error) {
      res.json({
        status: error.statusCode,
        message: error.message
      })
    }
  }


};