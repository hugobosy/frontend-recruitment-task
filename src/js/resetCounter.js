export const resetCounter = (counter, reset, number) => {                                           // funkcja resetująca zliczone kliknięcia
    localStorage.setItem('counter', '0');                                                           // ustawienie w localstorage wartości 0
    number.textContent = localStorage.getItem('counter') + ' times';                            // dodanie do elementu DOM zresetowanej wartości kliknięć
    reset.classList.remove('active');                                                         // usunięcie klasy active z buttonu
}