const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

//authMiddleware digunakan untuk memastikan bahwa pengguna telah melakukan authentifikasi dengan login
//adminMiddleware merupakan pengecekan lebih lanjut dengan role yang ada pada pengguna (admin)
router.post('/admins/manageItemRequest/:id', authMiddleware, adminMiddleware, adminController.manageItemRequest);

module.exports = router;
