var express = require('express');
var path = require('path');
var fs = require("fs");
var cookieParser = require("cookie-parser");
require('dotenv').config();
var app = express();
var port = process.env.PORT || 3000;
// Import routes
var usersRoutes = require('./routes/users');
app.use(express.json());
// app.use(express.static(path.resolve(__dirname, './public/html')));
app.use(express.static("public/html"));
app.use(cookieParser());
app.use('/users', usersRoutes);
app.listen(port, function () {
    console.log("Listening on port " + port + "...");
});
