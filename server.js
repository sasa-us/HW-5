var express = require("express"),
    http = require("http"),
    app = express();
    
var result;
var wins = 0;
var losses = 0;
 
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //support json encoded body
app.use(bodyParser.urlencoded({ extended: true})); // support encoded body
//app.use(express.urlencoded());

//start server
http.createServer(app).listen(3000);
console.log("Server start!.");

app.post("/flip", function (req, res) {
	
    //grab post objparam from req.body
    var myFlip = req.body;
    
    var coin = ["heads", "tails"];
	var randomNum = Math.floor(Math.random() * 2 );
	//var randomNum = 0;
    if(req.body["call"] === coin[randomNum]) {
      wins++;
      res.json({"result" : "win"});
    }
    else {
    	losses++;
    	res.json({"result" : "lose"});
    }

});

// set up routes and response
app.get("/stats", function (req, res) {
	//res.send("sha's routes");
    res.send("wins: " + wins + "," + "losses: " + losses);
});


