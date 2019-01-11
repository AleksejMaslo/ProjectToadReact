const express = require('express');
const router = express.Router();
const characters = require('./characters.controller');
const auth = require('../../auth/auth.service');

router.get('/', auth.isAuthenticated(), characters.index);

module.exports = router;
