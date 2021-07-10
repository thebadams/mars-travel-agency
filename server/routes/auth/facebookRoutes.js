const router = require('express').Router();

router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect: 'http://localhost:3000/failure'}), (req, res) => {
  res.redirect('http://localhost:3000/success')
})

module.exports = router;
