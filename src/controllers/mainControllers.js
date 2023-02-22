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
    carrito: (req, res) => {
        res.render('carrito-de-compras');
    }
}

module.exports = controller;