const {Flight} = require('../models');
const ExpressError = require('../utils/expressError')

module.exports = {
  findAll: async function (req,res) {
  
    try {
      const flights = await Flight.find(req.query).sort({name: 1})
      if(!flights) {
        throw new ExpressError(404, "No Flights Found")
      } else {
        res.status(200).json(flights)
      }

    } catch (error) {
      res.json({
        status: error.statusCode,
        message: error.message
      })
    }
  },
  findById: async function (req,res) {
    try {
      const flight = await Flight.findById(req.params.id)
      if(!flight) {
        throw new ExpressError(404, "No Flight Found");
      } else {
        res.status(200).json(flight);
      }
    } catch (error) {
      res.json({status: error.statusCode,
      message: error.message})
    }
  },
  create: async function (req,res) {
    try {
      const flight = new Flight.create(req.body)
      flight.setFlightNum()
      flight.setAbbreviation()
      res.status(200).json(flight)
    } catch (error) {
      res.status(422).json(error)
    }
  },
  update: async function (req, res) {
    try {
      const flight = await Flight.findOneAndUpdate({_id: req.params.id}, req.body)
      if(!flight) {
        throw new ExpressError(404, "No Flight Found With that ID")
      }
    } catch (error) {
      res.json({statusCode: error.statusCode,
      message: error.message})
    }
  },
  remove: async function (req, res) {
    try {
      const flight = await Flight.findById({_id: req.params.id})
      if(!flight){
        throw new ExpressError(404, "No flight found");
      }
      const removedFlight = await flight.remove();
      res.status.json(removedFlight);
    } catch (error) {
      res.json({statusCode: error.statusCode, message: error.message})
    }
}
};