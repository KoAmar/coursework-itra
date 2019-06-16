const jwt = require('jsonwebtoken');
var config = require('../../config.json');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, config.JWT_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed, possibly you need to relogin'
        });
    }
};