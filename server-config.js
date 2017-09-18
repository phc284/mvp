var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(bodyParser.json());
app.set('views', __dirname + '/');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/components'));
app.use(cookieParser('shhhh, very secret'));
app.use(session({
  secret: 'shhh, it\'s a secret',
  resave: false,
  saveUninitialized: true
}));
