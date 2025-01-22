// utilities.js

import { result_div, text_input, cipher_selector, shift_selector, keyword_selector, clear_button, operation_selector, punctuation_remove_option, title, ORIGINAL_TITLE } from "./main.js";

export function blockString(string, number = 3, nullChar = "x") {
    string = string.replace(/ /g, "").split("");
    let blockedString = "";
    while (string.length > 0) {
        for (let i = 0; i < number; i++) {
            //string.length > 0 ? blockedString += string.shift() : blockedString += nullChar;
            if (string.length > 0) {
                blockedString += string.shift();
            }
            else {
                blockedString += nullChar
            }
        }
        blockedString += " ";
    }
    return blockedString;
}


export function removePunctuation(string) {
    return string = string.replace(/[^ a-zA-Z]/g, "")
}

export function stretchText() {
    result_div.style.letterSpacing = "2px";
    setTimeout(() => { result_div.style.letterSpacing = "normal" }, 250)
}

export function evaluateKeywordOption() {
    const keywordCiphers = ["alphaNumeric", "atbash", "caesar", "reverse", "rot13"]
    if (keywordCiphers.includes(cipher_selector.value)) {
        console.log(`${cipher_selector.value} has a keyword option.`)
    } else {
        console.log(`${cipher_selector.value} does not have a keyword option.`)
    }
}

export function hasKeywordOption() {
    const keywordCiphers = ["alphaNumeric", "atbash", "caesar", "reverse", "rot13"]
    return keywordCiphers.includes(cipher_selector.value)
}

export function resetAllValues() {
    block_option.checked = false;
    caps_option.checked = false;
    punctuation_remove_option.checked = false
    text_input.value = ""; 
    result_div.innerText = "";
    cipher_selector.value = "";
    operation_selector.value = "encrypt";
    keyword_option.checked = false;
    keyword_selector.classList.add("unselectable"); keyword_selector.value = "";
    shift_selector.value = 3;
    clear_button.innerText = "Cleared";
    setTimeout(() => clear_button.innerText = "Clear", 500)
}

export function clearSettings() {
    shift_selector.classList.add("unselectable");
    operation_selector.classList.add("unselectable");
    punctuation_remove_option.disabled = false;
    result_div.style = "word-spacing: normal";
}

export function copyToClipboard() {
    const copyText = result_div.innerText
    navigator.clipboard.writeText(copyText);
    setTimeout(() => copy_button.innerText = "Copy Text", 500)
}

export function scrambleEffect() {
    let interval = setInterval(() => {
        scrambleTitle()
    }, 50)
    setTimeout(() => {
        clearInterval(interval)
        title.innerText = ORIGINAL_TITLE;
    }, 2000)

}

function scrambleTitle() {
    title.innerText = title.innerText
        .split(" ")
        .map((el) => {
            return el
                .split("")
                .sort((a, b) => 0.5 - Math.random())
                .join("");
        })
        .join(" ");
}