const router = require('express').Router();
const bookingRoutes = require('./bookingRoutes');

router.use('/booking', bookingRoutes);

module.exports = router;