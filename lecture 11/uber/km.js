var kres = 0;

function kmCalculate(kms) {
    if(kms < 5) {
        kres = kms*10;
    }
    else if((kms >= 5) && (kms < 10)) {
        kres = 40 + (kms - 4)*8;
    }
    else {
        kres = 80 + (kms - 9)*6;
    }
    console.log(kres);
    return kres;
}


module.exports = {
    kmCalc: kmCalculate
}