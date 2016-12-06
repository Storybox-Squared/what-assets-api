var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ success: true, message: "", data: [{ _id: "1", asset_name: "Asset name" }, { _id: "2", asset_name: "Asset name" }] });
});

module.exports = router;
