'use strict';
var gcmutils = require('../utils/gcmUtils');
//var path = __dirname + '/views/';

exports.test_get = function(req, res) {
	res.json({"function":"test_get", "result":"ok"});
};

exports.test_post = function(req, res) {
	console.log("Request Body :"+req.body);
	res.json({"function":"test_post", "result":"ok"});
};

//exports.go_index = function(req, res) {
	//console.log("Request Body :"+req.body);
	//res.sendFile(path + "index.html");
	//res.json({"function":"go_index", "result":"ok"});
//};

//Gcm Push
//{
//  "api": "AAAAkXXcN8g:APA91bEgrbFSotQbGEssGUQoEHa9jcbrWLaVL5OjqSNeduY2-kMmSc9sgwEkZ1XpZRDAhUokovrSGb5OARhdLCOOZ2926soVaMSEcYWg-42TNVepb9-yHfRyVGou0joE7IsbYyBjl17r",
//  "registrationids": ["APA91bHkcUvXwBzHPMHXjDtnXXSIUK2Iqxrz5uqJT7nor2uUAsp6JCCvF6ugRt6Jofr_RfgGTFnqzJrBJ1kkPW3rbAvqs9qoGeI9HqmzHwJ43zgc43TYvAHHHVbttxQIVqey6PdcsAJD"],
//  "message_title":"title",
//  "message_body":"body"
//}
exports.gcm_push = function(req, res)
{
	console.log("Api :"+req.body.api);
	console.log("RegistrationIds :"+req.body.registrationids);
	console.log("Message Title:"+req.body.message_title);
	console.log("Message Body:"+req.body.message_body);

	gcmutils.gcm_send_promises(req.body.api, req.body.registrationids, 
		req.body.message_title, req.body.message_body)
		.then(function(data) {
			console.log("success="+data.success);			
			//console.log("results="+JSON.stringify(data.results));
			res.json(JSON.stringify(data));
		})
		.catch(function(err) {
			res.json({"function":"gcm_push", "result":err});
		});

}

exports.apn_push = function(req, res)
{
	console.log("Api :"+req.body.api);
	console.log("RegistrationIds :"+req.body.registrationids);
	console.log("Message Title:"+req.body.message_title);
	console.log("Message Body:"+req.body.message_body);

	gcmutils.gcm_send_promises(req.body.api, req.body.registrationids, 
		req.body.message_title, req.body.message_body)
		.then(function(data) {
			console.log("success="+data.success);			
			//console.log("results="+JSON.stringify(data.results));
			res.json(JSON.stringify(data));
		})
		.catch(function(err) {
			res.json({"function":"apn_push", "result":err});
		});

}
