var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.get('/inicio', function(req, res, next) {
  res.render('frontadidas');
});
module.exports = router;
