const express = require('express')
const path = require('path')
const fs = require("fs")
const cookieParser = require("cookie-parser")
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

// Import routes
const usersRoute = require('./routes/usersRoute')
const loginRoute = require('./routes/loginRoute')
const trucksRoute = require('./routes/trucksRoute')


app.use(express.json());
app.use(express.static(path.resolve(__dirname, './public')))
app.use(cookieParser());

app.use('/login', loginRoute)
app.use('/users', usersRoute)
app.use('/trucks', trucksRoute)



app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})