/**
     *@file Router for login and signup (Pro and Part) forms
     *@constant express to use express
     *@constant router to use router with express
     *@constant conInscController the controller where the various functions called by this router are stored    
 */

const express = require('express');
const router = express.Router();

const conInscController = require('../controllers/conInscController');

/**
     * @description To connect a user after click on "se connecter" button of login form -
     * @route POST /api/user
     * @param conInscController.connectionUser - to connect a user
*/
router.post('/api/user', conInscController.connectionUser);
// router.get('/api/user/logout', conInscController.deconnectionUser); //! Rajouter ici la déconnexion

/**
     * @description To add a user pro (need a SIRET number to signUp) on database after click on "s'inscrire" button of SignUpPro form -
     * @route POST /api/user/signup/pro
     * @param conInscController.insertUserPro - to add a new pro user 
*/
router.post('/api/user/signup/pro', conInscController.insertUserPro);

/**
     * @description To add a user part (without a SIRET number to signUp) on database after click on "s'inscrire" button of SignUpPart form -
     * @route POST /api/user/signup/part
     * @param conInscController.insertUserPart - to add a new part user (without a SIRET number to signUp)
*/
router.post('/api/user/signup/part', conInscController.insertUserPart);

module.exports = router;