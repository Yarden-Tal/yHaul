"use strict";
exports.__esModule = true;
exports.loginUser = void 0;
var validationResult = require("express-validator").validationResult;
var jwt = require('jsonwebtoken');
var users = require('../db/users.json');
var admins = require('../db/admins.json');
exports.loginUser = function (req, res) {
    var errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ msg: 'Bad request' });
    var _a = req.body, email = _a.email, password = _a.password;
    var user = admins.find(function (admin) { return admin.email === email; });
    if (!user) {
        user = users.find(function (user) { return user.email === email; });
    }
    if (!user || user.password !== password)
        return res.status(400).json({ msg: 'Incorrect email or password' });
    var token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '3h' });
    res.status(200).json({ token: token });
    console.log('Logged in');
};
