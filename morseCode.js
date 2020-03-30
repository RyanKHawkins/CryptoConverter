// JS Morse Code

var english_to_morse = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..",
    "E": ".", "F": "..-.", "G": "--.", "H": "....",
    "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
    "M": "--", "N": "-.", "O": "---", "P": ".--.",
    "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
    "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
    "Y": "-.--", "Z": "--..", "1": ".----", "2": "..---",
    "3": "...--", "4": "....-", "5": ".....", "6": "-....",
    "7": "--...", "8": "---..", "9": "----.", "0": "-----",
    " ": "/", ".": ".-.-.-", "?": "..--..",
}

//Create morse_to_english
var morse_to_english = {}
for (let i = 0; i < Object.values(english_to_morse).length; i++) {
    let new_key = Object.values(english_to_morse)[i];
    let new_value = Object.keys(english_to_morse)[i];
    morse_to_english[new_key] = new_value;
}

export function encryptMorse(string) {
    string = string.toUpperCase();
    var newString = "";
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char in english_to_morse) {
            newString += english_to_morse[char] + " ";
        }
    } return newString;
}

export function decryptMorse(string) {
    string = string.split(" ");
    var newString = "";
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char in morse_to_english) {
            newString += morse_to_english[char];
        }
    } return newString;
}
