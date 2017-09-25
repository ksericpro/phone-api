'use strict';
//var path = __dirname + '/views/';

module.exports = function(app) {

  //app.route("/")
  //   .get(phoneapi.test_get);

  var phoneapi = require('../controllers/phoneController');
  
  // phone Routes
  app.route('/api/test_get')
    .get(phoneapi.test_get);
	
  app.route('/api/test_post')
    .post(phoneapi.test_post);
	
  //gcm push
  app.route('/api/gcm_push')
    .post(phoneapi.gcm_push);
	
  //apn push
  app.route('/api/apn_push')
    .post(phoneapi.apn_push);
  
  //error handling
  app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
  });

 /* app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);*/
};
