const router = require('express').Router();
const passport = require('../../config/passport')
router.get('/', passport.authenticate('facebook', {scope: ['email']}));

router.get('/callback', passport.authenticate('facebook', {failureRedirect: 'http://localhost:3000/failure'}), (req, res) => {
  res.redirect('http://localhost:3000/success')
})

module.exports = router;
