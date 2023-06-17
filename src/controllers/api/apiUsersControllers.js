const db = require('../../database/models')

const apiUsersControllers = {
    list: (req, res) => {
        db.User.findAll()
            .then((users) => {
                res.json(users)
            })
            .catch((error) => {
                res.send(error)
            })
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then((user) => {
                res.json(user)
            })
            .catch((error) => {
                res.send(error)
            })
    }
}

module.exports = apiUsersControllers