const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');
const tokenService = require('./token-service.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;
    Users.addUser(user)
    .then(added => {
        const token = tokenService.generateToken(added)
        res.status(200).json({ message: `Welcome ${added.username}!`, token})
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: "Could not add new User."})
    })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Users.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = tokenService.generateToken(user)
            res.status(200).json({ message: `Successfully logged into ${user.username}!`, token })
        }else{
            res.status(401).json({ message: 'Invalid credentials'})
        }
    })
    .catch(error => {
        res.status(500).json({ message: 'Could not find user'})
    })
})

module.exports = router;