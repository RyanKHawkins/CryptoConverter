// alphaNumeric.js (number sub)

const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function alphaNumeric(string) {
    var string = string.toUpperCase();
    var encryptedString = [];

    for (var i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            encryptedString.push(string[i]);
        } else if (alphabet.includes(string[i])) {
            encryptedString.push(alphabet.indexOf(string[i]));
        }
    }
    encryptedString = encryptedString.join("-").replace(/- -/g, " ").replace(/- /g, " ").replace(/ -/g, " ");
    return encryptedString;
}