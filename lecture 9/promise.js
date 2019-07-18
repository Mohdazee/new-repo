let Apple=30;
function GetApple(){
 let a =  new Promise(function(res, rej){
     if(Apple > 40){
         res('Apple are cheaper')
     }
     else{
         rej('Apple are costly')
     }

 })
 return a;
}
console.log('I Am In The Food Market');
console.log('Confirm rate');
GetApple().then(function(data){               
    console.log(data);
}).catch(function(e){                        //.catch do the error handling
    console.log(e);
})

