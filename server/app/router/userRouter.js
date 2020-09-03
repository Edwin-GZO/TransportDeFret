const express = require('express');
const userController = require('../controllers/userController') ;

const router = express.Router();

// router.post('/api/user/password', userController.modifyPassword) ;

router.get('/api/user/dashboard', userController.dashBoard) ;

router.post('/api/user/dashboard/namemodif', userController.nameModif) ;
router.post('/api/user/dashboard/userdelete', userController.userDelete) ;

module.exports = router;