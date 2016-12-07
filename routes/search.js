var express = require('express');
var router = express.Router();

/* GET search results. */
router.get('/', function (req, res, next) {
    return res.json({
        success: true,
        message: "",
        data: [{_id: 11, asset_name: req.query['asset_name']}, {_id: 12, asset_name: req.query['asset_name']}]
    });
});

module.exports = router;
