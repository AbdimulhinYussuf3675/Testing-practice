const stringLength = require('../stringLength')

test('string length function exists', () => {
    expect(stringLength).toBeDefined()
    
})

test("check if the string is at least 1 character long", () => {
    expect(stringLength("Abdi")).toBeGreaterThan(1);
  });
  test("check if the string is not longer than 10 characters", () => {
    expect(stringLength("2")).toBeLessThan(10);
  });
