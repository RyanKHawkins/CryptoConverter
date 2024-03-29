// caesar.js

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercase_alphabet = [];
for (let i = 0; i < alphabet.length; i++) {
    lowercase_alphabet.push(alphabet[i].toLowerCase());
}

export function encryptCaesar(string, shift = 3) {
    let encryptedString = "";
    let currentIndex;
    for (let i = 0; i < string.length; i++) {
        if (alphabet.includes(string[i])) {
            currentIndex = alphabet.indexOf(string[i]);
            encryptedString += alphabet[(currentIndex + shift) % 26];
        } else if (lowercase_alphabet.includes(string[i])) {
            currentIndex = lowercase_alphabet.indexOf(string[i]);
            encryptedString += lowercase_alphabet[(currentIndex + shift) % 26];
        } else {
            encryptedString += string[i];
        }
    } return encryptedString;
}

export function decryptCaesar(string, shift = 3) {
    let decryptedString = "";
    let currentIndex;
    for (let i = 0; i < string.length; i++) {
        if (alphabet.includes(string[i])) {
            currentIndex = alphabet.indexOf(string[i]);
            decryptedString += alphabet[(26 + currentIndex - shift) % 26];
        } else if (lowercase_alphabet.includes(string[i])) {
            currentIndex = lowercase_alphabet.indexOf(string[i]);
            decryptedString += lowercase_alphabet[(26 + currentIndex - shift) % 26];
        } else {
            decryptedString += string[i];
        }
    } return decryptedString;
}