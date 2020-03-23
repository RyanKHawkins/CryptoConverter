//utilities.js

import { result_div, text_input, cipher_value, shift_selector, keyword_selector } from "/main.js";

export function blockString(string, number = 3, nullChar = "x") {
    var string = string.replace(/ /g, "").split("");
    var blockedString = "";
    while (string.length > 0) {
        for (var i = 0; i < number; i++) {
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

export function clear_text() {
    text_input.style.color = "gray";
    result_div.style.color = "gray";
    setTimeout(() => {
        text_input.value = ""; result_div.innerText = "";
        text_input.style.color = "black"; result_div.style.color = "black";
        cipher_value.value = "blank";
        shift_selector.classList.add("unselectable");
        shift_selector.value = 3;
    }
        , 250);

}

export function stretch_text() {
    result_div.style.letterSpacing = "2px";
    setTimeout(() => { result_div.style.letterSpacing = "normal" }, 250)
}

//Consider adding a reset/update function
/*--
export function update_values() {
    shift_selector.classList.add("unselectable");
    shift_selector.value = "3";
    keyword_selector.classList.add("unselectable");
    keyword_selector.value = "";
    result_div.style = "word-spacing: normal";
    block_option.checked ? string = blockString(string) : string;
    caps_option.checked ? string = string.toUpperCase() : string;
}

--*/