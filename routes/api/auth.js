const express = require('express');
const router = express.Router();
const auth = require('../../midlaware/auth');
const User = require('../../models/User')
// @route  GET api/auth
// @desc   Test route
// @access Public
router.get('/', auth, async (req, res) => {
  try {
      const user = await User.findById(req.user.id).select('-password') // -password pretend the password from being sent
      res.json(user);
  } catch (error) {
      console.error(err.message)
      res.status(500).send('Server Error');
  };
});

module.exports = router;