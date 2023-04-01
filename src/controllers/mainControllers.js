const path = require('path');
const fs = require('fs');

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
    login: (req, res) => {
        res.render('loginForm');
    },
    register: (req, res) => {
        res.render('register');
    },
    car: (req, res) => {
        res.render('carrito-de-compras');
    },  
}

module.exports = controller;