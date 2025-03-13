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
});
