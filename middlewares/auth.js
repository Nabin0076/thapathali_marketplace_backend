require('dotenv').config();

const jwt = require('jsonwebtoken');
const httpError = require('../error/httpError');

const authenticateUser = async (req, res, next) => {
    try{
        const token = req.signedCookies.token;
        if (!token) {
            throw new httpError("Authentication Invalid", 401);
        }
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(httpError){
        res.send(httpError.msg);
    }

}

module.exports = {
    authenticateUser
}