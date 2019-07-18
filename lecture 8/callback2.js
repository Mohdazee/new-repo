//function ImageProcessing(){
 //   clearImage('240 * 240',function(r){
 //       console.log('Processing Ended')
 //      r();
  //  })
//console.log('processing Started')
//}

//function clearImage(res, cb){
 //   setTimeout(function(){
  //      console.log('Reading File')
   //     cb(function(){
   //       console.log(res);
   //     });
   // }, 0)
//}

//ImageProcessing();
//clearImage();


function organizingParty(){
Billing(function(price){
    console.log(price);
});
}

    function orderPizza(order , cb){
        setTimeout(function(){
       let output = order * 80 ;
       cb(output);
        }, 0)

    }
    function orderDrink(order , cb){
     setTimeout(function(){
            let output = order * 60 ;
            cb(output);
        }, 0)
    }
function Billing(cb){
    orderPizza(5, function(pp){
orderDrink(5, function(pd){
    cb(pp+pd)
});
    });

}


organizingParty();
