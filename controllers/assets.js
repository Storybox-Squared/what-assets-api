var Asset = require('../models/asset');

default_asset = {
    type: null,
    serial_number: null,
    barcode: null,
    description: null,
    brand: null,
    model: null,
    location: null,
    age: null,
    value: null,
    owner: null,
    loan_expires: null,
    use: null
};

attribute_exclusions = ['__v'];

module.exports.getAssetsWithKeys = function (callback) {
    //noinspection JSUnresolvedFunction
    Asset.find().lean().exec(function (err, assets) {
        if (err) callback({keys: [], assets: []});

        var keys = [];
        for (var i = 0; i < assets.length; i++) {
            attribute_exclusions.forEach(function (key) {
                delete assets[i][key]
            });
            Object.keys(assets[i]).forEach(function (key) {
                if (keys.indexOf(key) == -1) {
                    keys.push(key);
                }
            });
        }

        callback({keys: keys, assets: assets});
    });
};

module.exports.getAssets = function (callback) {
    //noinspection JSUnresolvedFunction
    Asset.find().lean().exec(function (err, assets) {
        if (err) callback([]);

        for (var i = 0; i < assets.length; i++) {
            attribute_exclusions.forEach(function (key) {
                delete assets[i][key]
            });
        }

        callback(assets);
    });
};

module.exports.getAssetById = function (id, callback) {
    //noinspection JSUnresolvedFunction
    Asset.findById(id).lean().exec(function (err, asset) {
        if (err) callback(default_asset);

        callback(asset);
    });
};

module.exports.getAssetByBarcode = function (barcode) {
    for (var i = 0; i < assets.length; i++) {
        if (assets[i]['barcode'] == barcode) {
            return assets[i];
        }
    }
    return default_asset;
};

module.exports.getAssetTemplate = function () {
    return default_asset;
};

module.exports.updateAsset = function (updateAsset, callback) {
    //noinspection JSUnresolvedFunction
    Asset.findById(updateAsset['_id'], function (err, asset) {
        if (err) callback(false);
        Object.keys(updateAsset).forEach(function (key) {
            asset[key] = updateAsset[key];
        });

        asset.save(function (err, asset) {
            callback(!err, asset);
        });
    });
};

module.exports.createAsset = function (asset, callback) {
    asset = new Asset(asset);
    //noinspection JSUnresolvedFunction
    asset.save(function (err, asset) {
        callback(!err, asset);
    });
};