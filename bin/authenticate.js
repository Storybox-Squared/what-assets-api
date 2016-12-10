var jwt = require('jsonwebtoken');

var authenticate = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, 'secret', function (err, decoded) {
            if (err) {
                return res.json({success: false, message: "Access denied."});
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({success: false, message: "No token provided."});
    }
};

module.exports = authenticate;