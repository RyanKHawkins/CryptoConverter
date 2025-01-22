//JS CryptoConverter
// main.js

import { blockString, stretchText, resetAllValues, clearSettings, evaluateKeywordOption, hasKeywordOption, copyToClipboard, removePunctuation, scrambleEffect } from "./utilities.js";
import { encryptCaesar, decryptCaesar } from "./caesar.js";
import { alphaNumeric } from "./alphaNumeric.js";
import { atbash } from "./atbash.js";
import { encryptBinary, decryptBinary } from "./binary.js";
import { encryptMorse, decryptMorse } from "./morseCode.js";

// Initializing DOM variables
const QS = (q) => document.querySelector(q)
export const text_input = QS("#text_input")
export const result_div = QS("#text_result");
export const block_option = QS("#block_option");
export const caps_option = QS("#caps_option");
export const keyword_option = QS("#keyword_option");
export const punctuation_remove_option = QS("#punctuation_remove_option")
export const cipher_selector = QS("#cipher_selector");
export const shift_selector = QS("#shift_selector");
export const keyword_selector = QS("#keyword_selector");
export const operation_selector = QS("#operation_selector");
const copy_button = QS("#copy_button")
export const clear_button = QS("#clear_button")
export let title = document.querySelector("#title")
export const ORIGINAL_TITLE = document.querySelector("#title").innerText;

scrambleEffect()
QS("#copyrightYear").innerText = new Date().getFullYear()

// Setting Event Listeners
text_input.addEventListener("input", () => { result_div.innerText = encryptMessage() });
[block_option, caps_option, punctuation_remove_option, keyword_option].forEach(option => {
    option.addEventListener("click", () => {
        result_div.innerText = encryptMessage();
    });
});
[cipher_selector, shift_selector, keyword_selector, operation_selector, keyword_option].forEach(selector => {
    selector.addEventListener("change", () => {
        result_div.innerText = encryptMessage();
    });
});
title.addEventListener("click", scrambleEffect);

block_option.addEventListener("click", stretchText);
clear_button.addEventListener("click", () => { resetAllValues(), clearSettings() });
cipher_selector.addEventListener("change", evaluateKeywordOption);
keyword_option.addEventListener("change", () => {
    keyword_option.checked 
        ? keyword_selector.classList.remove("unselectable")
        : keyword_selector.classList.add("unselectable");
});
copy_button.addEventListener("click", copyToClipboard);

function encryptMessage() {
    clearSettings();
    let string = text_input.value;

    if (operation_selector.value == "decrypt") {
        punctuation_remove_option.disabled = true;
        punctuation_remove_option.checked = false;
    } 
    punctuation_remove_option.checked ? string = string.replace(/[^ a-zA-Z]/g, "") : string;
    block_option.checked ? string = blockString(string) : string;
    caps_option.checked ? string = string.toUpperCase() : string;

    if (!hasKeywordOption()) {
        keyword_selector.value = "";
        keyword_option.checked = false;
        keyword_selector.classList.add("unselectable")
    }

    switch (cipher_selector.value) {
        case "alphaNumeric":
            string = alphaNumeric(string);
            result_div.style = "word-spacing: 5px";
            break;
        case "atbash":
            string = atbash(string);
            break;
        case "binary":
            operation_selector.classList.remove("unselectable");
            string = operation_selector.value == "encrypt" ? encryptBinary(string) : decryptBinary(string);
            break;
        case "caesar":
            shift_selector.classList.remove("unselectable");
            operation_selector.classList.remove("unselectable");
            if (operation_selector.value == "encrypt") {
                string = encryptCaesar(string, parseInt(shift_selector.value));
            } else {
                string = decryptCaesar(string, parseInt(shift_selector.value));
            }
            break;
        case "morseCode":
            operation_selector.classList.remove("unselectable");
            if (operation_selector.value == "encrypt") {
                string = encryptMorse(string);
            }
            else {
                string = decryptMorse(string);
            }
            break;
        case "reverse":
            string = string.split("").reverse().join("");
            break;
        case "rot13":
            string = encryptCaesar(string, 13);
            break;

        default:
            string = string;
            break;
    }
    //TO DO:  Remove once setKeyword function is working?
    keyword_selector.value = "";
    return string;
}