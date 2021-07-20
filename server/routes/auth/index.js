const router = require('express').Router();
const localRoutes = require('./localRoutes');
const facebookRoutes = require('./facebookRoutes');
const googleRoutes = require('./googleRoutes')

const {User} = require('../../models')
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

router.get('/session', async (req, res) => {
  console.log(req.session.user)
  
  if(req.session.user) {
    const currentUser = await User.findById(req.session.user._id).populate({path:'reservations', populate: {path: 'flight', populate: 'name'}})
    console.log('CURRENT USER', currentUser)
    //find user by id include reservation or get all reservations that have user_id= reservation.name
    res.json({ user: currentUser, loggedIn: true });
  } else {
    res.json({user: {}, loggedIn: false})
    }
  })

module.exports = router;
