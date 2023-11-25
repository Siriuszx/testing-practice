import reverseString from "../modules/reverseString";

it("reverse 'hello world'", () => {
    expect(reverseString('hello world')).toEqual('dlrow olleh');
    // expect(reverseString('hello world')).toEqual('h');
});