const { Reservation, User, Flight } = require('../models');
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
      const {numTickets, partyNum, name, flight } = req.body;
      //create the reservation
      const reservation = await Reservation.create({numTickets, partyNum, name, flight})
      //when we move into production with front end pass in req.session.user._id
      //find the user that's logged in, and push the newly created reservation to that item
        const updatedUser =  await User.findOneAndUpdate({}, {$push: {
          reservations: reservation._id
        }}, {new: true})
        console.log(updatedUser)
        //pass in flight._id
        //find the flight by _id, set the current reservations to the new number based on the new reservation
        const updatedFlight = await Flight.findOneAndUpdate({}, {$set:{
          currentReservations: 10
        }})
    
        console.log("schnitzel", updatedFlight);
      // const result = await reservation.save()
      res.json(reservation);
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