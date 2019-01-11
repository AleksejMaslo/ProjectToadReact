'use strict';

const uuid = require('uuid')
    , errors = require('./components/errors')
    , errorHandler = require('./components/errors/errorhandler')
    , logger = require('./components/logger').createLogger(module)
    , path = require('path');

module.exports = function (app) {
    function setupRoutes() {
        app.all('/:url(api|auth)/*', function (req, res, next) {
            if(!req.session){
                req.session = {userId : ""};
            }
            req.session.userId = "admin123";
            logger.request(req);
            next();
        });
        // routes
        app.use('/api/user', require('./api/user'));
        app.use('/api/items', require('./api/items'));
        app.use('/api/spells', require('./api/spells'));
        app.use('/api/races', require('./api/races'));
        app.use('/api/characters', require('./api/characters'));
        app.use('/api/monsters', require('./api/monsters'));
    }
    logger.setup('setup routes', {}, setupRoutes);
};