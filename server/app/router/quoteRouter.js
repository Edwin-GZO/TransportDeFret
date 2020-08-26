/**
     * @file router for quote (Pro and Part) forms
     * @author Edwin GRANZOTTO - Cédric GAUTHIER
 */ 

const express = require('express');
const router = express.Router();

const quoteController = require('../controllers/quoteController');

/**
     * @function GET: /coucou
     * @param quoteController.test - to test
*/

router.get('/coucou',quoteController.test)

/**
     * @function GET: /api/quotes/:user_id
     * @param quoteController.getAllQuotes - to list all quotes of an user
*/

router.get('/api/quotes/:user_id', quoteController.getAllQuotes);

// router.route('/api/quote/:id')
//     .patch()
//     .delete()

module.exports = router;