var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main_events_page', {
   });
});
	 
router.get('/post', function(req, res){
	// res.render('event_setup_form1')
	res.render('event_form');
});

router.post('/post', function(req,res){
 	var form = new formidable.IncomingForm();

 	form.parse(req, function(err,fields, files){
 		res.writeHead(200, { 'content-type': 'text/plain'});
 		res.write('received the data:\n\n');
 		
 		
 		if(!fs.existsSync('events.json')){
 			var data = {
 			table : []
 			}
 			data.table.push({fields});
 			var json = JSON.stringify(data);
 			fs.writeFile('events.json', json, 'utf8', (err)=>{
 				if(err) throw err;
 				console.log('The file has been created & saved.')
 			});
 		}
 		else{
 			fs.readFile('events.json', 'utf8' , function readFileCallback(err, data){
 				if(err){
 					console.log(err);
 				}
 				else {
 					data = JSON.parse(data);
 					data.table.push(fields);
 					json = JSON.stringify(data);
 					fs.writeFile('events.json' , json, 'utf8', (err)=>{
 					if(err) throw err;
 					console.log('The file has been appended & saved.');
 					});
 				}
 			})
 		}
 		res.end(util.inspect({
 			fields: fields,
 			files: files
 			}));
 		});
 	});
 

module.exports = router;
