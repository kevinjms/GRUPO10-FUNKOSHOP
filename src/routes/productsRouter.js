const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsControllers');
const uploadFile = require('../middlewares/multerMiddleware');


router.get('/', productsController.list);      // Listado de productos

router.get('/detail/:id', productsController.detail);   // Detalle de un producto particular (Ejemplo:, la url seria: http://localhost:3000/products/:id )

router.get('/productsCreate', productsController.create);    // Formulario de creación de productos
router.post('/', uploadFile.single("image"), productsController.save);  // Acción de creación (a donde se envía el formulario)
 
router.get('/editProducts/edit/:id', productsController.edit);

router.delete('/editProducts/edit/delete/:id', productsController.destroy);  // Acción de borrado


module.exports = router