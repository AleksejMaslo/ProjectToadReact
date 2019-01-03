'use strict';

const express = require('express')
    , compression = require('compression')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , cookieParser = require('cookie-parser')
    , errorHandler = require('errorhandler')
    , path = require('path')
    , config = require('./config/environment')
    , session = require('cookie-session')
    , uuid = require('uuid')
    , logger = require('./components/logger').createLogger(module);

module.exports = function (app) {
    function setupExpress() {
        app.set('env', config.env);
        const env = app.get('env');
        app.use(compression());
        app.use(bodyParser.urlencoded({
            limit: 5*1024*1024,
            extended: false
        }));
        app.use(bodyParser.json({limit: '5mb'}));
        app.use(session({
            secret: config.server.session.secret,
            keys: config.server.session.keys,
            secure: config.server.session.secure === "true",
            signed: true,
            maxAge: config.server.session.maxAge
        }));
        app.use(methodOverride());
        app.use(cookieParser());
        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            req.reqid = uuid.v1({
                msecs: new Date().getTime()
            });
            res.set('reqid', req.reqid);
            next();
        });
        app.use(errorHandler()); // Error handler - has to be last
    }
    logger.setup('setup express middleware', {}, setupExpress);
};