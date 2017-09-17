var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
   title: 'Express'
   });
});
	
router.get('/post', function(req, res){
	res.render('event_form')
})
module.exports = router;
