const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

//authMiddleware digunakan untuk memastikan bahwa pengguna telah melakukan authentifikasi dengan login
//adminMiddleware merupakan pengecekan lebih lanjut dengan role yang ada pada pengguna (admin)
router.post('/users', authMiddleware, adminMiddleware, userController.createUser);
router.get('/users', authMiddleware, adminMiddleware, userController.getUsers);
router.get('/users/:id', authMiddleware, adminMiddleware, userController.getUserById);
router.put('/users/:id', authMiddleware, adminMiddleware, userController.updateUser);
router.delete('/users/:id', authMiddleware, adminMiddleware, userController.deleteUser);

module.exports = router;
