const service = (url) => {
    return fetch(url).then((response) => response.json());
};

export default service;