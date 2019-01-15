const multer = require('multer');
const express = require('express');
const router = express.Router();
const character = require('./character.controller');
const auth = require('../../auth/auth.service');
const storage = multer.diskStorage({
    destination: './files/classes',
    filename(req, file, cb) {
        cb(null, `${new Date()}-${file.originalname}`);
    },
});
const upload = multer({ storage });


router.get('/', auth.isAuthenticated(), character.index);
router.post('/', auth.isAuthenticated(), upload.single('avatar'), character.save);

module.exports = router;
