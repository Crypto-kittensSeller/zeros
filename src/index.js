module.exports = function getZerosCount(number) {
  let zerocounter = 0;
  let x = number;
  
  while (x >= 5){
  zerocounter +=Math.floor(x / 5);
  x /= 5;
  }
  return zerocounter;
}
