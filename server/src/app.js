'use strict';

const express = require('express');
// var nock = require('nock');
//
// nock.recorder.rec();
// Setup server
const app = express();

require('./server')(app);
require('./express')(app);
require('./router')(app);
require('./database')(app);

// Expose app
module.exports = app;