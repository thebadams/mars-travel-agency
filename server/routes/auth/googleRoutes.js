const router = require('express').Router();
const passport = require ('../../config/passport');

router.get('/', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email']}))

router.get('/callback', passport.authenticate('google', {failureRedirect: '/failure'}), (req, res)=> {
  res.redirect('/success')
})

module.exports = router;
