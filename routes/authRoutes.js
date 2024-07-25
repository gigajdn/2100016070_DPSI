const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddleware');

<<<<<<< HEAD
//authMiddleware digunakan untuk memastikan bahwa pengguna telah melakukan authentifikasi dengan login
=======
>>>>>>> b8b58a706df2f8d745be7c0f91f1daca498af4e6
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authMiddleware, authController.logout);
router.post('/logoutAll', authMiddleware, authController.logoutAll);

module.exports = router;
