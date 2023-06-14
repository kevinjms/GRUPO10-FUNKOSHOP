const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')
const db = require('../database/models')


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
    logged: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await db.User.findOne({ where: { email } });

            if (!user || !bcrypt.compareSync(password, user.password)) {
                return res.render('./users/login', {
                    errors: {
                        credentials: 'Credenciales inválidas'
                    },
                    oldData: req.body
                });
            }
            req.session.user = {
                id: user.id,
                types_id: user.types_id,
                avatar: user.avatar,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                adress: user.adress,
                city: user.city,
                zipCode: user.zipCode,
                cell: user.cell
              };
            // Aquí puedes implementar la lógica para guardar la sesión del usuario
            // por ejemplo, utilizando req.session o alguna biblioteca de manejo de sesiones

            if (req.body.rememberMe != undefined) {
            res.cookie('recordame', user.email, { maxAge: 60000} )
            }
            res.redirect('/users/profileForm');
        } catch (error) {
            console.error(error);
            res.render('./users/login', {
                errors: {
                    general: 'Error al iniciar sesión'
                },
                oldData: req.body
            });
        }
    },
    profile: async (req, res) => {
        const user = req.session.user;
        const newUser = await db.User.findByPk(user.id)
        res.render('./users/profileForm', { user: newUser});
    },
    edit: async (req, res) => {
        const user = req.session.user;
        const newUser = await db.User.findByPk(user.id)
        res.render('./users/editUser', { user: newUser});
    },
    update: async (req, res) => {
        const user = await db.User.update({
            avatar: req.body.avatar,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            adress: req.body.adress,
            city: req.body.city,
            zipCode: req.body.zipCode,
            cell: req.body.cell
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/users/profileForm')
    }
};

module.exports = controller;