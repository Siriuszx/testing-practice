import CaesarCipher from "../modules/caesarCipher";

const cipher = new CaesarCipher();

it('Offset: 1', () => {
    expect(cipher.encrypt('abc', 1)).toBe('bcd');
});

it('Offset: 3', () => {
    expect(cipher.encrypt('hello', 3)).toBe('khoor');
});

it('Message with punctuation', () => {
    expect(cipher.encrypt('hello, world', 3)).toBe('khoor, zruog');
});

it('Message with uppercase characters', () => {
    expect(cipher.encrypt('Hello, World', 3)).toBe('Khoor, Zruog');
});

it('Character index offset (positive)', () => {
    expect(cipher.encrypt('z', 1)).toBe('a');
    expect(cipher.encrypt('z', 150)).toBe('t');

    expect(cipher.encrypt('Hello, world!', 21)).toBe('Czggj, rjmgy!');
    expect(cipher.encrypt('Hello, world!', 21)).toBe('Czggj, rjmgy!');
});

it('Character index offset (negative)', () => {
    expect(cipher.encrypt('a', -1)).toBe('z');
    
    expect(cipher.encrypt('Hello, world!', -210)).toBe('Fcjjm, umpjb!');
});