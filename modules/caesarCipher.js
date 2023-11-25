class CaesarCipher {
    #ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

    constructor() { }

    encrypt(message, offset) {
        let encryptedMessage = '';

        for (let i = 0; i < message.length; i++) {
            let curChar = message.charAt(i);
            let charIndex = this.#ALPHABET.indexOf(curChar.toLowerCase());

            let newIndex = this.#calculateIndex(charIndex, offset);

            if (charIndex == -1) {
                encryptedMessage += curChar;
            } else if (curChar === curChar.toLowerCase()) {
                encryptedMessage += this.#ALPHABET[newIndex];
            } else if (curChar === curChar.toUpperCase()) {
                encryptedMessage += this.#ALPHABET[newIndex].toUpperCase();
            }
        }

        return encryptedMessage;
    }

    #calculateIndex(charIndex, offset) {
        let newIndex = charIndex + offset;
        
        if (newIndex > this.#ALPHABET.length - 1) {
            newIndex = newIndex % this.#ALPHABET.length;
        } else if (newIndex < 0) {
            newIndex = newIndex % (this.#ALPHABET.length * (-1));
            newIndex = this.#ALPHABET.length + newIndex;
        }

        return newIndex;
    }
}

export default CaesarCipher;