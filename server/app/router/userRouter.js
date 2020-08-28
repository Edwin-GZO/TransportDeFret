const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/api/user/password',userController.modifyPassword);

module.exports = router;