// JS CryptoConverter
// binary.js

export function encryptBinary(string) {
    string = string.trim().split("");
    string = string.map(e => e = e.charCodeAt(0).toString(2));
    return string.join(" ");
}

export function decryptBinary(binary) {
    binary = binary.split(" ");
    binary = binary.map(e => e = String.fromCharCode(parseInt(e, 2)));
    return binary.join("")
}