const get = (name) => {
    return localStorage ? JSON.parse(localStorage.getItem(name)) : [];
};

const set = (name, data) => {
    if (localStorage) localStorage.setItem(name, JSON.stringify(data));
};

export default {
    get: get,
    set: set
};