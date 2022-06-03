export const exitPopup = (popup, popupContent) => {                             // funkcja zamykająca popup
    popup.style.transform = 'scale(0)';
    popupContent.style.transform = 'scale(0) translate(-50%, -50%)';
}