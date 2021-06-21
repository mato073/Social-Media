const jwt = require('jsonwebtoken')

exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, data) => {
        if (err) return res.sendStatus(403);
        req.id = data.id;
        req.role = data.role;
        next();
    });
}