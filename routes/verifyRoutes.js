const express = require('express');
const router = express.Router();
const { purchaseVerify } = require('../controllers/verifyController');
router.post('/purchase', purchaseVerify);
module.exports = router;
