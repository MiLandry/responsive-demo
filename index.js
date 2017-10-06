var express = require('express'),
app = express(),
port = process.env.PORT || 1336;

console.log('starting server')
console.log('localhost:' + port)
app.use(express.static(__dirname + '/public'));
app.listen(port);