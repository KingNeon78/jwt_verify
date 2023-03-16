const jwt = require('jsonwebtoken');

module.exports.VerifyToken = ( req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, 'secret' , (err, user) =>{
            if(err) res.status(403).json("invalid Token");
            req.user = user;
            next();
        });

    } else {
        return res.status(401).json("Token Not Verify ");
    }
};