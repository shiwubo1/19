var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/denglu', function(req, res, next) {
  res.send("登陆成功");
});

module.exports = router;
