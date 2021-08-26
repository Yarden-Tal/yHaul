import { User } from '../models/users'
import { validationResult } from "express-validator";
const jwt = require('jsonwebtoken');
const fs = require('fs');
const users = require('../db/users.json')
// console.log(users);

export const registerUser = (req, res, next) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // console.log(req.body)
        return res.status(400).send('Bad request')
    } else {
        const { email, password } = req.body
        const newUser = new User(email, password, null)
        users.push(newUser)
        console.log(users, 'HERE!');
        fs.writeFileSync(process.env.HOME + '../db/users.json', JSON.stringify(users))
        const token:string = jwt.sign({ email }, process.env.SECRET, { expiresIn: '1h' })
        res.status(200).json({ token, users })
        console.log('Registered');
    }
}