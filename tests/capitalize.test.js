import capitalize from "../modules/capitalize";

it('hello is capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
});