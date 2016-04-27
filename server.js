/**
 * Created by liore on 4/20/2016.
 */
var util = require("util"), my_http = require("http");

my_http.createServer(function(request,response){
    console.log("I got kicked");
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);
console.log("Server Running on 8888");