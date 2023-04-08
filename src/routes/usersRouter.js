const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersControllers');
const uploadFile = require('../middlewares/usersMiddleware');

router.get('/register', usersController.register);
router.post('/', uploadFile.single("image"), usersController.registered)
router.get('/login', usersController.login);
router.post('/login', usersController.logged);

module.exports = router