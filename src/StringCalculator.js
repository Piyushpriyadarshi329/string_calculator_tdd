function StringCalculator(s1) {
  if (s1) {
    let s2=s1.replace(/\W/g, ',')  
    let arr = s2.split(",");
    return arr.reduce((sum, cur) => sum + Number(cur), 0);
  }
  return 0;
}
module.exports = { StringCalculator };
