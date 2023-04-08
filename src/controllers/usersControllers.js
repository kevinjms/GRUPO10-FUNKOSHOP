const path = require('path');
const fs = require('fs');

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
            password: req.body.password,
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

    profile: (req, res) => {
        res.render('profileForm');
    },
}

module.exports = controller;