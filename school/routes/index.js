var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mainpage');
});

router.get('/Rhythm', function(req, res, next) {
  res.render('Rhythm');
});

router.get('/iwbd', function(req, res, next) {
  res.render('iwbd');
});

module.exports = router;
