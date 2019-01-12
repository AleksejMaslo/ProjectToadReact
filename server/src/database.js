const logger = require('./components/logger').createLogger(module);
const mongoose = require('mongoose');
const config = require('./config/environment');
const mongoUrl = config.db.mongoUrl;
module.exports = function (app) {
    function setupDB () {
        mongoose.connect(mongoUrl);
        mongoose.Promise = global.Promise;
        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
    logger.setup('setup express middleware', {}, setupDB);
};