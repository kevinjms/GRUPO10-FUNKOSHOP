const express = require('express');

const mainController = require('../controllers/mainControllers');

const router = express.Router();

router.get('/', mainController.index);
router.get('/carrito-de-compras', mainController.car)
router.get('/formulario-de-login', mainController.login)
router.get('/register', mainController.register)
router.get('/detalle-de-producto', mainController.detail)
router.get('/creacion-de-productos', mainController.create)
router.get('/edicion-de-productos', mainController.edit)

module.exports = router;