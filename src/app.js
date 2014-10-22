var express = require('express')
var app = express()
var api_route = require('./api-route.js')

app.get('/', api_route)

app.listen(3000);
