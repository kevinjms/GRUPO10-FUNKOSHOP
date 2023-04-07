const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { json } = require('express');

const usersFilePath = path.join(__dirname, '../data/users.json');
function getUsers() {
    return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
};

const controller = {
    register: (req, res) => {
        res.render('register');
    },
    registered: (req, res) => {
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
        res.render('loginForm');
    },
    logged: (req, res) => {
        const users = getUsers()
        for (let i = 0; i < users.length; i++) {
            if (usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.password, usuarios[i].password)){
                res.redirect('/');
            } else {
                res.render('loginForm')
            }
        }
    },
}

module.exports = controller;