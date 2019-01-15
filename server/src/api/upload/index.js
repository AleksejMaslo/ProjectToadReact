const express = require('express');
const router = express.Router();
const multer = require('multer');

router.use(multer({ dest: "./uploads/",
rename: function (fieldname, filename) {
    return filename;
},
}));