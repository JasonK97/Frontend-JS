export function qs(selector) {
    return document.querySelector(selector);
}

export function getFromLS(key) {}

export function saveToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function setClick(selector, callback) {
    qs(selector).addEventListener('touchend', (event) => {
        event.preventDefault();
        callback();
    });
    qs(selector).addEventListener('click', callback);
}