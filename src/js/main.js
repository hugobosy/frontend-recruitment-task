const btn = document.querySelector('.section__description-btn'); //button
const popup = document.querySelector('.popup__background'); //background popup
const popupContent = document.querySelector('.popup__content'); //popup
const closePopup = document.querySelector('.popup__exit'); // button close popup
const number = document.querySelector('.counter');

let counter = localStorage.length ? localStorage.getItem('counter') : 0;

const handleClick = () => {
    popup.style.transform = 'scale(1)';
    popupContent.style.transform = 'scale(1) translate(-50%, -50%)';
    counter++;
    localStorage.setItem('counter', String(counter));
    number.textContent = localStorage.getItem('counter') + ' times';
}

const exitPopup = () => {
    popup.style.transform = 'scale(0)';
    popupContent.style.transform = 'scale(0) translate(-50%, -50%)';
}

btn.addEventListener('click', handleClick)
popup.addEventListener('click', exitPopup)
closePopup.addEventListener('click', exitPopup)

