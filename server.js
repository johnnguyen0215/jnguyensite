var express        = require('express');
var app            = express();
// configuration ===========================================


// set our port
var port = process.env.PORT || 9000; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
// parse application/json 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;                         
