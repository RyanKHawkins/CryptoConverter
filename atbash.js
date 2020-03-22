//JS Atbash Cipher

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function atbash(string) {
    var string = string.toUpperCase();
    var encryptedString = "";

    for (var i = 0; i < string.length; i++) {
        if (alphabet.includes(string[i])) {
            var index = alphabet.indexOf(string[i]);
            encryptedString += alphabet.reverse()[index];
        } else {
            encryptedString += string[i];
        }
    }
    return encryptedString;
}