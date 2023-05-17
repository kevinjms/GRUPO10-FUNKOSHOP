const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const controller = {
    list: (req, res) => {
        db.Product.findAll()
        .then((result) => {
            res.render('products', { products:result })
        })
        .catch()
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include:  [{association: "categories"}, {association: "subcategories"}, {association: "images"}]
        })
        .then(function(product) {
            res.render('detail', { product:product, inSale });
        })
    },
    create: (req, res) => {
        res.render('productsCreate');
    },
    save: (req, res) => {
        db.Product.create({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category,
            subcategory: req.body.subcategory,     
            price: req.body.price
        })
        res.redirect('/products');
    },
    edit: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(function([product]) {
            res.render('editProducts', {product} );
        })
    },
    update: (req, res) => {
        db.Product.update({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category,
            subcategory: req.body.subcategory,     
            price: req.body.price
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products' + req.params.id)
        }
    ,    
    destroy: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products');
    }
}

module.exports = controller;

