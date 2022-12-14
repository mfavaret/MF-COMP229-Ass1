 // File Name: index.js
 // Student Name: Marco Favaretto
 // Student ID: 301186334
 // Date: 09/30/2022

var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me'});
});

module.exports = router;
