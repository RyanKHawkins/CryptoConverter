//JS Atbash Cipher

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowerCaseAlphabet = [];
for (let i = 0; i < alphabet.length; i++) {
    lowerCaseAlphabet.push(alphabet[i].toLowerCase());
}

export function atbash(string) {
    let encryptedString = "";

    for (let i = 0; i < string.length; i++) {
        if (alphabet.includes(string[i])) {
            const index = alphabet.indexOf(string[i]);
            encryptedString += alphabet.reverse()[index];
        } else if (lowerCaseAlphabet.includes(string[i])) {
            const index = lowerCaseAlphabet.indexOf(string[i]);
            encryptedString += lowerCaseAlphabet.reverse()[index];
        } else {
            encryptedString += string[i];
        }
    }
    return encryptedString;
}