function StringCalculator(s1) {
  if (s1) {
    let delimiter = /[\n,]/;
    const numbers = s1.split(delimiter).map(Number);
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }
    let s2 = s1.replace(/\W/g, ","); // this is working for all different delimiters
    let arr = s2.split(",");
    return arr.reduce((sum, cur) => sum + Number(cur), 0);
  }
  return 0;
}

module.exports = { StringCalculator };
