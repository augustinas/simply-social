var express = require('express');
var bodyParser = require('body-parser');

var Post = require('./app/models/post');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/', require('./app/controllers/static'))
app.use('/api/posts', require('./app/controllers/api/posts'))

app.listen(3000, function() {
  console.log('Server listening on', 3000);
});
