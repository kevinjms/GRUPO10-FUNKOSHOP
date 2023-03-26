const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../public/data/products.json');
function getProducts() {
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
};


const controller = {
    list: (req, res) => {
        const products = getProducts();
        res.render('products', { products }
        );
    },
    detail: (req, res) => {
        const { id } = req.params;
        const products = getProducts();
        const product = products.find((element) => element.id === +id);
        res.render('detail', { product });
    },
    create: (req, res) => {
        res.render('creacion-de-productos');
    },
    edit: (req, res) => {
        res.render('edicion-de-productos');
    },
    delete: (req, res) => {
        res.render();
    }
}

module.exports = controller;

