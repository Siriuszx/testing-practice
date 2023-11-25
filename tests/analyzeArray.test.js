import analyzeArray from "../modules/analyzeArray";

const numArray = [1, 8, 3, 4, 2, 6];

const arrayInfo = analyzeArray(numArray);

it('returns a value', () => {
    expect(arrayInfo).toBeTruthy();
});

it('finds minimum value', () => {
    expect(arrayInfo.min).toBe(1);
});

it('finds maximum value', () => {
    expect(arrayInfo.max).toBe(8);
});

it('finds average value', () => {
    expect(arrayInfo.average).toBe(4);
});

it('finds array length', () => {
    expect(arrayInfo.length).toBe(6);
});