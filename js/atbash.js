//JS Atbash Cipher

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercase_alphabet = [];
for (let i = 0; i < alphabet.length; i++) {
    lowercase_alphabet.push(alphabet[i].toLowerCase());
}

export function atbash(string) {
    let encryptedString = "";

    for (let i = 0; i < string.length; i++) {
        if (alphabet.includes(string[i])) {
            const index = alphabet.indexOf(string[i]);
            encryptedString += alphabet.reverse()[index];
        } else if (lowercase_alphabet.includes(string[i])) {
            const index = lowercase_alphabet.indexOf(string[i]);
            encryptedString += lowercase_alphabet.reverse()[index];
        } else {
            encryptedString += string[i];
        }
    }
    return encryptedString;
}