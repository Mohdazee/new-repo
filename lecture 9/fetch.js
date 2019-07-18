
var res = fetch('http://numbersapi.com/42');


res.then((res)=>{
if(res.status != 200){
        return;
    }
    return res.text()
}).then((data)=> console.log(data));

