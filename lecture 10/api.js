
var res = fetch("https://api.coindesk.com/v1/bpi/currentprice.json");


res.then((res)=>{
if(res.status != 200){
        return;
    }
    return res.text()
}).then((data)=> console.log(data));
