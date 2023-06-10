const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')
const db = require('../database/models')
const {Op} = require('sequelize')

const usersFilePath = path.join(__dirname, '../data/users.json');
function getUsers() {
    return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
};

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
}

module.exports = controller ;