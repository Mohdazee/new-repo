

//hello=1;
//var main=4;

 
//var greet=function(){
//main = 6;
//var z=7;
//if(z > 4){
   // var m=10;
//}
//console.log(m);
//}
var global={};
studentMarks();
function studentMarks(){
var marks=10;
    name();
    function name(){
        var marks=11;
        return marks;
    }
global.nam=name;
    }
    console.log(global.nam());

