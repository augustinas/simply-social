var express = require('express');
var bodyParser = require('body-parser');

var Post = require('./app/models/post');

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

app.listen(3000, function() {
  console.log('Server listening on', 3000);
});
