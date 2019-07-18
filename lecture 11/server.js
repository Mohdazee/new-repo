var express = require('express');       //it returns a function and that function returns an object.

var app = express();

var port = process.env.PORT || 5000;

app.use('/',express.static('public'));

/* app.get('/', function(req, res) {
    res.send("Hello World");

})
 */     //this is default.

 var taskList = [];

app.get('/numbers', function(req, res) {
    res.send("Your lucky number is 7");
    
})

app.get('/task', function(req,res) {
    taskList.push(req.query.name);
    res.send("found");
})

app.get('/display', function(req, res) {
    res.send(taskList);
})

app.listen(port, function() {
    console.log("Server running on" + port);
})