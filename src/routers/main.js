const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainControllers');


router.get('/', mainController.index);
router.get('/carrito-de-compras', mainController.car);
router.get('/formulario-de-login', mainController.login);
router.get('/register', mainController.register);

module.exports = router;