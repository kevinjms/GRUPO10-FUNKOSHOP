const express = require('express');

<<<<<<< HEAD
const fs = require ('fs');

=======
>>>>>>> main
const productsController = require('../controllers/productsControllers');

const router = express.Router();

router.get('/listado-de-productos', productsController.list)
router.get('/create/creacion-de-productos', productsController.create)
router.get('/:id/detalle-de-producto', productsController.detail)
router.post('/listado-de-productos', productsController.list)
router.get('/:id/edit/edicion-de-productos', productsController.edit)
router.put('/:id/listado-de-productos', productsController.list)
router.get('/:id', productsController.delete)
module.exports = router;