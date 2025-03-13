function StringCalculator(s1) {
  if (s1) {
    let arr = s1.split(",");
    return arr.reduce((sum, cur) => sum + Number(cur), 0);
  }
  return 0;
}
module.exports = { StringCalculator };
