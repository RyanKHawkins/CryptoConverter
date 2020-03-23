//caesar.js

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function encryptCaesar(string, shift = 3) {
    var string = string.toUpperCase();
    var encryptedString = "";

    for (var i = 0; i < string.length; i++) {
        if (alphabet.includes(string[i])) {
            var currentIndex = alphabet.indexOf(string[i]);
            encryptedString += alphabet[(currentIndex + shift) % 26]
        } else {
            encryptedString += string[i];
        }
    }
    return encryptedString;
}