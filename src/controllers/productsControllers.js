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
        const id = req.params.id;
        const products = getProducts();
        const product = products.find(product => product.id == id);
        res.render('detail', { product });
    },
    create: (req, res) => {
        res.render('creacion-de-productos');
    },
    edit: (req, res) => {
        res.render('edicion-de-productos');
    },
    destroy: (req, res) => {
    const productIndex = products.findIndex(element => element.id == req.params.id);
        products.splice(productIndex, 1);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/edicion-de-productos');
    }
}

module.exports = controller;

