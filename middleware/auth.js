const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function async(req, res, next) {
  // next is the callback. we have to call it when we are done so movext to the next pice of midleware
  // get the token from header
  const token = req.header("x-auth-token");
    
  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  
  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
