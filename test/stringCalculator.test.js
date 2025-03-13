const { StringCalculator } = require("../src/StringCalculator");


describe("StringCalculator test",()=>{
    it('should return 0 for an empty string', () => {
        expect(StringCalculator('')).toBe(0);
    })

})