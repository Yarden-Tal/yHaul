"use strict";
exports.__esModule = true;
exports.User = void 0;
var uuidv4 = require('uuid').v4;
var User = /** @class */ (function () {
    function User(email, password, cart) {
        this.email = email;
        this.password = password;
        this.cart = cart;
        this.id = uuidv4();
    }
    return User;
}());
exports.User = User;
