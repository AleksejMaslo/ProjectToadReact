const express = require('express');
const router = express.Router();
const spells = require('./spells.controller');
const auth = require('../../auth/auth.service');

router.get('/', auth.isAuthenticated(), spells.index);

module.exports = router;
