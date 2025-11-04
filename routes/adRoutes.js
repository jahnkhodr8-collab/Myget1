const express = require('express');
const router = express.Router();
const { createAd } = require('../controllers/adController');
router.post('/create', createAd);
module.exports = router;
