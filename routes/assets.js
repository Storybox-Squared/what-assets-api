var express = require('express');
var router = express.Router();

/* GET assets. */
router.get('/', function(req, res, next) {
    return res.json({
        success: true,
        message: "",
        data: [{_id: 1, asset_name: "Asset name"}, {_id: 2, asset_name: "Asset name"}]
    });
});

/* POST assets. */
router.post('/', function (req, res, next) {
    return res.json({success: true, message: "Asset successfully created.", data: {_id: 8, asset_name: "Asset name"}});
});

/* PUT assets. */
router.put('/', function (req, res, next) {
    return res.json({success: true, message: "Asset successfully updated.", data: {_id: 8, asset_name: "Asset name"}});
});

/* GET asset. */
router.get('/:id', function (req, res, next) {
    return res.json({success: true, message: "", data: {_id: req.params['id'], asset_name: "Asset name"}});
});

module.exports = router;
