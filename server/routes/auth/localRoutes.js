const router = require('express').Router();

router.post('/register', async (req, res) => {
  console.log(req.body)
  const {email, firstName, lastName, password} = req.body;
  //pass in the user's email, username
  const user = new User({email, firstName, lastName});
  //create hte user, by passing in the user object and the password to the register method
  try {
      const registered = await User.register(user, password);
      req.logIn(registered, (error) => {
        error ? res.json(error) : console.log(registered)
      });
      console.log(req.user)
      req.session.user = req.user
      console.log(req.session.user)
      res.json(registered)
  } catch (error) {
    res.json(error)
  }

})

router.post('/auth/local/login', passport.authenticate('local'), (req, res) => {
  req.session.user = req.user
  res.json(req.user)
});

