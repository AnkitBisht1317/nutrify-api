const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {

    if (req.headers.authorization !== undefined) {
        let token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if (!err) {
                next();
            }
            else {
                res.status(403).send({ message: "Invalid Token" })
            }
        })
    }
    else {
        res.send({ message: "Please Send Token" })
    }
}

module.exports = verifyToken;
