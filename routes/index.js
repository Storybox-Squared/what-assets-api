var express = require('express');
var passport = require("passport");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.json({ success: true, message: "Welcome to what-assets."});
});

module.exports = router;
