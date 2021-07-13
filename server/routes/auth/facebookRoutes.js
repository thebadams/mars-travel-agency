const router = require('express').Router();
const passport = require('../../config/passport')

router.get('/', passport.authenticate('facebook', {scope: ['email']}));

router.get('/callback', passport.authenticate('facebook', {failureRedirect: 'http://localhost:3000/signin'}), (req, res) => {
  req.session.user = req.user
  res.redirect('http://localhost:3000/dashboard')
})

module.exports = router;
