const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { json } = require('express');
const { validationResult } = require('express-validator')

const usersFilePath = path.join(__dirname, '../data/users.json');
function getUsers() {
    return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
};

const controller = {
    register: (req, res) => {
        res.render('./users/register');
    },
    registered: (req, res) => {
        const resultValidation = validationResult(req)
        if(resultValidation.errors.length > 0) {
            return res.render('./users/register', { 
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        const image = req.file.filename;
        const users = getUsers();
        const newUser = {
            id: users[users.length -1].id +1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            type: 'Customer',
            avatar: image
        }
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        res.redirect('/');
    },
    login: (req, res) => {
        res.render('./users/loginForm');
    },
    logged: (req, res) => {
        let errors = validationResult(req);    // variable que define si hay errores o no 
        const users = getUsers()
        let existeUser = false;
        if (errors.isEmpty()) {      // si no hay errores, es decir si 'errors' es vacio, entonces hace lo siguiente.
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email && bcrypt.compareSync(req.body.password, users[i].password)){
                   existeUser = existeUser||true ;
                    };
                };   // aca finaliza el for 
            if (existeUser) {
                res.redirect('/');
            } else {
            return res.render('./users/loginForm', {errors: [ {msg: 'Datos inválidos'} ] } ); 
            }
        } else {
            return res.render('./users/loginForm', {errors: errors.errors} ) ;
        }
    },
    profile: (req, res) => {
        res.render('profileForm');
    },
}

module.exports = controller ;