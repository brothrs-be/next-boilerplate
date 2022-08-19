// const {NEXT_PUBLIC_APP_URL} = process.env;

const routes = {
    Home: `/`,
}

const route = (path, options = {}) => {
    Object.keys(options).forEach(key => {
        path = path.replace(`:${key}`, options[key]);
    });
    return path;
}

export {
    routes,
    route,
}