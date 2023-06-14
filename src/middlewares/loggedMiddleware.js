function loggedMiddleware(req, res, next) {
    if(req.session.user) {
        return res.redirect('/users/profileForm');
    }
    next();
}

module.exports = loggedMiddleware;