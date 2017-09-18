var express = require('express');
var browserify = require('browserify-middleware');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.use(morgan('dev'));

app.get('/bundle.js', browserify('./index.js', {
  transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
}));

app.use(express.static(path.join(__dirname, '/')));


// app.use('/style.css', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '/'));
// });

app.use(function(req, res, next) {
  res.status(404).send('404 - Page Not Found');
});

app.listen(4000, function() {
  console.log('Listening on port 4000');
});
