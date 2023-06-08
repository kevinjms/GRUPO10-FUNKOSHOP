const path = require('path');
const fs = require('fs');
const db = require('../database/models')
const {Op} = require('sequelize')

const productsFilePath = path.join(__dirname, '../data/products.json');
function getProducts() {
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
};

const controller = {
    index: (req, res) => {
        const products = getProducts();
        const visited = products.filter((product) => product.subcategory == 'visited');
        const inSale = products.filter((product) => product.subcategory == 'in-sale');
        res.render('index', { visited, inSale });
    },
    car: (req, res) => {
        const products = getProducts();
        const visited = products.filter((product) => product.subcategory == 'visited');
        res.render('carrito-de-compras', { visited });
    }, 
    us: (req, res)  => {
        res.render('aboutUs');
    },
    personalized: (req, res)  => {
        res.render('personalized');
    }
}

module.exports = controller;