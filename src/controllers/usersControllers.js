const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')
const db = require('../database/models')

function getUsers() {
	db.User.findAll()
		.then(function (usuarios) {
			return usuarios
		}
		)
}

const controller = {
    register: (req, res) => {
        res.render('./users/register');
    },
    registered: async (req, res) => {
        const resultValidation = validationResult(req)
        if(resultValidation.errors.length > 0) {
            return res.render('./users/register', { 
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        await db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            adress: req.body.adress,
            city: req.body.city,
            zipCode: req.body.zipCode,
            cell: req.body.cell,
            type: 'Customer',
            avatar: req.file.filename
        });

        res.redirect('/users/login');
    },
    login: (req, res) => {
        res.render('./users/loginForm');
    },
    logged: (req, res) => {
        let rValidation = validationResult(req); 
        const users = getUsers()
        let existeUser = false;
        if (rValidation.isEmpty()) {      // si no hay errores, es decir si 'errors' es vacio, entonces hace lo siguiente.
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email && bcrypt.compareSync(req.body.password, users[i].password)){
                   existeUser = existeUser||true ;
                    };
                };   // aca finaliza el for 
            if (existeUser) {
                res.redirect('/');
            } else {
            return res.render('./users/profileForm'); 
            }
        } else {
            return res.render('./users/loginForm', {
                errors: rValidation.mapped(),
                oldData: req.body
            }) ;
        }
    },
    profile: (req, res) => {
        res.render('./users/profileForm');
    },
    edit: async (req, res) => {
        db.users.findByPk(req.params.id)
            .then(function (user) {
                res.render('editUsers', { user });
            })
    },
    update: async (req, res) => {
        const product = await db.Product.update({
            name: req.body.name,
            description: req.body.description,
            product_categories_id: req.body.category,
            product_subcategories_id: req.body.subcategory,
            price: req.body.price
        }, {
            where: {
                id: req.params.id
            }
        })
        if (req.file) {
            const image = await db.Image.findOne({ where: { products_id: product.id } })
            image.url = req.file.filename;
            image.save()
        }
        res.redirect('/products/detail/' + req.params.id)
    },
}

module.exports = controller ;