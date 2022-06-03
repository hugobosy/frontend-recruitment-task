export const handleClick = (popup, popupContent, counter, number, reset) => {                       // funkcja obsługująca kliknięcie przycisku na stronie
    popup.style.transform = 'scale(1)';                                                             // pojawienie się tła popup
    popupContent.style.transform = 'scale(1) translate(-50%, -50%)';                                // pojawienie się głównego popup
    counter++;                                                                                      // podniesienie wartości counter o 1
    localStorage.setItem('counter', String(counter));                                               // ustawienie aktualnej wartości counter w localstorage w postaci stringu
    number.textContent = localStorage.getItem('counter') + ' times';                            // wyświetlenie w elemencie DOM aktualnej wartości z localstorage
    counter > 5 ? reset.classList.add('active') : reset.classList.remove('active');           // warunek wyświetlenia przycisku resetującego
}