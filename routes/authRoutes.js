const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddleware');

//authMiddleware digunakan untuk memastikan bahwa pengguna telah melakukan authentifikasi dengan login
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authMiddleware, authController.logout);
router.post('/logoutAll', authMiddleware, authController.logoutAll);

module.exports = router;
