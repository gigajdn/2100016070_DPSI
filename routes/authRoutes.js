const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authMiddleware, authController.logout);
router.post('/logoutAll', authMiddleware, authController.logoutAll);

module.exports = router;
