//JS CryptoConverter
// main.js

import { blockString, stretchText, resetAllValues, clearSettings, evaluateKeywordOption, hasKeywordOption, removePunctuation } from "./utilities.js";
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

// Automatically populate current year as copyright year
QS("#copyrightYear").innerText = new Date().getFullYear()

// Setting Event Listeners
text_input.addEventListener("input", () => { result_div.innerText = encryptMessage() });
block_option.addEventListener("click", () => { result_div.innerText = encryptMessage(), stretchText() });
caps_option.addEventListener("click", () => { result_div.innerText = encryptMessage() });
punctuation_remove_option.addEventListener("click", () => { result_div.innerText = encryptMessage() });
clear_button.addEventListener("click", () => { resetAllValues(), clearSettings() });
cipher_selector.addEventListener("change", () => { result_div.innerText = encryptMessage(); evaluateKeywordOption() });
shift_selector.addEventListener("change", () => { result_div.innerText = encryptMessage() });
keyword_selector.addEventListener("change", () => { result_div.innerText = encryptMessage() });
operation_selector.addEventListener("change", () => { result_div.innerText = encryptMessage() });
keyword_option.addEventListener("change", () => {
    keyword_option.checked ? keyword_selector.classList.remove("unselectable") : keyword_selector.classList.add("unselectable");
    result_div.innerText = encryptMessage();
})
copy_button.addEventListener("click", copyToClipboard)

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

function copyToClipboard() {

    var copyText = QS("#text_result")
    //console.log(copyText.value)
    copyText.select();
    //copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
    alert(`Copied: ${copyText.innerText}`)
    //console.log(copyText !== "" ? `copyText:  ${copyText}` : "nothing copied")

    // if (result_div.innerText == "" || !cipher_selector.value) {
    //     console.log("did not copy")
    //     return
    // }

    // copyText.select()
    // document.execCommand("copy")
    // console.log("copied")

    // Temporarily change copy button text to "Copied" for 2 seconds.
    copy_button.innerText = "Copied"
    setTimeout(() => copy_button.innerText = "Copy Text", 500)
}