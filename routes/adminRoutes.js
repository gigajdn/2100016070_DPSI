const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

<<<<<<< HEAD
//authMiddleware digunakan untuk memastikan bahwa pengguna telah melakukan authentifikasi dengan login
//adminMiddleware merupakan pengecekan lebih lanjut dengan role yang ada pada pengguna (admin)
=======
>>>>>>> b8b58a706df2f8d745be7c0f91f1daca498af4e6
router.post('/admins/manageItemRequest/:id', authMiddleware, adminMiddleware, adminController.manageItemRequest);

module.exports = router;
