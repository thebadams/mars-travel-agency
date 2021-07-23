const router = require('express').Router();
const passport = require('../../config/passport')

router.get('/', passport.authenticate('facebook', {scope: ['email']}));

router.get('/callback', passport.authenticate('facebook', {failureRedirect: '/signin'}), (req, res) => {
  req.user ? console.log("Yes") : console.log("No")
  req.session.user = req.user
  res.redirect('/profile')
})

module.exports = router;
