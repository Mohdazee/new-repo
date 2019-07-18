
var mysql      = require('mysql');

var obj = {
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
}
 
var connection = mysql.createConnection(obj);