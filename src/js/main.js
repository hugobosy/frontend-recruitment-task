const btn = document.querySelector('.section__description-btn'); //button
const popup = document.querySelector('.popup__background'); //background popup
const popupContent = document.querySelector('.popup__content'); //popup
const closePopup = document.querySelector('.popup__exit'); // button close popup
const number = document.querySelector('.counter');
const reset = document.querySelector('.reset');

let counter = localStorage.length ? localStorage.getItem('counter') : 0;


console.log(counter)
const handleClick = () => {
    popup.style.transform = 'scale(1)';
    popupContent.style.transform = 'scale(1) translate(-50%, -50%)';
    counter++;
    localStorage.setItem('counter', String(counter));
    number.textContent = localStorage.getItem('counter') + ' times';
    counter > 5 ? reset.classList.add('active') : reset.classList.remove('active');
}

const exitPopup = () => {
    popup.style.transform = 'scale(0)';
    popupContent.style.transform = 'scale(0) translate(-50%, -50%)';
}

const resetCounter = () => {
    localStorage.setItem('counter', '0');
    counter = 0;
    number.textContent = localStorage.getItem('counter') + ' times';
    reset.classList.remove('active');
}

btn.addEventListener('click', handleClick)
popup.addEventListener('click', exitPopup)
closePopup.addEventListener('click', exitPopup)
reset.addEventListener('click', resetCounter)

