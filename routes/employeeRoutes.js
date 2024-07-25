const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const { authMiddleware, employeeMiddleware } = require('../middlewares/authMiddleware');

<<<<<<< HEAD
//authMiddleware digunakan untuk memastikan bahwa pengguna telah melakukan authentifikasi dengan login
//adminMiddleware merupakan pengecekan lebih lanjut dengan role yang ada pada pengguna (employee)
=======
>>>>>>> b8b58a706df2f8d745be7c0f91f1daca498af4e6
router.post('/employees/manageItemRequest/:id', authMiddleware, employeeMiddleware, employeeController.manageItemRequest);

module.exports = router;
