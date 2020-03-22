//caesar.js

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function encryptCaesar(string, number = 3) {
    var string = string.toUpperCase();
    var encryptedString = "";

    for (var i = 0; i < string.length; i++) {
        if (alphabet.includes(string[i])) {
            var currentIndex = alphabet.indexOf(string[i]);
            encryptedString += alphabet[(currentIndex + number) % 26]
        } else {
            encryptedString += string[i];
        }
    }
    return encryptedString;
}