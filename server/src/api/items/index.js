const express = require('express');
const router = express.Router();
const items = require('./items.controller');
const auth = require('../../auth/auth.service');

router.get('/', auth.isAuthenticated(), items.index);

module.exports = router;
