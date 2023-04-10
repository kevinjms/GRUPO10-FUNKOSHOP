const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/products.json');
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
        const inSale = products.filter((product) => product.subcategory == 'in-sale');
        res.render('detail', { product, inSale });
    },
    create: (req, res) => {
        res.render('productsCreate');
    },
    save: (req, res) => {
        const image = req.file ? req.file.filename : 'funko-sin-imagen.png';
        const products = getProducts();
        const newProduct = {
            id: products[products.length -1].id +1,
            name: req.body.name,
            description: req.body.description,
            image: image,
            category: req.body.category,
            subcategory: "none",      // por defecto sera "none" en todos los funkos que se creen, si se lo quiere modificar por Destacados u Ofertas, hacerlo en el JSON.
            price: req.body.price     
        }
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/products');
    },
    edit: (req, res) => {
        const id = req.params.id;
        const products = getProducts();
        const product = products.find(product => product.id == id);
        res.render('editProducts', {product} );
    },
    update: (req, res) => {
        const id = req.params.id ;
        const products = getProducts();
        const productIndex = products.findIndex(product => product.id == id);
        const image = req.file ? req.file.filename : products[productIndex].image ;
        products[productIndex] = {
            id: products[productIndex].id,                                  // ...products[productIndex],
            name: req.body.name,
            description: req.body.description,
            image: image,
            category: req.body.category,
            subcategory: "none",
            price: req.body.price
        }
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));  
        res.redirect('/products/detail/'+id);  
    },    
    destroy: (req, res) => {
        const id = req.params.id;
        const products = getProducts();
        const productIndex = products.findIndex(product => product.id == id);
        products.splice(productIndex, 1);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/products');
    }
}

module.exports = controller;

