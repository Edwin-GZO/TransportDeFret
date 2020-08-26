/**
     * @file router for contact form
     * @author Edwin GRANZOTTO - Cédric GAUTHIER
 */ 


const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');

/**
     * @function POST: /api/contact
     * @param contactController.contactForm - to send an email with the contact form
*/

router.post('/api/contact',contactController.contactForm);

module.exports = router;