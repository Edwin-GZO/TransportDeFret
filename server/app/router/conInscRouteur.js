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

// router.get('/api/user/checklog', )

router.post('/inscription/pro', conInscController.insertUserPro);
router.post('/inscription/part', conInscController.insertUserPart);
// router.post('/api/user', conInscController.connectionUser) ;

module.exports = router;