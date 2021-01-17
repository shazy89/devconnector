const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
// next is the callback. we have to call it when we are done so movext to the next pice of midleware
 const token = req.header('x-auth-token');
 
};