import {handleClick} from "./handleClick.js";
import {exitPopup} from "./exitPopup.js";
import {resetCounter} from "./resetCounter.js";
import {btn, closePopup, number, reset, popup, popupContent} from "./elementsDOM.js";

let counter = localStorage.length ? localStorage.getItem('counter') : 0;

btn.addEventListener('click', () => {
    handleClick(popup, popupContent, counter, number, reset)
    counter++
})
popup.addEventListener('click', () => exitPopup(popup, popupContent))
closePopup.addEventListener('click', () => exitPopup(popup, popupContent))
reset.addEventListener('click', () => {
    resetCounter(counter, reset, number)
    counter = 0
})

