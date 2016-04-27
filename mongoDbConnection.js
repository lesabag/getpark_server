/**
 * Created by liore on 4/19/2016.
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Connect to DB
mongoose.connect('mongodb://getparkdbuser:getparkdbpassword@ds013981.mlab.com:13981/getpark_db');

//express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);

//routes
//app.use('/api', require('./routes/api'));

//start server
app.listen(8888);
console.log('server is listening...');

//function onRequest(request, response) {
//    console.log("Request mad by user X");
//    //response.writeHead(200, {"Context-type": "text/plain"});
//    //response.write("HERE I AM");
//    //response.end();
//}
//
//http.createServer(onRequest().listen(8888));
//console.log("Server in running");