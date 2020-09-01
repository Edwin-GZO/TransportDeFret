const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/api/user/password', userController.modifyPassword);

router.get('/api/user/dashboard', userController.dashBoard);

module.exports = router;