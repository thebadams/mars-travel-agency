const router = require('express').Router();
const flightsController = require('../../controllers/flightsController');


router.route("/")
.get(flightsController.findAll)
.post(flightsController.create)


router
.route("/:id")
.get(flightsController.findById)
.put(flightsController.update)
.delete(flightsController.remove)



module.exports = router;