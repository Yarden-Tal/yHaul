var express = require('express');
var path = require('path');
var fs = require("fs");
var cookieParser = require("cookie-parser");
require('dotenv').config();
var app = express();
var port = process.env.PORT || 3000;
// Import routes
var usersRoute = require('./routes/usersRoute');
var loginRoute = require('./routes/loginRoute');
var trucksRoute = require('./routes/trucksRoute');
app.use(express.json());
app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser());
app.use('/login', loginRoute);
app.use('/users', usersRoute);
app.use('/trucks', trucksRoute);
app.listen(port, function () {
    console.log("Listening on port " + port + "...");
});
