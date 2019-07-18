var express = require('express');       //it returns a function and that function returns an object.

var app = express();
var bodyParser

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

app.post('/task', function(req,res) {
    let body = JSON.parse(req.body);

    db.insertintoDb(val,function(){
        res.send("Inserted");
    })
    console.log(body,q);
    
})

app.get('/display', function(req, res) {
    res.send(taskList);
})

app.listen(port, function() {
    console.log("Server running on" + port);
    //connection
    db.connection.connect();
})