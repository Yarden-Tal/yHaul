const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, './public/html')));


app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})