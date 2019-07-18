readFile('main.txt',function(data){
    convertToString(data,function(td) {
        getRidofSpace(td,function(ws) {
           splittingData(ws,function(arr){
                loop(arr,function(data){
                      console.log(data);

    })
})
        })
    })
})
function readFile(name,cb){
    setTimeout(function(){
    let data = 'Hello World';
    cb(data);
    },0)
}
function convertToString(data,cb){
    setTimeout(function(){
        let strin = data.toString();
        cb(strin);
},0)
}
function splittingData(str,cb){
    setTimeout(function(){
        let arr = str.split('');
        cb();
},0)
}
function getRidofSpace(str,cb){
    setTimeout(function(){
       let s = str.replace( /\s/g,'');
         cb(s);
},0)
}
function loop(arr, cb){
    setTimeout(function(){
        arr.forEach(function(data){
            cb(data);

        })
    },0)
}