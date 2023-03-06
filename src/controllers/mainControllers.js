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
    detail: (req, res) => {
        res.render('detalle-de-producto');
    },
    car: (req, res) => {
        res.render('carrito-de-compras');
    },
    create: (req, res) => {
        res.render('creacion-de-productos');
    },
    edit: (req, res) => {
        res.render('edicion-de-productos');
    }
}

module.exports = controller;