"use strict";
exports.__esModule = true;
exports.registerUser = void 0;
var User = require('../models/users').User;
var validationResult = require("express-validator").validationResult;
var jwt = require('jsonwebtoken');
var fs = require('fs');
var users = require('../db/users.json');
exports.registerUser = function (req, res, next) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send('Bad request');
    }
    var _a = req.body, email = _a.email, password = _a.password;
    var newUser = new User(email, password, null);
    users.push(newUser);
    fs.writeFileSync(process.cwd() + '/db/users.json', JSON.stringify(users));
    var token = jwt.sign({ email: email }, process.env.SECRET, { expiresIn: '1h' });
    res.status(200).json({ token: token, users: users });
    console.log('Registered');
};
