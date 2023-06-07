const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const {Op} = require('sequelize')

const controller = {
    search: (req, res) => {
        db.Product.findAll({
            where: { 
                [Op.or]:[
                    {name: { [Op.like]: "%" + req.query.query + "%" } },
                    {"$categories.name$": { [Op.like]: "%" + req.query.query + "%" } }
                ]
            }, 
             include: [{ model: db.Image, as: 'images' },
             { model: db.Category, as: 'categories' }] })
            .then((result) => {
                res.render('products', { products: result })
            })
            .catch()
    },
    list: (req, res) => {
        db.Product.findAll({ include: { model: db.Image, as: 'images' } })
            .then((result) => {
                res.render('products', { products: result })
            })
            .catch()
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{ association: "categories" }, { association: "subcategories" }, { association: "images" }]
        })
            .then(function (product) {
                res.render('detail', { product: product, inSale: [product] });
            })
    },
    create: async (req, res) => {
        const categories = await db.Category.findAll();
        const subcategories = await db.Subcategory.findAll();
        res.render('productsCreate', { categories, subcategories });
    },
    save: async (req, res) => {
        const product = await db.Product.create({
            name: req.body.name,
            description: req.body.description,
            product_categories_id: req.body.category,
            product_subcategories_id: req.body.subcategory,
            price: req.body.price
        });
        if (req.file) {
            db.Image.create({ 
                url: req.file.filename,
                isPrimary: true,
                products_id: product.id
            })
        }
        console.log(req.file)
        res.redirect('/products');
    },
    edit: async (req, res) => {
        const categories = await db.Category.findAll();
        const subcategories = await db.Subcategory.findAll();
        db.Product.findByPk(req.params.id, {include: [{ association: "categories" }, { association: "subcategories" }, { association: "images" }]})
            .then(function (product) {
                res.render('editProducts', { categories, subcategories, product });
            })
    },
    update: async (req, res) => {
        const product = await db.Product.update({
            name: req.body.name,
            description: req.body.description,
            product_categories_id: req.body.category,
            product_subcategories_id: req.body.subcategory,
            price: req.body.price
        }, {
            where: {
                id: req.params.id
            }
        })
        if (req.file) {
            const image = await db.Image.findOne({ where: { products_id: product.id } })
            image.url = req.file.filename;
            image.save()
        }
        res.redirect('/products/detail/' + req.params.id)
    }
    ,
    destroy: async (req, res) => {
        await db.Image.destroy({
            where: {
                products_id: req.params.id
            }
        })

        await db.Product.destroy({
            where: {
               id: req.params.id 
            }
        })
        res.redirect('/products');
    }
}

module.exports = controller;

