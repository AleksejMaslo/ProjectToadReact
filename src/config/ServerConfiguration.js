const config = {
    protocol: 'http',
    host: 'localhost',
    port: '6001',
};

export const getUrl = (path) => {
    return "" + config.protocol + '://' + config.host + ':' + config.port + "/" + path;
};