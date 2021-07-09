const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // const token = req.headers.authorization.split(' ')[1];
        const token = req.headers['x-access-token'];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        if(req.body.userId && req.body.userId != userId) { //si on a un userId dans le corps de la requête et que celui-ci est différent du userId
            throw 'User ID non valable !';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée' })
    }
};