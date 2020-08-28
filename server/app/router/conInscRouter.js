const express = require('express');
const router = express.Router();

const conInscController = require('../controllers/conInscController');

/**
     * To connect a user after click on "sign in" button of login form
     * @route POST /api/user
     * @group 
     * @returns {object} 200 - {isLogged: true , message:" OK User and Password"})
     */
router.post('/api/user', conInscController.connectionUser);
// router.get('/api/user/logout', conInscController.deconnectionUser); //! Rajouter ici la déconnexion

router.post('/api/user/signup/pro', conInscController.insertUserPro);
router.post('/api/user/signup/part', conInscController.insertUserPart);

module.exports = router;