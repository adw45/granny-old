var express = require('express');
var io = require('socket.io');
var http = require('http');
var app = express();

app.use(express.static('client'));
app.use('/scripts', express.static( __dirname + '/node_modules'));

var webServer = http.createServer(app).listen(8000);
var socketServer = io.listen(webServer);
