const db = require('../database/models')

function recordameMiddleware(req, res, next) {
    console.log(req.session)
    if (req.cookies.recordame != undefined && req.session.user == undefined) {
        console.log('hola')
        const userCookie = ''
        const users = db.User.findAll()
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.cookies.recordame) {
                userCookie = users[i]
            }
        }
        req.session.user = userCookie
    }
    next();
}

module.exports = recordameMiddleware