"use strict";
exports.__esModule = true;
var router = require('express').Router();
var registerController_1 = require("../controllers/registerController");
router.post('/', registerController_1.registerUser);
module.exports = router;
