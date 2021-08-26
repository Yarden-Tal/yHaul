const express = require('express');
const path = require('path');
const fs = require("fs");
const cookieParser = require("cookie-parser");
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

// Import routes
const usersRoutes = require('./routes/users')

app.use(express.json());
// app.use(express.static(path.resolve(__dirname, './public/html')));
app.use(express.static("public/html"))
app.use(cookieParser());

app.use('/users', usersRoutes);


app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})