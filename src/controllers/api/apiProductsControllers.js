const db = require('../../database/models')

const apiProductsControllers = {
    list: (req, res) => {
        db.Product.findAll({ include: { model: db.Image, as: 'images' } })
            .then((products) => {
                res.json(products)
            })
            .catch((error) => {
                res.send(error)
            })
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {include: [{ association: "categories" }, { association: "subcategories" }, { association: "images" }]})
            .then((product) => {
                res.json(product)
            })
            .catch((error) => {
                res.send(error)
            })
    }
}

module.exports = apiProductsControllers