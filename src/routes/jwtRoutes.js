const express = require('express');
const router = express.Router();
const jwtController = require('../controllers/jwtController');

router.post('/', jwtController);

module.exports = router;
