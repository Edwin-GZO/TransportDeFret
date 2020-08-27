const express = require('express');
const router = express.Router();

const quoteController = require('../controllers/quoteController');

router.get('/coucou',quoteController.test)
router.get('/api/quotes/:user_id', quoteController.getAllQuotes);

router.get('/api/quote/pro', quoteController.getAllQuotes)
// router.route('/api/quote/:id')
//     .patch()
//     .delete()

module.exports = router;