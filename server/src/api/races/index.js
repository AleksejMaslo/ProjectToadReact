const express = require('express');
const router = express.Router();
const races = require('./races.controller');
const auth = require('../../auth/auth.service');

router.get('/', auth.isAuthenticated(), races.index);
router.post('/', auth.isAuthenticated(), races.save);

module.exports = router;
