const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsControllers');
const uploadFile = require('../middlewares/multerMiddleware');


router.get('/', productsController.list);  // Listado de productos

router.get('/productsCreate', productsController.create);    // Formulario de creación de productos
router.post('/', uploadFile.single("image"), productsController.save);  // Acción de creación (a donde se envía el formulario)

router.get('/detail/:id', productsController.detail);   // Detalle de un producto particular (Ejemplo:, la url seria: http://localhost:3000/products/detail/:id )
 
router.get('/editProducts/:id', productsController.edit);   // Formulario de edición de productos
router.put('/detail/:id', uploadFile.single("image"), productsController.update);  // Acción de edición (a donde se envía el formulario)
router.delete('/detail/:id', productsController.destroy);  // Acción de borrado


module.exports = router