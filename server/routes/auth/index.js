const router = require('express').Router();
const localRoutes = require('./localRoutes');
const facebookRoutes = require('./facebookRoutes');
const googleRoutes = require('./googleRoutes')
router.use('/local', localRoutes)
router.use('/facebook', facebookRoutes);
router.use('/google', googleRoutes)

router.get('/logout', function(req, res){
  console.log('Loggin Out')
  req.logout();
  req.session.destroy()
  res.json({
    message: "You have been successfully logged out",
    user: {}
  }).redirect('http://localhost:3000/');
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
