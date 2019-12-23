var proxy = require('express-http-proxy');
var app = require('express')();
var cors = require('cors')

var host= process.env.LISTEN_HOST || "0.0.0.0";
var port= process.env.LISTEN_PORT || 8080;
var destination= process.env.DESTINATION || 'www.google.com';
app.use(cors());
app.use('/', proxy(destination));

app.listen(port, host);