const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersControllers');
const uploadFile = require('../middlewares/usersMiddleware');
const { body , check} = require('express-validator')

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

const validateLogin = [
    check('email').isEmail().withMessage('Ha ingresado un email invalido'),
    check('password').isLength({min:8}).withMessage('Debe tener mínimo 8 caracteres')   // Minimo 8 caracteres
];

router.get('/register', usersController.register);
router.post('/', uploadFile.single("image"), validations, usersController.registered)

router.get('/login', usersController.login);
router.post('/login', validateLogin, usersController.logged);

module.exports = router