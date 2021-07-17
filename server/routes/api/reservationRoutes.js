const router = require('express').Router();
const reservationController = require('../../controllers/reservationController');

router.route("/")
.get(reservationController.findAll)
.post(reservationController.create)

router.route('/:id')
.get(reservationController.findById)
.put(reservationController.update)
.delete(reservationController.remove)

module.exports = router;