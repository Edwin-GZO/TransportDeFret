const express = require('express');
const router = express.Router();

const quoteController = require('../controllers/quoteController');

router.get('/coucou', quoteController.test) ;

router.get('/api/quotes/:user_id', quoteController.getAllQuotes) ;

router.post('/api/quote/pro', quoteController.addQuote) ;

module.exports = router;