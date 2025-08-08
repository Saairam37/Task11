const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const auth = {
    isAuthenticated: async(req, res, next) => {
            let token = req.headers['authorization'];
            if(!token){
                return res.status(200).json({ message: 'No token provided' });
            }

            token = token.split(' ')[1];

            jwt.verify(token, JWT_SECRET, (err, decoded) => {
                if(err){
                    return res.status(401).json({ message: 'Invalid token' })
                }

                req.userId = decoded.id;
                next();
            })
    }
}

module.exports = auth;