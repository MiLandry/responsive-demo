var express = require('express'),
app = express(),
port = process.env.PORT || 8080;

console.log('starting server')
app.use(express.static(__dirname + '/public'));
app.listen(port);