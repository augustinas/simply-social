var port = process.env.PORT || 3000
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

/* NPM modules */
app.use(bodyParser.json());

/* Custom Middleware */
app.use(require('./app/auth'));

/* Controllers */
app.use('/', require('./app/controllers/static'));
app.use('/api/posts', require('./app/controllers/api/posts'));
app.use('/api/sessions', require('./app/controllers/api/sessions'));
app.use('/api/users', require('./app/controllers/api/users'));

var server = app.listen(port, function() {
  console.log('Server', process.pid, 'listening on', port);
});
