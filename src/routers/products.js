const express = require('express');
const router = express.Router();
const multer = require('multer');

const productsController = require('../controllers/productsControllers');

router.get('/listado-de-productos', productsController.list);

 router.get('/listado-de-productos', productsController.list);
 router.get('/create/creacion-de-productos', productsController.create);
 router.get('/detalle-de-producto', productsController.detail);
 router.post('/listado-de-productos', productsController.list);
 router.get('/:id/edit/edicion-de-productos', productsController.edit);
 router.put('/:id/listado-de-productos', productsController.list);
 router.get('/:id', productsController.delete);

module.exports = router