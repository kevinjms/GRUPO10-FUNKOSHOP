function adminMiddleware(req, res, next) {
    if(req.session.user && req.session.user.types_id == 1) {
       return next()
    } 
    return res.redirect('/');
}

module.exports = adminMiddleware;