const get = (name) => {
    if (localStorage) {
        let data = localStorage.getItem(name);
        return data ? JSON.parse(data) : [];
    }
    return [];
};

const set = (name, data) => {
    if (localStorage) localStorage.setItem(name, JSON.stringify(data));
};

export default {
    get: get,
    set: set
};