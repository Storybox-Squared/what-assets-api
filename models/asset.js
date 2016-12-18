var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AssetSchema = new Schema({
    asset_name: String,
    serial_number: String,
    barcode: String,
    description: String,
    brand: String,
    model: String,
    location: String,
    age: String,
    value: String,
    owner: String,
    loan_expiry: String,
    use: String
});

module.exports = mongoose.model('Asset', AssetSchema);