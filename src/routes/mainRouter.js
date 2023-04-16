const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainControllers');


router.get('/', mainController.index);
router.get('/carrito-de-compras', mainController.car);
router.get('/aboutUs', mainController.us);
router.get('/personalized', mainController.personalized);

module.exports = router;