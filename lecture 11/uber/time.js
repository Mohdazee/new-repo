var tres = 0;

function timeCalculate(time) {
    if(time < 5) {
        tres = 0;
    }
    else if((time >= 5) && (time < 10)) {
        tres = (time - 4)*2;
    }
    else {
        tres = 10 + (time - 9)*5;
    }
    console.log(tres);
    return tres;
    
}


module.exports = {
    timeCalc: timeCalculate
}