const router = require('express').Router();
const localRoutes = require('./localRoutes');
const facebookRoutes = require('./facebookRoutes');
router.use('/local', localRoutes)
router.use('/facebook', facebookRoutes);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('http://localhost:3000/');
});

router.get('/session', (req, res) => {
  if(req.session.user) {
    res.json({ user:req.session.user, loggedIn: true });
  } else {
    res.json({
      loggedIn: false,
      user: {}
    })
  }
})

module.exports = router;
