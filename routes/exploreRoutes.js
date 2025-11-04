const express = require('express');
const router = express.Router();
const { getExploreFeed } = require('../controllers/exploreController');
router.post('/feed', getExploreFeed);
module.exports = router;
