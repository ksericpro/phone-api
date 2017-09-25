var express = require('express'),
app = express(),
port = process.env.PORT || 3001,
bodyParser = require('body-parser');

var path = __dirname + '/views/';
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware to use for all requests
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // do logging
    console.log('Request received.');
    console.log(req.body);
    next(); // make sure we go to the next routes and don't stop here
});

// basic route
app.get('/', function(req, res) {
    //res.send('The API is at http://localhost:' + port + '/api');
	res.sendFile(path + "index.html");
});

app.get('/apn', function(req, res) {
    //res.send('The API is at http://localhost:' + port + '/api');
	res.sendFile(path + "apn.html");
});

var routes = require('./api/routes/phoneRoutes');
routes(app);

app.listen(port);

console.log('Phone RESTful API server started on: ' + port);