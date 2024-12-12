const express = require('express');
const router = express.Router();
const { signup , signin} = require('../Controllers/Auth');
router.post('/signin',signin);
router.post('/signup',signup);

module.exports = router;