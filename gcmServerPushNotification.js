/**
 * Created by liore on 4/20/2016.
 */
/**
 * Created by liore on 4/19/2016.
 */
var http = require('http');

var post_data = JSON.stringify(
    {
        "collapse_key": "home.getpark",
        "data": {
            "score": "4x4",
            "time": "10:10.2",
            "age":30
        },
        "registration_ids": ["APA91bFxOXSkoP68nZjdtCsiJYORstm6wW81d1FFJ6r8R4Qp_eMWiY24k5dRTFWBWPSsyXFUOvq5HgJTufa0Q2yEZm8NGugBr5Fp0MYgp-YkQzXOmDgFXEk",
            "APA91bEkokDz0Bj-qxjEm7s5c2KqYQ7n6kP04aUDNle8oa7j65C7lwfD_Mas-jIilDTBGAv6we1lP5RGeNbFlIZXisNJTS2cE2dsPrcXOAYCO04uKpNIKpA"]
    }
);//"APA91bFxOXSkoP68nZjdtCsiJYORstm6wW81d1FFJ6r8R4Qp_eMWiY24k5dRTFWBWPSsyXFUOvq5HgJTufa0Q2yEZm8NGugBr5Fp0MYgp-YkQzXOmDgFXEk",
var option = {
    hostname: "android.googleapis.com",
    port:80,
    path: "/gcm/send",
    method: "POST",
    headers: {
        "content-type": "application/json",
        "content-length": post_data.length,
        "authorization": "key=AIzaSyDIPCK6vNFzFrGhGgZ_1K4B4TDEsHvC4qQ"
    }
};
var req = http.request(option, function(res) {
    console.log("STATUS: " + res.statusCode);
    console.log("HEADERS: " + JSON.stringify(res.headears));
    res.setEncoding("utf8");
    res.on("data", function(chunk) {
        console.log("BODY: " + chunk);
    });
});
req.on("error", function(e) {
    console.log("PROBLEM: " + e.message);
});

req.write(post_data);
req.end;

//function onRequest(request, response) {
//    console.log("Request mad by user X");
//    //response.writeHead(200, {"Context-type": "text/plain"});
//    //response.write("HERE I AM");
//    //response.end();
//}
//
//http.createServer(onRequest().listen(8888));
//console.log("Server in running");