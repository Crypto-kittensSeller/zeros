module.exports = function getZerosCount(number) {
  let zerocounter = 0;
  for (let i = 1; i <= number; i++){
    let x = i;
    while (x % 5 === 0){
      x /= 5;
      zerocounter++;                  
    }
  }
  return zerocounter;
}
