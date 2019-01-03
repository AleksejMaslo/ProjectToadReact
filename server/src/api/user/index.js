const express = require('express');
const router = express.Router();
const user = require('./user.controller');
const auth = require('../../auth/auth.service');

router.get('/', auth.isAuthenticated(),     user.index);

module.exports = router;
