const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersControllers');
const uploadFile = require('../middlewares/usersMiddleware');
const { body } = require('express-validator')
const validations= [
    body('firstName').notEmpty().withMessage('*Tienes que escribir un nombre*'),
    body('lastName').notEmpty().withMessage('*Tienes que escribir un apellido*'),
    body('email').notEmpty().withMessage('*Tienes que escribir un correo electrónico*').bail().isEmail().withMessage('*Debes escribir un formato de correo válido*'),
    body('password').notEmpty().withMessage('*Tienes que escribir una contraseña*'),
    body('avatar').custom((value, { req}) => {
        let file = req.file;
        if (!file){
            throw new Error('*Tienes que subir una imagen*')
        }
        return true;
    })
]

router.get('/register', usersController.register);
router.post('/', uploadFile.single("image"), validations, usersController.registered)

router.get('/login', usersController.login);
router.post('/', usersController.logged)

module.exports = router