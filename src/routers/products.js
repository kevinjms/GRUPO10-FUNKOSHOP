const express = require('express');
const router = express.Router();
const multer = require('multer');

const productsController = require('../controllers/productsControllers');


router.get('/', productsController.list);

router.get('/detail/:id', productsController.detail);

 router.get('/creacion-de-productos', productsController.create);

//  router.post('/products', productsController.list);

 router.get('/:id/edit/edicion-de-productos', productsController.edit);

 router.delete('/edicion-de-productos/detail/delete/:id', productsController.destroy);


module.exports = router