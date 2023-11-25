import Calculator from "../modules/Calculator";

it('addition', () => {
    expect(Calculator.add(2,2)).toBe(4);
    expect(Calculator.add(123, 123)).toBe(246);
    expect(Calculator.add(13, 21)).toBe(34);
});

it('subtraction', () => {
    expect(Calculator.subtract(2,2)).toBe(0);
    expect(Calculator.subtract(0,0)).toBe(0);
    expect(Calculator.subtract(4,2)).toBe(2);
});

it('division', () => {
    expect(Calculator.divide(2,2)).toBe(1);
    expect(Calculator.divide(10,5)).toBe(2);
    expect(Calculator.divide(4,2)).toBe(2);
});

it('multiplication', () => {
    expect(Calculator.multiply(0.33,2)).toBeCloseTo(0.66);
    expect(Calculator.multiply(0,0)).toBe(0);
    expect(Calculator.multiply(4,2)).toBe(8);
});