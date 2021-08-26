"use strict";
exports.__esModule = true;
exports.registerUser = void 0;
var users_1 = require("../models/users");
var express_validator_1 = require("express-validator");
var jwt = require('jsonwebtoken');
var fs = require('fs');
var users = require('../db/users.json');
// console.log(users);
exports.registerUser = function (req, res, next) {
    var errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        // console.log(req.body)
        return res.status(400).send('Bad request');
    }
    else {
        var _a = req.body, email = _a.email, password = _a.password;
        var newUser = new users_1.User(email, password, null);
        users.push(newUser);
        console.log(users, 'HERE!');
        fs.writeFileSync(process.env.HOME + '../db/users.json', JSON.stringify(users));
        var token = jwt.sign({ email: email }, process.env.SECRET, { expiresIn: '1h' });
        res.status(200).json({ token: token, users: users });
        console.log('Registered');
    }
};
