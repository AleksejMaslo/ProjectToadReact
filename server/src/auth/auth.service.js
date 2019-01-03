'use strict';

var compose = require('composable-middleware');
var config = require('../config/environment');

function isAuthenticated() {
    return compose().use(function (req, res, next) {
        if (req.session.userId) {
            next();
        } else {
            res.status(401);
            res.end();
        }
    });
}

exports.isAuthenticated = isAuthenticated;