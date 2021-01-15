const express = require('express');
const router = express.Router();
const { check, validationResult} = require('express-validator')

// @route  GET api/users 
// @desc   Register user
// @access Public
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('User route')});

module.exports = router;