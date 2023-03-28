const path = require('path');


const controller = {
    index: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('formulario-de-login');
    },
    register: (req, res) => {
        res.render('register');
    },
    car: (req, res) => {
        res.render('carrito-de-compras');
    },  
}

module.exports = controller;