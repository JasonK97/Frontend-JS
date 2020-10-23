export function qs(selector) {
    return document.querySelector(selector);
}

export function getFromLS(key) {
    var a = localStorage.getItem(key);
    var parsed;
    try {
        parsed = JSON.parse(a);
    } catch (ex) {
        console.error(ex);
    }
    return parsed;
}


export function saveToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}