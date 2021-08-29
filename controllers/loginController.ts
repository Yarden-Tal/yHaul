const { validationResult } = require("express-validator")
const jwt = require('jsonwebtoken')
const users = require('../db/users.json')
const admins = require('../db/admins.json')

export const loginUser = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ msg: 'Bad request' })
    const { email, password } = req.body
    let user = admins.find(admin => admin.email === email)
    if (!user) {
        user = users.find(user => user.email === email)
    }
    if (!user || user.password !== password) return res.status(400).json({ msg: 'Incorrect email or password' })
    const token: string = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '3h' })

    res.status(200).json({ token })
    console.log('Logged in')
}