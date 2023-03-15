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
    list: (req, res) => {
        res.render('listado-de-productos');
    },
    delete: (req, res) => {
        res.render();
    }
}

module.exports = controller;