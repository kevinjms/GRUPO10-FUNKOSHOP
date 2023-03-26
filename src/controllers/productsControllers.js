const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../public/data/products.json');
function getProducts() {
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
};


const controller = {
    detail: (req, res) => {
        res.render('detalle-de-producto');
    },
    create: (req, res) => {
        res.render('creacion-de-productos');
    },
    edit: (req, res) => {
        res.render('edicion-de-productos');
    },
    list:  (req, res) => {
        const products = getProducts();
        res.render('listado-de-productos',
        {products});
    },
    delete: (req, res) => {
        res.render();
    }
}

module.exports = controller;