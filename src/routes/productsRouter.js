const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsControllers');
const uploadFile = require('../middlewares/multerMiddleware');


router.get('/', productsController.list);

router.get('/detail/:id', productsController.detail);

router.get('/productsCreate', productsController.create);
router.post('/', uploadFile.single("image"), productsController.save);

router.get('/editProducts/edit/:id', productsController.edit);

router.delete('/editProducts/edit/delete/:id', productsController.destroy);


module.exports = router