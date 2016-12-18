var express = require('express');
var router = express.Router();
var assets = require('../controllers/assets');

/* GET assets. */
router.get('/', function(req, res, next) {
    assets.getAssets(function (assets) {
        return res.json({success: true, message: "", data: assets});
    });
});

/* POST assets. */
router.post('/', function (req, res, next) {

    var asset = JSON.parse(JSON.stringify(req.body));

    // create the asset
    assets.createAsset(asset, function (success, asset) {
        if (success) {
            //noinspection JSUnresolvedFunction
            //console.log('Asset created. Asset ID: ' + asset._id);
        } else {
            console.log('Asset failed to create.');
        }
        return res.json({success: true, message: "Asset successfully created.", data: asset});
    });
});

/* PUT assets. */
router.put('/', function (req, res, next) {

    var asset = JSON.parse(JSON.stringify(req.body));

    // update the asset
    assets.updateAsset(asset, function (success, asset) {
        if (success) {
            //noinspection JSUnresolvedFunction
            console.log('Asset updated. Asset ID: ' + asset._id);
        } else {
            console.log('Asset failed to update.');
        }
        return res.json({success: true, message: "Asset successfully updated.", data: asset});
    });
});

/* GET asset. */
router.get('/:id', function (req, res, next) {

    // get asset requested
    assets.getAssetById(req.params.id, function (asset) {
        return res.json({success: true, message: "", data: asset});
    });
});

module.exports = router;
