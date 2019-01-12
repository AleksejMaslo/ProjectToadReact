const environment = {
    debug: true,
    server: {
        protocol: 'http',
        port: 6001,
        session: {
            secret: 'secret word here',
            keys: ['key1forsign126', 'key2forsign77'],
            secure: true,
            signed: true,
            maxAge: 10000000
        }
    },
    db: {
        mongoUrl: "mongodb://localhost:27017/projecttoad"
    }
};

module.exports = environment;