const { StringCalculator } = require("../src/StringCalculator");

describe("StringCalculator test", () => {
  it("should return 0 for an empty string", () => {
    expect(StringCalculator("")).toBe(0);
  });
  it("should return the number for a single number input", () => {
    expect(StringCalculator("1")).toBe(1);
  });
  it("should return the sum of two numbers", () => {
    expect(StringCalculator("1,2")).toBe(3);
  });
  it("should return the sum of multiple numbers", () => {
    expect(StringCalculator("1,2,5,6")).toBe(14);
  });
  it("should handle new lines between numbers instead of commas", () => {
    expect(StringCalculator("1\n2,3")).toBe(6);
  });
  it("Support different delimiters", () => {
    expect(StringCalculator("//;\n1;2")).toBe(3);
  });
});
