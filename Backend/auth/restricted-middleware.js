const jwt = require('jsonwebtoken');
const secrets = require('../secrets/secrets.js')

module.exports = (req, res, next) => {
const token = req.headers.authorization;
if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: 'Invalid request' })
        } else {
            req.decodedJwt = decodedToken;
            next()
        }
    })
}else{
    res.status(401).json({ message: 'Invalid credentials' })
}
}