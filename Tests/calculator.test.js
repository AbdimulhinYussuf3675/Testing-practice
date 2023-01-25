const Calculator = require("../calculator");
const calc = new Calculator(10, 5);

describe("simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply", () => {
  // add method test
  test("check if add method exists", () => {
    expect(calc.add()).toBeDefined();
  });

  test("check if the add method works", () => {
    expect(calc.add()).toEqual(15);
  });
  // subtract method test
  test('check if subtract method exists', () => {
    expect(calc.subtract()).toBeDefined();
  });
  test('check if the subtract method works', () => {
    expect(calc.subtract()).toEqual(5);
  });
  // Divide method test
  test('check if the divide method exists', () => {
    expect(calc.divide()).toBeDefined();
  });
  test('check if the divide method works', () => {
    expect(calc.divide()).toEqual(2);
  });
  // multiply method test
  test('check if the divide method works', () => {
    expect(calc.multiply()).toBeDefined();
  });
  test('chck if the multiply works', () => {
    expect(calc.multiply()).toEqual(50);
  });
});
