var router = require('express').Router();

router.get('/', function (req, res) {
  res.sendFile('app/layouts/posts.html', { root: __dirname + '../../../' });
});

module.exports = router;