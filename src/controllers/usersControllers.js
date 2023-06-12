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
            type: 'Customer'
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
    profile: (req, res) => {
        const user = req.session.user;
        // Aquí puedes implementar la lógica para obtener los datos del perfil del usuario
        // y luego renderizar la vista con los datos obtenidos

        res.render('./users/profileForm', { user });
    },
    edit: (req, res) => {
        // Aquí puedes implementar la lógica para obtener los datos del usuario a editar
        // y luego renderizar la vista de edición con los datos obtenidos

        res.render('./users/editUser');
    },
    update: async (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./users/editUser', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        try {
            const user = await db.User.findByPk(req.params.id);

            if (!user) {
                return res.render('./users/editUser', {
                    errors: {
                        general: 'Usuario no encontrado'
                    },
                    oldData: req.body
                });
            }

            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.address = req.body.address;
            user.city = req.body.city;
            user.zipCode = req.body.zipCode;
            user.cell = req.body.cell;

            await user.save();

            res.redirect('/users/profileForm');
        } catch (error) {
            console.error(error);
            res.render('./users/editUser', {
                errors: {
                    general: 'Error al actualizar el usuario'
                },
                oldData: req.body
            });
        }
    }
};

module.exports = controller;