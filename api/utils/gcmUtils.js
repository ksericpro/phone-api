var gcm = require('node-gcm');
var constants = require('./constants');

//console.log("MAX_GCM_RECIPIENTS="+constants.MAX_GCM_RECIPIENTS);
//console.log("DEFAULT_GCM_API_KEY="+constants.DEFAULT_GCM_API_KEY());

//function to gcm push to target
exports.gcm_send_promises = function(api, gcmids, msgtitle, msgbody) {
	
	return new Promise(function (fulfill, reject){
		
		// Set up the sender with your GCM/FCM API key (declare this once for multiple messages) 
		var sender = new gcm.Sender(api);
 
		// Prepare a message to be sent 
		var message = new gcm.Message({
			data: { 'gcm.notification.title': msgtitle,
					'gcm.notification.body': msgbody}
		});
 
		var regTokens = [];
		var gcm_arr = gcmids.toString().split(",");
		if (gcm_arr.length>=constants.MAX_GCM_RECIPIENTS)
		{
			throw "# of Recipient must be less than "+constants.MAX_GCM_RECIPIENTS; 
		}
		for (var i = 0; i < gcm_arr.length; i++) {
			regTokens.push(gcmids[i]);
		}
	
		// Actually send the message 
		sender.send(message, { registrationTokens: regTokens }, function (err, res) {
			if (err) {
				console.error(err);
				reject(err);
			}
			else {
				console.log(res);
				fulfill(res);
			}
		}); //end sender
	
	}); //end promises
};