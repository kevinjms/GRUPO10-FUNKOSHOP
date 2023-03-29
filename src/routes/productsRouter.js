const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsControllers');
const uploadFile = require('../middlewares/multerMiddleware');


router.get('/', productsController.list);

router.get('/detail/:id', productsController.detail);

router.get('/create', productsController.create);
router.post('/', uploadFile.single("image"), productsController.save);

router.get('/:id/edit/edicion-de-productos', productsController.edit);

router.delete('/edicion-de-productos/detail/delete/:id', productsController.destroy);


module.exports = router