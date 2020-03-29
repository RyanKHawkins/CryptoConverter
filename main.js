//JS CryptoConverter
//main.js

import { blockString, stretch_text, clear_text, update_values } from "/utilities.js";
import { encryptCaesar } from "/caesar.js";
import { alphaNumeric } from "/alphaNumeric.js";
import { atbash } from "/atbash.js";

//Initializing DOM variables
export const text_input = document.getElementById("text_input");
export const result_div = document.getElementById("text_result");
const block_option = document.getElementById("block_option");
const caps_option = document.getElementById("caps_option");
const keyword_option = document.getElementById("keyword_option");
export const cipher_value = document.getElementById("cipher_selector");
export const shift_selector = document.getElementById("shift_selector");
export const keyword_selector = document.getElementById("keyword_selector");
export const operation_selector = document.getElementById("operation_selector");

//Event Listeners
text_input.addEventListener("input", () => { result_div.innerText = encryptMessage() });
block_option.addEventListener("click", () => { result_div.innerText = encryptMessage(), stretch_text() });
caps_option.addEventListener("click", () => { result_div.innerText = encryptMessage() });
document.getElementById("clear_button").addEventListener("click", () => { clear_text(), update_values() });
cipher_value.addEventListener("change", () => { result_div.innerText = encryptMessage() });
shift_selector.addEventListener("change", () => { result_div.innerText = encryptMessage() });
keyword_selector.addEventListener("change", () => { result_div.innerText = encryptMessage() });
operation_selector.addEventListener("change", function () { result_div.innerText = encryptMessage() });
keyword_option.addEventListener("change", function () {
    keyword_option.checked ? keyword_selector.classList.remove("unselectable") : keyword_selector.classList.add("unselectable");
    result_div.innerText = encryptMessage();
    })

function encryptMessage() {
    update_values();
    var string = text_input.value;
    block_option.checked ? string = blockString(string) : string;
    caps_option.checked ? string = string.toUpperCase() : string;

    switch (cipher_value.value) {
        case "alphaNumeric":
            string = alphaNumeric(string);
            result_div.style = "word-spacing: 5px";
            break;
        case "atbash":
            string = atbash(string);
            break;
        case "caesar":
            shift_selector.classList.remove("unselectable");
            string = encryptCaesar(string, parseInt(shift_selector.value));
            break;
        case "morse_code":
            result_div.innerText = "This is not a current option.";
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
    return string;
}
