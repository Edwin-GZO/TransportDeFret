/**
     * @file router for login and signup (Pro and Part) forms
     * @author Edwin GRANZOTTO - Cédric GAUTHIER
 */     


const express = require('express');
const router = express.Router();

const conInscController = require('../controllers/conInscController');

/**
     * @function POST: /api/user
     * @description to post the login form
     * @param conInscController.connectionUser - to connect a user by opening a session
*/
router.post('/api/user', conInscController.connectionUser);
// router.get('/api/user/logout', conInscController.deconnectionUser); //! Rajouter ici la déconnexion

/**
     * @function POST: /api/user/signup/pro
     * @description to post the login signup form for a pro (with a SIRET number) 
     * @param conInscController.insertUserPro - To add a new pro user (need a SIRET number to signUp) on database after click on "s'inscrire" button of SignUpPro form
*/
router.post('/api/user/signup/pro', conInscController.insertUserPro);

/**
     * @function POST: /api/user/signup/part
     * @description to post the SignUpPart form for a part (without a SIRET number)
     * @param conInscController.insertUserPart - To add a user part on database after click on "s'inscrire" button of SignUpPart form 
*/
router.post('/api/user/signup/part', conInscController.insertUserPart);

module.exports = router;