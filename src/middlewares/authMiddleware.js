function authMiddleware(req, res, next) {
    if(!req.session.user) {
        return res.redirect('/users/loginForm');
    }
    next();
}

module.exports = authMiddleware;