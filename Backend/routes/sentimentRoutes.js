const express = require('express');

const { analyzeSentiment } = require('../controllers/sentimentController');

const router = express.Router();

//Post request to analyze sentiment
router.post('/', analyzeSentiment);

module.exports = router;