var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.resolve(__dirname, './public/html')));
app.listen(port, function () {
    console.log("Listening on port " + port + "...");
});
