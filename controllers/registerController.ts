const { User } = require('../models/users')
const { validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');
const fs = require('fs');
const users = require('../db/users.json')

export const registerUser = (req, res, next) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send('Bad request')
    }
        const { email, password } = req.body
        const newUser = new User(email, password, null)
        users.push(newUser)
        fs.writeFileSync(process.cwd() + '/db/users.json', JSON.stringify(users))
        const token:string = jwt.sign({ email }, process.env.SECRET, { expiresIn: '1h' })
        res.status(200).json({ token, users })
        console.log('Registered');
}