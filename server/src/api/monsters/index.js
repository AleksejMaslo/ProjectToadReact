const express = require('express');
const router = express.Router();
const monsters = require('./monsters.controller');
const auth = require('../../auth/auth.service');

router.get('/', auth.isAuthenticated(), monsters.index);

module.exports = router;
