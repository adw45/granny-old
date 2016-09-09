var express = require('express');
var app = express();

app.use(express.static('client'));
app.use('/scripts', express.static( __dirname + '/node_modules'));

app.listen(8000);
