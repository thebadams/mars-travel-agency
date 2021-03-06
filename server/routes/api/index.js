const router = require('express').Router();
const bookingRoutes = require('./bookingRoutes');
const reservationRoutes = require('./reservationRoutes');

router.use('/booking', bookingRoutes);
router.use('/reservation', reservationRoutes);

module.exports = router;