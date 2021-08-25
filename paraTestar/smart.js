function teste (pino, frequencia, pwmValue){
    strPwmValue = ''
    let x = pwmValue > 255 ? slicePwmValue(pwmValue) : [pwmValue];
    console.log(x)
    for( let i = 0; i<x.length; i++){
        if(i != (x.length)-1){
            strPwmValue = strPwmValue + x[i] + ',';
        } else strPwmValue = strPwmValue + x[i] 
    }
    console.log(strPwmValue)
}

function slicePwmValue(pwmValue) {
    const quotient = Math.trunc(pwmValue / 255);
    const rest = pwmValue % 255;
    const splicedPwmValue = [];
    for (let i = 0; i < quotient; i++) {
      splicedPwmValue.push(255);
    }
    splicedPwmValue.push(rest);
    return splicedPwmValue;
  }

  teste(1,2, 600)
