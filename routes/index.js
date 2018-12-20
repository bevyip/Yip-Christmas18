var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Merry Christmas fam' });
});

/* GET Dad page. */
router.get('/fam/dad', (req, res) => {
  res.render('fam/dad');
});

/* GET Mum page. */
router.get('/fam/mum', (req, res) => {
  res.render('fam/mum');
});

/* GET Ning page. */
router.get('/fam/ning', (req, res) => {
  res.render('fam/ning');
});

/* GET Ash page. */
router.get('/fam/ash', (req, res) => {
  res.render('fam/ash');
});

module.exports = router;
