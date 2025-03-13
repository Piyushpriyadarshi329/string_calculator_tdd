function StringCalculator(s1) {
  if (s1) {
    let delimiter = /[\n,]/;
  if (s1.startsWith("//")) {
    const match = s1.match(/^\/\/(.+)\n/);
    if (match) {
      delimiter = new RegExp(`[${match[1]}]`);
      s1 = s1.slice(match[0].length); 
    }
  }
    const numbers = s1.split(delimiter).map(Number);
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }
    
    return numbers.reduce((sum, cur) => sum + Number(cur), 0);
  }
  return 0;
}

module.exports = { StringCalculator };
