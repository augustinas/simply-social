var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social', function() {
  console.log('Connected to the database');
});

module.exports = mongoose
