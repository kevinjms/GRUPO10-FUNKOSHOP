const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersControllers');
const uploadFile = require('../middlewares/usersMiddleware');

router.get('/register', usersController.register);
router.post('/register', uploadFile.single("image"), usersController.registered)
router.get('/login', usersController.login);

module.exports = router