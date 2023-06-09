const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersControllers');
const uploadFile = require('../middlewares/usersMiddleware');
const { body } = require('express-validator')

const validations= [
    body('firstName').notEmpty().withMessage('*Tienes que escribir un nombre*'),
    body('lastName').notEmpty().withMessage('*Tienes que escribir un apellido*'),
    body('email').notEmpty().withMessage('*Tienes que escribir un correo electrónico*').bail().isEmail().withMessage('*Tienes que escribir un formato de correo válido*'),
    body('password').notEmpty().withMessage('*Tienes que escribir una contraseña*').bail().isLength({min:8}).withMessage('*La contraseña debe tener minimo 8 caracteres*'),
    body('password-confirm').notEmpty().withMessage('*Tienes que escribir una contraseña*').bail().isLength({min:8}).withMessage('*La contraseña debe tener minimo 8 caracteres*'),
    body('adress').notEmpty().withMessage('*Tienes que escribir una dirección*'),
    body('city').notEmpty().withMessage('*Tienes que escribir una ciudad*'),
    body('zipCode').notEmpty().withMessage('*Tienes que escribir un codigo postal*').bail().isNumeric({min:4}).withMessage('*El codigo postal debe tener minimo 4 numeros*'),
    body('cell').notEmpty().withMessage('*Tienes que escribir un numero de contacto*').bail().isMobilePhone('es-MX').withMessage('*El numero de contacto debe ser valido*'),
    body('avatar').custom((value, { req}) => {
        let file = req.file;
        if (!file){
            throw new Error('*Tienes que subir una imagen*')
        }
        return true;
    })
]

const validateLogin = [
    body('email').notEmpty().withMessage('*Tienes que escribir un correo electrónico*').bail().isEmail().withMessage('*Tienes que escribir un formato de correo válido*'),
    body('password').notEmpty().withMessage('*Tienes que escribir una contraseña*').bail().isLength({min:8}).withMessage('*La contraseña debe tener mínimo 8 caracteres*')   // Minimo 8 caracteres
];

router.get('/register', usersController.register);
router.post('/', uploadFile.single("image"), validations, usersController.registered)

router.get('/login', usersController.login);
router.post('/login', validateLogin, usersController.logged);
router.get('/profileForm', usersController.profile);

module.exports = router